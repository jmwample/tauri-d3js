import { Link } from 'react-router-dom';
import './MenuBar.scss';

function MenuBar() {
  return (
    <nav className="menu-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pie-chart">Pie Chart</Link>
        </li>
        <li>
          <Link to="/force-directed">Force Directed Graph</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;