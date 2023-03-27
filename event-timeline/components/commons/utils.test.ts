import { NO_BORDER_LAST_ROW } from "./utils";

describe("NO_BORDER_LAST_ROW", () => {
    it("should have a borderBottom value of unset for all child elements", () => {
        expect(NO_BORDER_LAST_ROW).toEqual({
            "& > *": { borderBottom: "unset" },
        });
    });
});