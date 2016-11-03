export const asRegionsArray = ({ regions }) => Object.keys(regions).map(key => regions[key]);

export const asPlacesArray = ({ places }) => Object.keys(places).map(key => places[key]);

export const selectPlace = ({ places }, id) => places[id] || {};
