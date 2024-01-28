type JsonObject = { [key: string]: unknown };

const comparePlainJSONs = (json1: JsonObject, json2: JsonObject): boolean => {
  const isEqualCountOfProps = Object.keys(json1).length === Object.keys(json2).length;
  const isEqualProps = Object.entries(json1).every(([key, value]) => json2[key] === value);
  return isEqualCountOfProps && isEqualProps;
};

export default comparePlainJSONs;
