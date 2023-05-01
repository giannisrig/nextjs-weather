const validateLocation = (location: string): boolean => {
  // Check if location is a non-empty string
  if (typeof location !== "string" || location.trim() === "") {
    return false;
  }

  // Check if location contains only alphabets, spaces, commas, and hyphens
  const regex = /^[a-zA-Z ,-]+$/;
  return regex.test(location.trim());
};

export default validateLocation;
