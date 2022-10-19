const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Veri tabanına bağlandı");
  })
  .catch(() => {
    console.log("Veri tabanına bağlanırken sorun oluştu");
  });
