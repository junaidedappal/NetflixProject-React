import React, { useEffect, useState } from 'react'
import { API_KEY ,imgUrl} from '../../Constants/constants'
import axios from '../axios'
import "./Banner.css"
import "./RowPost.css"


function Banner() {
    const [movie, setMovie] = useState()

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[0])
      setMovie(response.data.results[1])
    })
    }, [])

    return (
      <div >
      <div style={{backgroundImage:`url(${movie ?imgUrl+movie.backdrop_path : " "})`}}
       className='banner'>
        <div className='content' >
          <h1 className='title'>{movie ? movie.title : ""}</h1>
          <div className='banner_buttons' >
            <button className='button' >Play</button>
            <button className='button' >My list</button>
          </div>
          <p className='description'>{movie ? movie.overview : ""}</p>
        </div>
        <div className="fade_bottom"></div>    
      </div>
 

      </div>
    )
}

// adult: false
// backdrop_path: "/zUYGHXnIVkP7HHipLm1P0jhwIbJ.jpg"
// genre_ids: (3) [14, 28, 12]
// id: 453395
// media_type: "movie"
// original_language: "en"
// original_title: "Doctor Strange in the Multiverse of Madness"
// overview: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary."
// popularity: 3793.652
// poster_path: "/JCo4gelTpavJin6CnzEdfYwLsM.jpg"
// release_date: "2022-05-04"
// title: "Doctor Strange in the Multiverse of Madness"
// video: false
// vote_average: 7.5
// vote_count: 1370



export default Banner