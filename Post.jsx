import React from "./Post.css"
import {ImageSearchRounded, MoreVert}from "@mui/icons-material"
export default function Post() {
  return (
    <div className="Post">
        <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
             <img className="postprofileImg" src="E:\mydiary\assets\persons\1.jpeg" alt="" />
             <span className="postUsername">ManuelZee</span>
             <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
            <MoreVert />
            </div>
        <div className="postCenter">
          <span className="postText">Hello its Emmanuel firs Post</span>
        <img className="postImg" src="E:\mydiary\assets\posts\1.jpeg"alt="" />
        <div className="postBottom">
          <div className="postBottomleft">
          <img className="likeIcon" src="E:\mydiary\assets\heart-shape-button-and-icon-16.jpg" alt=""  />
          <img className="likeIcon" src ="E:\mydiary\assets\17-173825_red-like-thumb-negative-clip-art-at-clker.png" alt=""  />
          <span className="postlikecounter">32 people liked this</span>
          <div className="postBottomright">
            <span className="postCommentText">9 comments</span>

            
          </div>

          </div>


        </div>
        </div>
        </div>
        </div>
        </div>
  )
}
