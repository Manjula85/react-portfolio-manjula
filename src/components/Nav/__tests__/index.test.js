import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

describe("Nav component", () => {
  //baseline test
  it("renders", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockCurrentCategory}
        currentCategory={mockSetCurrentCategory}
      />
    );
  });

  //snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockCurrentCategory}
        currentCategory={mockSetCurrentCategory}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("links are visible", () => {
  it("insert text into the links", () => {
    const { getByTestId } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockCurrentCategory}
        currentCategory={mockSetCurrentCategory}
      />
    );
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
