var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var ontologyRouter = require("./routes/ontology");
var usersRouter = require("./routes/users");
var championRouter = require("./routes/champions");
var itemRouter = require("./routes/items");
var runeRouter = require("./routes/runes");
var summonerRouter = require("./routes/summonerSpells");


var app = express();

var cors = require("cors");
const corsOpts = {
  origin: "*",
  credentials: true,
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Accept",
    "Authorization",
    "Cache-Control",
    "Content-Type",
    "DNT",
    "If-Modified-Since",
    "Keep-Alive",
    "Origin",
    "User-Agent",
    "X-Requested-With",
    "Content-Length",
  ],
};
app.use(cors(corsOpts));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/ontology", ontologyRouter);
app.use("/users", usersRouter);
app.use("/champion", championRouter);
app.use("/item", itemRouter);
app.use("/rune", runeRouter);
app.use("/summoner", summonerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
