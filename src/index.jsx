import { render } from 'solid-js/web';
import './index.css';

import { UserProvider } from './state/UserContext';
import App from './App';

render(
  () => (
    <UserProvider loggedIn="false">
      <App />
    </UserProvider>
  ),
  document.getElementById('root')
);
