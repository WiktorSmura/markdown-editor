import { screen, render, fireEvent } from "@testing-library/react";
import textarea from "../Textarea";
import Textarea from "../Textarea";

describe("Textarea", () => {
  it("should render without crashing", () => {
    render(<Textarea />);
    const textareaElement = screen.getByPlaceholderText(
      /your amazing markdown/i
    );
    expect(textareaElement).toBeInTheDocument();
  });

  it("should be able to type", () => {
    render(<Textarea />);
    const textareaElement = screen.getByPlaceholderText(
      /your amazing markdown/i
    );
    fireEvent.change(textareaElement, { target: { value: "amazing value" } });
    expect(textareaElement.value).toBe("amazing value");
  });
});
