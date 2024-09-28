import { Logger } from "~/utils/logger"
import { IUserService } from "./interfaces"
import { UserModel } from "./user.model"
import UserResponse from "./user.response"

export default class UserService implements IUserService {
  private readonly _logger: Logger

  constructor() {
    this._logger = new Logger()
  }

  public findUser = async (id: number): Promise<UserResponse> => {
    //TODO: Add this after adding UserRepository
  }

  public updateUser = async (id: number): Promise<UserResponse> => {
    //TODO: Add this after adding UserRepository
  }
}
