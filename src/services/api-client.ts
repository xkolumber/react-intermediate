import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
   baseURL:'https://api.rawg.io/api',
   params:{
    key :'21a8d0e026b04d7cab8a24c5f1cebf55',
  },
})

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
   }

class APIclient<T>{
  endpoint: string;

  constructor(endpoint:string){
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
  }

}
export default APIclient;
