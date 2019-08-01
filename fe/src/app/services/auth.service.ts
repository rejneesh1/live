import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  baseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  signUp(newUser) {
    return this.http.post(this.baseUrl + "new-users", newUser);
  }
}
