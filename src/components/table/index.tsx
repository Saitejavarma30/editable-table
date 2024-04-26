import React, { useState } from "react";

interface JSONObject {
  [key: string]: string | number;
}

interface TableProps {
  headers: string[];
  data: JSONObject[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  const [tableData, setTableData] = useState(data);

  console.log(JSON.stringify(tableData) + "111");

  const handleOnchange = (value: string, rowIndex: number, header: string) => {
    const newData = [...tableData];
    newData[rowIndex][header] = value;
    console.log(JSON.stringify(newData));
    console.log(header, rowIndex);
    setTableData(newData);
  };

  return (
    <table>
      <thead>
        <tr>
          {headers.map((value, index) => {
            return <th>{value}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data?.map((value, rowIndex) => {
          return (
            <tr>
              {headers.map((header, colIndex) => {
                return (
                  <td>
                    <input
                      type="text"
                      value={data[rowIndex][colIndex]}
                      onChange={(e) =>
                        handleOnchange(e.target.value, rowIndex, header)
                      }
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
