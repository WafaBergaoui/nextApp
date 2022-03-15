import React from 'react'

const Post = ({ post }) => {
    return (
      <div>
        <h2>
          {post.id} {post.title}
        </h2>
        <p>{post.body}</p>
      </div>
    );
}

export default Post

// this function to inform nextJS of the possible values that postId.js page should be statically generated for
export async function getStaticPaths () {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
    // context parameters is an object that contains a key called params 
    // the params object will contain  the postID route parameter
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    return {
      props: {
        post: data,
      },
    };
}
