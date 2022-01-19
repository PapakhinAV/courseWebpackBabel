import { createLogger } from '../logger';

it('should return stored logs', () => {
    const logger = createLogger('user logger');
    expect(logger.getLogs()).toEqual([]);
});

it('should save log message', () => {
    const logger = createLogger('user logger');
    logger.log('new test log');

    expect(logger.getLogs()).toEqual(['log_-_user logger_-_new test log']);
});

it('should save error message', () => {
    const logger = createLogger('user logger');
    logger.error('new test error');

    expect(logger.getLogs()).toEqual(['error_-_user logger_-_new test error']);
});
