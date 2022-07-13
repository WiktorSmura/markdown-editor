import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";
import AppProvider from "./context/AppContext";

const MockApp = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

describe("App", () => {
  it("should render without crashing", () => {
    render(<MockApp />);
    const appElement = screen.getByTestId("app");
    expect(appElement).toBeInTheDocument();
  });

  it("should toggle preview on button click", () => {
    render(<MockApp />);
    const previewElement = screen.getByTestId("preview-box");
    const buttonElement = screen.getByText(/show preview/i);
    expect(previewElement).toBeVisible();
    fireEvent.click(buttonElement);
    expect(previewElement).not.toBeVisible();
  });

  it("should format markdown from textarea and display it in preview", () => {
    render(<MockApp />);
    const textareaElement = screen.getByPlaceholderText(
      /your amazing markdown/i
    );
    fireEvent.change(textareaElement, {
      target: { value: `<p data-testid="test-paragraph"></p>` },
    });
    const renderedParagraphElement = screen.getByTestId("test-paragraph");
    expect(renderedParagraphElement).toBeInTheDocument();
  });
});
