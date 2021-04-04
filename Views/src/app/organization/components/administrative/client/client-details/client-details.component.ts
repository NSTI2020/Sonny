import { Component, Inject, NgModule, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ClientEntity } from "src/app/_models/ClientEntity";
import { ClientEntityService } from "src/app/_services/clientEntity.Service";


@Component({
    templateUrl: './client-details.component.html',
    selector: 'app-client-details',
    styleUrls: ['./client-details.component.css']
})



export class ClientDetailsComponent implements OnInit {
    
    _clientEntity: ClientEntity[] = new Array<ClientEntity>();;
    _clientById: ClientEntity = new ClientEntity();
    _client2Test: ClientEntity = new ClientEntity();
    _Id: number;
    
    
    constructor(
        private _CliService: ClientEntityService
        , private _Dialog: MatDialog
        , private _Router: Router
        , public _DialogRef: MatDialogRef<ClientDetailsComponent>
        ,@Inject(MAT_DIALOG_DATA) public data: ClientEntity
        ) { }
    
    
    
    
  //Search
  _stringFiltering: string;
  FilteredArray: ClientEntity[] = new Array<ClientEntity>();

  get FilteringString() {
    return this._stringFiltering;
  }


  set FilteringString(value: string) {
    this._stringFiltering = value;

    this.FilteredArray
      = this._stringFiltering
        ? this.actionFilter(this.FilteringString)
        : this.FilteredArray;
  }

  actionFilter(_filteredBy: string): ClientEntity[] {
    _filteredBy = _filteredBy.toLocaleLowerCase();
    return this._clientEntity.filter(_client =>
      _client.name.toLocaleLowerCase().indexOf(_filteredBy) !== -1);
  }

    
    
    ngOnInit(): void {
       
    }
}
