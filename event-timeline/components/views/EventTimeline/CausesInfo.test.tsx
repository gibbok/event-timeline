import { render, screen } from "@testing-library/react";
import { CausesInfo } from "./CausesInfo";

describe("CausesInfo", () => {
  it("should display 'Design' and 'Rework' headings with corresponding data when props are provided", () => {
    render(
      <CausesInfo
        design={["Design Issue 1", "Design Issue 2"]}
        rework={["Rework Issue 1", "Rework Issue 2"]}
      />
    );

    expect(screen.getByText("CAUSES")).toBeInTheDocument();

    expect(screen.getByText("Design")).toBeInTheDocument();
    expect(
      screen.getByText("Design Issue 1, Design Issue 2")
    ).toBeInTheDocument();

    expect(screen.getByText("Rework")).toBeInTheDocument();
    expect(
      screen.getByText("Rework Issue 1, Rework Issue 2")
    ).toBeInTheDocument();
  });

  it("should display 'No data' for 'Design' when design prop is an empty array", () => {
    render(<CausesInfo design={[]} />);

    expect(screen.getByText("Design")).toBeInTheDocument();
    expect(screen.getByText("No data")).toBeInTheDocument();
  });

  it("should not display 'Rework' heading or data when rework prop is not provided", () => {
    render(<CausesInfo design={["Design Issue"]} />);

    expect(screen.getByText("Design")).toBeInTheDocument();
    expect(screen.getByText("Design Issue")).toBeInTheDocument();

    expect(screen.queryByText("Rework")).not.toBeInTheDocument();
    expect(screen.queryByText("Rework Issue")).not.toBeInTheDocument();
  });
});
