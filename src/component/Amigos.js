import React,{useState, useRef, useEffect} from 'react'
import ReactPlayer from 'react-player/youtube'
import "../style/videoPlayer.css"
import post from '../imagens/minions.jpg'



/*function usePlayer($videoPlayer){
  
    const [playstate,setPlaystate] = useState({playing: false})

    useEffect(()=>{
        playstate.playing ?  $videoPlayer.current.play() : $videoPlayer.current.pause()
    },[
        playstate.playing
    ]);
   
    const playy = ()=>{
        
        setPlaystate({
            ...playstate,
            playing: !playstate.playing,
        })
    }
    return {
        playstate,
        playy
    }
}*/


function Amigos(){
    const videourl= "https://youtu.be/_KLKXbfr2dk"
    /*const $videoPlayer =useRef(null);
const {
    playstate,playy
} = usePlayer($videoPlayer);*/

 
    return(


    <div className="player" >

    <ReactPlayer  url={videourl}/>
    
   </div>

    )
}

export default Amigos;