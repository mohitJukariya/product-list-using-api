import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading';

function GetDetails(props) {
  const [details, setDetails] = useState([])
  const { id } = useParams()
  const [loading, setLoading] = useState(false);

  const updateProduct = async () => {
    const url = `https://fakestoreapi.com/products/${id}`
    setLoading(true);
    let data = await fetch(url)
    let parsedData = await data.json()
    setDetails(parsedData)
    setLoading(false);
  }

  useEffect(() => {
    updateProduct()
    // eslint-disable-next-line
  }, [id])

  return (
    <div className='container my-5'>
      <div className="my-5">&nbsp;</div>
      <h1 className='text-center my-5'>Details Of The Product</h1>
      {loading && <Loading/>}
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <img style={{width: '80%'}} src={details.image} alt="..." />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{details.title}</h3>
              <p className="card-text">
                {details.description}
              </p>
              <p><strong>Category-</strong> {details.category}</p>
              <h2>Price- {details.price}$</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetDetails
