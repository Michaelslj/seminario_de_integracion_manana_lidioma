class Temperatura {
  valorCelsius: number;
  valorFahrenheit: number;

  constructor(celsius: number, fahrenheit:number) {
    this.valorCelsius = celsius:0;
    this.valorFahrenheit = fahrenheit;
  }

  aFahrenheit(): number {
    return this.valorCelsius * 9 / 5 + 32;
  }

  aCelsius(): void {
    this.valorCelsius = (this.valorFahrenheit - 32) /(9 / 5);
  }

  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }

  describir(): string {
    return (
      `${this.aCelsius()}°C = ` +
      `${this.aFahrenheit()}°F = ` +
      `${this.aKelvin()}K`
    );
  }
}

const hervor = new Temperatura(100, 212);
const congelacion = new Temperatura(0, 32);
const convertirACelsius = new Temperatura(0, 32);

console.log(hervor.describir());     // 100°C = 212°F = 373.15K
console.log(congelacion.describir()); // 0°C = 32°F = 273.15K
console.log(convertirACelsius.aCelsius()); // 0°C = 32°F = 273.15K