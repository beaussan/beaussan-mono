import React, { ReactNode } from 'react';

const TableHeadItem: React.FC<React.PropsWithChildren> = ({ children }) => (
  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
    {children}
  </th>
);

const TableHead: React.FC<{ items: string[] }> = ({ items }) => (
  <thead>
    <tr>
      {items.map((value, index) => (
        <TableHeadItem key={index}>{value}</TableHeadItem>
      ))}
    </tr>
  </thead>
);

interface TBodyProps<T> {
  items: T[];
  children: (t: T, index: number, array: T[]) => any;
}

// eslint-disable-next-line
const TBody = <T extends unknown>({ items, children }: TBodyProps<T>) => (
  <tbody>
    {items.map((value, index, array) => (
      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
        {children(value, index, array)}
      </tr>
    ))}
  </tbody>
);

const Td: React.FC<React.PropsWithChildren<{ isMainInfo?: boolean }>> = ({
  isMainInfo = false,
  children,
}) => (
  <td
    className={`${
      isMainInfo ? 'text-gray-900 font-medium' : 'text-gray-500'
    } px-6 py-4 whitespace-nowrap text-sm leading-5`}
  >
    {children}
  </td>
);

export interface TableProps {
  children: ReactNode;
}
export const Table = ({ children }: TableProps) => (
  <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className=" overflow-hidden border border-gray-300 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            {children}
          </table>
        </div>
      </div>
    </div>
  </div>
);

Table.Td = Td;
Table.TBody = TBody;
Table.TableHead = TableHead;
