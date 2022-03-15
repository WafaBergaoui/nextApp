import React from 'react'

const PostList = ({ posts }) => {
    return (
      <>
        {
        posts.map(post => {
          return (
            <div key={post.id}>
              <h2>
                {post.id} {post.title}
              </h2>
            </div>
          );
        })
        }
      </>
    );
}

export default PostList;

export async function getStaticProps () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return {
      props: {
        posts: data
      },
    };
}
//when i view the code source of this page , i found all the data of posts
//That's mean our page it was succusfully pre-rendred