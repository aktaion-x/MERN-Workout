import { useState } from "react";
import useAuthContext from './useAuthContext';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);
    console.log(email, password);
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      return false;
    }
    if (response.ok) {
      // save user to localStorage
      localStorage.setItem('user', JSON.stringify(json));
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
      setError(null);
      return true;
    }
  };
  return { error, isLoading, signup };
};

export default useSignup;