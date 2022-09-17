import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserModel } from '../models/CreateUser';
import { ListResponseModel } from '../models/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpClient) { }
  createUser(user:CreateUserModel):Observable<CreateUserModel>{
    return this.httpService.post<CreateUserModel>("http://zenuykuapi.somee.com/api/Auth/registerbyadmin",user)
  }
  getAll<T>(apiurl:string):Observable<ListResponseModel<T>>{
    return this.httpService.get<ListResponseModel<T>>(apiurl)
  }
}
