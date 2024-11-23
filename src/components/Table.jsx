import React from 'react';

const Table = ({ headers, data, actions }) => (
  <table className="min-w-full bg-white">
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header} className="py-2 px-4 bg-gray-200 text-left">
            {header}
          </th>
        ))}
        {actions && <th className="py-2 px-4 bg-gray-200">Actions</th>}
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <tr key={idx} className="border-t hover:bg-slate-100">
          {Object.values(row).map((value, i) => (
            <td key={i} className="py-2 px-4 ">{value}</td>
          ))}
          {actions && (
            <td className="py-2 px-4 flex justify-evenly">
              {actions.map((Action, i) => (
                <Action key={i} row={row} />
              ))}
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
