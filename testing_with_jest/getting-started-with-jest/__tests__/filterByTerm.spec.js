const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const outputLink = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(outputLink);

    expect(filterByTerm(input, "LINK")).toEqual(outputLink);
  });

  test("it should filter by a search term (url)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const outputUrl = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
    ];

    expect(filterByTerm(input, "uRl")).toEqual(outputUrl);
  });

  test("it should throw an error when searchTerm is empty string", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    expect(() => filterByTerm(input, "")).toThrow("searchTerm cannot be empty"); // checks that the emptsearchTerm throws an error
  });
  test("it should throw an error when inputArr is empty array", () => {
    const input = [];

    expect(() => filterByTerm(input, "test")).toThrow(
      "inputArr cannot be empty"
    ); // checks that the inputArr throws an error
  });
});
