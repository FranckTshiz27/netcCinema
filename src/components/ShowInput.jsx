import React, { useEffect, useState } from   'react';

function ShowInput()
{
   const [visibility,setIsVisible] = useState(true);

 
  const handleClick = (e)=>{
       e.preventDefault();
       setIsVisible(!visibility);
   }

  
   const isVisibleContainer = visibility? <i className="fas fa-search" onClick={handleClick}></i>:<i className="fas fa-times" onClick={handleClick}></i>;
    return (
          <div>
              {isVisibleContainer}
          </div>
        
    )
}

export default ShowInput;