import * as React from 'react';
import { IFieldProps, IFieldState } from 'models';

class Field extends React.PureComponent<IFieldProps, IFieldState> {
  state = {
    value: "",
  }

  componentDidMount() {
    this.setState({ value: "" });
  }

  onChange = (value: string | number) => {
    this.setState({ value: value }, () => { });
    this.props.onChange(value, this.props.id);
  }

  render() {
    let value: any = this.state.value;

    return (
      <input
        id={this.props.id}
        type="text"
        value={value}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          let value = e.currentTarget.value;
          this.onChange(value)
        }}
        onBlur={() => {}}
        />
    );
  }
}

export default Field;
