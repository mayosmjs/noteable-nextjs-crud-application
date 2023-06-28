import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    // remember to encode the mongodb url because it throws errors if the password in the url contains characters
    mongoose.connect(process.env.MONGODB_URI, {
      dbName: "prompto",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log('Not connected to DB ');
  }
}