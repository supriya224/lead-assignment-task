import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
// eslint-disable-next-line import/no-extraneous-dependencies
import toast from "react-hot-toast";
import constants from "../utils/constants";

axios.defaults.baseURL = constants.API_URL;
// If you are using different URLs, consider removing this line and adding a baseURL in the Axios Config parameter.

const useAxios = (
  axiosParams: AxiosRequestConfig,
  isDefaultApiCall: boolean = false
) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const notify = (err: AxiosError) =>
    toast.error(`Error: ${err?.message || "Something went wrong!!"}`);

  const [loading, setLoading] = useState(
    (axiosParams.method === "GET" || axiosParams.method === "get") &&
      isDefaultApiCall
  );

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch (err: any) {
      notify(err);
      setError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  const sendData = () => {
    setLoading(true);
    fetchData(axiosParams);
  };

  useEffect(() => {
    if (
      (axiosParams.method === "GET" || axiosParams.method === "get") &&
      isDefaultApiCall
    ) {
      fetchData(axiosParams);
    }
  }, []);

  return { response, error, loading, sendData };
};

export default useAxios;
