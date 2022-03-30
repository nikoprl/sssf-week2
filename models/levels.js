import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const levelsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  Comments: String,
  IsFastChargeCapable: Boolean,
  Title: String,
});

export default mongoose.model('Levels', levelsSchema);
