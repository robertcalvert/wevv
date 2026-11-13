// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import express from "express";

import { w } from "../src"

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
    const page = w.html
        .lang("en")
        .append(
            w.head.append(w.title.append("Hello, Wevv")),
            w.body.append(
                w.h1.append("Welcome"),
                w.p.append("Weaved, not templated.")
            )
        )
        .render();

    res.type("html").send(page);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
