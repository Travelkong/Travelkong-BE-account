import express, { Router } from "express"
import UserService from "./user.service"

const router: Router = Router()
const userService = new UserService()
