import React from "react";
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

function SignUpForm({ onAuthSuccess }) {
  const [state, setState] = React.useState({ name: "", email: "", password: "" });
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleChange = evt => {
    setState(prev => ({ ...prev, [evt.target.name]: evt.target.value }));
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    setError('');
    setMessage('');
    try {
      const res = await fetch(`${API_BASE}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name: state.name, email: state.email, password: state.password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || data.error || 'Signup failed');
        return;
      }

      // ✅ Auto-login after signup and call onAuthSuccess to switch to Search.jsx
      const loginRes = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email: state.email, password: state.password }),
      });

      if (loginRes.ok) {
        const loginData = await loginRes.json();
        onAuthSuccess && onAuthSuccess(loginData.user);
      } else {
        setMessage('Account created. Please login.');
      }

      setState({ name: "", email: "", password: "" });
    } catch (err) {
      console.error(err);
      setError("Not-Connected-backend");
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
         <a href={`${API_BASE}/auth/google`} className="social">
  <img src="/google.png" alt="Google" />
</a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" name="name" value={state.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Sign Up</button>
        {message && <div style={{ color: 'green', marginTop: 8 }}>{message}</div>}
        {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
      </form>
    </div>
  );
}

export default SignUpForm;
