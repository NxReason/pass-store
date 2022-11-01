import './styles.css';

import Sidemenu from './Sidemenu';
import AccountList from './AccountList';

export default function MainPage() {
  return (
    <div className="main-page">
      <Sidemenu />
      <AccountList />
    </div>
  );
}
