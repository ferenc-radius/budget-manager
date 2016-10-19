import mongorito from "mongorito";

export default {
    async setup(uri=null) {
        if (!uri) {
            uri = process.env.MONGO_URL;
        }
        console.log("Connection to mongo: %s", uri);
        return await mongorito.connect(uri);
    },

    async disconnection() {
        if (connection) {
            return await mongorito.disconnect();
        }
    }
}
