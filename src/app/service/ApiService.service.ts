import { Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IPost } from "./IPost";
@Injectable({providedIn: 'root'})
export class ApiService{
    constructor(private http: HttpClient) {
    }
  getResponse() {
    return this.http.get<{[results: string]: IPost}>('https://api.fastforex.io/fetch-multi?from=UAH&to=EUR,GBP,USD,PLN,UAH&api_key=94182c3bbe-3a4f72674a-ren2bp')
  }
}