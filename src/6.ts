
import { createHash } from 'crypto';

const hash = createHash('md5');
hash.update('The quick brown fox jumps over the lazy dog');
console.log(hash.digest('hex'));