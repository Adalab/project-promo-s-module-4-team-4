const dataApi = (data) => {
  return fetch('http://localhost:4000/api/projects/add', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const listProject = () => {
  return fetch('http://localhost:4000/api/projects/all')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const api = { dataApi, listProject };

export default api;
