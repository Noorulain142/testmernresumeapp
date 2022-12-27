import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Show = ({ searchInput }) => {
  const location = useLocation()
  const state = location.state

  return (
    <>
      <div>
        {console.log(state.searchInput)}
        <Link to='/portfolio'><button className="btn btn-success mb-3 mt-3">Back</button></Link>
        <table className="table table-hover">
          <thead>
            <tr className="table-dark">
              <th scope="col">{state.searchInput.label}</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{state.searchInput.value}</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div></>
  )
}

export default Show
