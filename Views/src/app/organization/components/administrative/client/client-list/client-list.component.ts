import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ClientEntity } from 'src/app/_models/ClientEntity';
import { ClientEntityService } from 'src/app/_services/clientEntity.Service';
import { ClientDeleteComponent } from '../cliente-delete/cliente-delete.component';
import { ClientEditComponent } from '../client-edit/client-edit.component';
import { ClientCreateComponent } from '../client-create/client-create.component';
import { MatDialog } from '@angular/material/dialog'
import { ClientDetailsComponent } from '../client-details/client-details.component';



@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  providers: [ClientEntityService]
})


export class ClientListComponent implements OnInit {

  _clientEntity: ClientEntity[] = new Array<ClientEntity>();;
  _clientById: ClientEntity = new ClientEntity();
  _client2Test: ClientEntity = new ClientEntity();
  _showHideNav2: boolean = true;
  _Id: number;




  constructor(
    private _CliService: ClientEntityService
    , private _ActivatedRoute: ActivatedRoute
    , private _Dialog: MatDialog
    , private _Router: Router) { }


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


  Edit(_Id: number) {
    //get id and sending by template html
    this._clientById = this._clientEntity.find(_id => _id.id == _Id);
    const dialogRef = this._Dialog.open(ClientEditComponent, {
      width: '450px',
      data: this._clientById
    });
    //disable closing window when clicking outside screen.(click)="openDialogEdit(client.id)"
    dialogRef.disableClose = true;
  }

  delete(_Id: number) {
    //get id and sending by template html
    this._clientById = this._clientEntity.find(_id => _id.id == _Id);
    const dialogRef = this._Dialog.open(ClientDeleteComponent, {
      width: '450px',
      data: this._clientById
    });
    dialogRef.disableClose = true;
  }

  newRegister() {
    //get id and sending by template html
    const dialogRef = this._Dialog.open(ClientCreateComponent, {
      width: '350px',
      height: '560px'

    });
    dialogRef.disableClose = true;
    //dialogRef.afterClosed.caller(this.GetAll())
  }


  details(id: number) {
    this._clientById = this._clientEntity.find(_id => _id.id == id);
    const dialogRef = this._Dialog.open(ClientDetailsComponent, {
      data: this._clientById
    });
    dialogRef.disableClose = true;
  }

  tec() {

    if (this._showHideNav2) {
      this._showHideNav2 = false;
    }
    else{
      this._showHideNav2 = true;
    }



  }

  GetAll(): void {
    this._CliService.getAll().subscribe(
      (resultGetCli: ClientEntity[]) => {
        this._clientEntity = resultGetCli;
        this.FilteredArray = resultGetCli;


      }, error => {
        //  //console.log(error);
      }
    )
  }





  ngOnInit(): void {
    this.GetAll();


  }


}