import Base64 from 'base-64';

const URL = "";

export const callAPI = async (url, method, username, password, data) => {
  const respone = await fetch(URL + url, {
    method: method,
    headers: {
      'Authorization': `Basic ${Base64.encode(`${username}:${password}`)}`,
      'X-Client-Secret': 'A022C9B9-08CE-4A13-814E-499FF84FFF31'
    },
    body: data ? JSON.stringify(data) : null,
  });
  const resJson = await respone.json();
  return resJson;
};