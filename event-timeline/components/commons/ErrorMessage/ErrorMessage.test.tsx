import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders the error message", () => {
    const errorMessage = "Something went wrong!";
    render(<ErrorMessage message={errorMessage} />);
    expect(
      screen.getByText(`Sorry.. there was an error 😔`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Something went wrong!`)).toBeInTheDocument();
  });

  it("renders the default error message if no message is provided", () => {
    render(<ErrorMessage />);
    expect(
      screen.getByText("Sorry.. there was an error 😔")
    ).toBeInTheDocument();
  });
});
