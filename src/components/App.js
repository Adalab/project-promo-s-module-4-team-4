import { Route, Routes } from 'react-router-dom';
import CreateProject from './CreateProject';
import Landing from './Landing';


function App() {
  
  return (
    <Routes>
      <Route path="/CreateProject" element={<CreateProject/>}/>
      <Route path="/" element={<Landing/>}/>
    </Routes>
  );
}

export default App;
