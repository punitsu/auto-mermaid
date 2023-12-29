import winston from 'winston';

export const logger = winston.createLogger({
  level: process.argv.indexOf('--debug') != -1 ? 'error' : 'info',
  levels: winston.config.npm.levels,
  format: winston.format.combine(winston.format.splat(), winston.format.cli()),
  transports: [new winston.transports.Console({ level: 'error' }), new winston.transports.File({ filename: 'combined.log' })],
});
