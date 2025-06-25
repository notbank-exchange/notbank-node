export function completeParamsArray<T>(paramsArray: T[], omsId: number): (T & { OMSId: number })[] {
  return paramsArray.map(params => ({
    ...params,
    OMSId: omsId
  }));
}