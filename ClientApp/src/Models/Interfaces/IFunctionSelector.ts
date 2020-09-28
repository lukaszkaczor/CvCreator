export interface IFunctionSelector {
  name: string;
  execute(template: string): string;
}
