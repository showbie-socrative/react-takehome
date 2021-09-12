import * as React from 'react';
import { IFormCard } from 'models'
import { FormBuilder } from 'components';


class FormCard extends React.PureComponent<IFormCard> {

  render() {
    return (
      <div className="card">
        <FormBuilder config={this.props.config} />
      </div>
    );
  }
}

export default FormCard;
