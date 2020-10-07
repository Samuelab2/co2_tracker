import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'

const TravelsCreate = () => {
  const [ conveyances, setConveyances ] = useState()
  const [ inputTransportation, setInputTransportation ] = useState({emission_factor: 0})
  const [ inputKM, setInputKM ] = useState(0)
  const [ inputRoundTrip, setInputRoundTrip ] = useState(1)
  const [ totalCoFoot, setTotalCoFootCount ] = useState(0)
  const { register, handleSubmit, errors } = useForm()

  useEffect(() => {
    axios.get('http://localhost:5000/conveyance')
      .then(resp => {
        setConveyances(resp.data.body)
      })
  }, [])

  useEffect(() => {
    const totalCoFootCount = () => {
      setTotalCoFootCount((inputTransportation.emission_factor * inputKM * inputRoundTrip).toFixed(2))
    }
    totalCoFootCount()
  }, [inputTransportation, inputKM, inputRoundTrip])

  const onSubmit = (data) => {
    const formatedData = {
      ...data,
      transportation: inputTransportation._id,
      total_CO2: totalCoFoot
    }
    axios.post('http://localhost:5000/travels/new', formatedData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  const transportationHandleChange = (e) => {
    setInputTransportation(conveyances[e.target.value])
  }
  const kmHandleChange = (e) => {
    setInputKM(e.target.value)
  }  
  const roundtripHandleChange = (e) => {
    if (e.target.checked) {
      return setInputRoundTrip(2)
    }
    return setInputRoundTrip(1)
  }

  return (
    <>
      <h1>Travels Create</h1>
      <Link to="/travels" className='btn btn-primary'>Volver</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="start_address">Punto de partida</label>
          <input name="start_address" type="text" className="form-control" id="start_address" ref={register({ required: true, message: 'test' })} />
          {errors.start_address && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="end_address">Punto de termino</label>
          <input name="end_address" type="text" className="form-control" id="end_address" ref={register({ required: true })} />
          {errors.end_address && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="transportation">Medio de transporte</label>
          <select onChange={transportationHandleChange} name="transportation" className="form-control" id="transportation" ref={register({ required: true })}>
            {
              conveyances ?
              conveyances.map((conveyance, index) => {
                return (
                  <option key={index} value={index}>{conveyance.transportation}</option>
                )
              })
              : <option>Cargando...</option>
            }
          </select>
          {errors.transportation && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="km">Cantidad de Kilometros</label>
          <input onChange={kmHandleChange} name="km" type="number" className="form-control" id="km" ref={register({ required: true })} />
          {errors.km && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="number_workers">Cantidad de trabajadores</label>
          <input name="number_workers" type="number" className="form-control" id="number_workers" ref={register({ required: true })} />
          {errors.number_workers && <span>This field is required</span>}
        </div>
        <div className="form-group form-check">
          <input onChange={roundtripHandleChange} name="round_trip" type="checkbox" className="form-check-input" id="round_trip" />
          <label className="form-check-label" htmlFor="round_trip">Ida y vuelta</label>
          {errors.round_trip && <span>This field is required</span>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <p>{inputTransportation.emission_factor}</p>
      <p>{inputKM}</p>
      <p>{inputRoundTrip}</p>
      {/* <p>total: {(inputTransportation.emission_factor * inputKM * inputRoundTrip).toFixed(2)}</p> */}
      <p>{totalCoFoot}</p>
    </>
  )
}

export default TravelsCreate