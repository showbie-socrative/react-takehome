import * as React from 'react';
import { IFormProps } from 'models';


class FormBuilder extends React.PureComponent<IFormProps> {

  render() {
    return (
      <FormContainer config={this.props.config}>
        {this.props.config.fields.map((field: IField, key) => {
          return (
            <FormField key={key} {...fieldProps} />
          )
        })}

        <button
          type="submit"
          >
          submit
        </button>

      </FormContainer>
    );
  }
}

export default FormBody;
