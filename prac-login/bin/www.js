"use strict";

const app = require("../app");
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`${PORT}번 포트에서 서버 가동 중!`);
});