import mongoose from 'mongoose';
import ConnectionTypes from './connectionTypes';
import Levels from './levels';
import CurrentTypes from './currentTypes';

const Schema = mongoose.Schema;

const connectionsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  Quantity: Number,
  ConnectionTypeID: { type: Schema.Types.ObjectId, ref: ConnectionTypes },
  CurrentTypeID: { type: Schema.Types.ObjectId, ref: CurrentTypes },
  LevelID: { type: Schema.Types.ObjectId, ref: Levels },
});

export default mongoose.model('Connections', connectionsSchema);
