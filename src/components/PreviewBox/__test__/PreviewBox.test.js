import { screen, render } from "@testing-library/react";
import PreviewBox from "../PreviewBox";

const HTML = `<p>inner html</p>`;

describe("PreviewBox", () => {
  it("should render with inner html given in props", () => {
    render(<PreviewBox dangerouslySetInnerHTML={{ __html: HTML }} />);
    const paragraphElement = screen.getByText(/inner html/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});
