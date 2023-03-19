import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/App.css'

function App({ currentPage }) {
  return (
    <>
      <Header page={currentPage} />
      <Routes>
        <Route index element={<About />} />
        <Route path="projects" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
