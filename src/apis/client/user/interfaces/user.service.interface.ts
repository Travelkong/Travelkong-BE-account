import UserResponse from "../user.response"

export interface IUserService {
  findUser(id: number): Promise<UserResponse>
  updateUser(id: number): Promise<UserResponse>
}
