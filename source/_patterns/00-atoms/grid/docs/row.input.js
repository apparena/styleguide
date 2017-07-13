import React from 'react';
import {ReactComponent, Table} from "apparena-patterns-react";

export default class RowInput extends ReactComponent {
    render () {
        return (
            <Table bordered inverse>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Default</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            children
                            <span className="badge badge-warning">
                                Required
                            </span>
                        </td>
                        <td>node</td>
                        <td>Give the row some childrens</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>className</td>
                        <td>string</td>
                        <td>Give the row a classname</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>justifyContent</td>
                        <td>oneOf</td>
                        <td>Select how the content should be justified</td>
                        <td><em>undefinded</em></td>
                        <td>start, center, end, around, between</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};