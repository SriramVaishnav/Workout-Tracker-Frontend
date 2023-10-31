import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Tracker</h1>
          <p>By <a href='https://sriramvaishnav.com/'>Sriram Vaishnav</a></p>
        </Link>
      </div>
    </header>
  )
}

export default Navbar