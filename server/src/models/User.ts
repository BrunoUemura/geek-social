import '../database';
import mongoose, { Document, Model } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profilePicture?: string;
  coverPicture?: string;
  description?: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: '',
    },
    coverPicture: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
      max: 50,
    },
  },
  {
    timestamps: true,
  },
);

export const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
