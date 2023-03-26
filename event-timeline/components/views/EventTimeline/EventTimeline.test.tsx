import { eventDataUI } from "@/stubs/eventsUI";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EventTimeline } from "./EventTimeline";

describe("EventTimeline", () => {
  it("should renders a 'No data' message when data is empty", () => {
    render(
      <EventTimeline
        data={[]}
        page={1}
        countPages={1}
        onChangePage={jest.fn()}
      />
    );

    expect(screen.getByText("No data")).toBeInTheDocument();
  });

  it("should renders event timeline with data and pagination", () => {
    const onChangePage = jest.fn();

    render(
      <EventTimeline
        data={eventDataUI.slice(0, 2)}
        page={1}
        countPages={1}
        onChangePage={onChangePage}
      />
    );

    expect(screen.getByText("downtime_report_submitted")).toBeInTheDocument();
    expect(screen.getByText("in_progress")).toBeInTheDocument();
    expect(screen.getAllByText("Thad Cormier")).toHaveLength(2);
    expect(
      screen.getAllByText("Bench - Panels / Urban Splash House Factory")
    ).toHaveLength(2);
    expect(screen.getByText("5:40:49 PM - 11/23/22")).toBeInTheDocument();
    expect(screen.getByText("5:40:46 PM - 11/23/22")).toBeInTheDocument();

    expect(screen.getAllByTestId("ExpandMoreIcon")).toHaveLength(2);

    const pagination = screen.getByRole("navigation");
    expect(pagination).toBeInTheDocument();

    expect(onChangePage).not.toBeCalled();
  });

  it("should expand and show more details when user click icon", async () => {
    const onChangePage = jest.fn();

    render(
      <EventTimeline
        data={eventDataUI.slice(0, 1)}
        page={1}
        countPages={1}
        onChangePage={onChangePage}
      />
    );

    userEvent.click(screen.getByTestId("ExpandMoreIcon"));

    expect(await screen.findByText("Device Id")).toBeInTheDocument();
    expect(screen.getByTestId("ExpandLessIcon")).toBeInTheDocument();
    expect(onChangePage).not.toBeCalled();
  });

  it("should call callback when page is changed", async () => {
    const onChangePage = jest.fn();

    render(
      <EventTimeline
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
