const monogoose = require('mongoose');
const Workout = require('../models/workoutModel');

// get all workouts
const getWrokouts = async (req, res) => {
  const workouts = await Workout.find({ user_id: req.user._id }).sort({ createdAt: -1 });
  // console.log(json(workouts));
  res.status(200).json(workouts);
};

// get a single workout
const getSingleWrokout = async (req, res) => {
  const { id } = req.params;
  if (!monogoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'document ID is not valid' });
  }
  const workout = await Workout.findById(id).where({ user_id: req.user._id });
  if (!workout) {
    return res.status(404).json({ error: 'No such workout' });
  }
  res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  const emptyFields = [];
  if (!title) {
    emptyFields.push('title');
  }
  if (!load) {
    emptyFields.push('load');
  }
  if (!reps) {
    emptyFields.push('reps');
  }
  if (emptyFields.length > 0) {
    res.status(404).json({ error: 'please fill up all the fields.', emptyFields });
    return;
  }
  try {
    const user_id = req.user._id;
    const workout = await Workout.create({ title, load, reps, user_id });
    res.status(200).json(workout);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!monogoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'document ID is not valid' });
  }
  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ error: 'No such workout' });
  }
  res.status(200).json(workout);
};
// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!monogoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'document ID is not valid' });
  }
  const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body });
  if (!workout) {
    return res.status(404).json({ error: 'No such workout' });
  }
  res.status(200).json(workout);
};

module.exports = { createWorkout, getWrokouts, getSingleWrokout, deleteWorkout, updateWorkout };