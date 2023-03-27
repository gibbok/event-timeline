import { getNumericQueryParamOrDefault, validateNumericQueryParamOrDefault } from "./events";

describe("events", () => {
    describe("validateNumericQueryParamOrDefault", () => {
        it("returns the parsed query parameter as a number if it is valid", () => {
            const query = "123";
            const result = validateNumericQueryParamOrDefault(1)(query);

            expect(result).toEqual(123);
        });

        it("returns the default value if the query parameter is undefined", () => {
            const result = validateNumericQueryParamOrDefault(1)(undefined);

            expect(result).toEqual(1);
        });

        it("returns the default value if the query parameter is not a number", () => {
            const query = "invalid";

            expect(() => {
                validateNumericQueryParamOrDefault(1)(query);
            }).toThrow(`Invalid query parameter: ${query}`);
        });

        it("returns the first value in the array if the query parameter is an array", () => {
            const query = ["123", "456"];
            const result = validateNumericQueryParamOrDefault(1)(query);

            expect(result).toEqual(123);
        });
    });

    describe("getNumericQueryParamOrDefault", () => {
        it("returns the parsed query parameter as a number if it is valid", () => {
            const query = "123";
            const result = getNumericQueryParamOrDefault(query);

            expect(result).toEqual(123);
        });

        it("returns the default value if the query parameter is undefined", () => {
            const result = getNumericQueryParamOrDefault(undefined);

            expect(result).toEqual(1);
        });

        it("returns the default value if the query parameter is not a number", () => {
            const query = "invalid";

            expect(() => {
                getNumericQueryParamOrDefault(query);
            }).toThrow(`Invalid query parameter: ${query}`);
        });

        it("returns the first value in the array if the query parameter is an array", () => {
            const query = ["123", "456"];
            const result = getNumericQueryParamOrDefault(query);

            expect(result).toEqual(123);
        });
    });
});