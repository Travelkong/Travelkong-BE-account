import { BaseResponse } from "~/utils/others"
import { UserModel } from "./user.model"

export default interface UserResponse extends BaseResponse {
  response: UserModel
}
