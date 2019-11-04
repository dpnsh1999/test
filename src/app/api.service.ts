import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'YOUR_API_KEY';
  constructor(private httpClient: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

    public getUserData(){
      return this.httpClient.get(`http://172.104.42.153:3008/api/getUserData`);
    }

  public createMembershipData(data){
    console.log(data)
    return this.httpClient.post(`http://172.105.59.34/membership_controller/registration`, data);
  }

  public getMemberData(){
    return this.httpClient.get(`http://172.104.42.153:3008/api/getmemberData`);
  }

  public getFdData(){
    return this.httpClient.get(`http://172.104.42.153:3008/api/getfdData`);
  }

  public createFdData(data){
    console.log(data)
    return this.httpClient.post(`http://172.105.59.34/fixeddeposit_controller/save_fixed_deposit`, data);
  }

}
