import './LoginForm.css';

export default function LoginForm() {
  return (
    <form className="login-form">
      {/* Username */}
      <label htmlFor="username">
        <i className="icon icon-user"></i> Username
      </label>
      <input type="text" id="username" />

      {/* Password */}
      <label htmlFor="password">
        <i className="icon icon-key"></i> Password
      </label>
      <input type="password" id="password" />

      <button>
        <i className="icon icon-enter"></i> Log in
      </button>
    </form>
  );
}
