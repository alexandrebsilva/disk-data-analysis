module.exports = function segment(x, space) {
  let lastSegmentIdx = 0;

  let segments = [];

  while (lastSegmentIdx < space.length && lastSegmentIdx <= space.length - x) {
    segments.push(space.slice(lastSegmentIdx, lastSegmentIdx + x));
    lastSegmentIdx++;
  }

  const minMemories = segments.map((item) => {
    item.sort();

    return item[0];
  });

  minMemories.sort();
  minMemories.reverse();

  return minMemories[0];
};
