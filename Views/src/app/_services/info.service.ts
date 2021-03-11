import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NetworkInfo } from 'src/app/_entities/info/networkInfo';


@Injectable({
  providedIn: 'root'
})
export class InfoService {
  baseUrl: string = 'http://localhost:5000/api/techinfo';


  constructor(private http: HttpClient) { }


  getNetworkInfo(): Observable<NetworkInfo> {

    return this.http.get<NetworkInfo>(this.baseUrl);

  }





}
