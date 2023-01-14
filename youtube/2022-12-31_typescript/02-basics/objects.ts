let user = {
  name: 'Juan',
  email: 'test@test.com',
  isActive: true
};

function create(name: string, isPaid: boolean) {
  
}

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: boolean;
};

function createUsr(user: User) {

};

let myUser: User = {
  _id: '17717',
  name: 'h',
  email: 'jm@ag.com',
  isActive: true
};

type creditCardName = { name: string }

type creditCardNumber = { number: string }

type creditCardDetails = creditCardName & creditCardNumber;

export {}