import mongoose from 'mongoose';

(async () => {
  await mongoose.connect(process.env.DATABASE_URL);
})();
