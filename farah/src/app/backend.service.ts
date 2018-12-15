import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class BackendService {

  private api = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  confirmConnection() {
    const body = 0;
    console.log('confirming connection\n');
    this.http.post(this.api, body, httpOptions).subscribe(
      data => {
        if (data) {
          console.log('\nBackend Connnected');
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
