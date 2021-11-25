import '../database';
import mongoose, { Document, Model } from 'mongoose';

interface IList extends Document {
  userId: string;
  listName?: string;
  category?: string;
  listItems?: Array<IListItems>;
}

type IListItems = {
  title: string;
  season: number;
  episode: number;
};

const ListSchema = new mongoose.Schema<IList>(
  {
    userId: {
      type: String,
      required: true,
    },
    listName: {
      type: String,
      max: 20,
    },
    category: {
      type: String,
    },
    listItems: [
      {
        title: {
          type: String,
        },
        season: {
          type: Number,
          min: 0,
        },
        episode: {
          type: Number,
          min: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const List: Model<IList> = mongoose.model<IList>('List', ListSchema);
