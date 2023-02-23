import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App({ page }) {
  return (
    <>
      <Header page={page} />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
