import "./Topbar.css"
import { Search,Person,Chat,Notifications }from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbarContainer">
    <div className=".topbarLeft">
      <span className="logo">WildDiary</span>
    </div>
    <div className=".topbarCenter">
      <div className="searchbar">
        <Search className="searchIcon" />
        <input placeholder="Search for friends posts or videos" className="search" />
      </div>
    </div>
    <div className=".topbarRight">
      <div className="topbarLinks">
        <span className="topbarLink">Homepage</span>
        <span className="topbarLink">TimeLine</span>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
        <Person />
        <span className="topbarIconBadge">1</span> 
        
        <div className="topbarIcons">
        <div className="topbarIconItem">
        <Chat />
        <span className="topbarIconBadge">2</span>
        </div>
        </div>
        </div>
        <div className="topbarIcons">
        <div className="topbarIconItem">
        <Notifications />
        <span className="topbarIconBadge">3</span>
        </div>
        </div>
        
      </div>
      <img src="/assets/persons/1.jpeg" alt="" className="topbarimage" />
    </div>
    </div>
    
  )
}
