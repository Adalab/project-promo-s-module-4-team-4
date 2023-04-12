import { Route, Routes } from 'react-router-dom';
import CreateProject from './CreateProject';
import Landing from './Landing';
//import Preview from './Preview';

function App() {
  return (
    <Routes>
      <Route path="/CreateProject" element={<CreateProject />} />
      <Route path="/" element={<Landing />} />
      {/* <Route path="/Preview" element={<Preview />} /> */}
    </Routes>
  );
}

export default App;
