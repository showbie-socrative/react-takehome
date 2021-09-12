import {
  IField,
  IValues,
  IErrors,
} from 'models';

export interface FormProps {
  config: FormConfig,
  initialValues?: IValues
}

export interface FormConfig {
  action: string,
  fields: IField[],
}


export interface FormContextProps {
  setValues: (values: IValues) => void,
  validate: (fieldName: string) => void,
}

export interface FormState {
  values: IValues,
  errors: Errors,
  submitSuccess?: boolean | undefined,
}

export interface Errors {
  [key:string]: string
}

export interface Field {
  id: string,
  label?: string,
  type?: string,
  validation?: string,
}

export interface FieldProps extends Field {
  onChange: (value: any, id: string) => void,
  onBlur?: () => void
}

export interface Button {
  id: string;
  label: string,
  onClick?: () => void,
  type?: string,
}
