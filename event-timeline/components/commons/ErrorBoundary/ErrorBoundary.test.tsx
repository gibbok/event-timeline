import { logError } from "@/api/utils";
import { render } from "@testing-library/react";
import { ErrorBoundary } from "./ErrorBoundary";

jest.mock("../../../api/utils", () => ({
  logError: jest.fn(),
}));

describe("ErrorBoundary", () => {
  it("renders children if there are no errors", () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Child component</div>
      </ErrorBoundary>
    );

    expect(getByText("Child component")).toBeInTheDocument();
  });

  it("renders an error message if there is an error", () => {
    const errorMessage = "Test error message";
    const ChildComponentWithError = () => {
      throw new Error(errorMessage);
    };
    const { getByText } = render(
      <ErrorBoundary>
        <ChildComponentWithError />
      </ErrorBoundary>
    );

    expect(getByText(/Sorry.. there was an error/)).toBeInTheDocument();
    expect(logError).toHaveBeenCalled();
  });
});
