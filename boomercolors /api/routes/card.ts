import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "../logger/logger";

class Card {

    public express: express.Application;
    public logger: Logger;

    // array to hold cards
    public cards: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.cards = [
            {
                name: "red",
                bg: "#FF0000",
                hover: "#FF6347"
            },
            {
                name: "orange",
                bg: "#FFA500",
                hover: "#FFA500"
            },
            {
                name: "yellow",
                bg: "#FFFF00",
                hover: "#FFFF00"
            },
            {
                name: "green",
                bg: "#00FF00",
                hover: "#00FF00"
            },
            {
                name: "blue",
                bg: "#0000FF",
                hover: "#0000FF"
            },
            {
                name: "indigo",
                bg: "#4B0082",
                hover: "#4B0082"
            },
            {
                name: "violet",
                bg: "#8F00FF",
                hover: "#8F00FF"
            }
        ];
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        // request to get all the cards
        this.express.get("/cards", (req, res, next) => {
            this.logger.info("url:" + req.url);
            res.json(this.cards);
        });

    }
}

export default new Card().express;