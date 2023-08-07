import { insertInvited } from "./invited/insertController";
import { getAllInvited } from "./invited/getController";
import { getUniqueInvited } from "./invited/getOneController";

const InvitedController = {
  insertInvited,
  getAllInvited,
  getUniqueInvited,
};

export { InvitedController };
