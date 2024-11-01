

export const loadCardData = async () => {
  try {
    // Make an API call to your backend to fetch band data
    const response = await fetch('/api/bands'); // Adjust the endpoint as needed

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const allBandsData = await response.json();

    return allBandsData;
  } catch (error) {
    console.error('Error fetching band data:', error);
    return []; // Return an empty array or handle the error as needed
  }
};

