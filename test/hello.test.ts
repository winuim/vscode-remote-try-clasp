import assert = require("assert");
import { testGreeter } from "../src/hello";

describe("hello.ts test", () => {
    it("testGreeter", () => {
        assert(testGreeter() === "Hello, Grant!");
    });
});
