import React, { useEffect, useState } from 'react'
import axios from '../axios'
import YouTube from 'react-youtube'
import { imgUrl ,API_KEY} from '../../Constants/constants'
import "./RowPost.css"

function RowPost(props) {
   
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
      axios.get(props.url).then(response => {
        setMovies(response.data.results)
      }).catch(err => {
        console.log(err);
      })          
  }, [])

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, 
      enablejsapi:1,
      host: ' https://developers.google.com/youtube/player_parameters',
      origin : 'https://localhost:3000' 

    },
  };

  const handleMovie = (id)=> {
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data.results[0]);
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
        console.log(urlId.key);
      }else{
        console.log("array empty")
      }
    })

  }

 
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj,i)=>
          <div className={"rowMap"} key={i}>
          <img onClick={()=> handleMovie(obj.id)} className= {props.isSmall ?'smallposter': 'poster'} alt='poster' src={`${imgUrl+obj.backdrop_path}`} />
          <p>{obj.title}</p> 
          </div> 
            
        )}
      </div>
        { urlId && <YouTube videoId={urlId.key} opts={opts} /> }

      </div>

  )
}
export default RowPost
