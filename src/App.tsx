import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
