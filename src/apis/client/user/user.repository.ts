import { Logger } from "~/utils/logger"
import { IUserRepository } from "./interfaces"
import { UserModel } from "./user.model"

export default class UserRepository implements IUserRepository {
  private readonly _logger: Logger

  constructor() {
    this._logger = new Logger()
  }

  public findByEmail = async (email: string): Promise<UserModel> => {
    //TODO
  }

  public currentUser = async (id: number): Promise<UserModel> => {
    //TODO
  }

  public createUser = async (user: UserModel): Promise<boolean> => {
    //TODO
  }

  public updateUser = async (user: UserModel): Promise<boolean> => {
    //TODO
  }
}
