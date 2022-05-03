import axios from "axios";
import { estados } from "../metadata/estados";

beforeAll(() => {
  console.log("teste para todos");
});

beforeEach(() => {
  console.log("teste cada teste");
});

describe("Testes", () => {
  it("should sum 2 + 2 equals 4", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("Estados", () => {
  it("should have 27 states", () => {
    expect(estados.length).toBe(27);
  });
});

describe("Usuários", () => {
  it("should return user Leanne Graham", async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users/1").then(resp => { return resp.data; }).catch((err) => console.log(err));
    expect(result.name).toEqual("Leanne Graham");
  });
});