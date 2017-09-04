import mongoose from 'mongoose';

const actorSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  nickname: {
    type: String,
    trim: true,
  },
});

export default mongoose.model('Actor', actorSchema);
