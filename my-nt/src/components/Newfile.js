import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { appcontext } from '../App';
import { API_KEY, imageUrl } from './url';
import './Newfile.css'
import YouTube from 'react-youtube';
import axios from 'axios';


function Newfile() {
  const {value,value2}=useContext(appcontext)

  const [Show, setShow] = value2
  const [State, setState] = value
  const [Youtube, setYoutube] = useState("")
  const [Button, setButton] = useState(true)
  let {id} =useParams()
  // const [Show, setShow] = useContext(appcontext2)
  // const [State, setState] = useContext(appcontext)
  const DetailData=State[id];
  console.log(DetailData);
  console.log(State);
   
    
    const opts = {
      height: '1590',
      width: '1500',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    useEffect(() => {
      setShow(true)
    }, [])
    
    const add=(id)=>{
      console.log(id)
     axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
     
      setYoutube(res.data.results[0])
      console.log(Youtube);
      setButton(false)
      
      
      

     })

    }
    

  return (
    <>
     { Button ? <div className='data'>
      <div className='data1'>

        <h1>{ (DetailData.name||DetailData.title)}</h1>
      <button onClick={()=>add(DetailData.id)}>play</button>
      <h6>{ (DetailData.popularity)}</h6>
     <h6>{ (DetailData.origin_country)}</h6>
     <h6>{ (DetailData.overview)}</h6>
     <h6>{ (DetailData.name||DetailData.title)}</h6>
     <h6>{ (DetailData.original_language)}</h6>
      </div>
      <div className='data2'>
      <img className='data3' src={imageUrl+State[id].poster_path}></img>
    

      </div>


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div> : ""}
      <div>
     

        {Button ? ""  :<YouTube  className='utube' videoId={Youtube.key} opts={opts}/>}
        </div>
       
       

      
      </>

     
    
       


         
   
    
  )
}

export default Newfile