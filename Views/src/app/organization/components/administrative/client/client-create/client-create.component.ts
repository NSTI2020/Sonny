import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Address } from "src/app/_models/Address";
import { ClientEntity } from "src/app/_models/ClientEntity";
import { Contact } from "src/app/_models/Contact";
import { ClientEntityService } from '../../../../../_services/clientEntity.Service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-client-create',
    templateUrl: './client-create.component.html',
    styleUrls: ['./client-create.component.css'],
    providers: [ClientEntityService]
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
    _shortRegisterForm: FormGroup;
    //_addressRegisterForm: FormGroup;
    // _contactRegisterForm: FormGroup;

    constructor(
        private _Fb: FormBuilder
        , private _Route: ActivatedRoute
        , private _CliService: ClientEntityService
        , private _SnackBar: MatSnackBar
    ) { }

    RequiredValidation(fControl: FormControl) {
        return fControl.value ? null : { obg: [Validators.maxLength(10), Validators.required] };
    }

    save() {
        //Client
        this._client = Object.assign(this._client, this._shortRegisterForm.value);
        // this._address = Object.assign(this._address, this._addressRegisterForm.value);
        // this._contact = Object.assign(this._contact, this._contactRegisterForm.value);

        this._CliService.post(this._client).subscribe(() => {
            this._SnackBar.open('Registro realizado, Sucesso: ', '', {
                duration: 2000
            });

            /*
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
            });*/
        }, error => {
            console.log(error);
            this._SnackBar.open('Erro registro não removido. erro: ', error, {
                duration: 2000
            });
        });



    }

    BtnSaveValidate(): boolean {
        if (this._shortRegisterForm.valid === true) {
            //&& this._addressRegisterForm.valid === true && this._contactRegisterForm.valid
            return true;
        }
        else {
            return false
        }
    }
    BtnSaveValidateMsg(): string {
        if (this.BtnSaveValidate()) {
            return 'Salvar'
        }
        else {
            return 'Inválido!'
        }
    }



    ClientFormValidation() {
        this.PersonalFrm();
        // this.AddressFrm();
       // this.ContactFrm();
    }


    PersonalFrm() {
        return this._clientRegisterForm = this._Fb.group({
            name: ['', [Validators.required, Validators.maxLength(200)]],
            cnpj: ['', [Validators.minLength(10), Validators.maxLength(15)]],
            responsible: ['', [Validators.maxLength(200)]],
            clienttype: ['', [Validators.required]],
            assured: [''],
            payment: ['', [this.RequiredValidation]],
            comments: ['', [Validators.maxLength(700)]],

            addresses: this._Fb.group({
                street: ['', [Validators.required, Validators.maxLength(500)]],
                number: ['', [Validators.required, Validators.maxLength(10)]],
                neighborhood: ['', [Validators.required, Validators.maxLength(100)]],
                city: ['', [Validators.required, Validators.maxLength(100)]],
                state: ['', [Validators.required, Validators.maxLength(100)]],
                complement: ['', [Validators.maxLength(500)]],
            }),

            contacts: this._Fb.group({
                email: ['', [Validators.required, Validators.email]],
                cel: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(15)]],
                iszap: ['',],
                zap: ['', [Validators.minLength(9), Validators.maxLength(15)]],
                landline: ['', [Validators.maxLength(100)]],
                linkedin: ['', [Validators.maxLength(100)]],
                facebook: ['', [Validators.maxLength(100)]],
                instagram: ['', [Validators.maxLength(100)]],
                twitter: ['', [Validators.maxLength(100)]]
            })

        });
    }
    AddressFrm(): FormGroup {
        return this._Fb.group({
            street: ['', [Validators.required, Validators.maxLength(500)]],
            number: ['', [Validators.required, Validators.maxLength(10)]],
            neighborhood: ['', [Validators.required, Validators.maxLength(100)]],
            city: ['', [Validators.required, Validators.maxLength(100)]],
            state: ['', [Validators.required, Validators.maxLength(100)]],
            complement: ['', [Validators.maxLength(500)]]
        });
    }
    ContactFrm(): FormGroup {
        return this._Fb.group({
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

    ShortForm() {
        return this._shortRegisterForm = this._Fb.group({
            name: ['', [Validators.required, Validators.maxLength(200)]],
            cnpj: ['', [Validators.minLength(10), Validators.maxLength(15)]],
            contact: this._Fb.group({
                email: ['', [Validators.required, Validators.email]],
                cel: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(15)]],
                address: this._Fb.group({
                    neighborhood: ['', [Validators.required, Validators.maxLength(100)]],
                    street: ['', [Validators.required, Validators.maxLength(500)]],
                })
            })
        })
    }

    getById() {
        const Id = this._Route.snapshot.params['id'];
        this._CliService.getById(Id).subscribe(
            (returnClient: ClientEntity) => {
                this._client = returnClient;
                //  this._address = returnClient.address;
                //  this._contact = returnClient.contact;


                this._shortRegisterForm.patchValue(this._client);
                // this._addressRegisterForm.patchValue(this._address);
                // this._contactRegisterForm.patchValue(this._contact);

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
        // this.ClientFormValidation();
     //   this.PersonalFrm();
        this.ShortForm();
        //this.getById();
        this._arrayOfTypes = new Array<string>();
        this._arrayOfTypes.push('PJ', 'PF');
    }


}







