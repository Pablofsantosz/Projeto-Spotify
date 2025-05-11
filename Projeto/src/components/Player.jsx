import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay,faBackwardStep,faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const Player = () => {
  return (
    <div className="player"> player
        <div className='player__controllers'></div>
        
        <div className='player__controllers'>
            <Link to ="/song/2">
                <FontAwesomeIcon  className ='player__icon'icon={faBackwardStep} />
            </Link>
           
            <FontAwesomeIcon className="player__icon player_icon--play" icon={faCirclePlay}/>
            <Link  to ='/song/3'>
                <FontAwesomeIcon className="player__icon" icon={faForwardStep}/>
            </Link>
        </div>
        <div className='player__progress'>
            <p>00:00</p>
            <div className='player__bar'></div>
            <div className="player__bar-progress"></div>
            <p>2:30</p>
        </div>
        <div className=''></div>
        <div className=''></div>
       
    
    </div>
  )
}

export default Player