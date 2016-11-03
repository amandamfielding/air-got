export const FETCH_REGIONS = "FETCH_REGIONS";
export const RECEIVE_REGIONS = "RECEIVE_REGIONS";

export const fetchRegions = () => ({
  type: FETCH_REGIONS
});

export const receiveRegions = (regions) => ({
  type: RECEIVE_REGIONS,
  regions
});
