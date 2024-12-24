import { Link } from 'react-router-dom';
import './MenuBar.scss';

// Maybe tey this:
//  - https://v2.tauri.app/reference/javascript/api/namespacemenu/
//  - https://v2.tauri.app/learn/window-customization/
function MenuBar() {
  return (
    <nav className="menu-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/draft">Editor</Link>
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
