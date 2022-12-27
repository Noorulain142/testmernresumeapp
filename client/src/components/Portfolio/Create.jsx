import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import styles from './styles.module.css'

const Create = (props) => {
  const [data, setData] = useState({
    userId: "",
    handle: "",
  });

  // const [error, setError] = useState()
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }
  console.log(data)

  return (
    <>
      <div className="container">
        <div className={styles.container}>
          <h1>create new portfolio</h1>
          <Form className={styles.form} onSubmit={(e) => { e.preventDefault(); props.handleSubmit(data) }}>
            <div className="row">
              <div className="form-group col-lg-6 col-md-6 col-12">
                <input type="handle" onChange={handleChange} value={data.handle} placeholder="handle name" name="handle" className="form-control" required id="exampleInputEmail1" />
              </div>
            </div>
            <button type="submit" className="btn btn-success mr">Submit</button>
          </Form>
        </div>
        {/* {error && <div>{error}</div>} */}
      </div>
    </>
  )
}
export default Create

