function mapObject(obj, iteratorFn) {
  if (typeof iteratorFn !== "function") {
    return obj;
  }

  const resultObj = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    const [useKey, useValue] = iteratorFn(key, value);
    resultObj[useKey] = useValue;
  });

  return resultObj;
}

const tObj = {
  one: 1,
  two: 2,
  three: 3,
};

const mObj = mapObject(tObj, (k, v) => [k.toUpperCase(), v * 2]);

console.log(mObj);
