import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const TravelsList = () => {
  const [ data, setData ] = useState()
  useEffect(() => {
    axios.get('http://localhost:5000/travels')
      .then(resp => setData(resp.data.body))
      .catch(e => console.log(e))
  }, [])
  return (
    <>
      <h1>Travel List</h1>
      <Link to='/travels/create' className='btn btn-primary'>
          Empezar!
      </Link>
      {
        data ?
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Numero de Viaje</th>
                <th scope="col">Dia y Hora</th>
                <th scope="col">Punto de Inicio</th>
                <th scope="col">Punto de termino</th>
                <th scope="col">Kilometros recorridos</th>
                <th scope="col">Medio de transporte</th>
                <th scope="col">Personas en el viaje</th>
                <th scope="col">Ida y vuelta</th>
                <th scope="col">KGCO2 por persona</th>
              </tr>
            </thead>
            <tbody>
            { 
              data.map((travel, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>test</td>
                    <td>{travel.start_addres}</td>
                    <td>{travel.end_addres}</td>
                    <td>{travel.km}</td>
                    <td>{travel.transportation.transportation}</td>
                    <td>{travel.number_workers}</td>
                    <td>{travel.round_trip.toString()}</td>
                    <td>{travel.transportation.transportation.emission_factor}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        : <p>loading</p>
      }
    </>
  )
}

export default TravelsList