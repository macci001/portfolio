import mongoose, {Document, Mongoose, Schema} from "mongoose";

export interface Message extends Document {
  name: string,
  email: string,
  message: string
}

const MessageSchema: Schema<Message> = new Schema({
  name: {
    type: String,
    min: 2,
    max: 10,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    min: 2,
    max: 100,
    required: true
  }
})

const MessageModel = mongoose.models.Message as mongoose.Model<Message> 
  || mongoose.model<Message>("Message", MessageSchema);
export default MessageModel;