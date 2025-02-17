import React from 'react'
import { useParams } from 'react-router-dom';

function Default() {
  const { id } = useParams(); // Replace 'id' with your parameter name
  console.log(id)
  return (
    <div className='container'>
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className='display-3'>404</h1>
          <h1>error</h1>
          <h2>page not found</h2>
          <h3>the requested URL
            <span className='text-danger'>
              /{id}
            </span>{" "}
            was not found
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Default