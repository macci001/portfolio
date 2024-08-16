import mongoose from "mongoose";
import { exit } from "process";

type ConnectionObject = {
  isConnected?: number
}

const connection: ConnectionObject = {};

const dbConnect = async () => {
  if(connection.isConnected) {
    console.log("Database is connected");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL!);
    const isConnected = db.connections[0].readyState;
    if(isConnected) {
      connection.isConnected = isConnected;
    }
  } catch (e) {
    console.log("Errror in connecting to the database", e);
    process.exit(1);
  }
} 

export default dbConnect();