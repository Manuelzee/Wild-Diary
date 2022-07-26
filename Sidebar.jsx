import "./Sidebar.css"
import { Group } from "@mui/icons-material"
import { Chat } from "@mui/icons-material"

export default function Sidebar() {
  return (

    < div className ="sidebar">
      <div className="Sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistItem">
            <RssFeed className ="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>

            <li className="sidebarlistItem">
            <Chat className ="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarlistItem">
            <Video className ="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarlistItem">
            <Group className ="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarlistItem">
            <Counsellors className ="sidebarIcon" />
            <span className="sidebarListItemText">Accessibility</span>
            </li>
          </li>
        </ul>
         <button className="sidebarButton">Show More</button>
         <hr className="sidebarhr" />
         <ul className="sidebarFriendlist">
           <li className="sidebarFriend">
             <img className ="sidebarFriendImg" src= "assets\persons\1.jpg"alt="" />
             <span className="sidebarFriendName">Jane Doe</span>

           </li>
           <li className="sidebarFriend">
             <img className ="sidebarFriendImg" src= "assets\persons\2.jpg"alt="" />
             <span className="sidebarFriendName">Jane Zee</span>

           </li>
           <li className="sidebarFriend">
             <img className ="sidebarFriendImg" src= "assets\persons\3.jpg"alt="" />
             <span className="sidebarFriendName">Deji</span>
             <li className="sidebarFriend">
             <img className ="sidebarFriendImg" src= "assets\persons\4.jpg"alt="" />
             <span className="sidebarFriendName">Joshua</span>
           </li>
           </li>
         </ul>
      </div>

    </div>
  )
}
