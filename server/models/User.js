import mongoose from 'mongoose';

// TODO:
// - hash password
// - validators?

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
});

export default mongoose.model('User', userSchema);
