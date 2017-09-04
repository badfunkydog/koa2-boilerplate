import mongoose from 'mongoose';

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
});

export default mongoose.model('Board', boardSchema);
