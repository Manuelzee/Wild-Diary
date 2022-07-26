import React from "./Share.css"
import{PermMedia,Label,Room,EmojiEmotions }from "@mui/icons-material"

export default function share() {
  return (
    <div className="share">
        <div className="shareTop">
            <img className ="shareProfileImg" src="assets\persons\1.jpeg" alt=""/>
            <input placeholder="Write your heart here" className="shareInput"/>
            <hr className="shareHr"/>
        <div className="shareButtom">
            <div className="  s">
            <div className="shareOptions">
                <span className="shareOptionText">photos or video</span>
                <PermMedia htmlColor="tomato" className="shareIcon"/>
                <div className="shareOptions">

                <span className="shareOptionText">Tag</span>
                <Label htmlColor="blue" className="shareIcon"/>
                <div className="shareOptions">
                    
                <span className="shareOptionText">Location</span>
                <Room htmlColor="red" className="shareIcon"/>
                <div className="shareOptions">

                <span className="shareOptionText">Feelings</span>
                <EmojiEmotions htmlColor="red"className="shareIcon"/>

            </div>
            <button className="ShareButton">Share</button>
            </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
  )
}
