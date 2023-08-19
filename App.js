const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

let savedArticles = [];
app.get('/fetch-articles', (req, res) => {
    const { author, title, count } = req.query;

    const filteredArticles = savedArticles.filter(article => {
        let match = true;

        if (author && article.source.name !== author) {
            match = false;
        }

        if (title && !article.title.toLowerCase().includes(title.toLowerCase())) {
            match = false;
        }

        return match;
    }).slice(0, count || savedArticles.length);

    res.json(filteredArticles);
});


app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);

    try {
        const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
            params: {
                token: 'd61f83bc393e4276b211489eaa74ae19', 
            },
        });

        if (response.status === 200) {
            const articles = response.data.articles;
            savedArticles.push(...articles);
            console.log("Articles:", savedArticles);
        } else {
            console.log("Request was not successful. Status code:", response.status);
        }
    } catch (error) {
        console.log("Error fetching articles:", error.message);
    }

});
