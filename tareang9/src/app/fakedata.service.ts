import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor(private http: HttpClient) { }

  getApiInfo() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
      console.log(data);
  });
}

}
