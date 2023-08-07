import { Request, Response } from 'express';
import { db } from '../../config/database';
import { generateQRCodeImage } from '../../methods/generateQrCode';
import { generateImage } from '../../methods/generateImage';

const getAllInvited = async (req: Request, res: Response) => {
  try {
    const data = await db.invited.findMany();

    data.forEach((d) => {
      generateQRCodeImage(d.name, d.id);

      generateImage(d.id, d.name);
    });

    return res.status(200).json({ success: true, message: 'Success in generating invitations!' });
  } catch (error) {
    return res.status(404).json({ success: false, message: `${error}` });
  } finally {
    await db.$disconnect();
  }
};

export { getAllInvited };
