
import React, { useEffect, useState } from 'react'
import {imageUrl, PopularMovies } from './url';
import axios from 'axios'
import {Card, NavItem} from 'react-bootstrap'

function Banner1() {
   const [Banner, setBanner] = useState([])
        useEffect(() => {
         axios.get(PopularMovies).then((res)=>setBanner(res.data.results[Math.floor(Math.random()*res.data.results.length)]))
      
         console.log(Banner);
          },[])
  return (
    <div className='bnr'   style={ {backgroundImage: `url(${imageUrl+Banner.poster_path})`,height:"800px",backgroundSize:"100% 100%"}} >
        <div className='content' style={{height:"300px"}}>
            {/* <h1 className='title'>{Banner.title || Banner.name}</h1> */}
            <div className='bnrbtn'>
                <button className='button'>Play</button>
                <button className='button'>my list</button>
            </div>
            <div>
                <h1 className='description'>{Banner.overview}</h1>
                       


      




  
 




  
    

            </div>
        </div>


        <div className='fade'></div>
        



    </div>
    
  )
}

export default Banner1


