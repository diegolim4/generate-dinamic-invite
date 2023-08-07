import { Iinvited } from '../../interface/invited.interface';
import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';

async function generateQRCodeImage(name: string, id: number) {
  const setColor = {
    color: {
      dark: '#000000', 
      light: '#00000000', 
    },
  };

  let qrCode = await QRCode.toDataURL(name, setColor);

  const base64Data = qrCode.replace(/^data:image\/png;base64,/, '');
  const downloadPath = path.join(__dirname, '../../images/qrCodeImg');

  if (!fs.existsSync(downloadPath)) fs.mkdirSync(downloadPath);

  const filePath = path.join(downloadPath, `${id}.png`);

  fs.writeFileSync(filePath, base64Data, 'base64');
}

export { generateQRCodeImage };
