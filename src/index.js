module.exports = function segment(x, space) {
  // Write your code here

  let lastSegmentIdx = 0;

  let segments = [];

  while (lastSegmentIdx < space.length && lastSegmentIdx <= space.length - x) {
    segments.push(space.slice(lastSegmentIdx, lastSegmentIdx + x));
    lastSegmentIdx++;
  }

  console.log(segments);

  const minMemories = segments.map((item) => {
    item.sort();

    return item[0];
  });

  minMemories.sort();
  minMemories.reverse();

  return minMemories[0];
};

// segment(3, [2, 5, 4, 6, 8]);
