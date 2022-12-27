import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../api/context/AuthContext';
// import { useContext, useHistory } from 'react';

import { useContext } from 'react';

const Add = () => {

  const { user } = useContext(AuthContext)
  const [data, setData] = useState({
    // status: "",
    userId: "",
    email: "",
    mobile: "",
    achievements: "",
    interests: "",
    education: "",
    // education: {
    //   school: "",
    //   college: "",
    //   university: ""
    // },
    skills: "",
    experiences: "",
    address: "",
    reference: ""
  });

  const navigate = useNavigate();

  const [error, setError] = useState("")

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }

  const handleSubmit = async (data) => {
    try {
      const url = "http://localhost:3000/api/resume"

      const newData = { ...data, userId: user._id }
      const res = await axios.post(url, newData);
      navigate("/")
      setData([...data, res.data])
      console.log("hi", res)
      alert("data Added")
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        console.log(error.response.data)
        setError(error.response.data.message)
      }
    }
  }

  return (
    <>
      <div className='container'>
        {console.log(data)}
        {/* <Form className="mt-4" onSubmit={handleSubmit(e,data)}> */}
        <Form className="mt-4" onSubmit={(e) => { e.preventDefault(); handleSubmit(data) }}>

          <div className="row">

            {/* <div className="form-group col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputEmail1">Status</label>
              <input type="status" onChange={handleChange} value={data.status} name="status" className="form-control" required id="exampleInputEmail1" />
            </div> */}

            <div className="form-group col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputEmail1">Address</label>
              <input type="address" onChange={handleChange} value={data.address} name="address" className="form-control" required id="exampleInputEmail1" />
            </div>

            <div className="form-group col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" onChange={handleChange} value={data.email} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div className="form-group col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1">Phone Number</label>
              <input type="tel" name="mobile" onChange={handleChange} value={data.mobile} className="form-control" id="exampleInputPassword1" />
            </div>

            <div className="form-group col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputPassword1">Education</label>
              <input type="education" name="education" onChange={handleChange} value={data.education} className="form-control" id="exampleInputPassword1" />
            </div>

            {/* <div className="form-group col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputPassword1">Education</label>
              {console.log(data.education)}
              <input type="school" name="education" onChange={handleChange} value={data.education.school} className="form-control" id="exampleInputPassword1" />
              <input type="college" name="education" onChange={handleChange} value={data.education.college} className="form-control" id="exampleInputPassword1" />
              <input type="university" name="education" onChange={handleChange} value={data.education.university} className="form-control" id="exampleInputPassword1" />
            </div> */}

            <div className="form-group col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputPassword1">Skills</label>
              <textarea name='skills' onChange={handleChange} value={data.skills} className='form-control' id='' cols='30' row='10' />
            </div>

            <div className="form-group col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputPassword1">Interests</label>
              <textarea name='interests' onChange={handleChange} value={data.interests} className='form-control' id='' cols='30' row='10' />
            </div>

            <div className="form-group col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputPassword1">Experiences</label>
              <textarea name='experiences' onChange={handleChange} value={data.experiences} className='form-control' id='' cols='30' row='10' />
            </div>

            <div className="form-group col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputPassword1">Achievements</label>
              <textarea name='achievements' onChange={handleChange} value={data.achievements} className='form-control' id='' cols='30' row='10' />
            </div>

            <div className="form-group col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputPassword1">References</label>
              <textarea name='reference' onChange={handleChange} value={data.reference} className='form-control' id='' cols='30' row='10' />
            </div>

            {error && <div>{error}</div>}
            <br /><br />
            <button type="submit" className="btn btn-success mr">Submit</button>

          </div>

        </Form>
        <br />
        <Link to='/'><button className="btn btn-success">Back</button></Link>
      </div>
    </>

  )
}

export default Add


