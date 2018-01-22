import React from 'react';
import {Card} from 'apparena-patterns-react';
import './styles.ci';

const title = 'Word';

function render() {
    const head = document.getElementsByTagName('head')[0];
    const alreadyInserted = Array.from(head.children).filter((child) => {
        return child.id === 'aa-css';
    }).length;

    if (!alreadyInserted) {
        const link = document.createElement('link');
        link.id = 'aa-css';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/dist/styles/corporate-identity.css';
        head.appendChild(link);
    }

    return (
        <Card>
            <div type="card-header">
                Logos
            </div>
            <div type="card-body">
                <div className="container__ci">
                    <div className="row__ci">
                        <div className="col-md-12__ci">
                            <h1 className="mt-3__ci text-xs-center__ci">Word templates</h1>
                            <table className="table__ci table-striped__ci">
                                <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Download</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Kündigung (deutsch)k</td>
                                    <td>Vorgefertigtes Kündigungsschreiben.</td>
                                    <td>
                                        <a href="https://s3.app-arena.com/marketing/corporate-identity/vorlagen/kuendigung.docx" className="btn btn-primary">
                                            Download
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Letter (A4) Blank</td>
                                    <td>Empty App-Arena.com letter</td>
                                    <td>
                                        <a href="https://aa-ads.s3.amazonaws.com/corporate-identity/word/letter-blank.docx" className="btn btn-primary">
                                            Download
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Letter (A4) with Dummy text</td>
                                    <td>Prefilled letter including address and sender</td>
                                    <td>
                                        <a href="https://aa-ads.s3.amazonaws.com/corporate-identity/word/letter-dummy-text.docx" className="btn btn-primary">
                                            Download
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Stellenanzeige (A4)</td>
                                    <td>Vorausgefüllte Stellenanzeige</td>
                                    <td>
                                        <a href="https://aa-ads.s3.amazonaws.com/corporate-identity/word/stellenanzeige.docx" className="btn btn-primary">
                                            Download
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Vertrag mit Deckblatt (A4)</td>
                                    <td>Vertrag mit Deckblatt, Inhaltsverzeichnis und Seitenzahlen</td>
                                    <td>
                                        <a href="https://aa-ads.s3.amazonaws.com/corporate-identity/word/vertrag-mit-deckblatt.docx" className="btn btn-primary">
                                            Download
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Arbeitsvertrag mit Deckblatt (A4)</td>
                                    <td>Vorlage eines Arbeitsvertrags Vollzeit.</td>
                                    <td>
                                        <a href="https://aa-ads.s3.amazonaws.com/corporate-identity/word/arbeitsvertrag.docx" className="btn btn-primary">
                                            Download
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default {
    title,
    render
}