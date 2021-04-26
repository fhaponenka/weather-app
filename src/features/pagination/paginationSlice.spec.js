import paginationReducer, { setPage } from "./paginationSlice";

describe("pagination reducer", () => {
  const initialState = {
    pageSize: 3,
    pageIndex: 1,
  };

  it("should handle setpage", () => {
    const actual = paginationReducer(initialState, setPage(2));
    expect(actual.value).toEqual(2);
  });
});
