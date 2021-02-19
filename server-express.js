#!/usr/bin/env node

"use strict";

const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const hbs = exphbs.create({
    /* config */
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.enable("view cache");

app.use(express.static("public"));

app.get("/", (req, res) => { res.render("index", {cache : false}); });

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
