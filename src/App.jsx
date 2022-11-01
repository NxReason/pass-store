import { Show } from 'solid-js';

import { useUser } from './state/UserContext';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';

export default function App() {
  const [loggedIn] = useUser();

  return (
    <>
      <Show when={loggedIn()} fallback={<LoginPage />}>
        <MainPage />
      </Show>
    </>
  );
}
