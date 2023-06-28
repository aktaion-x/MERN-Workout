import { useState } from 'react';
import useWorkoutContext from '../../hooks/useWorkoutContext';
import useAuthContext from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const WrokoutForm = ({ goBackToHome }) => {
  const navigate = useNavigate();
  const { dispatch } = useWorkoutContext();
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { user } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError('You must be logged in');
      return;
    }
    const workout = {
      title,
      load,
      reps,
    };
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      console.log(json);
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');
      setError(null);
      setEmptyFields([]);
      dispatch({ type: 'CREATE_WORKOUT', payload: json });
      if (goBackToHome) {
        navigate('/');
      }
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Workout</h3>
      <label>
        <span>Title: </span>
        <input className={emptyFields.includes('title') ? 'error' : ''} type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <span>Load (in kg): </span>
        <input className={emptyFields.includes('load') ? 'error' : ''} type="number" required value={load} onChange={(e) => setLoad(e.target.value)} />
      </label>
      <label>
        <span>Reps: </span>
        <input className={emptyFields.includes('reps') ? 'error' : ''} type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
      </label>
      <button className="btn no-select">Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WrokoutForm;
