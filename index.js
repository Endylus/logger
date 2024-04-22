const fs = require('fs');
const path = require('path');

class Logger {
    constructor(options = {}) {
        const { consoleLog = true, filesLog = true, logFolderPath = './logs' } = options;
        this.consoleLog = consoleLog;
        this.filesLog = filesLog;
        this.logFolderPath = logFolderPath;
        if (this.filesLog) {
            this.ensureLogFolder();
            this.logFilePath = this.getLogFilePath();
        }
    }

    getLogFilePath() {
        const currentDate = new Date().toLocaleDateString('tr-TR');
        return path.join(this.logFolderPath, `${currentDate}.txt`);
    }

    ensureLogFolder() {
        if (!fs.existsSync(this.logFolderPath)) {
            fs.mkdirSync(this.logFolderPath, { recursive: true });
        }
    }

    log(message, level) {
        if (!message) {
            this.warn('Message is required');
            return;
        }

        if (this.consoleLog) {
            const color = {
                INFO: '\x1b[32m',
                ERROR: '\x1b[31m',
                WARN: '\x1b[33m',
                DEBUG: '\x1b[34m',
            };
            console.log(`[\x1b[38;2;5;203;247m${new Date().toLocaleTimeString()}\x1b[0m] [${color[level]}${level}\x1b[0m] ${message}`);
        }

        if (this.filesLog) {
            const logMessage = `[${new Date().toLocaleTimeString()}] [${level}] ${message}`;
            fs.appendFileSync(this.logFilePath, `${logMessage}\n`);
        }
    }

    info(message) {
        this.log(message, 'INFO');
    }

    error(message) {
        this.log(message, 'ERROR');
    }

    warn(message) {
        this.log(message, 'WARN');
    }

    debug(message) {
        this.log(message, 'DEBUG');
    }
}

module.exports = Logger;