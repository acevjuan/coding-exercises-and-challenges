function addTwo(num: number): number {
  return num + 2;
};

function getUpper(val: string) {
  return val.toUpperCase();
};

function signUpUser(name: string, email: string, pin: number, isPaid: boolean = false) {
  return 'welcome!';
}

function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const getHello = (str: string): string => `Testing, returning ${str}`

const cities = ['Bogota', 'Buenos Aires' , 'Santiago'];

cities.map((city: string): string => {
  return `I've visited ${city}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

addTwo(5);
getUpper('juan');