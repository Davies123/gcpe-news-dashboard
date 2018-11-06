import { Injectable, Inject  } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Entry } from '../shared/entry';
import { Post } from '../shared/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  '';
  constructor(private  httpClient:  HttpClient, @Inject('BASE_API_URL') baseApiUrl: string) {
    this.API_URL = baseApiUrl;
  }

  getEntries(): Observable<Entry[]> {
    return this.httpClient.get<Entry[]>(`${this.API_URL}/api/Posts/Latest/home/default?count=10&api-version=1.0`)
    .pipe();
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.API_URL}/api/Posts/Latest/home/default?count=10&api-version=1.0`)
    .pipe();
  }
  
}