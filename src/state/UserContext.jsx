import { createSignal, createContext, useContext } from 'solid-js';

const UserContext = createContext();

export function UserProvider(props) {
  const ctx = createSignal(props.loggedIn || false);

  return (
    <UserContext.Provider value={ctx}>{props.children}</UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
