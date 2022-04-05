import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    minlength: 5,
    maxlength: 50,
    unique: true,
  },
  status: {
    type: String,
    enum: ['completed', 'pending'],
    default: 'pending',
  },
  priority: {
    type: Number,
    min: 1,
    max: 10,
    required: [true, 'Please set priority for this task'],
  },
});

export default mongoose.model('Todo', TodoSchema);
