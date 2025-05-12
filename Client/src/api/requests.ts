import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routes";

axios.defaults.baseURL = "http://localhost:5130/api/";

//Bu kısım aynı API tarafindaki middewarelar gibi calisir. Araya girer ve hatayi alir
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 404:
        //console.log("axiosDAta: " + JSON.stringify(data));
        //toast.error(data.title);
        router.navigate('/not-found');
        break;
      case 500:
        router.navigate("/server-error",{state:{error:data,status:status}})
        break;
      default:
        break;
    }
    return Promise.reject(error.response);
  }
);

//burada da sorgular generic hale getirildi. Yukaridaki base url dikkate alinarak istekler gonderilebilir.
const queries = {
  get: (url: string) =>
    axios.get(url).then((response: AxiosResponse) => response.data),
  post: (url: string, data: {}) =>
    axios.post(url, data).then((response: AxiosResponse) => response.data),
  put: (url: string, data: {}) =>
    axios.put(url, data).then((response: AxiosResponse) => response.data),
  delete: (url: string) =>
    axios.delete(url).then((response: AxiosResponse) => response.data),
};

//hatalari islemek icin generic yapi
const Errors = {
    get400Error:()=> queries.get("/error/bad-request"),
    get401Error:()=> queries.get("/error/unauthorized"),
    get404Error:()=> queries.get("/error/not-found"),
    get500Error:()=> queries.get("/error/server-error"),
    getValidationError: () => queries.get("/error/validation-error")

}

//Catalog tarafindaki sorgular. bunlar daha sonra genisleyecek.
const Catalog = {
  list: () => queries.get("products"),
  details: (id: number) => queries.get(`products/${id}`),
};

//request objesini disari aciyoruz
const requests = {
  Catalog,Errors
};

export default requests;
