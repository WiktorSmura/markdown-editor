import { screen, render } from "@testing-library/react";
import Header from "../Header";
import AppProvider from "../../../context/AppContext";

const MockHeader = () => {
  return (
    <AppProvider>
      <Header />
    </AppProvider>
  );
};

describe("Header", () => {
  it("should render with text given in prop", () => {
    render(<MockHeader title="title" />);
    const headingElement = screen.getByText(/title/i);
    expect(headingElement).toBeInTheDocument();
  });
});
