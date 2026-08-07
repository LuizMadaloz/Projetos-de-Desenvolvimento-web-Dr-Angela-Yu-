/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { input } from '@inquirer/prompts';
import qr  from  'qr-image';
import fs from 'fs';

let gerador = await input({ message: 'Qual o link para gerar o qr-code:  '} );

let qr_svg = qr.image('https://' + gerador, { type: 'png' });
qr_svg.pipe(fs.createWriteStream('meu_qrcode.png'));
console.log('QR Code gerado e salvo como meu_qrcode.png!');