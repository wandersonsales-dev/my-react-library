//Button/__test__/Button.test.tsx
import "@testing-library/jest-dom";
// import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "../Button";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
