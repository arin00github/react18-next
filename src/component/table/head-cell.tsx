import { IOptions, ITableColumn } from "../../../types/table-inteface";

interface IHeadCell<T> {
  item: ITableColumn<T>;
  options?: IOptions;
  handleSort: (id: string, sort: boolean | undefined) => void;
}

export function HeadCell<T extends object>({
  item,
  handleSort,
  options,
}: IHeadCell<T>) {
  return <th>{item.header}</th>;
}
