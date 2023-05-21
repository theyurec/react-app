import React from "react";
import './../../styles/main.css'
import './../PostList/index.css'
import Modal from "../Modal/Modal";
import { useState } from "react";
import { ResponsiveImage } from 'react-responsive-image';


const PostList = ({ posts, search }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="container">
      <div className="post-list">
        {posts
          .filter(
            (obj) =>
              obj.title.toLowerCase().includes(search.toLowerCase()) ||
              obj.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((post) => (
            <div className="post" key={post.id} onClick={() => handlePostClick(post)}>
              {/* <ResponsiveImage
                className="post__img"
                alt="img"
                src={post.img}
                srcSet={{
                '1x': post.img,
                '2x': post.img_2x,
                }}
              /> */}
              <img className="post__img" src={post.img} alt="post" />
              <div className="post__main">
                <div className="post__tag">{post.tags}</div>
                <h2 className="post__title">{post.title}</h2>
                <div className="post__info">
                  <div className="post__autor">{post.autor}</div>
                  <div className="post__date">{post.date}</div>
                  <div className="post__views">{post.views}</div>
                </div>
                <p className="post__text">{post.text}</p>
              </div>
            </div>
          ))}
      </div>
      {selectedPost && <Modal post={selectedPost} onCloseModal={handleCloseModal} />}
    </div>
  );
};
export default PostList;