import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const TravelsList = () => {
  const [ travels, setTravels ] = useState()
  useEffect(() => {
    axios.get('http://localhost:5000/travels')
      .then(resp => setTravels(resp.data.body))
      .catch(e => console.log(e))
  }, [])
  return (
    <div className='min-vh-100 bg-light'>
      <nav className="navbar navbar-dark bg-info">
        <h1 className="navbar-brand">CO2_Foot Tracker</h1>
        <Link to='/travels/create' className='btn btn-light'>
            Nuevo registro
        </Link>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center m-5">
            <h2>Lista de Viajes</h2>
          </div>
        </div>
        {
          travels ?
            <table className="table table-bordered">
              <thead className="thead-light text-center">
                <tr>
                  <th scope="col" className="align-middle">Numero de Viaje</th>
                  <th scope="col" className="align-middle">Dia y Hora</th>
                  <th scope="col"className="align-middle">Destino inicio</th>
                  <th scope="col"className="align-middle">Destino final</th>
                  <th scope="col"className="align-middle">Kilometros recorridos</th>
                  <th scope="col"className="align-middle">Medio de transporte</th>
                  <th scope="col"className="align-middle">Personas por viaje</th>
                  <th scope="col"className="align-middle">Ida y vuelta</th>
                  <th scope="col"className="align-middle">KGCO2 por persona</th>
                  <th scope="col"className="align-middle">Total KGCO2 por viaje</th>
                </tr>
              </thead>
              <tbody>
              { 
                travels.map((travel, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        { new Date(travel.date).toLocaleDateString('es-ES') } - { new Date(travel.date).toLocaleTimeString('es-ES') }
                      </td>
                      <td>{travel.start_address}</td>
                      <td>{travel.end_address}</td>
                      <td>{travel.km}</td>
                      <td>{travel.transportation.transportation}</td>
                      <td>{travel.number_workers}</td>
                      <td>{travel.round_trip ? "Si" : "No"}</td>
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

      </div>
    </div>
  )
}

export default TravelsList