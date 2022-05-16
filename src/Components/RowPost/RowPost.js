import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { imgUrl } from '../../Constants/constants'
import "./RowPost.css"

function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
      axios.get(props.url).then(response => {
        setMovies(response.data.results)
        console.log(response.data)
      }).catch(err => {
        console.log(err);
      })          
  }, [])
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
        <div>
          <img className= {props.isSmall ?'smallposter': 'poster'} alt='poster' src={`${imgUrl+obj.backdrop_path}`} />
          <p>{obj.title}</p>  
         </div>         
        )}
      </div>
    </div>
  )
}

export default RowPost