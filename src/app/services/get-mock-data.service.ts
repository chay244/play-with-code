import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';

export interface DummyData {
  postId: string;
  id: number;
  name: string;
  email: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class GetMockDataService {

  constructor(private http: HttpClient) { }

  getData() { // returns [[...],[...]]
    const s1 = this.http.get('../../assets/data1.json')
    const s2 = this.http.get('../../assets/data2.json')
    return combineLatest([s1, s2])
  }


}
