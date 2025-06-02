import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import useArticles from './Contexts/ArticleContext'
import { Grid, Divider, Card } from '@mui/material'
import Article from './Components/Card'

const BASE_URL = "https://jsonplaceholder.typicode.com"


function Newspaper() {
  const {articles} = useArticles();

  console.log("Articles:", articles);

  return (
    <div> 
      <Navbar></Navbar>
      {
        articles.map((article, index) => (
            <div>
              <Article
                id = {article.id}
                author = {article.author}
                title = {article.title}
                //subheader = {article.subheader}
                //avatarLetter = {article.avatarLetter}
                //avatarColor = {article.avatarColor}
                imageSrc = {article.thumbnailUrl}
                //imageAlt = {article.imageAlt}
                //description = {article.description}
                articleUrl = {article.path}
                //onFavoriteClick = {article.onFavoriteClick}
                //onShareClick = {article.onShareClick}
                //showSettings = {article.showSettings}
                //readMoreLabel = {article.readMoreLabel}
                key = {index}
              />
            </div>    
        ))
      }
  </div>
  )
}

export default Newspaper
