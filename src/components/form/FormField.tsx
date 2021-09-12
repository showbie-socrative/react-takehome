import * as React from 'react';
import {
  IField,
  IFormContext,
  IFieldProps,
} from 'models';
import { FormContext } from './FormContext';
import { Field} from 'components';

class FormField extends React.PureComponent<IField> {

  render() {
    let id = this.props.id,
      value = "";

    return (
      <FormContext.Consumer>{(context: IFormContext) => {
        let formValue = (context && context.values && context.values[id]) || value;

        // OnChange Callback
        let onChange = (val: string | number) => {
          console.log(id)
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
            onChange: onChange
          }
        )

        return (
          <div className="form-group">
            {this.props.label}
            <Field {...fieldProps} />
          </div>
        )
      }}</FormContext.Consumer>
    )
  }

}

export default FormField;
