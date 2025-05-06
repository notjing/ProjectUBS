import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import { Grid, Divider } from '@mui/material'

const BASE_URL = "https://jsonplaceholder.typicode.com"

interface Post{
  id: number;
  title: string;
}

function Newspaper() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const[posts, setPosts] = useState<Post[]>([]);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchPosts = async () =>{
      setIsLoading(true);

      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      try{
        const response = await fetch(`${BASE_URL}/posts`);
        const posts = await response.json() as Post[];
        setPosts(posts);
      }
      catch(e){
        setError(e);
      }    
      finally{
        setIsLoading(false);
      }

    };

    fetchPosts();
  }, [])

  return (
    <div> 
      <Navbar></Navbar>
      {isLoading? <h1> Loading... </h1> :
      error? <h1> oopsies something went wrong ¯\_(ツ)/¯  </h1> : 
      <div>
        <h1> data fetch test </h1>
        <ul>
          {posts.map((post) =>{
            return <li key={post.id}> {post.title} </li>
          })}
        </ul>
      </div>
      }
  </div>
  )
}

export default Newspaper
