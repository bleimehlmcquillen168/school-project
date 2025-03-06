const getRandomTsCode = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const randomString = `string${randomNumber}`;
  return `export class ${randomString} {
    public greet() {
      console.log('Hello, world!');
    }
  }`;
};
