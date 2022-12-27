import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './styles.module.css'
// import { AuthContext } from "../../api/context/AuthContext"

const Signup = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")
  // const { dispatch } = useContext(AuthContext);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data)
    // dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`http://localhost:3000/api/auth/`, data);
      console.log(res.data)
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/")

    } catch (error) {
      // dispatch({ type: "LOGIN_FAILURE", payload: error });
      alert("invalid email or password")
      setError(error.response.data.message);//added
      return false;
    }
  }

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Log in to your Account</h1>
            <input type="email" placeholder="email" name="email" onChange={handleChange} value={data.email} required className={styles.input} />
            <input type="password" placeholder="password" name="password" onChange={handleChange} value={data.password} required className={styles.input} />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here?</h1>
          <Link to="/signup">
            <button type='button' className={styles.white_btn}>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup;
