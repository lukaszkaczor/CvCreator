export interface ISelector {
  //   isValid(): boolean;
  readonly name: string;
  readonly value: string;
  getFunctionIndexes(template: string): number[];
  getMainIndexes(template: string): number[];

  // removeSelectors(template: string): string;
  // getIndexes(template: string): number[];
}
