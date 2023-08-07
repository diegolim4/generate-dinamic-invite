import { Router } from "express";
import { InvitedController } from "../controllers";

const router = Router();

router.post("/insert_invited", InvitedController.insertInvited);

router.get('/get_all_invited', InvitedController.getAllInvited)

router.get('/get_unique_invited/:name', InvitedController.getUniqueInvited)

router.use("/api", router);

export { router };
