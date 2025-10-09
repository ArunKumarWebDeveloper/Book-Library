import React from "react";

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

function SignInForm({ onAuthSuccess }) {
  const [state, setState] = React.useState({ email: "", password: "" });
  const [error, setError] = React.useState("");

  const handleChange = evt => {
    setState(prev => ({ ...prev, [evt.target.name]: evt.target.value }));
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    setError("");
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email: state.email, password: state.password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || data.error || 'Login failed');
        return;
      }

      // ✅ Call onAuthSuccess to switch to Search.jsx
      onAuthSuccess && onAuthSuccess(data.user);

      setState({ email: "", password: "" });
    } catch (err) {
      console.error(err);
      setError("Not-Connected-backend");
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Login</h1>
        <div className="social-container">
         <a href={`${API_BASE}/auth/google`} className="social">
  <img src="/google.png" alt="Google" />
</a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" name="email" value={state.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} required />
        <a href="#">Forgot your password?</a>
        <button type="submit">Login</button>
        {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
      </form>
    </div>
  );
}

export default SignInForm;
