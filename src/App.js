import {HashRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/App.css'

function App({currentPage}) {
  return (
    <HashRouter>
      <Header page={currentPage} />
      <Routes>
        <Route index element={<About />} />
        <Route path="projects" element={<Portfolio />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
