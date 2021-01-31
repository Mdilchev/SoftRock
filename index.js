const express = require("express");
const app = express();
const { exec } = require("child_process");

const config = {
    port: 80
};

app.get("/", async (req, res) => {
    res.send("go to /shutdown")

    res.end();
});

app.get("/shutdown", async (req, res) => {
    exec("shutdown -s -t 0", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        };

        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        };
    });

    res.end();
});

app.listen(config.port, () => { console.log(`App listening on: ${config.port}.`) })