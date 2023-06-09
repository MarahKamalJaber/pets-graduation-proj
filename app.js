const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");

const categoryRoute = require("./routes/cateRoute");
const productRoute = require("./routes/prodRoute");
const cartRoute = require("./routes/cartRoute");
const adminRoute = require("./routes/adminRoute");
const adoption = require("./routes/adoption");
const reservation = require("./routes/reservationAdopRoute");
const userRoute = require("./routes/userRoute");
const doctorsRoute = require("./routes/doctorsRoute");
const bookHotelRoute = require("./routes/bookHotelRoute");
const petsRoute = require("./routes/petsRoute");
const grommingRoute = require("./routes/grommingRoute");
const swaggerDocument = require("./swagger.json");

// Use body parser middleware to parse body of incoming requests
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes which should handle requests
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); //still working on it
app.use("/product", productRoute);
app.use("/category", categoryRoute);
app.use("/cart", cartRoute);
app.use("/admin", adminRoute);
app.use("/adoption", adoption);
app.use("/doctor", doctorsRoute);
app.use("/user", userRoute);
app.use("/gromer", grommingRoute);
app.use("/reservation", reservation);
app.use("/bookhotel", bookHotelRoute);
app.use("/pet", petsRoute);
// Handle Error Requests

app.get("/", (req, res) => {
  res.send(
    'API IS NOW WORKING, append "/docs" to the current url to access API documentation'
  );
});

// Handle Error Requests
app.use((req, res, next) => {
  const error = new Error();
  error.message = "Not Found";
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ error: error });
});

module.exports = app;
