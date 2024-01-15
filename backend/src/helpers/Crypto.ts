import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

export class Crypto {
  iv: Buffer | null = null;
  encrypted: Buffer | null = null;
  password: string = '';

  constructor(password: string = '') {
    this.iv = randomBytes(16);
    this.password = password;
  }

  async encrypt() {
    const key = (await promisify(scrypt)(this.password, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, this.iv);

    const textToEncrypt = 'Nest';
    const encryptedText = Buffer.concat([
      cipher.update(textToEncrypt),
      cipher.final(),
    ]);

    this.encrypted = encryptedText;
    return encryptedText.toString();
  }
  async decrypt() {
    const key = (await promisify(scrypt)(this.password, 'salt', 32)) as Buffer;
    const decipher = createDecipheriv('aes-256-ctr', key, this.iv);

    const decryptedText = Buffer.concat([
      decipher.update(this.encrypted),
      decipher.final(),
    ]);

    return decryptedText;
  }
}
