import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({data}) {
  return (
    <>
    {!data && <p>loading--</p>}
    {data && data.map(movie => {
      return (
        <div key={movie._id}>
        <h3 className='card--title'><Link to={`/movies/${movie._id}`}>{movie.title}</Link></h3>
        <Link to={`/movies/${movie._id}`}><img className='card--img' src={movie.image} alt={movie.title} /></Link> 
          
        </div>
        
        )
    })}
    </>
  )
}

