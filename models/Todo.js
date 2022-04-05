import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, 'Please provide a value for task'],
    minlength: 5,
    maxlength: 50,
    unique: true,
  },
  tag: {
    type: String,
    required: true,
    enum: [
      'health',
      'education',
      'recreation',
      'adventure',
      'home',
      'work',
      'sport',
      'hobby',
      'other',
    ],
  },
  status: {
    type: String,
    enum: ['completed', 'incomplete'],
    default: 'incomplete',
  },
  priority: {
    type: Number,
    min: 1,
    max: 10,
    required: false,
    default: 5,
    // required: [true, 'Please set priority for this task'],
  },
});

export default mongoose.model('Todo', TodoSchema);
