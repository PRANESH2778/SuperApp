import React from 'react'
import profile from '../../assets/profileBig.png'
import { useState,useEffect } from 'react'
const Info = () => {
  const[info,setInfo] = useState("")
  const details = JSON.parse(window.localStorage.getItem("userData"))
  const genre = JSON.parse(window.localStorage.getItem("genres"));
  return (
    <div style={{height:"38vh",width:"34vw",display:"flex",borderRadius:"33px",backgroundColor:"#5746EA",marginLeft:"13px",marginTop:"10px"}}>
      <div>
        <img src={profile} style={{marginLeft:"15px",height:"270px"}}/>
      </div>
      <div style={{display:"flex",flexDirection:"column",fontSize:"20px",fontWeight:"400",color:"#FFFFFF",marginLeft:"60px"}}>
        <p style={{margin:"0px"}}>{details.name}</p><br/>
        <p style={{margin:"0px"}}>{details.mail}</p><br/>
        <p style={{margin:"0px",fontSize:"30px"}}>{details.username}</p>
        <Chips categories={genre} color={"#9F94FF"} />
      </div>
      
    </div>
  )
}
const Chips = ({ color, categories }) => {
  return (
    <div style={{ width: "20vw" ,overflow:"auto"}}>
      {categories.map((category) => (
        <button
          style={{
            background: `${color}`,
            borderRadius: "12px",
            width: "100px",
            color: "white",
            border: "none",
            padding: "6px",
            height: "30px",
            flexShrink: 0,
            margin: "10px",
          }}
        >
          {category}{" "}
        </button>
      ))}
    </div>
  );
};

export default Info