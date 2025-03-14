class Student {
  fullName: string;

  constructor(public firstName: string, public middleName: string, public lastName: string) {
    this.fullName = firstName + ' ' + middleName + ' ' + lastName;
  }

  greet() {
    alert('Hello, ' + this.fullName);
  }
}
