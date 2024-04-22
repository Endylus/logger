# Logger

Logger is a versatile logging module for Node.js applications, providing both console and file logging capabilities with customizable options.

```bash
npm install @endylus/logger
```

## Features

- **Console and File Logging:** Logs can be outputted to the console and/or stored in files.
- **Customizable Options:** Various options such as log folder path, console logging, and file logging can be configured.
- **Multiple Logging Levels:** Supports different logging levels (INFO, ERROR, WARN, DEBUG) for different types of messages.

## Usage

```js
const Logger = require('@endylus/logger');

// Create a new instance of Logger with optional configuration options
const log = new Logger({
    consoleLog: true, // Enable console logging (Default: true)
    filesLog: true, // Enable file logging (Default: true)
    logFolderPath: './logs' // Log files directory path (Default: './logs')
});

// Log messages with different levels
log.info('This is an information message.');
log.error('This is an error message.');
log.warn('This is a warning message.');
log.debug('This is a debugging message.');

/*
Output:
[15:13:43] [INFO] This is an info log
[15:13:43] [ERROR] This is an error log
[15:13:43] [WARN] This is a warn log
[15:13:43] [DEBUG] This is a debug log
*/
```