import mongoose from "mongoose"

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    )
}


let newconnection = global.mongoose;

if (!newconnection) {
    newconnection = global.mongoose = {con: null, promise: null}
}

const dbConnect = async () => {
    if (newconnection.conn) {
        return newconnection.conn;
    }


// If a connection does not exist, we check if a promise is already in progress. If a promise is already in progress, we wait for it to resolve to get the connection
    if (!newconnection.promise) {
        const opts = {
            bufferCommands : false
        };

        newconnection.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
            return mongoose
        })
    }

    try {
        newconnection.conn = await newconnection.promise;
    } catch (e) {
        newconnection.promise = null;
        throw e;
    }

    return newconnection.conn;
}

export default dbConnect;