const express = require('express');
const {
  createWorkout,
  getWrokouts,
  getSingleWrokout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

// GET all workouts
router.get('/', getWrokouts);

// GET a single workout
router.get('/:id', getSingleWrokout);

// POST a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router;