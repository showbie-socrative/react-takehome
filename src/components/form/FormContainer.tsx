import * as React from 'react';
import { FormContext } from './FormContext';
import { formPost } from 'api';
import { IFormProps,
  IFormState,
  IFormContext,
  IValues,
  IErrors,
 } from 'models';

class FormContainer extends React.PureComponent<IFormProps, IFormState> {
  state = {
    errors: {},
    values: {},
    submitSuccess: undefined,
  }

  setValues = (values: IValues) => {
    this.setState({ values: values });
  };

  validateField = (fieldName: string): string => {
    return "";
  }

  handleSubmitButtonPress = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submitSuccess: boolean = await this.submitFormValues();
    this.setState({ submitSuccess: submitSuccess })
  }

  submitFormValues = async (): Promise<boolean> => {
    return formPost(this.props.config.action, this.state.values)
      .then((res: any) => {
        return true
      }).catch((error: any) => {
        return false
      })

  }

  render() {

    const context: IFormContext = {
      ...this.state,
      setValues: this.setValues,
      validate: this.validateField,
    }

    return (
      <FormContext.Provider value={context}>
        <form onSubmit={this.handleSubmitButtonPress} noValidate={true}>
          <div>
            {this.props.children}
          </div>
        </form>
      </FormContext.Provider>
    );
  }
}

export default FormContainer;
