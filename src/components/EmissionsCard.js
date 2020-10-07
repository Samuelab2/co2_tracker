import React from 'react'

const EmissionsCard = ({inputTransportation, inputKM, inputRoundTrip, totalCoFoot}) => {
  return (
    <div className="col-6 mt-4 mx-auto">
      <table className="table table-bordered">
        <thead className="thead-light text-center">
          <tr>
            <th scope="col">[ kgCO2/ km] </th>
            <th scope="col">KM del recorrido</th>
            <th scope="col">Ida y vuelta</th>
            <th scope="col">Total KgCO2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{inputTransportation.emission_factor}</td>
            <td>{inputKM}</td>
            <td>{inputRoundTrip}</td>
            <td>{totalCoFoot} KgCO2</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default EmissionsCard