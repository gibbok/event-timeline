import { eventsDataAPI } from "@/stubs/eventsAPI";
import { tranformResponseApiToUiData, } from "./transform";

describe("DeviceInfo", () => {
    describe("tranformResponseApiToUiData", () => {
        it("should transform server data to data for ui", () => {
            expect(tranformResponseApiToUiData(eventsDataAPI)).toMatchSnapshot()
        });
    });
});