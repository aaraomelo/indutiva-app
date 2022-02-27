import axios, { AxiosError, AxiosResponse } from "axios";


export const base_url = "http://localhost:3001";

export const GET = (url: string, dispatch: any, requestAction: any) =>
  new Promise<AxiosResponse>((resolve, reject) => {
    dispatch(requestAction({ status: 'pending', value: true }))
    axios.get(url)
      .then(
        (response) => {
          dispatch(requestAction({ status: 'suceeded', value: true }))
          dispatch(requestAction({ status: 'failed', value: false }))
          dispatch(requestAction({ status: 'pending', value: false }))
          resolve(response as AxiosResponse);
        },
        (err) => {
          dispatch(requestAction({ status: 'suceeded', value: false }))
          dispatch(requestAction({ status: 'failed', value: true }))
          dispatch(requestAction({ status: 'pending', value: false }))
          reject(err as AxiosError);
        });
  });

export const POST = (url: string, data: any, dispatch: any, requestAction: any) =>
  new Promise<AxiosResponse>((resolve, reject) => {
    dispatch(requestAction({ status: 'pending', value: true }))
    axios.post(url, data)
      .then(
        (response) => {
          dispatch(requestAction({ status: 'suceeded', value: true }))
          dispatch(requestAction({ status: 'failed', value: false }))
          dispatch(requestAction({ status: 'pending', value: false }))
          resolve(response as AxiosResponse);
        },
        (err) => {
          dispatch(requestAction({ status: 'suceeded', value: false }))
          dispatch(requestAction({ status: 'failed', value: true }))
          dispatch(requestAction({ status: 'pending', value: false }))
          reject(err as AxiosError);
        });
  });

export const PUT = (url: string, data: any, dispatch: any, requestAction: any) =>
  new Promise<AxiosResponse>((resolve, reject) => {
    dispatch(requestAction({ status: 'pending', value: true }))
    axios.put(url, data)
      .then(
        (response) => {
          dispatch(requestAction({ status: 'suceeded', value: true }))
          dispatch(requestAction({ status: 'failed', value: false }))
          dispatch(requestAction({ status: 'pending', value: false }))
          resolve(response as AxiosResponse);
        },
        (err) => {
          dispatch(requestAction({ status: 'suceeded', value: false }))
          dispatch(requestAction({ status: 'failed', value: true }))
          dispatch(requestAction({ status: 'pending', value: false }))
          reject(err as AxiosError);
        });
  });

export const PATCH = (url: string, data: any, dispatch: any, requestAction: any) =>
  new Promise<never>((resolve, reject) => {
    dispatch(requestAction({ status: 'pending', value: true }))
    axios.patch(url, data)
      .then(
        (response) => {
          dispatch(requestAction({ status: 'suceeded', value: true }))
          dispatch(requestAction({ status: 'failed', value: false }))
          dispatch(requestAction({ status: 'pending', value: false }))
          resolve(response as never);
        },
        (err) => {
          dispatch(requestAction({ status: 'suceeded', value: false }))
          dispatch(requestAction({ status: 'failed', value: true }))
          dispatch(requestAction({ status: 'pending', value: false }))
          reject(err as AxiosError);
        });
  });
