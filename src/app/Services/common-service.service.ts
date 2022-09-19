import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginmodel';
import { SingleResponseModel } from '../models/single-response-model';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private httpClient:HttpClient ) { }
  login(loginModel:LoginModel,apiUrl:string):Observable<SingleResponseModel<TokenModel>>{
    
    return this.httpClient.post<SingleResponseModel<TokenModel>>(apiUrl,loginModel)
  }
}
