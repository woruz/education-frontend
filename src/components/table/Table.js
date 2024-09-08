import React from 'react';
import './Table.css';

const Table = ({ headers, children }) => {
  return (
    <div className="table-container">
      <table className="modern-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default Table;