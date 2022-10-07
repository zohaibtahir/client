import {Outlet, Link} from 'react-router-dom';
import '../styles/style.css';

const Layout = () => {
  return (
    <>
    <header>
        <div className='logo'>
            <h2>UserManager</h2>
        </div>
        <nav className='navigation'>
            <ul>
            <li>
                    <Link to="/">All User</Link>
                </li>
                <li>
                    <Link to="/add-user">Add User</Link>
                </li>
                
            </ul>
        </nav>
    </header>

    <main>
        <Outlet/>
    </main>
        
    </>
  )
}

export default Layout