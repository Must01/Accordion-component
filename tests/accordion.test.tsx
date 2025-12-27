import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Accordion from "../src/components/Accordion";
import "@testing-library/jest-dom";

describe("Accordion Component", () => {
  it("renders all questions from data", () => {
    render(<Accordion />);
    expect(
      screen.getByText(/What are accordion components\?/i)
    ).toBeInTheDocument();
  });

  it("starts with answers hidden", () => {
    render(<Accordion />);
    // Checking that the specific answer text is not visible
    const answer = screen.queryByText(
      /Accordion components are user interface elements/i
    );
    expect(answer).not.toBeInTheDocument();
  });

  it("opens an answer when the question is clicked", async () => {
    render(<Accordion />);
    const question = screen.getByText(/What are accordion components\?/i);

    fireEvent.click(question);

    const answer = await screen.findByText(
      /Accordion components are user interface elements/i
    );
    expect(answer).toBeInTheDocument();
  });

  it("toggles between single and multiple mode when button is clicked", () => {
    render(<Accordion />);
    const modeButton = screen.getByRole("button");

    // Starts in Single mode
    expect(modeButton).toHaveTextContent(/Single/i);

    fireEvent.click(modeButton);

    // Changes to Multiple mode
    expect(modeButton).toHaveTextContent(/Multiple/i);
  });
});
