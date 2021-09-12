import * as React from 'react';
import { ITableCard, IValues } from 'models'


class Template extends React.PureComponent<ITableCard> {

  render() {
    let columns: string[] = this.props.columns,
      rows: any[] = this.props.content,
      val: IValues,
      onClick: () => void;

    if (!rows || rows.length == 0) {
      return (<div> no students in room </div>);
    }

    return (
      <div className="card">
        <table>
          <tr>
            {columns.map((header: string) => {
              return (<td>{header}</td>)
            })}
          </tr>

          {rows.map((row: any) => {
            val = row;
            onClick = () => {
              if (this.props.onClick) {
                this.props.onClick(row)
              }
            }

            return (
              <tr onClick={onClick}>
                {columns.map((col: string) => {
                  return (<td>{val[col]}</td>)
                })}
              </tr>
            )
          })}
        </table>
      </div>
    );
  }
}

export default Template;
