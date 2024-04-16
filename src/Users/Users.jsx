import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Users.css"

const Users = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setProducts(res.data)
    })
  }, [])

  return (
    <div className='mx-auto' style={{ width: "60%", paddingTop: "100px", }}>
      <div className='d-flex flex-wrap justify-content-center'>
        {products.map((item, index) => (
          <div className="col-4" key={index} style={{ marginBottom: "20px", display: "flex", gap: "40px"}}>
            <div className="card" style={{ width: "100%", height: "100%", marginLeft: '55px' }}>
              <div className="card-body">
                <img src={item.image} alt="product" className='w-100 h-100' />
              </div>
              <div className="card-footer">
                <Link to={`/Todos/${item.id}`}>
                <span>{index + 1}</span>.
                <span>{item.title}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
