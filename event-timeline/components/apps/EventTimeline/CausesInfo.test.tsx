import { render, screen } from "@testing-library/react";
import { CausesInfo } from "./CausesInfo";

describe("CausesInfo", () => {
  it("should render", () => {
    render(
      <CausesInfo
        design={["Drawing Issues"]}
        rework={["Drawing not followed"]}
      />
    );

    expect(screen.getByText(/causes/i)).toBeInTheDocument();
    expect(screen.getByText(/drawing issues/i)).toBeInTheDocument();
    expect(screen.getByText(/drawing not followed/i)).toBeInTheDocument();
  });
});
