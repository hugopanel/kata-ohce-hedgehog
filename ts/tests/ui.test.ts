import { expect, test } from "@jest/globals";
import UI from "../ui";
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

  class MockConsoleInteractor {
    reader: readline.Interface;
    input: string[] = ["hello", "oto", "quit"];
    output: string[] = [];

    constructor() {
      this.reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
    }

    async readInput(): Promise<string> {
      return this.input.shift() || "";
    }

    close() {
      this.reader.close();
    }

    printMessage(message: string) {
      this.output.push(message);
    }
  }

  const ui = new UI();
  ui.interactor = new MockConsoleInteractor();

  await ui.mainLoop();

  expect((ui.interactor as MockConsoleInteractor).output).toEqual([
    "olleh",
    "oto",
    "That was a palindrome!",
  ]);
});