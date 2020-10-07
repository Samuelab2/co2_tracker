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
          Añadir nuevo registro
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
                <th scope="col">Total KGCO2 por viaje</th>
              </tr>
            </thead>
            <tbody>
            { 
              data.map((travel, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      { new Date(travel.date).toLocaleDateString('es-ES') }, 
                      { new Date(travel.date).toLocaleTimeString('es-ES') }
                    </td>
                    <td>{travel.start_address}</td>
                    <td>{travel.end_address}</td>
                    <td>{travel.km}</td>
                    <td>{travel.transportation.transportation}</td>
                    <td>{travel.number_workers}</td>
                    <td>{travel.round_trip.toString()}</td>
                    <td>{travel.transportation.emission_factor}</td>
                    <td>{travel.total_CO2}</td>
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