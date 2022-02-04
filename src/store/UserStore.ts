import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";

export default class UserStore {
  user = {} as IUser;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      // localStorage.setItem("accessToken", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  async registration(email: string, password: string) {
    try {
      const response = await AuthService.registration(email, password);
      // localStorage.setItem("accessToken", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  // async refresh() {
  //   try {
  //     const response = await AuthService.refresh();
  //     // localStorage.setItem("accessToken", response.data.accessToken);
  //     this.setAuth(true);
  //     this.setUser(response.data.user);
  //   } catch (e: any) {
  //     console.log(e.response?.data?.message);
  //   }
  // }
}
