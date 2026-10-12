import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden bg-slate-950">
      {/* 1. Nawigacja na samej górze */}
      <Navbar />

      {/* 2. Przewijany obszar sekcji */}
      <HomePage />

      {/* 3. Statyczny Footer na dole */}
      <Footer />
    </div>
  )
}

export default App
