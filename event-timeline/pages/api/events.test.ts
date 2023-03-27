import { getNumericQueryParamOrDefault, validateNumericQueryParamOrDefault } from "./events";

describe("events", () => {
    describe("validateNumericQueryParamOrDefault", () => {
        it("returns the parsed query parameter as a number if it is valid", () => {
            expect(validateNumericQueryParamOrDefault(1)("123")).toEqual(123);
        });

        it("returns the default value if the query parameter is undefined", () => {
            expect(validateNumericQueryParamOrDefault(1)(undefined)).toEqual(1);
        });

        it("returns the default value if the query parameter is not a number", () => {
            const query = "invalid";

            expect(() => {
                validateNumericQueryParamOrDefault(1)(query);
            }).toThrow(`Invalid query parameter: ${query}`);
        });

        it("returns the first value in the array if the query parameter is an array", () => {
            expect(validateNumericQueryParamOrDefault(1)(["123", "456"])).toEqual(123);
        });
    });

    describe("getNumericQueryParamOrDefault", () => {
        it("returns the parsed query parameter as a number if it is valid", () => {
            expect(getNumericQueryParamOrDefault("123")).toEqual(123);
        });

        it("returns the default value if the query parameter is undefined", () => {
            expect(getNumericQueryParamOrDefault(undefined)).toEqual(1);
        });

        it("returns the default value if the query parameter is not a number", () => {
            const query = "invalid";

            expect(() => {
                getNumericQueryParamOrDefault(query);
            }).toThrow(`Invalid query parameter: ${query}`);
        });

        it("returns the first value in the array if the query parameter is an array", () => {
            expect(getNumericQueryParamOrDefault(["123", "456"])).toEqual(123);
        });
    });
});