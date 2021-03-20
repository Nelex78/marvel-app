// Your public key
// 5d374f0407d4a773a9a0de0c45e9d0b9

// Your private key
// 5bfb11caa2900b66b0a34bf165274377f0bda06c
// 

import md5 from 'js-md5';
const timeStamp = 3;
const privateKey = '5bfb11caa2900b66b0a34bf165274377f0bda06c';
const publicKey = '5d374f0407d4a773a9a0de0c45e9d0b9';
const limit = '100';

const hashValue = md5.create();
hashValue.update(timeStamp + privateKey + publicKey);

const BASE_URL = `https://gateway.marvel.com/v1/public/characters?limit=${limit}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;

export const getDataFromApi = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}
