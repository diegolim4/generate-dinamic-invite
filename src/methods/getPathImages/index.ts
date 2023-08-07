import path from 'path';

async function getPathImages() {
  
  const imagesPath = path.join(__dirname, '../../images');

  return imagesPath
}

export { getPathImages }
