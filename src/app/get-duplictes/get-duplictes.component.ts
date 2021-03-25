import { Component, OnInit } from '@angular/core';
import { DummyData, GetMockDataService } from '../services/get-mock-data.service';

@Component({
  selector: 'app-get-duplictes',
  templateUrl: './get-duplictes.component.html',
  styleUrls: ['./get-duplictes.component.scss']
})
export class GetDuplictesComponent implements OnInit {

  data: DummyData[];
  constructor(private mockdataServ: GetMockDataService) { }
  ngOnInit(): void {
    this.mockdataServ.getData().subscribe((res: any[]) => {
      res = res.flat(); // [......]
      const all = new Map();
      const dup = new Map();
      res.forEach(obj => {
        if (all.has(obj.id)) {
          dup.set(obj.id, obj)
        } else {
          all.set(obj.id, obj)
        }
      })
      this.data = [...dup.values()]
    })
  }
}

