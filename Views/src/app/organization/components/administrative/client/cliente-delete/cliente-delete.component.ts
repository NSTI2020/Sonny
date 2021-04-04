import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientEntity } from 'src/app/_models/ClientEntity';
import { ClientEntityService } from 'src/app/_services/clientEntity.Service';


@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css'],
  providers: [ClientEntityService]
})

export class ClientDeleteComponent implements OnInit {
  ClientById: ClientEntity = new ClientEntity();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ClientEntity
    , public _ClientEntityService: ClientEntityService
    , private _SnackBar: MatSnackBar
  ) { }

  getAll() {
    return this._ClientEntityService.getAll().subscribe((models: ClientEntity[]) => {
      console.log(models);
    }, error => {
      console.log(error);
    }
    )
  }


  deltete(id: number) {
    //this.ClientById = this.data;
    this._ClientEntityService.deleteClient(id).subscribe((clientEntity: ClientEntity) => {
      this._SnackBar.open('Registro deletado com sucesso', '', {
        duration: 2000
      });

      this.getAll();

      console.log(clientEntity);
    }, error => {
      this._SnackBar.open('Registro não atualizado, erro: ', error, {
        duration: 2000
      });

    })

  }




  ngOnInit(): void {
  }

}
