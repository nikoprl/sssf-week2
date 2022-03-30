import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const currentTypesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  Description: String,
  Title: String
});

export default mongoose.model('CurrentTypes', currentTypesSchema);