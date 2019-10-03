export interface IContact {
    contId: number,
    firstName: string,
    lastName: string,
    gender: string,
    dob: string,
    addr1: string,
    city: string,
    state: string,
    zip: string,
    homePhone: string,
    mobilePhone: string,
    email: string, 
    sessidcreate: number,
    createdatetime: string,
    sessidmodify: number,
    modifydatetime: string,
    fundraising: boolean
}

export class Contact implements IContact {
    contId: number;
    firstName: string;
    lastName: string;
    gender: string;
    dob: string;
    addr1: string;
    city: string;
    state: string;
    zip: string;
    homePhone: string;
    mobilePhone: string;
    email: string;
    sessidcreate: number;
    createdatetime: string;
    sessidmodify: number;
    modifydatetime: string;
    fundraising: boolean
}
