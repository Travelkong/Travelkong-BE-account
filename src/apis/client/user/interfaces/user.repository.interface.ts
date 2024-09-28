import { UserModel } from "../user.model"

export interface IUserRepository {
  findByEmail(email: string): Promise<UserModel>
  currentUser(id: number): Promise<UserModel>
  createUser(user: UserModel): Promise<boolean>
  updateUser(user: UserModel): Promise<boolean>
}
