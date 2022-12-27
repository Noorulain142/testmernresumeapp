import React from 'react'
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';

const Delete = ({ portfolio, deletePortfolio }) => {
  return (
    <div>
      <th scope="col"><button className="btn btn-danger" onClick={() => deletePortfolio(portfolio._id)} ><RestoreFromTrashIcon /></button></th>
    </div>
  )
}

export default Delete

