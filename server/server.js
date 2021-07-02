const express = require("express");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

app = express();

const user = require("./database/userSchema");

const getUserByEmail = async (email) => {
  let res = await user.findOne({ email: email });
  return res;
};

const getUserById = async (Id) => {
  let res = await user.findOne({ _id: Id });
  return res;
};
require("./database/db");
require("./utils/passportInitializer")(passport, getUserByEmail, getUserById);

app.use(
  session({
    secret: "top-secret",
    saveUninitialized: false,
    resave: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require("./routes/register"));
app.use(require("./routes/login"));

app.use("/", async (req, res) => {
  console.log(await req.user);
  res.send(await req.user);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
