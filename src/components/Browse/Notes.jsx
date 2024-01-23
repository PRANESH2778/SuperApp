import React, { useState } from 'react'

const Notes = () => {
    const [text,setText] = useState(JSON.parse(window.localStorage.getItem("text")))
    const saveNotes = (e) => {
        //const newNotes = e.target.value;
        setText(e.target.value);
        window.localStorage.setItem('text', JSON.stringify (text));
      };
  return (
    <div style={{height:"57vh",width:"32vw",backgroundColor:"#F1C75B",borderRadius:"20px",margin:"1rem",overflow:""}}>
        <h2>All Notes</h2>
        <textarea style={{height:"45vh",width:"31.5vw",backgroundColor:"#F1C75B",overflow:"",borderBlockColor:"#F1C75B"}} value={text} onChange={(e)=>saveNotes(e)}></textarea>
    </div>
  )
}

export default Notes