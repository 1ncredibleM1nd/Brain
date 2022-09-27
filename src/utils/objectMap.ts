export const objectMap = (object: Object, mapFn: (key: string) => Object) => {
  return Object.keys(object).reduce(function (result, key) {
    result[mapFn(key)] = object[key];
    return result;
  }, {});
};
