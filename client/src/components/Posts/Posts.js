<<<<<<< HEAD
import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";
function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
=======
import React from 'react';
import {Grid,CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux'
import Post from './Post/Post'
import useStyles from './styles'
function Posts({setCurrentId}) {
    const posts = useSelector((state)=>state.posts)
    const classes = useStyles();
    console.log(posts);
    return (
       !posts.length ?<CircularProgress /> :(
           <Grid className={classes.container} alignItems="stretch" spacing={3}>
                {
                    posts.map(post => (
                        <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />

                        </Grid>
                    ))
                }
           </Grid>
       )
    )
}

export default Posts
>>>>>>> 40633bd53067cb3b6b2989c02f28c137edc028f7
