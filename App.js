const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

let savedArticles = [];


app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);

    try {
        const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
            params: {
                token: '', // Replace with GNews API key
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
