
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import  BlogPost  from '../components/BlogPost';
import useBlogPosts from './useBlogPosts';

const useStyles = makeStyles((theme) => ({
    container: {
     padding: 30
    },
  }));

const BlogPostList = () => {
  const { allContentfulBlogPost } = useBlogPosts();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {allContentfulBlogPost.edges.map(({ node }, index) => (
        <BlogPost key={index} data={node} />
      ))}
    </div>
  );
};

export default BlogPostList