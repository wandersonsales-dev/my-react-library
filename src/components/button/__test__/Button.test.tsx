//Button/__test__/Button.test.tsx
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Button from "../Button";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
