import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ClientEntity } from 'src/app/_models/ClientEntity';
import { clientEntityService } from 'src/app/_services/clientEntity.Service';
import { ClientCreateComponent } from '../client-create/client-create.component';
import { ClientEditComponent } from '../client-edit/client-edit.component';
import { MatDialog } from '@angular/material/dialog'



@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  providers: [clientEntityService]
})


export class ClientListComponent implements OnDestroy {

  _clientEntity: ClientEntity[] = new Array<ClientEntity>();;
  _client: ClientEntity = new ClientEntity();
  _client2Test: ClientEntity = new ClientEntity();
  registerform: FormGroup;
  _routeQueryParams$: Subscription;

  constructor(
    private _CliService: clientEntityService
    , private _ActivatedRoute: ActivatedRoute
    , private _Dialog: MatDialog
    , private _Router: Router) {

    this._routeQueryParams$ = _ActivatedRoute.queryParams.subscribe(params => {
      if (params['dialog']) {
        this.openDialogEdit();
      }
    });


  }
  ngOnDestroy(): void {
    this._routeQueryParams$.unsubscribe();
  }

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

  openDialog() {
    const dialogRef = this._Dialog.open(ClientEditComponent, {

    });
    dialogRef.disableClose = true;
    dialogRef.componentInstance
  }

  openDialogEdit() {
    const dialogRef = this._Dialog.open(ClientEditComponent, {
      width: '450px',
      data: { CliEntity: this._client2Test}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this._Router.navigate(['id'], { relativeTo: this._ActivatedRoute });
    });


  }




  GetAll(): void {
    this._CliService.getAll().subscribe(
      (resultGetCli: ClientEntity[]) => {
        this._clientEntity = resultGetCli;
        this.FilteredArray = resultGetCli;

        // console.log(resultGetCli);
      }, error => {
        //  console.log(error);
      }
    )
  }





  ngOnInit(): void {
    this.GetAll();
  }


}