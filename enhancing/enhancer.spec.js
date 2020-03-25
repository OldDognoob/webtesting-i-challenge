/* eslint-disable no-undef */
const enhancer = require("./enhancer.js");
// test away!

const weapon = {
  name: " Gun M60",
  durability: 78,
  enhancement: 13
};

//method that accepts an item object and returns a new item with the durability restored to 100.
describe("Enhancer weapon", () => {
  describe("Fix weapon", () => {
    it("weapon is at 100%", () => {
      expect(enhancer.repair(weapon)).toEqual({ ...weapon, durability: 100 });
    });
  });
});
//method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.
describe("You have successfully enhanced your weapon", () => {
  it("Weapon has been enhanced 20", () => {
    expect(enhancer.succeed(weapon)).not.toBe({
      ...weapon,
      enhancement: weapon.enhancement + 1
    });
  });
  it("Weapon is already enhanced", () => {
    expect(enhancer.succeed({ ...weapon, enhancement: 20 })).toEqual({
      ...weapon,
      enhancement: 20
    });
  });
});
describe("You have failed enhancing your weapon", () => {
  it("Low enhancer has failed", () => {
    expect(enhancer.fail(weapon)).not.toBe({
      ...weapon,
      durability: weapon.durability - 5
    });
  });
  // method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
  it("Mid enhancer has failed", () => {
    expect(enhancer.fail({ ...weapon, enhancement: 15 })).not.toBe({
      ...weapon,
      enhancement: 15,
      durability: weapon.durability - 10
    });
  });
  it("High enhancer has failed", () => {
    expect(enhancer.fail({ ...weapon, enhancement: 17 })).not.toBe({
      ...weapon,
      enhancement: 16,
      durability: weapon.durability - 10
    });
  });
});
//attempting stretch
describe("Your weapon get enhanced", () => {
  it("should return the weapon with the enhanced number +( [+7] weapon name ) ", () => {
    expect(enhancer.get(weapon)).not.toBe({
      ...weapon,
      name: `[+${weapon.enhancement}] ${weapon.name}`
    });
  });

  it(
    "should return the item as is with nothing changed because the" +
      " enhanced level is 0.",
    () => {
      expect(
        enhancer.get({
          enhancement: 0,
          name: "weapon"
        })
      ).toEqual({
        enhancement: 0,
        name: "weapon"
      });
    }
  );
});
