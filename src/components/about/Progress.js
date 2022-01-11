import React, { useState } from "react";

const Progress = ({ done,color }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
      background:`${color}`
      
    }
    
   
   
    setStyle(newStyle)
  }, 200);
  return (
    <>
      <div className="progress">
        <div className="progress-done" style={style}>
          <div className="done">
          {done}%
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default Progress;
