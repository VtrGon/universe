import React, { useState } from "react"


import '../style/listImg.css'
import { ListaData } from "./ListData"





function ListImg({current}){

    

    function musica(imagem) {
        var audio = new Audio(imagem.music,);
        audio.volume = 0.05;
        audio.pause();
            audio.play();
        
    }

    return(
        <div>
        {ListaData.map((img,index)=>{
            return (
            <div  className={index === current ? 'slide active' : 'slide'}  key={index}>
                {index === current && ( <img src={img.imagem}  onClick={musica(img)}  className="luluu1"/>)}
            

            </div>
            
            
            )
        })}
        </div>
    )
}

export default ListImg;