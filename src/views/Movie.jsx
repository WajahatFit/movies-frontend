import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Movie() {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const [movie, setMovie] = useState(null)

  useEffect(()=>{
    const getData = async() => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/movies/${id}`);
        setMovie(response.data.data)
        console.log(response.data.data)
      } catch (error) {
        console.error(error)
      }
      
    } 
    getData()
  }, [id])
  
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/movies/${id}`);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {!movie && <p>Movie not found</p>}
      {movie && (
        <div className='movie--details'>
          <h2>{movie.title}</h2>
          <p><span>Year:</span> {movie.year}</p>
          <p><span>Director:</span> {movie.director}</p>
          <p><span>Duration:</span> {movie.duration}h</p>
          <p><span>Synopsis:</span> {movie.synopsis}</p>
          <img src={movie.image} alt={movie.title}></img>
          <button className='btn--delete' onClick={handleDelete}>Delete movie</button>
          <button className='btn--edit' onClick={() => navigate(`/edit/${id}`)}>Edit movie</button>
        </div>)}

       
      {/* Should have a delete button to delete the movie and then redirect to the Home */}
    </div>
  )
}
