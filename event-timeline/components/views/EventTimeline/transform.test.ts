import { eventsData } from "@/stubs/events";
import { sortEventsByOccurenceDesc, tranformResponseApiToUiData, } from "./transform";

describe("DeviceInfo", () => {
    describe("tranformResponseApiToUiData", () => {
        it("should transform server data to data for ui", () => {
            expect(tranformResponseApiToUiData(eventsData)).toMatchSnapshot()
        });
    });

    describe("sortEventsByOccurenceDesc", () => {
        it("should sort data by occurrence in desc order", () => {
            expect(sortEventsByOccurenceDesc(eventsData).map(x => x.job_event_occurrence).slice(0, 3)).toEqual(["2022-11-25 14:39:25.149178+00", "2022-11-25 14:39:19.751762+00", "2022-11-25 14:38:33.069967+00"])
        });
    });
});