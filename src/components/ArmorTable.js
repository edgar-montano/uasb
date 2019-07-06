import React, { Component } from "react";
import ArmorList from "../data/console.json";

class ArmorTable extends Component {
  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Defense</th>
            <th scope="col">Fire Res</th>
            <th scope="col">Slots</th>
            <th scope="col">Skills</th>
          </tr>
        </thead>

        {ArmorList.map(armor => (
          <tbody>
            <tr>
              <th scope="row">{armor.name}</th>
              <td>{armor.defense}</td>
              <td>{armor.fire_res}</td>
              <td>{armor.slots}</td>
              <td>{armor.skills.map(skill => skill[0] + skill[1] + " ")}</td>
            </tr>
          </tbody>
        ))}
      </table>
    );
  }
}

export default ArmorTable;
