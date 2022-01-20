/* eslint-disable no-console */
console.log('polifill for flat');

// eslint-disable-next-line no-extend-native
Array.prototype.flat = Array.prototype.flat || function flat() {
    // implementation for older browsers
};
