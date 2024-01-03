function flatten(a) {
  return a.reduce((flat, i) => {
    if (Array.isArray(i)) {
      return flat.concat(flatten(i));
    }
    return flat.concat(i);
  }, []);
}

export default function createIteratorObject(report) {
  const loop = flatten(Object.values(report.allEmployees));
  // console.log(loop);
  let i = 0;
  const total = loop.length;
  const iter = {
    [Symbol.iterator]: () => ({
      next() {
        if (i < total) {
          return {
            /* eslint-disable-next-line no-plusplus */
            value: loop[i++],
            done: false,
          };
        }
        return {
          done: true,
        };
      },
    }),
  };
  return iter;
}
