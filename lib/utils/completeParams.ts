export function completeParams<T>(params: T, omsId: number): T & { OMSId: number } {
  return {
    ...params,
    OMSId: omsId
  };
}
