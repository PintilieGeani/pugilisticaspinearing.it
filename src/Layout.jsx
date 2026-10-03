import { Outlet } from 'react-router-dom'
import AppFooter from './components/AppFooter.jsx'
import AppHeader from './components/AppHeader.jsx'
import './App.css'
import './responsive.css'

function Layout() {
  return (
    <div>
      <AppHeader />
      <main >
        <Outlet />
      </main>
      <AppFooter />
    </div>
  )
}

export default Layout
