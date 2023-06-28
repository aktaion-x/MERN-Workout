import './Home.css';
import { useEffect, useState } from 'react';
import useWorkoutContext from '../../hooks/useWorkoutContext';
import WrokoutDetails from '../../components/WrokoutDetails/WrokoutDetails';
import WrokoutForm from '../../components/WorkoutForm/WorkoutForm';
import useAuthContext from '../../hooks/useAuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  // const [workouts, setWorkouts] = useState(null);
  const { state, dispatch } = useWorkoutContext();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch('/api/workouts', {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json });
      }
    };
    if (user) {
      fetchWorkout();
    }
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        <h2 className="workouts-title">Workouts</h2>
        <Link className="add-workout" to="/add-workout">
          Add Workout
        </Link>

        {state.workouts && state.workouts.map((workout) => <WrokoutDetails key={workout._id} workout={workout} />)}
      </div>
      <WrokoutForm />
    </div>
  );
};

export default Home;
