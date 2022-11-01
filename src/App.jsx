import { createSignal, Show } from 'solid-js';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';

export default function App() {
  const [loggedIn, setLoggedIn] = createSignal(false);

  return (
    <>
      <Show when={loggedIn()} fallback={<LoginPage />}>
        <MainPage />
      </Show>
    </>
  );
}
