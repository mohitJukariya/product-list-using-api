// import React, {useState, useEffect} from 'react'
import CompanyItem from './CompanyItem'
import Loading from './Loading'


function CompanyList(props) {

 
  return (
    <div>
      <div>
        <h1 className='text-center mx-5 my-5'><strong>List Of The Products</strong></h1>
      </div>
      {props.loading && <Loading/>}
      <div className="container">
          <div className="row">
            {props.ProductData.map((element) => {
              return <div className="col-md-4 my-3" key={element.id}>
                <CompanyItem id={element.id} title={element.title} image={element.image} rating={element.rating.rate} count={element.rating.count} />
              </div>
            })}
          </div>
        </div>
    </div>
  )
}

export default CompanyList