import HomePage from './pages/HomePage'
import Footer from './components/Footer'

function App() {

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden bg-slate-950">
      {/* 1. Główny kontener ze skrolującymi się sekcjami */}
      <HomePage />

      {/* 2. Przeglądarkowy Footer przyklejony na stałe do dołu */}
      <Footer />
    </div>
  )
}

export default App
