import { Request, Response } from "express";
import { db } from "../../config/database";
import { Iinvited } from "../../interface/invited.interface";
import { generateQRCodeImage } from '../../methods/generateQrCode';
import { generateImage } from '../../methods/generateImage';

const getUniqueInvited = async (req: Request, res: Response) => {
  try {
    const nameInvited = req.params.name;

    if (!nameInvited)
      return res.status(401).json({ message: "Parameters must not be empty!" });

    const data = await db.invited.findFirst({
      where: {
        name: nameInvited,
      },
    });
    
    if (!data)
      return res
        .status(400)
        .json({ success: false, message: "Not found Data!" });

        generateQRCodeImage(data.name, data.id);

        generateImage(data.id, data.name);

    return res.status(200).json({ success: true, invited: data });
  } catch (error) {
    return res.status(404).json({ success: false, message: error });
  } finally {
    await db.$disconnect();
  }
};

export { getUniqueInvited };
