import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Address } from "src/app/_models/Address";
import { ClientEntity } from "src/app/_models/ClientEntity";
import { Contact } from "src/app/_models/Contact";
import { clientEntityService } from '../../../../../_services/clientEntity.Service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-client-create',
    templateUrl: './client-create.component.html',
    styleUrls: ['./client-create.component.css'],
    providers: [clientEntityService]
})

export class ClientCreateComponent implements OnInit {

    public _client: ClientEntity = new ClientEntity();
    public _address: Address = new Address();
    public _contact: Contact = new Contact();
    public _assured: boolean;
    public _IsZap: boolean = false;
    public _arrayOfTypes: string[];
    public _types: string;
  //  public mostrar: string = 'MSG AQUI';
    _clientRegisterForm: FormGroup;
    _addressRegisterForm: FormGroup;
    _contactRegisterForm: FormGroup;

    constructor(
        private _Fb: FormBuilder
        , private _Route: ActivatedRoute
        , private _CliService: clientEntityService
         , private _SnackBar: MatSnackBar
    ) { }

    RequiredValidation(fControl: FormControl) {
        return fControl.value ? null : { obg: [Validators.maxLength(10), Validators.required] };
    }

    save() {
        //Client
        this._client = Object.assign(this._client, this._clientRegisterForm.value);
        this._address = Object.assign(this._address, this._addressRegisterForm.value);
        this._contact = Object.assign(this._contact, this._contactRegisterForm.value);

        this._CliService.put(this._client).subscribe(() => {

            //Address
            this._CliService.putAddress(this._address).subscribe(() => {
            }, error => {
                console.log(error);
            });
            //Contact
            this._CliService.putContact(this._contact).subscribe(() => {
            }, error => {
                console.log(error);
            });
            this._SnackBar.open('Registro atualizado com sucesso!','',{
                duration:2000
            });
        }, error => {
            console.log(error);

            this._SnackBar.open('Registro não atualizado, erro: ', error,{
                duration:2000 
            });
        });



    }

    BtnSaveValidate(): boolean {
        if (this._clientRegisterForm.valid === true && this._addressRegisterForm.valid === true && this._contactRegisterForm.valid) {
            return true;
        }
        else {
            return false
        }
    }
    BtnSaveValidateMsg(): string{
        if(this.BtnSaveValidate()){
            return 'Salvar'
        }
        else{
            return 'Inválido!'
        }
    }



    ClientFormValidation() {
        this.PersonalFrm();
        this.AddressFrm();
        this.ContactFrm();
    }


    PersonalFrm(): FormGroup {
        return this._clientRegisterForm = this._Fb.group({
            name: ['', [Validators.required, Validators.maxLength(200)]],
            cnpj: ['', [Validators.minLength(10), Validators.maxLength(15)]],
            responsible: ['', [Validators.maxLength(200)]],
            clienttype: ['', [Validators.required]],
            assured: [''],
            payment: ['', [this.RequiredValidation]],
            comments: ['', [Validators.maxLength(700)]]
        });
    }
    AddressFrm(): FormGroup {
        return this._addressRegisterForm = this._Fb.group({
            street: ['', [Validators.required, Validators.maxLength(500)]],
            number: ['', [Validators.required, Validators.maxLength(10)]],
            neighborhood: ['', [Validators.required, Validators.maxLength(100)]],
            city: ['', [Validators.required, Validators.maxLength(100)]],
            state: ['', [Validators.required, Validators.maxLength(100)]],
            complement: ['', [Validators.maxLength(500)]]
        });
    }
    ContactFrm(): FormGroup {
        return this._contactRegisterForm = this._Fb.group({
            email: ['', [Validators.required, Validators.email]],
            cel: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(15)]],
            iszap: ['',],
            zap: ['', [Validators.minLength(9), Validators.maxLength(15)]],
            landline: ['', [Validators.maxLength(100)]],
            linkedin: ['', [Validators.maxLength(100)]],
            facebook: ['', [Validators.maxLength(100)]],
            instagram: ['', [Validators.maxLength(100)]],
            twitter: ['', [Validators.maxLength(100)]]
        });
    }



    getById() {
        const Id = this._Route.snapshot.params['id'];
        this._CliService.getById(Id).subscribe(
            (returnClient: ClientEntity) => {
                this._client = returnClient;
                this._address = returnClient.address;
                this._contact = returnClient.contact;
                console.log(returnClient.clienttype);
                console.log(returnClient.assured);
                //this._clientRegisterForm.get('clienttype').patchValue(this._client);
                this._clientRegisterForm.patchValue(this._client);
                this._addressRegisterForm.patchValue(this._address);
                this._contactRegisterForm.patchValue(this._contact);
                // console.log(this._clientRegisterForm.value);
            }, error => {
                console.log(error);
            }
        )
    }

    /*
        getByIdPromises(id: number): any {
            this._CliService.getByIdPromise(id)
                .then((returnCli: ClientEntity) => {
                    this._client = returnCli;
                }, error => {
                    //console.log(error);
                })
                .catch((param: ClientEntity) => {
                    //console.log(param);
                })
        }
    
        loadData() {
            if (this._clientRegisterForm.valid) {
                console.log(this._clientRegisterForm)
            }
    
        }
    */
    ngOnInit(): void {
        this.ClientFormValidation();
        this.getById();
        this._arrayOfTypes = new Array<string>();
        this._arrayOfTypes.push('PJ', 'PF');
    }


}







