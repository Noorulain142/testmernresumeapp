
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import { useState } from 'react';

const Resume = ({ res, deleteResume, portfolioData, handleSubmit }) => {
  const [selectValue, setSelectValue] = useState("")

  return (<>
    <tr>
      <th scope="row">{res.email}</th>
      <td className="d-flex justify-content-between">
        <Link to={{ pathname: `${res._id}/show`, state: { deleteResume } }} className="btn btn-success"><RemoveRedEyeIcon /></Link>
        {/* <Link to={{ pathname: `${res._id}/update` }} ><button className="btn btn-success"><CreateIcon /></button></Link> */}
        <button className="btn btn-danger" onClick={() => deleteResume(res._id)} ><RestoreFromTrashIcon /></button>
        <form onSubmit={(e) => handleSubmit(e, selectValue, res)} >
          <select className="btn btn-success" onChange={(e) => setSelectValue(e.target.value)}>
            <option selected>{res.status}</option>

          </select>
          <button className='m-2 btn btn-primary'>Submit</button>
        </form>
        <form onSubmit={(e) => handleSubmit(e, selectValue, res)} >
          <select className="btn btn-success" onChange={(e) => setSelectValue(e.target.value)}>
            <option selected>Select Portfolio</option>
            {portfolioData[0]?.map((res, id) => {
              return (
                <>
                  <option value={res.data} key={id} >{res.handle}</option>
                </>
              )
            })}
          </select>
          <button className='m-2 btn btn-primary'>Submit</button>
        </form>

      </td>
    </tr>
  </>);
}

export default Resume;
