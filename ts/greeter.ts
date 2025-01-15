export interface ISystemClock {
  currentHour(): number;
}

export class SystemClock implements ISystemClock {
  currentHour() {
    const date = new Date();
    return date.getHours();
  }
}

export default class Greeter {
  clock: SystemClock;

  constructor(systemClock: ISystemClock) {
    this.clock = systemClock;
  }

  greet() {
    const currentHour = this.clock.currentHour()
    if (currentHour >= 6 && currentHour < 12) {
      return 'Good morning'
    }
    if (currentHour >= 12 && currentHour <= 19) {
      return 'Good afternoon'
    }
    if (currentHour >= 20 || currentHour < 6) {
      return 'Good night'
    }
  }
}

