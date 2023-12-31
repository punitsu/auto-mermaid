import winston from 'winston';

export const logger = winston.createLogger({
  level: process.argv.indexOf('--debug') != -1 ? 'info' : 'error',
  levels: winston.config.npm.levels,
  format: winston.format.combine(winston.format.timestamp(), winston.format.cli()),
  transports: [new winston.transports.Console(), new winston.transports.File({ filename: 'combined.log' })],
});
