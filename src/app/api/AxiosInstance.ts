import axios from "axios";
const trainerLogin = process.env.NEXT_PUBLIC_TRAINER_LOGIN;


const AxiosInstance = axios.create({
  baseURL: trainerLogin,
});

export default AxiosInstance;
