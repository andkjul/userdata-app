import { Link } from 'react-router-dom';

const NavBar = ({ userCount }) => {
  return (
    <nav className='navbar'>
      <Link to="/">Home (Users: {userCount})</Link> | <Link to="/register">Register</Link>
    </nav>
  );
};

export default NavBar;
