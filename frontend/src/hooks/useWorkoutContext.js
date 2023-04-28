import { WorkoutContext } from "../contexts/WorkoutContext";
import { useContext } from "react";

const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider');
  }
  return context;
};

export default useWorkoutContext;