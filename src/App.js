import { BrowserRouter } from 'react-router-dom';

import Routers from "./routers/routers";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
