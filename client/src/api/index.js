import axios from "axios";

const url = "http://localhost:3000/resume/api";

export const fetchResume = () => axios.get(url);
export const creatResume = (newResume) => axios.post(url, newResume);
