import { expect, test } from "@jest/globals";
import UI, { IConsoleInteractor } from "../ui";
import assert from "node:assert";

import * as readline from "node:readline/promises";

test("main loop", async () => {
  /* TODO
    Given the following inputs:
    - hello
    - oto
    - quit
 
    Check that the following messages are printed:
    - olleh
    - oto
    - That was a palindrome!
   */

  class MockConsoleInteractor implements IConsoleInteractor {
    input: string[] = ["hello", "oto", "quit"];
    output: string[] = [];

    constructor() {}

    async readInput(): Promise<string> {
      return this.input.shift() || "";
    }

    close() {
      return null;
    }

    printMessage(message: string) {
      this.output.push(message);
    }
  }

  const ui = new UI(new MockConsoleInteractor());

  await ui.mainLoop();

  expect((ui.interactor as MockConsoleInteractor).output).toEqual([
    "olleh",
    "oto",
    "That was a palindrome!",
  ]);
});