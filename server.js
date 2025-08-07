const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();

const routes = require('./Routes/bookRoutes');
const mysteryRoute = require('./Routes/mysteryRoute');
const authRoutes = require('./Routes/auth');
const hindiRoute = require('./Routes/hindiRoute');
const bundleRoute = require('./Routes/bundleRoute');
const candleRoute = require('./Routes/candleRoute');
const monsoonRoute = require('./Routes/monsoonRoute');
const kidsRoute = require('./Routes/kidsRoute');
const offersRoute = require('./Routes/offersRoute');
const cartRoute = require('./Routes/cartRoute');
const app = express();

app.use(express.json());
// app.use(cors());

const allowed = ['http://localhost:3000', 'https://book-server-093o.onrender.com' , 'https://bookstore-kitabay.netlify.app/'];
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowed.includes(origin)) return cb(null, true);
    cb(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));

const port = 8080;

app.use('/',routes);
app.use('/',mysteryRoute);
app.use('/',hindiRoute);
app.use('/',bundleRoute);
app.use('/',candleRoute);
app.use('/',monsoonRoute);
app.use('/',kidsRoute);
app.use('/',offersRoute);
app.use('/api', authRoutes); 
app.use('/',cartRoute);


mongoose
  // .connect("mongodb://127.0.0.1:27017")
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});






