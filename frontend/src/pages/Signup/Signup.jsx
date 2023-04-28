import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Signup</h3>
      <label>
        <snap>Email: </snap>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <snap>Password: </snap>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {isLoading && (
        <button disabled className="btn">
          Loading...
        </button>
      )}
      {!isLoading && <button className="btn">Signup</button>}
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
