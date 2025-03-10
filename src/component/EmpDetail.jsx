import React from "react";

const EmpDetail = ({ employData }) => {
  return (
    <>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid white",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid white", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid white", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid white", padding: "8px" }}>Age</th>
            <th style={{ border: "1px solid white", padding: "8px" }}>
              Position
            </th>
            <th style={{ border: "1px solid white", padding: "8px" }}>
              Department
            </th>
            <th style={{ border: "1px solid white", padding: "8px" }}>
              Salary
            </th>
          </tr>
        </thead>
        <tbody>
          {employData.map((emp, index) => {
            return (
              <tr key={index}>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  {emp.id}
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  {emp.name}
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  {emp.age}
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  {emp.position}
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  {emp.department}
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  {emp.salary}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default EmpDetail;
