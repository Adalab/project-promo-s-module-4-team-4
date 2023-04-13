const dataApi = (data) => {
  return fetch('https://project-cool-station.onrender.com/api/projects/add', {
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
  return fetch('https://project-cool-station.onrender.com/api/projects/all')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const api = { dataApi, listProject };

export default api;
