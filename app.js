const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();
const filepath = path.join(__dirname, "views");

app.set("views", filepath);
app.set("view engine", "ejs");

var pokemons = [
    {
        name: "Charizard",
        type: "fire",
        level: 21
    },
    {
        name: "Pikachu",
        type: "electro",
        level: 38
    },
    {
        name: "Snorlax",
        type: "fat",
        level: 51
    }
];

var locations = [
    {
        name: "Route 30",
        shortname: "route30",
        fire: 10,
        fat: 50,
        electro: 10
    },
    {
        name: "Route 18",
        shortname: "route18",
        fire: 30,
        fat: -10,
        electro: 20
    },
    {
        name: "Route 21",
        shortname: "route21",
        fire: 10,
        fat: 20,
        electro: 5
    }
];

app.get("/:location", (req, res)=>{
    res.render("index.ejs", {locations:locations, pokemons:pokemons});
});

app.listen(8080);