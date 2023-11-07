import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { HomePage, AboutPage } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
