import React from 'react';
import { useState } from 'react';
import { BiLike } from 'react-icons/bi';




export default function LikeButtons(min, max) {
  const [likes, setLikes,] = useState(Math.floor(Math.random() * 100000))

    const handleLike = (prev) => {
        setLikes((prev) => {
             console.log()
            return prev + 1
        })
  }
   
   
    return (
          <div className="icons">
                        <div className="like-icons">
                            <div className='icons-like'>
                                <div className="num-display">{likes}</div>
                                <BiLike onClick={handleLike} />   
          </div>
          
           
    </div>
                  </div>
        
    );
}