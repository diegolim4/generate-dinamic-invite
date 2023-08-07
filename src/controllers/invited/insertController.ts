import { Request, Response } from 'express';
import { db } from '../../config/database';
import { Iinvited } from '../../interface/invited.interface';

const insertInvited = async (req: Request, res: Response) => {
  try {
    let data = req.body;

    if (!data[0].name)
      return res.status(401).json({ message: 'Fild name must not be empty!' });

    const createPromises = data.map((i: Iinvited) =>
      db.invited.createMany({ data: i, skipDuplicates: true })
    );

    await Promise.all(createPromises);
    return res.status(201).json({ success: true, message: 'Insert success!' });
  } catch (error) {
    return res.status(404).json({ success: false, message: `${error}` });
  } finally {
    await db.$disconnect();
  }
};

export { insertInvited };
