import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function CompanyItem(props) {


  return (
    <div>
      <div className="card mx-2 my-2">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><strong>{props.title}</strong> </h5>
          <p><strong>Rating-</strong> {props.rating}</p>
          <p><strong>Count-</strong> {props.count}</p>
        </div>
      </div>
      <div className="text-center">
        <Link to={`/getDetails/${props.id}`} className='btn btn-warning center'  >
        Click here for Product Details
        </Link>
      </div>
    </div>
  )
}

export default CompanyItem
