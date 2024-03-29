"use strict";

const { createLogger, transports, format } = require("winston");
const { combine, timestamp, printf, label, colorize, simple } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
    return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = {
    file: combine(
        label({
            label: "백엔드 맛보기",
        }),
        timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        printFormat
    ),

    console: combine(
        colorize(),
        simple(),
    )
};

const opts = {
    file: new transports.File({
        filename: "winston-log.log", // access.log
        dirname: "./log",
        level: "info",
        format: printLogFormat.file,
    }),
    console: new transports.Console({
        level: "debug",
        format: printLogFormat.console,
    }),
};

const log = createLogger({
    transports: [opts.file],
});

// 개발용 서버일 경우 콘솔에 로그를 찍도록 추가
if (process.env.NODE_ENV !== "prod") {
    log.add(opts.console);
}

// winston과 morgan을 합쳐서 사용하기 위한 키
// logger.stream = {
//     write: (message) => logger.info(message),
// };

module.exports = log;