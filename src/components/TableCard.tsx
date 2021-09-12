import * as React from 'react';
import { ITableCard, IValues } from 'models'


class Template extends React.PureComponent<ITableCard> {

  render() {
    let columns: string[] = this.props.columns,
      rows: any[] = this.props.content,
      val: IValues,
      onClick: () => void;

    if (!rows || rows.length === 0) {
      return (<div> no students in room </div>);
    }

    return (
      <div className="card">
        <table>
          <thead>
          <tr>
            {columns.map((header: string, hKey: number) => {
              return (<td key={hKey}>{header}</td>)
            })}
          </tr>
          </thead>

          <tbody>
          {rows.map((row: any) => {
            val = row;
            onClick = () => {
              if (this.props.onClick) {
                this.props.onClick(row)
              }
            }

            return (
              <tr onClick={onClick}>
                {columns.map((col: string, colKey: number) => {
                  return (<td key={colKey}>{val[col]}</td>)
                })}
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Template;
