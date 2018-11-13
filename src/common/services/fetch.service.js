import {API_URL} from "../config";

export const unauthorizedError = new Error("unauthorized")

export const generatorUrl = (url = '', params = '') =>
  params ? url + '?' + generatorQueryString(params) : url;

export const generatorQueryString = params => {
  return typeof params === 'object'
    ? Object.keys(params).map(key => key + '=' + JSON.stringify(params[key])).join('&')
    : params;
};

export const statusHandler = response => {
  if (response.status === 401) {
    return Promise.reject(unauthorizedError)
  }

  if (response.ok) {
    return Promise.resolve(response);
  }
  return Promise.reject({
    status: response.status,
    statusText: response.statusText,
  });
};

export const parseAsJson = response => response.json();

const httpFetch = (url, options = {}) => {
  const headers = options.headers || new Headers()
  // if (JwtService.getToken() !== null) {
  //   headers.set("Authorization", `Bearer ${JwtService.getToken()}`)
  // }

  return fetch(API_URL + url, {headers, ...options})
    .then(statusHandler)
    .then(parseAsJson);
}

export default httpFetch;
