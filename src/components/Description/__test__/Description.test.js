import { screen, render } from "@testing-library/react";
import Description from "../Description";

describe("Description", () => {
  it("should render without crashing", () => {
    render(<Description text="Description" />);
    const descriptionElement = screen.getByRole("heading");
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should render with uppercase text given in prop", () => {
    render(<Description text="Description" />);
    const descriptionElement = screen.getByText(/DESCRIPTION/i);
    expect(descriptionElement).toBeInTheDocument();
  });
});
