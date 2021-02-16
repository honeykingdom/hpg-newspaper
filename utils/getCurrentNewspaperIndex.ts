const getCurrentNewspaperIndex = (
  newspaperNumbers: string[],
  currentNewspaperNumber: string
) => {
  const current =
    currentNewspaperNumber.length === 1
      ? `0${currentNewspaperNumber}`
      : currentNewspaperNumber;

  const currentIndex = newspaperNumbers.findIndex((n) => n === current);

  return currentIndex;
};

export default getCurrentNewspaperIndex;
