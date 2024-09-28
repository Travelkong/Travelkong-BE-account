import BaseModel from "~/utils/others/baseModel.util"

export interface UserModel extends BaseModel {
  id: number
  username: string
  displayName: string
  email: string
  password: string
  avatar: string
}
