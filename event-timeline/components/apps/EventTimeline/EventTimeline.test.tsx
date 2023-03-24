import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EventTimeline } from "./EventTimeline";

describe("EventTimeline", () => {
  it("should render progress bar when loading data", () => {
    render(<EventTimeline status="loading" />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should render no data when data is empty", () => {
    render(
      <EventTimeline
        status="loaded"
        data={[]}
        page={1}
        countPages={1}
        onChangePage={jest.fn()}
      />
    );

    expect(screen.getByText(/no data/i)).toBeInTheDocument();
  });
});
