import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isLoading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>
        <span>Email: </span>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <span>Password: </span>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {isLoading && (
        <button disabled className="btn">
          Loading...
        </button>
      )}
      {!isLoading && <button className="btn">Login</button>}
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
