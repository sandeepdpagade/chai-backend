// generateSecret.js
import crypto from 'crypto'; // Use import instead of require
console.log(crypto.randomBytes(64).toString('hex'));
