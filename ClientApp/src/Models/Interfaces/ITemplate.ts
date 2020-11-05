import { StringifyOptions } from "querystring";

export interface ITemplate {
  id?: number;
  name: string;
  imageUrl?: string;
  html: string;
  styles: string;
  isActive: boolean;
}
