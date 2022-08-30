import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import axios from 'axios';

export default function Edit() {
  const params = useParams();
  const { id } = params;
  const [movie, setMovie] = useState(null)
  useEffect(() => {
    const getData = async() => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/movies/${id}`)
        setMovie(response.data)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
      
    }
    getData()
  }, [id])

  return (
    <div>
      <h2>Edit movie</h2>
      <Form />
      {/* Should display a form with the data previously incorporated and when saved, send the
      changes to the database. Then it should redirect to the Home ('/') */}
    </div>
  )
}
