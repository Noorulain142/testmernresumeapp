import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import { useNavigate } from 'react-router-dom';

const PortfolioList = ({ portfolio, deletePortfolio }) => {

  const navigate = useNavigate();
  const handleClick = event => {
    navigate(`/${portfolio?.resume[0]?._id}/show`)
  };

  return (
    <>
      <div>
        <table className="table table-hover">
          <thead>
            <tr className="table-dark">
              <th scope="col">{portfolio.handle}</th>
              <th scope="col"></th>
              <th scope="col"><button className="btn btn-danger" onClick={() => deletePortfolio(portfolio._id)} ><RestoreFromTrashIcon /></button></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{portfolio?.resume[0]?.email ? portfolio?.resume[0]?.email : "No Resume Found"}</td>
              {/* <td><button className="btn btn-success" onClick={() => { navigate(`/${portfolio?.resume[0]?._id}/show`) }}><RemoveRedEyeIcon /></button></td> */}
              <td><button className="btn btn-success" onClick={portfolio?.resume[0]?.email ? handleClick : undefined}><RemoveRedEyeIcon /></button></td>
            </tr>
          </tbody>
        </table>

      </div>

    </>
  )
}

export default PortfolioList

