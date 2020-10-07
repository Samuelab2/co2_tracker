import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'

const TravelsCreate = () => {
  const [ conveyances, setConveyances ] = useState()
  const { register, handleSubmit, errors } = useForm();
  useEffect(() => {
    axios.get('http://localhost:5000/conveyance')
      .then(resp => {
        console.log(resp.data.body)
        setConveyances(resp.data.body)
      })
  }, [])
  const onSubmit = (data) => {
    axios.post('http://localhost:5000/travels/new', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(data)
  } 
  return (
    <>
      <h1>Travels Create</h1>
      <Link to="/travels" className='btn btn-primary'>Volver</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="start_address">Punto de partida</label>
          <input name="start_address" type="text" className="form-control" id="start_address" ref={register({ required: true })} />
        </div>
        <div className="form-group">
          <label htmlFor="end_address">Punto de termino</label>
          <input name="end_address" type="text" className="form-control" id="end_address" ref={register({ required: true })} />
        </div>
        <div className="form-group">
          <label htmlFor="transportation">Medio de transporte</label>
          <select name="transportation" className="form-control" id="transportation" ref={register({ required: true })}>
            {
              conveyances ?
              conveyances.map((conveyance, index) => {
                return (
                  <option key={index} value={conveyance._id}>{conveyance.transportation}</option>
                )
              })
              : <option>Cargando...</option>
            }
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="km">Cantidad de Kilometros</label>
          <input name="km" type="number" className="form-control" id="km" ref={register({ required: true })} />
        </div>
        <div className="form-group">
          <label htmlFor="number_workers">Cantidad de trabajadores</label>
          <input name="number_workers" type="number" className="form-control" id="number_workers" ref={register({ required: true })} />
        </div>
        <div className="form-group form-check">
          <input name="round_trip" type="checkbox" className="form-check-input" id="round_trip" />
          <label className="form-check-label" htmlFor="round_trip">Ida y vuelta</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default TravelsCreate