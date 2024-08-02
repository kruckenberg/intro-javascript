import { expect } from "chai";
import { smallestPerfectNumber, name } from "./source.js";

it("correctly stores smallest perfect number", function () {
  expect(smallestPerfectNumber).to.equal(6);
});
it("`name` stores a string", function () {
  expect(name).to.be.a("string");
});
