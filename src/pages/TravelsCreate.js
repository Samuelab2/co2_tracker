import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import EmissionsCard from '../components/EmissionsCard'
import TravelForm from '../components/TravelForm'

const TravelsCreate = () => {
  const [ conveyances, setConveyances ] = useState()
  const [ inputTransportation, setInputTransportation ] = useState({emission_factor: 0})
  const [ inputKM, setInputKM ] = useState(0)
  const [ inputRoundTrip, setInputRoundTrip ] = useState(1)
  const [ totalCoFoot, setTotalCoFootCount ] = useState(0)
  const [ startDate, setStartDate ] = useState(new Date())
  const history = useHistory()

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
      console.log(response)
      history.push('/travels')
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
  const dateHandleChange = (date) => {
    setStartDate(date)
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
            <TravelForm 
              onSubmit={onSubmit} 
              conveyances={conveyances} 
              transportationHandleChange={transportationHandleChange} 
              kmHandleChange={kmHandleChange}
              roundtripHandleChange={roundtripHandleChange}
              dateHandleChange={dateHandleChange}
              startDate={startDate}
              />
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