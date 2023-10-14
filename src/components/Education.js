

import React from 'react';

function Education() {
  return (
    <div>
      <h1>Educational Background</h1>
      <table>
        <tr>
            <th>Grade</th>
            <th>School/Uni</th>
            <th>Marks/CGPA</th>
            <th>Year of passing</th>
        </tr>
        <tr>
            <td>10th</td>
            <td>The BSS School, Kolkata </td>
            <td>90%</td>
            <td>2019</td>
        </tr>
        <tr>
        <td>12th</td>
            <td>Army Public School, Kolkata </td>
            <td>95.4%</td>
            <td>2021</td>
        </tr>
        <tr>
        <td>3rd year </td>
            <td>VIT Bhopal </td>
            <td>9.3</td>
            <td>2025</td>
        </tr>
      </table>
    </div>
  );
}

export default Education;
