import React from 'react'
import { useForm } from "react-hook-form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const TravelForm = ({ onSubmit, transportationHandleChange, conveyances, kmHandleChange, roundtripHandleChange, dateHandleChange, startDate }) => {
const { register, handleSubmit, errors } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
      <div className="form-group col-6">
        <label htmlFor="date">Fecha</label> <br/>
        <DatePicker showTimeSelect dateFormat="dd/MM/yyyy" className="form-control" selected={startDate} onChange={dateHandleChange} />
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
  )
}

export default TravelForm