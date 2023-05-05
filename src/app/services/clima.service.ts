import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  key = '87cbbccb301be6fe7537dd769b1b64a4'
  url = 'https://api.openweathermap.org/data/2.5/weather?&appid='

  constructor(private http: HttpClient) {
  }

  getClima(ciudad: string): Observable<any> {
    const URL = this.url + this.key + '&q=' + ciudad
    return this.http.get(URL)
  }
}
