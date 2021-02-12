const getCurrentArticleIndex = (
  articleNumbers: string[],
  currentArticleNumber: string
) => {
  const current =
    currentArticleNumber.length === 1
      ? `0${currentArticleNumber}`
      : currentArticleNumber;

  const currentIndex = articleNumbers.findIndex((n) => n === current);

  return currentIndex;
};

export default getCurrentArticleIndex;
