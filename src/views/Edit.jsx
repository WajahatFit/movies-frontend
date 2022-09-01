import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const getData = async() => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/movies/${id}`)
        setMovie(response.data.data)
        console.log(response.data.data)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const durationParsed =  parseInt(movie.duration);
  

    
    setMovie(prev => {
        return {
          ...prev,
          [name]: type === Number ? parseInt(movie.duration) : value
        }
    })
}

const handleSubmit = async(e) => {
  e.preventDefault();
  try {
      const newMovie = await axios.put(`http://localhost:8000/api/v1/movies/${id}`, movie);
      navigate(`/`)
    } catch (error) {
      console.error(error);
    }
}

  return (
    <div>
      <h2 className='new--title'>Edit movie</h2>
      {!movie && <p>loading...</p>}
      {movie && (<form className='form' onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' value={movie.title} placeholder='Movie Title'  onChange={handleChange}/>
            <label htmlFor='title'>Year</label>
            <input type='number' name='year' value={movie.year} placeholder='Movie year' onChange={handleChange}/>
            <label htmlFor='director'>director</label>
            <input type='text' name='director' value={movie.director} placeholder='Movie director' onChange={handleChange}/>
            <label htmlFor='duration'>duration</label>
            <input type='number' name='duration' value={movie.duration} placeholder='Movie duration' onChange={handleChange}/>
            <label htmlFor='synopsis'>synopsis</label>
            <input type='text' name='synopsis' value={movie.synopsis} placeholder='Movie synopsis' onChange={handleChange}/>
            <label htmlFor='image'>image url</label>
            <input type='text' name='image' value={movie.image} placeholder='Movie image url' onChange={handleChange}/>
            <button className='form--btn'>save changes</button>
        </form>)}
      

      {/* Should display a form with the data previously incorporated and when saved, send the
      changes to the database. Then it should redirect to the Home ('/') */}
    </div>
  )
}
