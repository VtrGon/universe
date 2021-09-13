import Header from './component/Header';
import React, { useState} from 'react';
import Body from './component/Body'
import './App.css';
import { ListaData } from './component/ListData';
import {FaArrowAltCircleDown,FaArrowAltCircleUp, FaArrowCircleUp,}from "react-icons/fa"
import ListImg from './component/ListImg';
import { Corpo } from './style/styled';

function App() {
  const [current, setCurrent] = useState(0)
  const length = ListaData.length
  const [colors, setColors] = useState("#FEFEFE")
  

  
  const avançar = () =>{
    
      setCurrent(current === length -1 ? 0 : current + 1)
      console.log(current)
      fundo()

      
      
      
      
      
  }

  const voltar = () =>{
      setCurrent(current ===  0 ? length -1 : current -1 )
      console.log(current)
      fundo()
      
  }
  const fundo=()=>{
if(current === 0){
    setColors("#FBFFF4") //luan
   }else if(current === 1){
    setColors("#FFFFFF")// vitor
    
   }else if(current === 2){
    setColors("#FEFEFE") //r.juniot
   
  }else if(current === 3){
    setColors("#F8F8F8")//mubelli 2
    
  }else if(current === 4){
    setColors("#F9F8F5")//pitter
    
  }else if(current === 5){
    setColors("#FFF6F9")//ruan
    
  }else if(current === 6){
    setColors("#FFF6F9")//mubelli3
    
  }else{
    setColors("#FEFEFE")//mubelli
   
        
     
   }

    
  }
  


if(!Array.isArray(ListaData)|| ListaData.length <= 0){
  return null;
}


  



  return (
    <Corpo sla={colors}>
      <Header />
      <Body />
      <ListImg current={current} />
      <div className="setinhas">
        <p  className="atual">Atual</p>
        <div className="setinhas3">
        <FaArrowAltCircleUp onClick={avançar}  className="up"/>
        {ListaData.map((img,index)=>{
            return (
              
            <div  className={index === current ? 'imagem active' : 'imagem'} key={index}>
                {index === current && ( <p>{img.text} </p>)}
            

            </div>
            
            )
        })}
        </div>
      
      
      
      
        
      </div>
      <div className="setinhas2">
        <span ></span>
      <FaArrowAltCircleDown  className="dow" />
      {ListaData.map((img,index)=>{
        index = index -1
        if(index >=0){
          return(
          <div  key={index}>
                {index === current && ( <p>{img.text} </p>)}
            

            </div>
          )

          }else if (index < 0){
            index= 9
            return(
              <div  key={index}>
                    {index === current && ( <p>{img.text} </p>)}
                
    
                </div>
              )
        }else if(index > 8){
          index = 0
          return(
            <div  key={index}>
                  {index === current && ( <p>{img.text} </p>)}
              
  
              </div>
            )
        }
            
            
            
            
        })}
      </div>

    </Corpo>
  );
}

export default App;
