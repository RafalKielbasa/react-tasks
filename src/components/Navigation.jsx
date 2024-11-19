import { Link, Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='contact'>Contact</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navigation
