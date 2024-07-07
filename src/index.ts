const express = require("express");
const PORT = 4000;
const db = require("mongoose");
const cors = require("cors");
const app = express();
const main = require("./router/index")
const http = require("http").Server(app);


app.use(cors(),express.json());

app.use(main())


db.connect(`mongodb+srv://akanksha315:Ak%40nkshaisthebest@akanksha.mis3acq.mongodb.net/chatpp`,{})
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err:any) => {
    console.error("Connection error", err);
  });




const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
  },
});

socketIO.on("connection", (socket: any) => {

   socket.on("setup", (userData:any) => {
    socket.join(userData);
   });

  socket.on("chatMsg", (chat: any) => {
    socket.to(chat.receiver.toString()).emit("message recieved", chat);

  });

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected", socket.id);
  });
});


http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
