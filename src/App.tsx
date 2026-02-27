import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Portfolio/" element={<About />} />
        <Route path="/Portfolio/projects" element={<Portfolio />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
