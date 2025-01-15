import { test, expect, jest } from "@jest/globals"
import assert from 'node:assert'
import Greeter from "../greeter"
import {SystemClock} from "../greeter"

test('should say "good night" at midnight', () => {

  const systemClock = new SystemClock() as jest.Mocked<SystemClock>;
  systemClock.currentHour = jest.fn<() => number>().mockReturnValue(0);
  const greeter = new Greeter();
  greeter.clock = systemClock;
  assert(greeter.greet() === 'Good night');
})

test('should never return undefined', () => {
  const systemClock = new SystemClock() as jest.Mocked<SystemClock>;
  systemClock.currentHour = jest.fn<() => number>().mockReturnValue(25);
  const greeter = new Greeter();
  greeter.clock = systemClock;
  assert(greeter.greet() != undefined);
})
