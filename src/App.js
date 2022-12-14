import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Switch from './components/Switch';
import NavBar from './components/NavBar';
import Editor from './pages/Editor';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <NavBar />
        </header>
        <Switch />
        <main className="app-main">
          <Routes>
            <Route exact path="/" element={<Editor />} />
          </Routes>
        </main>
      </div>
    </Router>

  );
}

export default App;
