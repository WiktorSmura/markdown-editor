import { screen, render, fireEvent } from "@testing-library/react";
import Button from "../Button";

const handleClick = jest.fn();

describe("Button", () => {
  it("should render with text passed in prop", () => {
    render(<Button text="click me" handleClick={handleClick} />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call a function once after click", () => {
    render(<Button text="click me" handleClick={handleClick} />);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
