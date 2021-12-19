import '../database';
import mongoose, { Document, Model } from 'mongoose';

interface IPost extends Document {
  userId: string;
  title: string;
  description: string;
  image?: string;
  likes?: string[];
}

const PostSchema = new mongoose.Schema<IPost>(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      max: 50,
    },
    description: {
      type: String,
      max: 500,
    },
    image: {
      type: String,
      default: '',
    },
    likes: [
      {
        type: String,
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const Post: Model<IPost> = mongoose.model<IPost>('Post', PostSchema);
