import styles from './styles.module.css'
import { Link } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../api/context/AuthContext';
import Navbar from "./navbar"
import Resume from '../Resume/Resume'

const Main = () => {
  const { user } = useContext(AuthContext)
  const [portfolioData, setportfolioData] = useState([]);
  const [error, setError] = useState("")
  const [resumeData, setResumeData] = useState([]);


  useEffect(() => {
    const changeStatus = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/resume/${user._id}`)
        setResumeData(...resumeData, res.data);
        const port = await axios.get(`http://localhost:3000/api/portfolio/${user._id}`)
        setportfolioData([...portfolioData, port.data]);
      } catch (err) {
        if (
          err.response &&
          err.response.status >= 400 &&
          err.response.status <= 500
        ) {
          setError(err.response.data.message);
        }
      }
    }
    changeStatus()
  }, [])

  const deleteResume = async (resId) => {
    try {
      await axios.delete(`http://localhost:3000/api/resume/${resId}`)
      const newResumeData = resumeData.filter((i) => {
        return i._id !== resId
      })
      setResumeData(newResumeData)
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  const handleSubmit = async (e, selectedValue, res) => {
    try {
      e.preventDefault();
      await axios.put(`http://localhost:3000/api/portfolio/${selectedValue}`, { resumeData: res })
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  return (
    <>
      <Navbar portfolioData={portfolioData} />
      {error && <div className="alert alert-danger">{error}</div>}
      <div className={styles.main_container}>
      </div>
      <div className="mt-5">
        <div className="container">
          <table className="table table-hover">
            <thead key="thead">
              <tr className="table-dark">
                <th scope="col">Your Resume list</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody key="tbody">
              {resumeData.map((res, id) => {
                return (
                  <>
                    <Resume res={res} deleteResume={deleteResume} portfolioData={portfolioData} handleSubmit={handleSubmit} />
                  </>)
              })}
            </tbody>
          </table>
          <div className='add_btn mt-2'>
            <Link to='/add'><button className="btn btn-success">ADD RESUME</button></Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default Main;
