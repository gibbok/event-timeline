import { EventsUI } from "@/pages/transform";
import { eventsData } from "@/stabs/events";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EventTimeline } from "./EventTimeline";

const TEST_DATA = [
  {
    eventId: "be317a24-09b8-4b5b-997b-a8542a1738a2",
    cardId: "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
    type: "downtime_report_submitted",
    userName: "Thad Cormier",
    occurrence: "2022-11-23 17:40:49.193277+00",
    device: {
      deviceId:
        "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3",
      zoneName: "Bench - Panels",
      factoryName: "Urban Splash House Factory",
      partnerName: "Urban Splash",
      stationName: "Bay 1",
    },
  },
  {
    eventId: "e6c2c29d-156d-49ca-9c55-59c6ff464892",
    cardId: "ce6bff8d-eb09-4208-9405-c2594f74ccb0",
    type: "in_progress",
    userName: "Thad Cormier",
    occurrence: "2022-11-23 17:40:46.800652+00",
    device: {
      deviceId:
        "d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3",
      zoneName: "Bench - Panels",
      factoryName: "Urban Splash House Factory",
      partnerName: "Urban Splash",
      stationName: "Bay 1",
    },
  },
] as EventsUI;

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

  it("should render when data is loaded and present", () => {
    const onChangePage = jest.fn();

    render(
      <EventTimeline
        status="loaded"
        data={TEST_DATA}
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
});
