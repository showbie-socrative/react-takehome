import * as React from 'react';
import { connect } from 'react-redux';
import {
  TableCard,
  FormCard,
} from 'components';
import { IRoom, IValues, IStudent } from 'models';
import {
  IFormConfig,
} from 'models';
import { TheFormConfig } from 'config';
import * as Store from 'store/Store';
import { ApplicationState, StoreProps } from 'store';

type OwnProps = {

};

type MainViewProps =
  StoreProps &
  OwnProps;

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps) => ({
  ...state.Store,
});

const mapDispatchToProps = {
  ...Store.actionCreators,
}

class MainView extends React.PureComponent<MainViewProps> {
  componentDidMount() {
    this.props.requestRooms()
  }

  render() {
    let rooms: IRoom[] = this.props.listRoom || [],
      students: IStudent[] = this.props.listStudent || [];

    return (
      <div>
        <div className="card-row" >
          <TableCard columns={['id', 'name']} content={rooms}
            onClick={(val: IValues) => {
              this.props.requestStudentsByRoom(val['id'])
            }}/>
          <TableCard columns={['id', 'name']} content={students} />
        </div>

        <FormCard config={TheFormConfig} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainView as any);
