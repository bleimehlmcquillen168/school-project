class Greeter {
  greet(name: string): void {
    console.log(`Hello, ${name}!`)
  }
}

new Greeter().greet('Alice') // Outputs "Hello, Alice!"
