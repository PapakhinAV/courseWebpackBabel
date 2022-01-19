export const createLogger = (name) => {
    const logs = [];

    return {
        log(message) {
            logs.push(`log_-_${name}_-_${message}`);
        },
        error(errorText) {
            logs.push(`error_-_${name}_-_${errorText}`);
        },
        getLogs() {
            return logs;
        },
    };
};

export const a = null;
