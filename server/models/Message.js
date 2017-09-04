import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
});

export default mongoose.model('Message', messageSchema);
