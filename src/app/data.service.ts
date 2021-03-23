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
  
}