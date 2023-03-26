import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DeviceInfo } from "./DeviceInfo";
import { DeviceUI } from "./types";

describe("DeviceInfo component", () => {
  const props: DeviceUI = {
    deviceId: "ABC123456789",
    zoneName: "Zone 1",
    factoryName: "Factory 1",
    partnerName: "Partner 1",
    stationName: "Station 1",
  };

  it("renders the device info", () => {
    render(<DeviceInfo {...props} />);

    expect(screen.getByText("DEVICE")).toBeInTheDocument();
    expect(screen.getByText("Device Id")).toBeInTheDocument();
    expect(screen.getByText("ABC1234 ...")).toBeInTheDocument();
    expect(screen.getByText("Zone")).toBeInTheDocument();
    expect(screen.getByText("Zone 1")).toBeInTheDocument();
    expect(screen.getByText("Factory")).toBeInTheDocument();
    expect(screen.getByText("Factory 1")).toBeInTheDocument();
    expect(screen.getByText("Partner")).toBeInTheDocument();
    expect(screen.getByText("Partner 1")).toBeInTheDocument();
    expect(screen.getByText("Station")).toBeInTheDocument();
    expect(screen.getByText("Station 1")).toBeInTheDocument();
  });

  it("should expand device id when clicked on tooltip", async () => {
    render(<DeviceInfo {...props} />);

    const tooltip = screen.getByText("ABC1234 ...");
    userEvent.click(tooltip);
    waitFor(() => expect(screen.getByText("ABC123456789")).toBeInTheDocument());
  });
});
