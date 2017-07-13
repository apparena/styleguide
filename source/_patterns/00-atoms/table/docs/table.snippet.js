import React from "react";
import {Button} from "apparena-patterns-react";

export default class MyAwesomeClass extends React.ReactComponent {
    ...
    render() {
        return (
            <Table bordered="true">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Hometown</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jason Miller</td>
                        <td>22</td>
                        <td>Seatle</td>
                    </tr>
                    <tr>
                        <td>Mark Cooper</td>
                        <td>43</td>
                        <td>Denver</td>
                    </tr>
                </tbody>
        </Table>
        )
    }
}