import React from 'react'

const TravelsCreate = () => {
  return (
    <>
      <h1>Travels Create</h1>
      <form>
        <div className="form-group">
          <label htmlFor="start_address">Punto de partida</label>
          <input type="text" className="form-control" id="start_address" />
        </div>
        <div className="form-group">
          <label htmlFor="end_address">Punto de termino</label>
          <input type="text" className="form-control" id="end_address" />
        </div>
        <div className="form-group">
          <label htmlFor="transportation">Medio de transporte</label>
          <select className="form-control" id="transportation">
            <option>Default select</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="km">Cantidad de Kilometros</label>
          <input type="number" className="form-control" id="km" />
        </div>
        <div className="form-group">
          <label htmlFor="number_workers">Cantidad de trabajadores</label>
          <input type="number" className="form-control" id="number_workers" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="round_trip" />
          <label className="form-check-label" htmlFor="round_trip">Ida y vuelta</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default TravelsCreate