import { createEffect, createSignal } from 'solid-js';
import './LoginForm.css';

export default function LoginForm() {
  const [name, setName] = createSignal('');
  const [pass, setPass] = createSignal('');

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handlePassChange = e => {
    setPass(e.target.value);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    const res = await window.IPC.login(name(), pass());
    console.log(res);
  };

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      {/* Username */}
      <label htmlFor="username">
        <i className="icon icon-user"></i> Username
      </label>
      <input type="text" id="username" onInput={handleNameChange} />

      {/* Password */}
      <label htmlFor="password">
        <i className="icon icon-key"></i> Password
      </label>
      <input type="password" id="password" onInput={handlePassChange} />

      <button>
        <i className="icon icon-enter"></i> Log in
      </button>
    </form>
  );
}
