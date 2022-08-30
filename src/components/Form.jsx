import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Form() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title:'',
        year:'',
        director:'',
        duration:'',
        synopsis:'',
        image:''
    })
    const handleChange = (e) => {
        const { name, value, type } = e.target;
        
        setForm(prev => {
            return {
              ...prev,
              [name]: type === Number ? parseInt(form.year) : value
            }
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const newMovie = await axios.post('http://localhost:8000/api/v1/movies', form);
            console.log(newMovie)
            navigate(`/movies/${newMovie.data.data._id}`)
          } catch (error) {
            console.error(error);
          }
    }
  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <input type='text' name='title' value={form.title} placeholder='Movie Title'  onChange={handleChange}/>
            <input type='number' name='year' value={form.year} placeholder='Movie year' onChange={handleChange}/>
            <input type='text' name='director' value={form.director} placeholder='Movie director' onChange={handleChange}/>
            <input type='number' name='duration' value={form.number} placeholder='Movie duration' onChange={handleChange}/>
            <input type='text' name='synopsis' value={form.synopsis} placeholder='Movie synopsis' onChange={handleChange}/>
            <input type='text' name='image' value={form.image} placeholder='Movie image url' onChange={handleChange}/>
            <button className='form--btn'>Create</button>
        </form>
    </div>
  )
}
