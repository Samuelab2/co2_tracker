import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import EmissionsCard from '../components/EmissionsCard'

const TravelsCreate = () => {
  const [ conveyances, setConveyances ] = useState()
  const [ inputTransportation, setInputTransportation ] = useState({emission_factor: 0})
  const [ inputKM, setInputKM ] = useState(0)
  const [ inputRoundTrip, setInputRoundTrip ] = useState(1)
  const [ totalCoFoot, setTotalCoFootCount ] = useState(0)
  const [startDate, setStartDate] = useState(new Date())
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
      date: startDate,
      transportation: inputTransportation._id,
      total_CO2: totalCoFoot
    }
    console.log(formatedData)
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
    <div className='min-vh-100 bg-light'>
      <nav className="navbar navbar-dark bg-info">
        <h1 className="navbar-brand">CO2_Foot Tracker</h1>
        <Link to="/travels" className='btn btn-light'>Volver</Link>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center m-5">
            <h1>Nuevo viaje</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
              <div className="form-group col-6">
                <label htmlFor="date">Fecha</label> <br/>
                <DatePicker showTimeSelect dateFormat="dd/MM/yyyy" className="form-control" selected={startDate} onChange={date => setStartDate(date)} />
              </div>
              <div className="form-group col-6">
                <label htmlFor="start_address">Punto de partida</label>
                <input name="start_address" type="text" className="form-control" id="start_address" ref={register({ required: true })} />
                {errors.start_address && <span>Este campo es requerido</span>}
              </div>
              <div className="form-group col-6">
                <label htmlFor="end_address">Punto de termino</label>
                <input name="end_address" type="text" className="form-control" id="end_address" ref={register({ required: true })} />
                {errors.end_address && <span>Este campo es requerido</span>}
              </div>
              <div className="form-group col-6">
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
                {errors.transportation && <span>Este campo es requerido</span>}
              </div>
              <div className="form-group col-6">
                <label htmlFor="km">Cantidad de Kilometros</label>
                <input onChange={kmHandleChange} name="km" type="number" className="form-control" id="km" ref={register({ required: true })} />
                {errors.km && <span>Este campo es requerido</span>}
              </div>
              <div className="form-group col-6">
                <label htmlFor="number_workers">Cantidad de trabajadores</label>
                <input name="number_workers" type="number" className="form-control" id="number_workers" ref={register({ required: true })} />
                {errors.number_workers && <span>Este campo es requerido</span>}
              </div>
              <div className="form-group form-check col-5">
                <input onChange={roundtripHandleChange} name="round_trip" type="checkbox" className="form-check-input" id="round_trip" />
                <label className="form-check-label" htmlFor="round_trip">Ida y vuelta</label>
                {errors.round_trip && <span>Este campo es requerido</span>}
              </div>
              <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
          </div>
          <EmissionsCard 
            inputTransportation={inputTransportation} 
            inputKM={inputKM} 
            inputRoundTrip={inputRoundTrip} 
            totalCoFoot={totalCoFoot} 
            />
        </div>
      </div>
    </div>
  )
}

export default TravelsCreate