import "./Rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
      <div className="birthdayContainer">
        <img className="birthday" src="E:\mydiary\assets\gift.png" alt="" />
        <span className="birthdayText">
          <b>Olowomuke</b> and <b> 3 other friends have birthday today</b>
        </span>
      </div>
      <img  className="rightbarAd" src="E:\mydiary\assets\ads.jpeg"  alt=" "/>
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarList">
       <li className="rightbarFriend">
        <div className="rightbarImgContainer">
          <img className="rightbarProfileImg" 
          src="E:\mydiary\assets\persons\deji.jpg" alt="" 
          />
          <span className="rightbarOnline"></span>
          <span className="rightbarUsername">Olowomuke Ayodeji</span>
        </div>
        <li className="rightbarFriend">
        <div className="rightbarImgContainer">
          <img className="rightbarProfileImg" 
          src="E:\mydiary\assets\persons\deji.jpg" alt="" 
          />
          <span className="rightbarOnline"></span>
          <span className="rightbarUsername">Olowomuke Joshua</span>
        </div>
        <li className="rightbarFriend">
        <div className="rightbarImgContainer">
          <img className="rightbarProfileImg" 
          src="E:\mydiary\assets\persons\deji.jpg" alt=""/>
          <span className="rightbarOnline"></span>
          <span className="rightbarUsername">Kolawole Emmanuel</span>
        </div>
       </li>
       </li>
       </li>
      </ul>
      </div>

    </div>
  )
}
