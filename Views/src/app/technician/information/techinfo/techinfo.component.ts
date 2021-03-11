import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { InfoService } from 'src/app/_services/info.service';
import { NetworkInfo } from 'src/app/_entities/info/networkInfo';

@Component({
  selector: 'app-techinfo',
  templateUrl: './techinfo.component.html',
  styleUrls: ['./techinfo.component.css']
})
export class TechinfoComponent implements OnInit {

  constructor(private infoServ: InfoService) { }

  NetInfo: NetworkInfo;



  getNetworkInfo() {

    return this.infoServ.getNetworkInfo().subscribe((
      _netInfo: NetworkInfo) => {
      this.NetInfo = _netInfo;
      console.log(_netInfo)
    }),
      error => {
        console.log(error);
      }

  }


  ngOnInit(): void {
    this.getNetworkInfo();
  }

}
