// Ad Server

import express from "express"
import { v4 } from "uuid"
import chalk from "chalk"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3014
const app = express();

function log(message) {
    console.log(chalk.blueBright("modules/adserver ") + chalk.green("INFO: ") + message)
}

function logWarning(message) {
    console.log(chalk.blueBright("modules/adserver ") + chalk.yellow("WARNING: ") + message)
}

function logError(message) {
    console.error(chalk.blueBright("modules/adserver ") + chalk.red("ERROR: ") + message)
}

export function run() {
    app.use(express.json())

    app.all("*", (req, res) => {

    })

    app.listen(PORT, () => {
        log(`Server is listening on port ${PORT}!`);
    });
}