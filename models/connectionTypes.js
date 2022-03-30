import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const connectionTypesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  Title: String,
  FormalName: String
});

export default mongoose.model('ConnectionTypes', connectionTypesSchema);
