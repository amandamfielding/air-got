export const FETCH_REGIONS = "FETCH_REGIONS";
export const RECEIVE_REGIONS = "RECEIVE_REGIONS";
export const SEARCH_REGIONS = "SEARCH_REGIONS";
export const RECEIVE_SEARCH_REGIONS = "RECEIVE_SEARCH_REGIONS";

export const fetchRegions = () => ({
  type: FETCH_REGIONS
});

export const receiveRegions = (regions) => ({
  type: RECEIVE_REGIONS,
  regions
});

export const searchRegions = (letters) => ({
  type: SEARCH_REGIONS,
  letters
});

export const receiveSearchRegions = (searchedRegions) => ({
  type: RECEIVE_SEARCH_REGIONS,
  searchedRegions
});
