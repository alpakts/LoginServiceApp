import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserModel } from '../models/CreateUser';
import { ListResponseModel } from '../models/list-response-model';
import { RegisterModel } from '../models/register-model';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpClient) { }
  createUser(user:CreateUserModel):Observable<CreateUserModel>{
    return this.httpService.post<CreateUserModel>("https://zenuykuapi.somee.com/api/Auth/registerbyadmin",user)
  }
  getAll<T>(apiurl:string):Observable<ListResponseModel<T>>{
    return this.httpService.get<ListResponseModel<T>>(apiurl)
  }
  Delete<T>(apiurl,id:number):Observable<ResponseModel>{
    return  this.httpService.post<ResponseModel>(`${apiurl}?userId=${id}`,null)
  }
  UpdateUser(user:CreateUserModel):Observable<CreateUserModel>{
    return this.httpService.post<CreateUserModel>("https://zenuykuapi.somee.com/api/Users/update",user)
  }
  Register(user:RegisterModel):Observable<TokenModel>{
    return this.httpService.post<TokenModel>("https://zenuykuapi.somee.com/api/Auth/register",user)
  }
}
