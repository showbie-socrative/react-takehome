import { IFormConfig, IValues } from 'models';

export interface Card {
  title?: string
}

export interface FormCard extends Card {
  config: IFormConfig,
  values?: IValues,
}

export interface TableCard extends Card {
  content: any[],
  columns: string[],
  onClick?: (val: IValues) => void,
}
