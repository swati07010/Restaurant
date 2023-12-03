// src/services/api.js
const searchApi = async (searchTerm) => {
  // In a real application, you would replace this with an actual API endpoint
  // Here, we'll simulate a delay to simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // For now, let's return some dummy data
      const searchResults = [
        { id: 1, name: "Result 1" },
        { id: 2, name: "Result 2" },
      ];
      resolve(searchResults);
    }, 500);
  });
};

export default {
  searchApi,
};
