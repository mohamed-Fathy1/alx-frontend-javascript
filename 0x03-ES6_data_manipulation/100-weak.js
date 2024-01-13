const weakMap = new WeakMap();

function queryAPI(ep) {
  if (!weakMap.has(ep)) { weakMap.set(ep, 0); }

  let numberOfApiCalls = (weakMap.get(ep));
  numberOfApiCalls += 1;
  weakMap.set(ep, numberOfApiCalls);
  if (numberOfApiCalls >= 5) { throw new Error('Endpoint load is high'); }
}

export { queryAPI, weakMap };
