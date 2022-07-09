import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentManagerService {

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:5001";

  uploadFIles(key,formData){
    const apiUrl=[this.baseUrl,"upload","data"].join("/");
    const keyUrl=apiUrl+"?key="+key;
    return this.http.post(keyUrl,formData,{reportProgress:true,observe:"events"})
  }
}
