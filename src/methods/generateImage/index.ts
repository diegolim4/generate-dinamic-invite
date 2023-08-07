import Jimp from 'jimp';
import { getPathImages } from '../getPathImages';

async function generateImage(id: number, name: string) {
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

  let pathImages = await getPathImages();

  const qrCodeImgPath = await Jimp.read(pathImages + `/qrCodeImg/${id}.png`);

  if (!qrCodeImgPath) return false;

  const qrCode = await Jimp.read(qrCodeImgPath);

  qrCode.resize(650, 650);
  Jimp.read(pathImages + '/bgImg/bgReady.png').then((image) => {
    return image
      .composite(qrCode, 122, 250, {
        mode: Jimp.BLEND_SOURCE_OVER,
        opacityDest: 1,
        opacitySource: 1,
      })
      .print(font, 230, 150, 'Texto 1')
      .print(font, 390, 950, 'Texto 2')
      .print(font, 105, 1500, 'Texto 3')      
      .write(pathImages + `/inviteReady/Convite Nº${id}-${name}.jpeg`);
  });
}

export { generateImage };
