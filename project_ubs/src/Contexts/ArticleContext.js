import React from 'react'
import { useEffect, useState } from 'react';

const ArticleContext = () => {

    const [articles, setArticles] = useState([]);


    useEffect(() => {
        console.log("Fetching articles...");
        fetch("http://127.0.0.1:8000/api/articles/")
        .then(res => res.json())
        .then(data => setArticles(data))
        .catch(err => console.error(err));
    }, []);

    return {articles};

}

export default ArticleContext
