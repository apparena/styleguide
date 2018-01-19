import React from 'react';
import {Card} from 'apparena-patterns-react';
import Markdown from 'react-markdown';

const exampleText = `
Corporate communication
`;

export const title = 'Presentations';

export default function Presentations() {
    return (
        <Card>
            <div type="card-header">
                Corporate communication
            </div>
            <div type="card-body">
                <Markdown
                    source={exampleText}
                />
            </div>
        </Card>
    );
}