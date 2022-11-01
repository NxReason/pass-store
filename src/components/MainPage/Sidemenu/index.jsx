import './styles.css';

export default function Sidemenu() {
  return (
    <div className="sidemenu">
      <ul className="menu-btns">
        <li className="menu-btn">
          <i className="icon icon-search"></i>
        </li>
        <li className="menu-btn">
          <i className="icon icon-new-entry"></i>
        </li>
        <li className="menu-btn">
          <i className="icon icon-gen"></i>
        </li>
      </ul>
    </div>
  );
}
