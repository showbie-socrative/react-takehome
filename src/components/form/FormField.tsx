import * as React from 'react';
import {
  IErrors,
  // IFieldOption,
  IFieldProps,
  IFormContext,
} from 'models';
import { Field } from 'components';
import { FormContext } from '../form';

class FormField extends React.PureComponent<IFieldProps, IFormFieldState> {

  render() {
    let id = this.props.id,
      value = "";

    return (
      <FormContext.Consumer>{(context: IFormContext) => {
        let formValue = (context && context.values && context.values[id]) || value;

        // OnChange Callback
        let onChange = (val: string | number) => {
          if (context && context.setValues) {
            context.setValues({ [id]: val });
          }
        }
        // OnBlur Callback
        let onBlur = () => {}

        let fieldProps: IFieldProps = Object.assign(
          {},
          this.props,
          {
            value: formValue,
          }
        )

        return (
          <div className="form-group">
            {this.props.label}
            <input
              id={this.props.id}
              value={value}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                let value = e.currentTarget.value;
                this.onChange(value)
              }}
              onBlur={() => {}}
               />
          </div>
        )
      }}</FormContext.Consumer>
    )
  }

}

export default FormField;
