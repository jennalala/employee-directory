import React from "react";


const Employee = (props) => {
  return (
    <tr>
      <th scope="row">
        <img alt="Employee Head shot" src={props.picture.thumbnail} />
      </th>
      <td>
        {props.name.first} {props.name.last}
      </td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob.date.substring(0, 10)}</td>
    </tr>
  );
};

export default Employee;