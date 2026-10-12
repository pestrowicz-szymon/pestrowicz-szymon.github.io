import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="flex flex-col h-dvh w-full overflow-hidden bg-slate-950">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
