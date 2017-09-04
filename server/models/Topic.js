import mongoose from 'mongoose';

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
});

export default mongoose.model('Topic', topicSchema);
