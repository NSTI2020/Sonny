import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Address } from "../_models/Address";
import { Observable } from "rxjs";
import { ClientEntity } from "../_models/ClientEntity";
import { Contact } from "../_models/Contact";

@Injectable({
  providedIn: 'root'
})


export class ClientEntityService {
  constructor(private _httpClient: HttpClient) { }
  ApiUrl: string = 'http://localhost:5000/api/clients';
  ApiUrlById: string = 'http://localhost:5000/api/clients/getbyid';
  ApiUrlPut: string = 'http://localhost:5000/api/clients/put';
  AddressPut: string = 'http://localhost:5000/api/clients/addr';
  ContactPut: string = 'http://localhost:5000/api/clients/cnt';
  ClientEntityDelete: string = 'http://localhost:5000/api/clients/delete';
  

  post(model: ClientEntity) {
    return this._httpClient.post(this.ApiUrl, model);
  }

  getAll(): Observable<ClientEntity[]> {
    return this._httpClient.get<ClientEntity[]>(this.ApiUrl);
  }

  getById(id: number): Observable<ClientEntity> {
    return this._httpClient.get<ClientEntity>(`${this.ApiUrlById}/${id}`);
  }

  getByIdPromise(id: number): Promise<ClientEntity> {
    return this._httpClient.get<ClientEntity>(`${this.ApiUrlById}/${id}`).toPromise()
      .then((returnCli: ClientEntity) => returnCli);
  }

  put(model: ClientEntity) {
    return this._httpClient.put<ClientEntity>(`${this.ApiUrlPut}/${model.id}`, model);
  }

  putAddress(model: Address) {
    return this._httpClient.put<Address>(`${this.AddressPut}/${model.id}`, model);
  }

  putContact(model: Contact) {
    return this._httpClient.put<Contact>(`${this.ContactPut}/${model.id}`, model);
  }

deleteClient(id: number){
  return this._httpClient.delete<ClientEntity>(`${this.ClientEntityDelete}/${id}`);
}

}


