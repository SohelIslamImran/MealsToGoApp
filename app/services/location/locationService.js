import camelize from "camelize";

import mockLocations from "./mockLocations";

const locationRequest = async (searchTerm) => {
  const result = await new Promise((resolve, reject) => {
    const location = mockLocations[searchTerm];
    if (!location) {
      reject("not found");
    }
    resolve(location);
  });

  return locationTransform(result);
};

const locationTransform = (result) => {
  const { geometry } = camelize(result.results[0]);
  const { lat, lng } = geometry.location;
  const locationString = `${lat},${lng}`;

  return locationString;
};

export default locationRequest;
