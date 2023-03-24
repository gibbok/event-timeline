import { eventDataUI } from "@/stabs/eventsUI";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EventTimeline } from "./EventTimeline";

describe("EventTimeline", () => {
  it("should render progressbar when loading data", () => {
    render(<EventTimeline status="loading" />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should render text no data when data is empty", () => {
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

  it("should render multiple events when data is loaded", () => {
    const onChangePage = jest.fn();

    render(
      <EventTimeline
        status="loaded"
        data={eventDataUI.slice(0, 2)}
        page={1}
        countPages={1}
        onChangePage={onChangePage}
      />
    );

    expect(screen.getByText(/downtime_report_submitted/i)).toBeInTheDocument();
    expect(screen.getByText(/in_progress/i)).toBeInTheDocument();
    expect(screen.getAllByText(/thad cormier/i)).toHaveLength(2);
    expect(
      screen.getAllByText(/bench - panels \/ urban splash house factory/i)
    ).toHaveLength(2);
    expect(screen.getByText(/6:40:49 pm \- 11\/23\/22/i)).toBeInTheDocument();
    expect(screen.getByText(/6:40:46 pm \- 11\/23\/22/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /page 1/i })).toBeInTheDocument();
    expect(screen.getAllByTestId("ExpandMoreIcon")).toHaveLength(2);

    expect(onChangePage).not.toBeCalled();
  });

  it("should expand and show details for event", async () => {
    const onChangePage = jest.fn();

    render(
      <EventTimeline
        status="loaded"
        data={eventDataUI.slice(0, 1)}
        page={1}
        countPages={1}
        onChangePage={onChangePage}
      />
    );

    userEvent.click(screen.getByTestId("ExpandMoreIcon"));

    expect(await screen.findByText(/device id/i)).toBeInTheDocument();
    expect(screen.getByText(/d859227 \.\.\./i)).toBeInTheDocument();
    expect(screen.getByText(/zone/i)).toBeInTheDocument();
    expect(screen.getByText(/bench \- panels/i)).toBeInTheDocument();
    expect(screen.getByText(/urban splash house factory/i)).toBeInTheDocument();
    expect(screen.getByText(/partner/i)).toBeInTheDocument();
    expect(screen.getByTestId("ExpandLessIcon")).toBeInTheDocument();
    expect(onChangePage).not.toBeCalled();
  });

  it("should call callback when page is changed", async () => {
    const onChangePage = jest.fn();

    render(
      <EventTimeline
        status="loaded"
        data={eventDataUI}
        page={1}
        countPages={3}
        onChangePage={onChangePage}
      />
    );

    await userEvent.click(
      screen.getByRole("button", { name: /go to page 2/i })
    );

    expect(onChangePage).toBeCalledWith(2);
  });
});
