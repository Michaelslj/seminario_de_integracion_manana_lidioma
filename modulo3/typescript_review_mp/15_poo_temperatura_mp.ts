class ControlTemperaturaBodega {
  valorCelsius: number;
  valorFahrenheit: number;

  constructor(celsius: number, fahrenheit: number) {
    this.valorCelsius = celsius;
    this.valorFahrenheit = fahrenheit;
  }

  aFahrenheit(): number {
    return (this.valorCelsius * 9) / 5 + 32;
  }

  aCelsius(): void {
    this.valorCelsius = (this.valorFahrenheit - 32) / (9 / 5);
  }

  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }

  describir(): string {
    return (
      `${this.valorCelsius}°C = ` +
      `${this.aFahrenheit()}°F = ` +
      `${this.aKelvin()}K`
    );
  }
}

const temperaturaRefrigeracionLactecos = new ControlTemperaturaBodega(4, 39.2);
const temperaturaCongelacionYogurt = new ControlTemperaturaBodega(-18, -0.4);
const calibrarSensorBodega = new ControlTemperaturaBodega(0, 32);

console.log(temperaturaRefrigeracionLactecos.describir()); // 4°C = 39.2°F = 277.15K
console.log(temperaturaCongelacionYogurt.describir());     // -18°C = -0.4°F = 255.15K
calibrarSensorBodega.aCelsius();
console.log(calibrarSensorBodega.describir());             // 0°C = 32°F = 273.15K