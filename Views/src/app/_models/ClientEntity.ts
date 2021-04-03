import { Contact } from './Contact';
import { Address } from './Address';

export class ClientEntity {
    id: number;
    name: string;
    cnpj: string;
    responsible: string;
    comments: string;
    assured: boolean;
    clienttype: string;
    payment: string;
    address: Address;
    contact: Contact;
}