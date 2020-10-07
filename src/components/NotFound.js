import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 bg-light'>
      <h1>Ups... la pagina que estabas buscando no existe <span role='img' aria-label='emoji triste'>😣</span></h1>
      <Link to='/travels' className='btn btn-primary'>
        Regresar
      </Link>
    </div>
  )
}

export default NotFound