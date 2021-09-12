import * as React from 'react';
import { IFormProps, IField } from 'models';
import { FormContainer, FormField } from 'components';


class FormBuilder extends React.PureComponent<IFormProps> {

  render() {
    return (
      <FormContainer config={this.props.config}>
        {this.props.config.fields.map((field: IField, key) => {
          return (
            <FormField key={key} {...field} />
          )
        })}

        <button
          type="submit">
          submit
        </button>

      </FormContainer>
    );
  }
}

export default FormBuilder;
