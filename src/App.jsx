import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { Route, Routes } from 'react-router-dom';
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
