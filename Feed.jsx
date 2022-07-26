import Share from "../share/Share"
import Post from "../post/Post"
import  "./Feed.css"
export default function Feed() {
  return (
    <div className="feed">
      <div className="FeedWrapper"> 
      {
        // eslint-disable-next-line
      }
        <Share/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>

      </div>

    </div>
  )
}
