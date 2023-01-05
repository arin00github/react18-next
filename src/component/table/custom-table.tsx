import React from "react";
import { IOptions, ITableColumn } from "../../../types/table-inteface";
import { HeadCell } from "./head-cell";

export interface ICustomTable<T> {
  aria_title?: string;
  data?: T[];
  handleRowClick?: (value: T) => void;
  handleSort: (columnId: string, sortValue: boolean | undefined) => void;
  columns: ITableColumn<T>[];
  options?: IOptions;
  minH?: string;
  addIdx?: boolean;
}

const CustomTable = <T extends object>({
  data,
  handleSort,
  handleRowClick,
  options,
  addIdx,
  columns,
  aria_title,
}: ICustomTable<T>) => {
  const exceptedData = ["id", "idx"];
  return (
    <div>
      {data && data[0] && (
        <table className="custom-table">
          <colgroup>
            {addIdx && <col style={{ width: "10%" }}></col>}
            {columns.map((colValue, idx) => {
              if (colValue.width) {
                return (
                  <col
                    key={`${aria_title}_col_${idx}`}
                    style={{ width: colValue.width }}
                  />
                );
              }
            })}
          </colgroup>
          <thead>
            <tr>{addIdx && <th className="text-center"></th>}</tr>
            {columns.map((col, idx) => {
              if (!exceptedData.includes(col.access)) {
                return (
                  <HeadCell<T>
                    options={options}
                    item={col}
                    key={`thead_${idx}`}
                    handleSort={(cellId, value) => {
                      if (col.sortable) {
                        handleSort(cellId, value);
                      }
                    }}
                  />
                );
              }
            })}
          </thead>
          <tbody>
            {data.map((row, index) => {
              return (
                <tr key={`row_${index}`}>
                  {columns &&
                    columns.map((col, idx) => {
                      const findItem = Object.entries(row).find(
                        (it) => it[0] === col.access
                      );
                      if (findItem && !exceptedData.includes(col.access)) {
                        return (
                          <td
                            className="h-10 leading-10 text-center"
                            key={`cell_${index}_${idx}`}
                          >
                            {col.cell ? col.cell(row) : findItem[1]}
                          </td>
                        );
                      }
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

const CustemTableSet = { CustomTable };

export default CustemTableSet;
