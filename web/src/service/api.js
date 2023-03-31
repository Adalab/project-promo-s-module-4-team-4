const dataApi = (data) =>{
    return fetch ("https://dev.adalab.es/api/projectCard",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type":"application/json"} 
        })
        .then (response=> response.json())
        .then (data =>{
            return data;
        })
};

const listProject = (data) =>{
    return fetch ("http://localhost:4000/dataApi/freedb_CoolProjectDb/all",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type":"application/json"} 
        })
        .then (response=> response.json())
        .then (data =>{
            return data;
        })
};

export default {dataApi, listProject};