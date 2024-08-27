const importAll = (context) => context.keys().map(context);

export const loadCardData = async () => {
  // Import all files from the 'data' folder that match the pattern.
  const context = require.context('../data', false, /^\.\/CardData\d+\.js$/);
  const modules = importAll(context);

  // Combine all the imported data into one array.
  let allBandsData = [];
  for (const module of modules) {
    if (module.default) {
      allBandsData = [...allBandsData, ...module.default];
    }
  }

  return allBandsData;
};
