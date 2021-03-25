import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient){}

  get(){

    let url="https://jsonplaceholder.typicode.com/posts"
    return this.http.get(url);
  }

  checkusernameandpassword(uname: string, pwd : string)
  {
    if(uname == "admin" && pwd =="admin123"){
      localStorage.setItem('username',"admin");
      return true;
    } else{
       return false;
      }
  }
  
}
