import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom'
import styles from './styles.module.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import { AuthContext } from '../../api/context/AuthContext';

const Show = () => {
  const { resumeId } = useParams()
  const [data, setData] = useState({})
  const { user } = useContext(AuthContext)
  const [error, setError] = useState("")

  useEffect(() => {
    const changeStatus = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/resume/single/${resumeId}`)
        console.log(res.data)
        setData(res.data)
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
  })

  return (
    < div className={styles.container} >
      <div className="row">
        <div className="left_view col-lg-6 col-md-6 col-12">
          <h4 className="mt-3">{user.name}</h4>
          <p className="mt-3"><MailOutlineIcon />{data.email}</p>
          <p className="mt-3"><SchoolIcon />{data.education}</p>
        </div>

        <div className="right_view col-lg-6 col-md-6 col-12">
          <div className="add_btn">
          </div>
          <p className="mt-5 mb-4"><PhoneIphoneIcon />{data.mobile}</p>
          <p className="mt-4 mb-4"><LocationOnIcon />{data.address}</p>
        </div>
        <hr />
        <div>
          <h4 className="mt-3">Interests</h4>
          {data.interests}
          <h4 className="mt-3">Skills</h4>
          {data.skills}
          <h4 className="mt-3">Experiences</h4>
          {data.experiences}
          <h4 className="mt-3">Acheivements</h4>
          {data.achievements}
          <h4 className="mt-3">Reference</h4>
          {data.reference}
        </div>

      </div>
      {error && <div>{error}</div>}
      <br />
      <Link to='/'><button className="btn btn-success">Back</button></Link>

      {/* {error && <div >{error}</div>} */}


    </div>
  )
}

export default Show

