import Complex from "../src/Complex";
import { expect } from 'chai';

xdescribe("Complex numbers", () => {

  it("Should multiply using real number", () => {
    let first = new Complex(12, 3);
    let second  = new Complex(2, 0);

    let result = first.multiply(second);
    expect(result).to.be.deep.equal(new Complex(24, 6));
  }),

  it("Should multiply using imaginary number", () => {
    let first = new Complex(12, 3);
    let second  = new Complex(0, 2);

    let result = first.multiply(second);
    expect(result).to.be.deep.equal(new Complex(-6, 24));
  }),

  it("Should add using real number", () => {
    let first = new Complex(12, 3);
    let second  = new Complex(2, 0);

    let result = first.add(second);
    expect(result).to.be.deep.equal(new Complex(14, 3));
  }),

  it("Should add using imaginary number", () => {
    let first = new Complex(12, 3);
    let second  = new Complex(0, 2);

    let result = first.add(second);
    expect(result).to.be.deep.equal(new Complex(12, 5));
  }),

  it("Should generate a string with real and imaginary parts", () => {
    let first = new Complex(12, 3);

    let result = first + "";
    expect(result).to.be.deep.equal("(12,3)");
  })

});
