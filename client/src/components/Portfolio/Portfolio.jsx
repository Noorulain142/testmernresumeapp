import { Link } from 'react-router-dom'
import SearchBar from "./SearchBar"
import List from "./PortfolioList"
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../api/context/AuthContext';
import Create from './Create'
// import Navbar from '../Main/navbar'

const Portfolio = () => {

  const { user } = useContext(AuthContext)
  const [data, setPortfolioData] = useState([]);
  const [portfolioData, setportfolioData] = useState([]);
  const [options, setOptions] = useState([]);
  const [error, setError] = useState("")
  const [allPortfolioData, setAllPortfolioData] = useState([]);

  useEffect(() => {
    const changeStatus = async () => {
      try {
        const port = await axios.get(`http://localhost:3000/api/portfolio/${user._id}`)
        setportfolioData(port.data);

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

  useEffect(() => {
    const changeAllStatus = async () => {
      try {

        const allPort = await axios.get(`http://localhost:3000/api/portfolio/`)
        const arr = []
        setAllPortfolioData([...allPortfolioData, allPort.data]);
        allPort.data.forEach(element => {
          arr.push({ value: element._id, label: element.handle })
        });
        setOptions([...options, arr])
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
    changeAllStatus()
  }, [])

  const handleSubmit = async (dataPort) => {

    try {
      const url = "http://localhost:3000/api/portfolio"
      const newData = { ...dataPort, userId: user._id }
      const res = await axios.post(url, newData);
      setPortfolioData([...portfolioData, res.data])
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        console.log(error.response.data)
        alert("invalid handle")
        window.location.reload()
        setError(error.response.data.message)
      }
    }
  }

  const deletePortfolio = async (portfolioId) => {
    try {
      await axios.delete(`http://localhost:3000/api/portfolio/${portfolioId}`)
      const newPortfolioData = data.filter((i) => {
        return i._id !== portfolioId
      })
      setPortfolioData(newPortfolioData)
    } catch (error) {

      setError(error.response.data.message);
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      <SearchBar allPortfolioData={allPortfolioData} options={options} />
      { }
      <div className="container">
        <br />
        {portfolioData?.map((res) => {

          return (
            <>
              <List portfolio={res} deletePortfolio={deletePortfolio} />
            </>)
        })}
      </div>
      <Create handleSubmit={handleSubmit} />
      <div className="container">
        <Link to='/'><button className="btn btn-success mb-3 mt-3">Back</button></Link>
      </div>
      {error && <div>{error}</div>}
    </>
  )
}

export default Portfolio
