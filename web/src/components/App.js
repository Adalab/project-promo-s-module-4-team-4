import { Route, Routes } from 'react-router-dom';
import CreateProject from './CreateProject';
import Landing from './Landing';
import api from '../service/api';
import { useState, useEffect } from 'react';
import Card from '../components/main/preview/Card';
function App({ data }) {
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    api.listProjectApi().then((cleanData) => {
      setSavedCards(cleanData);
    });
  }, []);

  return (
    <Routes>
      <Route path="/CreateProject" element={<CreateProject />} />
      <Route
        path="/"
        element={
          <Landing setSavedCards={setSavedCards} savedCards={savedCards} />
        }
      />
      <Route path="/Card" element={<Card setData={data} />}></Route>
    </Routes>
  );
}

export default App;
