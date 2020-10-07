import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='Main__container'>
      <div className='Hero__info'>
        <h2>Siguele la pista a la Huella de Carbono</h2>
        <div>Tu plataforma de ayuda para el registro, control y seguimiento de las Huellas de Carbonos generadas.</div>
        <Link to='/travels' className='btn btn-primary'>
          Empezar!
        </Link>
      </div>
      <div className='Hero__image'>
      </div>
    </div>
  )
}

export default Home
