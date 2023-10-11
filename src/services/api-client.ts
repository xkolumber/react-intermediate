import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "21a8d0e026b04d7cab8a24c5f1cebf55",
  },
});

