import { eventsData } from "@/stabs/events";
import { tranformResponseApiToUiData } from "./transform";

describe("DeviceInfo", () => {
    describe("tranformResponseApiToUiData", () => {
        it("should transform server data to data for ui", () => {
            expect(tranformResponseApiToUiData(eventsData)).toMatchSnapshot()
        });
    });
});