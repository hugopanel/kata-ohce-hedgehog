import { expect, jest, test } from "@jest/globals"

import Greeter from "../greeter"
import {SystemClock} from "../greeter"
import assert from 'node:assert'

test('should say "good night" at midnight', () => {
  class fakeClock implements SystemClock {
    currentHour(): number {
      return 0;
    }
  }
  const greeter = new Greeter( new fakeClock() );
  assert(greeter.greet() === 'Good night');
})

test('should never return undefined', () => {
  class fakeClock implements SystemClock {
    currentHour(): number {
      return 25;
    }
  }
  
  const greeter = new Greeter( new fakeClock() );
  assert(greeter.greet() != undefined);
})