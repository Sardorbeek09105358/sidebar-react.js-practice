import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./todos.css"

const Todos = () => {
  const id = +window.location.href.split('/')[4]
  const [single, setSingle] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res)
      setSingle(res.data)
    })
  }, [])

  const hanldBtn = () => {
    navigate("/")
  }

  return (
    <div className='container-fluid d-flex justify-content-center'>
      <div className="row">
        <div>
          <div className="col-md-5">
            <img src={single.image} alt="" className='w-50 mb-3' />
          </div>
          <div className="col-md-5 d-flex flex-column gap-3 w-20">
            <h1 className='text-capitalize fw-bold' style={{ fontSize: "30px" }}>{single.title}</h1>
            <h2 className='fw-normal' style={{ fontSize: "22px" }}>$ {single.price}</h2>
            <p>{single.description}</p>
            <button className='btn btn-danger text-capitalize' onClick={hanldBtn}>home page</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todos
