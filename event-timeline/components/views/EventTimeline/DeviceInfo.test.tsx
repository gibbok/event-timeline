import { render, screen } from "@testing-library/react";
import { DeviceInfo } from "./DeviceInfo";

describe("DeviceInfo", () => {
  it("should render", () => {
    render(
      <DeviceInfo
        deviceId="d85922780c45ad4eadc0919e75f964085db7649b2dcb7fd78b76f8d65ce09cd3"
        zoneName="Bench - Panels"
        factoryName="Urban Splash House Factory"
        partnerName="Urban Splash"
        stationName="Bay 1"
      />
    );

    expect(screen.getByText(/^device$/i)).toBeInTheDocument();

    expect(screen.getByText(/^device id$/i)).toBeInTheDocument();
    expect(screen.getByText(/^d859227 ...$/i)).toBeInTheDocument();

    expect(screen.getByText(/^zone$/i)).toBeInTheDocument();
    expect(screen.getByText(/^bench - panels$/i)).toBeInTheDocument();

    expect(screen.getByText(/^factory$/i)).toBeInTheDocument();
    expect(
      screen.getByText(/^urban splash house factory$/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/^partner$/i)).toBeInTheDocument();
    expect(screen.getByText(/^urban splash$/i)).toBeInTheDocument();

    expect(screen.getByText(/^station$/i)).toBeInTheDocument();
    expect(screen.getByText(/^bay 1$/i)).toBeInTheDocument();
  });
});
