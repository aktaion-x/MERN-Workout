import useWorkoutContext from './useWorkoutContext';
import useAuthContext from "./useAuthContext";

const useLogout = () => {
  const { dispatch: dispatchAuthContext } = useAuthContext();
  const { dispatch: dispatchWrokoutContext } = useWorkoutContext();
  const logout = () => {
    localStorage.removeItem('user');
    dispatchAuthContext({ type: 'LOGOUT' });
    dispatchWrokoutContext({ type: 'SET_WORKOUTS', payload: null });
  };
  return logout;
};

export default useLogout;