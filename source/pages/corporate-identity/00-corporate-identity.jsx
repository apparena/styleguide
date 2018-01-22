import React from 'react';
import {Card} from 'apparena-patterns-react';
import {Link} from 'react-router-dom';
import './styles.ci';

const title = 'Corporate identity';

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

    /* eslint-disable react/self-closing-comp, react/jsx-closing-bracket-location */
    return (
        <Card>
            <div type="card-header">
                Corporate identity
            </div>
            <div type="card-body">
                <section className="header__ci">
                    <div className="container__ci">
                        <div className="row__ci">
                            <div className="col-md-12__ci">

                                <div className="mt-5__ci text-center__ci">
                                    <h2 className="mb-4">Design an <u className="text-uppercase__ci text-primary__ci">App-Arena</u> Experience</h2>

                                    <h5 className="text-muted__ci mb-4__ci">Principles, guidelines and assets for designing and building App-Arena
                                        experiences</h5>

                                    <svg id="header-objects-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 411.8 115.4">
                                        <g id="Sterne" fill="#5FB0E5">
                                            <circle cx="311.3" cy="24.4" r="1.2" id="Stern8"></circle>
                                            <circle cx="334.5" cy="1.3" r="1.3" id="Stern7"></circle>
                                            <path d="M44.5 20.4c-2.2.6-2.7 1.1-3.3 3.3-.6-2.2-1.1-2.7-3.3-3.3 2.2-.6 2.7-1.1 3.3-3.3.6 2.2 1 2.7 3.3 3.3z"
                                                  id="Stern6"></path>
                                            <path d="M380.1 2.6c-1.6.4-2 .8-2.4 2.4-.4-1.6-.8-2-2.4-2.4 1.6-.4 2-.8 2.4-2.4.4 1.7.8 2 2.4 2.4z"
                                                  id="Stern5"></path>
                                            <path d="M7.4 70.5c-2.1.6-2.6 1-3.1 3.1-.6-2.1-1-2.6-3.1-3.1 2.1-.6 2.6-1 3.1-3.1.5 2.1.9 2.5 3.1 3.1z"
                                                  id="Stern4"></path>
                                            <circle cx="10.4" cy="17.1" r="1" id="Stern3"></circle>
                                            <path d="M219.8 23.5c-1.3.3-1.6.6-1.9 1.9-.3-1.3-.6-1.6-1.9-1.9 1.3-.3 1.6-.6 1.9-1.9.3 1.3.6 1.6 1.9 1.9z"
                                                  id="Stern2"></path>
                                            <path d="M398.6 48.1c-1.7.5-2.1.8-2.6 2.6-.5-1.7-.8-2.1-2.6-2.6 1.7-.5 2.1-.8 2.6-2.6.5 1.7.9 2.1 2.6 2.6z"
                                                  id="Stern1"></path>
                                        </g>
                                        <g id="Objekte">
                                            <g id="Tablet2">
                                                <g id="XMLID_148_">
                                                    <path fill="#FFF"
                                                          d="M397.7 114.3h-40.5c-1.1 0-2-.9-2-2V60.6c0-1.1.9-2 2-2h40.5c1.1 0 2 .9 2 2v51.7c0 1.2-.9 2-2 2z"
                                                          id="XMLID_170_"></path>
                                                    <path fill="#0686D8"
                                                          d="M355.9 83.2h-1.5V61.8c0-2.1 1.7-3.9 3.9-3.9H385v1.5h-26.7c-1.3 0-2.4 1.1-2.4 2.4v21.4z"
                                                          id="XMLID_179_"></path>
                                                    <path fill="#0686D8"
                                                          d="M400.4 74.2h-1.5V61.8c0-1.3-1.1-2.4-2.4-2.4h-4.1v-1.5h4.1c2.1 0 3.9 1.7 3.9 3.9v12.4z"
                                                          id="XMLID_280_"></path>
                                                    <path fill="#0686D8" d="M387.3 57.9h3.9v1.5h-3.9z" id="XMLID_158_"></path>
                                                    <path fill="#0686D8" d="M372.3 62.1h10.4v1.5h-10.4z" id="XMLID_157_"></path>
                                                    <path fill="#0686D8"
                                                          d="M377.4 112.2c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4zm0-3.3c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9c.1-.5-.4-.9-.9-.9z"
                                                          id="XMLID_156_"></path>
                                                    <path fill="#D2E9F7" d="M358.7 66.7h37.5v39.5h-37.5z" id="XMLID_149_"></path>
                                                </g>
                                                <path fill="#5FB0E5" d="M382.7 87l-10-5.8v11.5l10-5.7-10-5.8v11.5z"></path>
                                            </g>
                                            <g id="Buch">
                                                <path fill="#FFF"
                                                      d="M7.4 81.7l.3-1.3c.1-.9 1-1.6 1.9-1.5l19.8 2.6c.9.1 1.6 1 1.5 1.9l-3.6 28-22.5-6.9 2.6-22.8z"
                                                      id="XMLID_769_"></path>
                                                <path fill="#0686D8"
                                                      d="M8.1 81.8l-1.5-.3.3-1.3c.1-.6.4-1.2.9-1.6.6-.4 1.2-.6 1.9-.5l6.1.8-.2 1.5-6.1-.8c-.3 0-.5 0-.7.2-.2.2-.3.4-.4.6l-.3 1.4z"
                                                      id="XMLID_144_"></path>
                                                <path fill="#D2E9F7"
                                                      d="M23.7 114.3H4.1c-1 0-1.9-.8-1.9-1.9V84.6c0-1 .8-1.9 1.9-1.9h19.6c1 0 1.9.8 1.9 1.9v27.8c0 1.1-.9 1.9-1.9 1.9z"
                                                      id="XMLID_141_"></path>
                                                <path fill="#0686D8"
                                                      d="M4.1 115.1c-1.5 0-2.6-1.2-2.6-2.6V84.6c0-1.5 1.2-2.6 2.6-2.6h14.6v1.5H4.1c-.6 0-1.1.5-1.1 1.1v27.8c0 .6.5 1.1 1.1 1.1v1.6z"
                                                      id="XMLID_135_"></path>
                                                <path fill="#0686D8" d="M0 85.3h4.3v1.5H0z" id="XMLID_760_"></path>
                                                <path fill="#0686D8" d="M0 88.4h4.3v1.5H0z" id="XMLID_759_"></path>
                                                <path fill="#0686D8" d="M0 91.4h4.3v1.5H0z" id="XMLID_140_"></path>
                                                <path fill="#0686D8" d="M0 94.5h4.3V96H0z" id="XMLID_139_"></path>
                                                <path fill="#0686D8" d="M0 97.6h4.3v1.5H0z" id="XMLID_763_"></path>
                                                <path fill="#0686D8" d="M0 100.6h4.3v1.5H0z" id="XMLID_138_"></path>
                                                <path fill="#0686D8" d="M0 103.9h4.2v1.5H0z" id="XMLID_137_"></path>
                                                <path fill="#0686D8" d="M0 106.9h4.2v1.5H0z" id="XMLID_136_"></path>
                                                <path fill="#0686D8" d="M0 109.9h4.2v1.5H0z" id="XMLID_93_"></path>
                                                <circle fill="#FFF" cx="13.9" cy="95.2" r="5.1" id="XMLID_768_"></circle>
                                                <path fill="#0686D8"
                                                      d="M13.9 101.1c-3.2 0-5.9-2.6-5.9-5.9 0-3.2 2.6-5.9 5.9-5.9 3.2 0 5.9 2.6 5.9 5.9-.1 3.3-2.7 5.9-5.9 5.9zm0-10.2c-2.4 0-4.4 2-4.4 4.4 0 2.4 2 4.4 4.4 4.4 2.4 0 4.4-2 4.4-4.4-.1-2.5-2-4.4-4.4-4.4z"
                                                      id="XMLID_771_"></path>
                                            </g>
                                            <g id="Tablet1">
                                                <g id="XMLID_117_">
                                                    <path fill="#9ECFEF"
                                                          d="M339.2 114.3V36.1c0-2.1-1.7-3.8-3.8-3.8h-56.9c-2.1 0-3.8 1.7-3.8 3.8v78.2h64.5z"
                                                          id="XMLID_132_"></path>
                                                    <path fill="#FFF"
                                                          d="M334 114.3V36.1c0-2.1-1.5-3.8-3.3-3.8h-48.2c-1.8 0-3.3 1.7-3.3 3.8v78.2H334z"
                                                          id="XMLID_131_"></path>
                                                    <path fill="#9ECFEF"
                                                          d="M274.7 42.2v-6.7c0-1.8 1.4-3.2 3.2-3.2H336c1.8 0 3.2 1.4 3.2 3.2v6.7h-64.5z"
                                                          id="XMLID_130_"></path>
                                                    <path fill="#0686D8"
                                                          d="M275.4 58h-1.5V35.5c0-2.2 1.8-4 4-4h8.6V33h-8.6c-1.4 0-2.5 1.1-2.5 2.5V58z"
                                                          id="XMLID_129_"></path>
                                                    <path fill="#0686D8"
                                                          d="M340 79.9h-1.5V35.5c0-1.4-1.1-2.5-2.5-2.5h-38.3v-1.5H336c2.2 0 4 1.8 4 4v44.4z"
                                                          id="XMLID_128_"></path>
                                                    <path fill="#0686D8" d="M289.6 31.5h4.4V33h-4.4z" id="XMLID_127_"></path>
                                                    <path fill="#0686D8" d="M274.7 41.7h64.6v1.5h-64.6z" id="XMLID_126_"></path>
                                                    <path fill="#0686D8" d="M282.1 37.1h1.5v1.5h-1.5z" id="XMLID_125_"></path>
                                                    <path fill="#0686D8" d="M286.5 37.1h1.5v1.5h-1.5z" id="XMLID_124_"></path>
                                                    <path fill="#0686D8" d="M290.8 37.1h1.5v1.5h-1.5z" id="XMLID_123_"></path>
                                                    <path fill="#9ECFEF" d="M283.3 49.9h47.3v18.6h-47.3z" id="XMLID_122_"></path>
                                                    <path fill="#9ECFEF" d="M283.3 80.3h14.4v18.6h-14.4z" id="XMLID_121_"></path>
                                                    <path fill="#D2E9F7" d="M299.8 80.3h14.4v18.6h-14.4z" id="XMLID_120_"></path>
                                                    <path fill="#5FB0E5" d="M316.2 80.3h14.4v18.6h-14.4z" id="XMLID_119_"></path>
                                                    <path fill="#0686D8" d="M296.9 73.7H317v1.5h-20.1z" id="XMLID_118_"></path>
                                                </g>
                                            </g>
                                            <g id="Rechner">
                                                <path fill="#FFF"
                                                      d="M51.4 114.3H82c1 0 1.8-.8 1.8-1.8v-39c0-1-.8-1.8-1.8-1.8H51.4c-1 0-1.8.8-1.8 1.8v39c0 1 .8 1.8 1.8 1.8z"
                                                      id="XMLID_111_"></path>
                                                <path fill="#0686D8"
                                                      d="M84.5 115.1H51.9c-1.7 0-3-1.4-3-3v-38c0-1.7 1.4-3 3-3h3.4v1.5h-3.4c-.8 0-1.5.7-1.5 1.5v38c0 .8.7 1.5 1.5 1.5H83v-12.3h1.5v13.8z"
                                                      id="XMLID_77_"></path>
                                                <path fill="#0686D8" d="M57.1 71h4.3v1.5h-4.3z" id="XMLID_109_"></path>
                                                <path fill="#0686D8" d="M63.6 71h13.8v1.5H63.6z" id="XMLID_108_"></path>
                                                <path fill="#5FB0E5" d="M75.6 91.1h3.5v3.5h-3.5z" id="XMLID_425_"></path>
                                                <path fill="#5FB0E5" d="M68.5 91.1H72v3.5h-3.5z" id="XMLID_424_"></path>
                                                <path fill="#5FB0E5" d="M61.4 91.1h3.5v3.5h-3.5z" id="XMLID_417_"></path>
                                                <path fill="#5FB0E5" d="M54.3 91.1h3.5v3.5h-3.5z" id="XMLID_416_"></path>
                                                <path fill="#5FB0E5" d="M75.6 97.5h3.5v3.5h-3.5z" id="XMLID_415_"></path>
                                                <path fill="#5FB0E5" d="M68.5 97.5H72v3.5h-3.5z" id="XMLID_402_"></path>
                                                <path fill="#5FB0E5" d="M61.4 97.5h3.5v3.5h-3.5z" id="XMLID_400_"></path>
                                                <path fill="#5FB0E5" d="M54.3 97.5h3.5v3.5h-3.5z" id="XMLID_399_"></path>
                                                <path fill="#5FB0E5" d="M75.6 104h3.5v3.5h-3.5z" id="XMLID_398_"></path>
                                                <path fill="#5FB0E5" d="M68.5 104H72v3.5h-3.5z" id="XMLID_397_"></path>
                                                <path fill="#5FB0E5" d="M61.4 104h3.5v3.5h-3.5z" id="XMLID_396_"></path>
                                                <path fill="#5FB0E5" d="M54.3 104h3.5v3.5h-3.5z" id="XMLID_395_"></path>
                                                <path fill="#0686D8" d="M79.8 95.3h-5v-5h5v5zm-3.5-1.5h2v-2h-2v2z"
                                                      id="XMLID_373_"></path>
                                                <path fill="#0686D8" d="M72.8 95.3h-5v-5h5v5zm-3.6-1.5h2v-2h-2v2z"
                                                      id="XMLID_380_"></path>
                                                <path fill="#0686D8" d="M65.7 95.3h-5v-5h5v5zm-3.5-1.5h2v-2h-2v2z"
                                                      id="XMLID_381_"></path>
                                                <path fill="#0686D8" d="M58.6 95.3h-5v-5h5v5zm-3.5-1.5h2v-2h-2v2z"
                                                      id="XMLID_382_"></path>
                                                <path fill="#0686D8" d="M79.8 101.8h-5v-5h5v5zm-3.5-1.5h2v-2h-2v2z"
                                                      id="XMLID_390_"></path>
                                                <path fill="#0686D8" d="M72.8 101.8h-5v-5h5v5zm-3.6-1.5h2v-2h-2v2z"
                                                      id="XMLID_388_"></path>
                                                <path fill="#0686D8" d="M65.7 101.8h-5v-5h5v5zm-3.5-1.5h2v-2h-2v2z"
                                                      id="XMLID_387_"></path>
                                                <path fill="#0686D8" d="M58.6 101.8h-5v-5h5v5zm-3.5-1.5h2v-2h-2v2z"
                                                      id="XMLID_384_"></path>
                                                <path fill="#0686D8" d="M79.8 108.3h-5v-5h5v5zm-3.5-1.5h2v-2h-2v2z"
                                                      id="XMLID_394_"></path>
                                                <path fill="#0686D8" d="M72.8 108.3h-5v-5h5v5zm-3.6-1.5h2v-2h-2v2z"
                                                      id="XMLID_393_"></path>
                                                <path fill="#0686D8" d="M65.7 108.3h-5v-5h5v5zm-3.5-1.5h2v-2h-2v2z"
                                                      id="XMLID_107_"></path>
                                                <path fill="#0686D8" d="M58.6 108.3h-5v-5h5v5zm-3.5-1.5h2v-2h-2v2z"
                                                      id="XMLID_391_"></path>
                                                <path fill="#9ECFEF" d="M54.3 77.9h24.8v8.5H54.3z" id="XMLID_379_"></path>
                                                <path fill="#D2E9F7" d="M76.9 86.4h-8.8l-8.4-8.5h8.8z" id="XMLID_385_"></path>
                                                <path fill="#D2E9F7" d="M61.6 86.4l-7.3-7.2v-1.3h3.5l8.5 8.5z" id="XMLID_383_"></path>
                                                <path fill="#0686D8" d="M79.8 87.2H53.6v-10h26.3v10zm-24.7-1.5h23.3v-7H55.1v7z"
                                                      id="XMLID_378_"></path>
                                            </g>
                                            <g id="Lineal">
                                                <path fill="#D2E9F7"
                                                      d="M37.3 114.3h7.8c.8 0 1.4-.6 1.4-1.4V67.7c0-.8-.6-1.4-1.4-1.4h-7.8c-.8 0-1.4.6-1.4 1.4V113c0 .7.6 1.3 1.4 1.3z"
                                                      id="XMLID_106_"></path>
                                                <path fill="#0686D8"
                                                      d="M45.1 115.1h-7.8c-1.2 0-2.2-1-2.2-2.2V67.7c0-1.2 1-2.2 2.2-2.2h7.8c1.2 0 2.2 1 2.2 2.2V113c-.1 1.1-1 2.1-2.2 2.1zM37.3 67c-.4 0-.7.3-.7.7V113c0 .4.3.7.7.7h7.8c.4 0 .7-.3.7-.7V67.7c0-.4-.3-.7-.7-.7h-7.8z"
                                                      id="XMLID_105_"></path>
                                                <path fill="#0686D8" d="M40 70.9h6.5v1.5H40z" id="XMLID_104_"></path>
                                                <path fill="#0686D8" d="M43.2 75.5h3.2V77h-3.2z" id="XMLID_103_"></path>
                                                <path fill="#0686D8" d="M43.2 80h3.2v1.5h-3.2z" id="XMLID_102_"></path>
                                                <path fill="#0686D8" d="M43.2 84.6h3.2v1.5h-3.2z" id="XMLID_101_"></path>
                                                <path fill="#0686D8" d="M40 89.1h6.5v1.5H40z" id="XMLID_100_"></path>
                                                <path fill="#0686D8" d="M43.2 93.7h3.2v1.5h-3.2z" id="XMLID_99_"></path>
                                                <path fill="#0686D8" d="M43.2 98.2h3.2v1.5h-3.2z" id="XMLID_98_"></path>
                                                <path fill="#0686D8" d="M43.2 102.7h3.2v1.5h-3.2z" id="XMLID_97_"></path>
                                                <path fill="#0686D8" d="M40 107.3h6.5v1.5H40z" id="XMLID_95_"></path>
                                            </g>
                                            <g id="Stift">
                                                <path fill="#FFF"
                                                      d="M29.8 114.3h2.7c.2 0 .4-.2.4-.4V74.7l-1.4-2.9c-.1-.3-.5-.3-.7 0l-1.4 2.9V114c0 .2.2.3.4.3z"
                                                      id="XMLID_92_"></path>
                                                <path fill="#5FB0E5" d="M29.4 76.2h3.5v34.4h-3.5z" id="XMLID_270_"></path>
                                                <path fill="#0686D8"
                                                      d="M33.6 115.1h-5V74.7l1.6-3.5c.2-.3.5-.6.9-.6s.7.2.9.6l1.6 3.5v40.4zm-3.5-1.5h2V75l-1-2.1-1 2.1v38.6z"
                                                      id="XMLID_89_"></path>
                                                <path fill="#0686D8" d="M29.4 75.4H33v1.5h-3.6z" id="XMLID_84_"></path>
                                                <path fill="#0686D8" d="M29.1 109.9h4v1.5h-4z" id="XMLID_75_"></path>
                                            </g>
                                            <path fill="#0565A2"
                                                  d="M82 71.8h-4.6V71h-.8v22.8c0 3.3 2.7 5.9 5.9 5.9h1.3v-26c0-1.1-.8-1.9-1.8-1.9z"
                                                  id="BildschirmSchatten" opacity=".3"></path>
                                            <g id="Bildschirm">
                                                <path fill="#5FB0E5"
                                                      d="M173.2 87.6H84.9c-3.1 0-5.7-2.5-5.7-5.7V34c0-3.1 2.5-5.7 5.7-5.7h88.2c3.1 0 5.7 2.5 5.7 5.7v47.9c.1 3.2-2.5 5.7-5.6 5.7z"
                                                      id="XMLID_472_"></path>
                                                <path fill="#0686D8" d="M97.8 27.6h51.6v1.5H97.8z" id="XMLID_82_"></path>
                                                <path fill="#0686D8" d="M92 27.6h4.2v1.5H92z" id="XMLID_469_"></path>
                                                <path fill="#0686D8"
                                                      d="M178.9 88.4H78.5V33.5c0-3.2 2.6-5.8 5.8-5.8h5.1v1.5h-5.1c-2.4 0-4.3 2-4.3 4.3v53.4h98.8v1.5z"
                                                      id="XMLID_468_"></path>
                                                <path fill="#FFF" d="M84.7 34.2h88.9V81H84.7z" id="XMLID_467_"></path>
                                                <path fill="#FFF" d="M114.1 96.6h30v17.8h-30z" id="XMLID_466_"></path>
                                                <path fill="#D2E9F7" d="M114.1 96.6h30v8.9h-30z" id="XMLID_465_"></path>
                                                <path fill="#0686D8" d="M144.8 113.6h-1.5V97.3h-28.5v16.3h-1.5V95.8h31.5z"
                                                      id="XMLID_461_"></path>
                                                <path fill="#FFF"
                                                      d="M178.9 85.4H79.3v7.9c0 3.1 2.5 5.6 5.6 5.6h88.4c3.1 0 5.6-2.5 5.6-5.6v-7.9z"
                                                      id="XMLID_463_"></path>
                                                <path fill="#0686D8"
                                                      d="M157.5 99.6H84.4c-3.3 0-5.9-2.7-5.9-5.9v-9h79v1.5H80v7.5c0 2.4 2 4.4 4.4 4.4h73.1v1.5z"
                                                      id="XMLID_462_"></path>
                                                <path fill="#5FB0E5" d="M91 37.5h76.6v16.6H91z" id="XMLID_449_"></path>
                                                <path fill="#9ECFEF" d="M91 56.7h20.4v21.5H91z" id="XMLID_473_"></path>
                                                <path fill="#D2E9F7" d="M119.1 56.6h20.4v21.5h-20.4z" id="XMLID_474_"></path>
                                                <path fill="#9ECFEF" d="M147.2 56.6h20.4v21.5h-20.4z" id="XMLID_475_"></path>
                                            </g>
                                            <path fill="#0565A2"
                                                  d="M158.5 59.6h-.8v39.3h15.6c3.1 0 5.6-2.5 5.6-5.6v-63c0-1.1-.9-2-2-2h-27.5v-.8h-.3v26.6c0 1.9 1.6 3.5 3.5 3.5h5.8v2zm-7.6-4.4c.2.3.5.5.7.7-.2-.1-.5-.4-.7-.7z"
                                                  id="LaptopSchatten" opacity=".3"></path>
                                            <g id="Laptop">
                                                <path fill="#5FB0E5"
                                                      d="M268.5 110h-107c-.6 0-1-.5-1-1V32.6c0-.6.4-1 1-1h107c.6 0 1 .4 1 1V109c0 .5-.5 1-1 1z"
                                                      id="XMLID_81_"></path>
                                                <path fill="#0686D8"
                                                      d="M163.2 110.7c-1.9 0-3.5-1.6-3.5-3.5V59.6h1.5v47.7c0 1.1.9 2 2 2v1.4z"
                                                      id="XMLID_147_"></path>
                                                <path fill="#0686D8"
                                                      d="M270.2 58.3h-1.5v-24c0-1.1-.9-2-2-2h-57.5v-1.5h57.5c1.9 0 3.5 1.6 3.5 3.5v24z"
                                                      id="XMLID_145_"></path>
                                                <path fill="#389EE0" d="M165.8 37.8h97.9v63.6h-97.9z" id="XMLID_79_"></path>
                                                <path fill="#FFF"
                                                      d="M267.6 114.3H161.2c-2.6 0-4.7-1.9-5.1-4.4l-.8-4.6h49.3l1.9 2.7h13.6l2-2.7h52l-.7 4c-.4 2.9-2.9 5-5.8 5z"
                                                      id="XMLID_332_"></path>
                                                <path fill="#0686D8"
                                                      d="M267.6 115.1H161.2c-2.9 0-5.4-2.1-5.9-5l-.9-5.5H205l1.9 2.7h12.9l2-2.7H275l-.8 4.9c-.5 3.2-3.3 5.6-6.6 5.6zm-111.5-9l.6 3.8c.4 2.2 2.2 3.7 4.4 3.7h106.4c2.6 0 4.7-1.8 5.1-4.3l.5-3.2h-50.7l-2 2.7H206l-1.9-2.7h-48z"
                                                      id="XMLID_78_"></path>
                                                <g id="XMLID_648_" fill="#FFF">
                                                    <path d="M178.6 44.1h11v1.4h-11z" id="XMLID_597_"></path>
                                                    <path d="M184.1 49h7.6v1.4h-7.6z" id="XMLID_596_"></path>
                                                    <path d="M208.4 49h52.7v1.4h-52.7z" id="XMLID_595_"></path>
                                                    <path d="M196.9 49h8.5v1.4h-8.5z" id="XMLID_594_"></path>
                                                    <path d="M186.7 53.1h15v1.4h-15z" id="XMLID_593_"></path>
                                                    <path d="M192.8 58.9h19.1v1.4h-19.1z" id="XMLID_592_"></path>
                                                    <path d="M178.6 64.3h20.9v1.4h-20.9z" id="XMLID_591_"></path>
                                                    <path d="M201.7 64.3h15.1v1.4h-15.1z" id="XMLID_590_"></path>
                                                    <path d="M184.1 69.8h28v1.4h-28z" id="XMLID_589_"></path>
                                                    <path d="M223.5 69.8h18.6v1.4h-18.6z" id="XMLID_588_"></path>
                                                    <path d="M213.3 69.8h8.8v1.4h-8.8z" id="XMLID_587_"></path>
                                                    <path d="M193.4 75.2h24.5v1.4h-24.5z" id="XMLID_586_"></path>
                                                    <path d="M186.7 75.2h5.1v1.4h-5.1z" id="XMLID_585_"></path>
                                                    <path d="M178.6 79.2h16.7v1.4h-16.7z" id="XMLID_32_"></path>
                                                    <path d="M196.6 79.2h5.7v1.4h-5.7z" id="XMLID_582_"></path>
                                                    <path d="M204 79.2h27.4v1.4H204z" id="XMLID_581_"></path>
                                                    <path d="M233.5 79.2h24.7v1.4h-24.7z" id="XMLID_580_"></path>
                                                    <path d="M184.1 84.6h8.7V86h-8.7z" id="XMLID_579_"></path>
                                                    <path d="M195.3 84.6h20.6V86h-20.6z" id="XMLID_578_"></path>
                                                    <path d="M188.8 90.1h16.7v1.4h-16.7z" id="XMLID_577_"></path>
                                                    <path d="M209 90.1h16.7v1.4H209z" id="XMLID_576_"></path>
                                                    <path d="M228.3 90.1H244v1.4h-15.7z" id="XMLID_575_"></path>
                                                    <path d="M254.8 58.9h4.7v1.4h-4.7z" id="XMLID_351_"></path>
                                                    <path d="M213.6 58.9h39.1v1.4h-39.1z" id="XMLID_30_"></path>
                                                    <path d="M192.8 44.1h44.5v1.4h-44.5z" id="XMLID_328_"></path>
                                                    <path d="M171.2 42h2.3v2.3h-2.3z" id="XMLID_326_"></path>
                                                    <path d="M171.2 48.1h2.3v2.3h-2.3z" id="XMLID_294_"></path>
                                                    <path d="M171.2 54.1h2.3v2.3h-2.3z" id="XMLID_291_"></path>
                                                    <path d="M171.2 60.2h2.3v2.3h-2.3z" id="XMLID_182_"></path>
                                                    <path d="M171.2 66.3h2.3v2.3h-2.3z" id="XMLID_181_"></path>
                                                    <path d="M171.2 72.4h2.3v2.3h-2.3z" id="XMLID_178_"></path>
                                                    <path d="M171.2 78.5h2.3v2.3h-2.3z" id="XMLID_177_"></path>
                                                    <path d="M171.2 84.6h2.3v2.3h-2.3z" id="XMLID_29_"></path>
                                                    <path d="M171.2 90.7h2.3V93h-2.3z" id="XMLID_25_"></path>
                                                    <path d="M171.2 96.7h2.3V99h-2.3z" id="XMLID_24_"></path>
                                                </g>
                                                <path fill="#0565A2"
                                                      d="M161.5 31.6c-.6 0-1 .4-1 1V59h43.8c2.6 0 4.6-2.1 4.6-4.6V31.6h-47.4z"
                                                      opacity=".3"></path>
                                                <path fill="#FFF"
                                                      d="M202.3 57h-45.7c-2.6 0-4.6-2.1-4.6-4.6V21.8c0-2.6 2.1-4.6 4.6-4.6h45.7c2.6 0 4.6 2.1 4.6 4.6v30.6c0 2.5-2.1 4.6-4.6 4.6z"
                                                      id="XMLID_1454_"></path>
                                                <path fill="#D2E9F7"
                                                      d="M151.9 25.6v-5.7c0-1.5 1.2-2.8 2.8-2.8h49.5c1.5 0 2.8 1.2 2.8 2.8v5.7h-55.1z"
                                                      id="XMLID_1453_"></path>
                                                <path fill="#0686D8"
                                                      d="M204.1 57.7h-49.5c-1.9 0-3.5-1.6-3.5-3.5V19.9c0-1.9 1.6-3.5 3.5-3.5h7.3v1.5h-7.3c-1.1 0-2 .9-2 2v34.3c0 1.1.9 2 2 2h49.5c1.1 0 2-.9 2-2V19.9c0-1.1-.9-2-2-2h-32.6v-1.5h32.6c1.9 0 3.5 1.6 3.5 3.5v34.3c0 2-1.5 3.5-3.5 3.5z"
                                                      id="XMLID_1452_"></path>
                                                <path fill="#0686D8" d="M164.1 16.4h4.4v1.5h-4.4z" id="XMLID_882_"></path>
                                                <path fill="#0686D8" d="M151.9 25h55v1.5h-55z" id="XMLID_879_"></path>
                                                <path fill="#0686D8" d="M156.3 21.1h.9v1.5h-.9z" id="XMLID_876_"></path>
                                                <path fill="#0686D8" d="M159.9 21.1h.9v1.5h-.9z" id="XMLID_873_"></path>
                                                <path fill="#0686D8" d="M163.4 21.1h.9v1.5h-.9z" id="XMLID_872_"></path>
                                                <path d="M168.8 39.9v-1.7l5.9-2.8v1.8l-3.9 1.8 3.9 1.8v1.8l-5.9-2.7zm12.3-5.9h1.7l-5.1 11.2H176l5.1-11.2zm8.8 4.2v1.7l-5.9 2.8v-1.8l3.9-1.8-3.9-1.8v-1.8l5.9 2.7z"
                                                      id="XMLID_76_" fill="#0686D8"></path>
                                            </g>
                                            <path fill="#0565A2"
                                                  d="M274.2 109.5l.8-4.9h-5.5V58.9h-8c-1.2 0-2.1 1-2.1 2.1v52c0 1.2 1 2.1 2.1 2.1h6.1c3.3 0 6.1-2.4 6.6-5.6z"
                                                  id="PhoneSchatten2" opacity=".3"></path>
                                            <path fill="#0565A2"
                                                  d="M293.6 58.9h-29.1c-1.2 0-2.1 1-2.1 2.1v52c0 1.2 1 2.1 2.1 2.1h29.1c1.2 0 2.1-1 2.1-2.1V61c.1-1.2-.9-2.1-2.1-2.1z"
                                                  id="PhoneSchatten1" opacity=".3"></path>
                                            <g id="Phone">
                                                <path fill="#FFF"
                                                      d="M292.6 114.3h-29.1c-.8 0-1.4-.6-1.4-1.4V61c0-.8.6-1.4 1.4-1.4h29.1c.8 0 1.4.6 1.4 1.4v52c0 .7-.6 1.3-1.4 1.3z"
                                                      id="XMLID_457_"></path>
                                                <path fill="#0686D8"
                                                      d="M292.6 115.1h-29.1c-1.2 0-2.1-1-2.1-2.1V61c0-1.2 1-2.1 2.1-2.1h29.1c1.2 0 2.1 1 2.1 2.1v52c.1 1.1-.9 2.1-2.1 2.1zm-29.1-54.7c-.4 0-.6.3-.6.6v52c0 .4.3.6.6.6h29.1c.4 0 .6-.3.6-.6V61c0-.4-.3-.6-.6-.6h-29.1z"
                                                      id="XMLID_33_"></path>
                                                <path fill="#D2E9F7" d="M265 68.6h26.2v35.5H265z" id="XMLID_455_"></path>
                                                <path fill="#0686D8" d="M271.9 64.1h12.4v1.5h-12.4z" id="XMLID_452_"></path>
                                                <path fill="#0686D8"
                                                      d="M278.1 110.4c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1-.1 1.1-1 2.1-2.1 2.1zm0-2.7c-.3 0-.6.3-.6.6s.3.6.6.6.6-.3.6-.6c-.1-.3-.3-.6-.6-.6z"
                                                      id="XMLID_451_"></path>
                                                <path fill="#5FB0E5" d="M267.1 70.9h21.8V81h-21.8z" id="XMLID_476_"></path>
                                                <path fill="#9ECFEF" d="M267.1 83.4h9.6v19.3h-9.6z" id="XMLID_477_"></path>
                                                <path fill="#0686D8" d="M279.6 83.4h9.6v19.3h-9.6z" id="XMLID_478_"></path>
                                            </g>
                                            <path fill="#0565A2"
                                                  d="M17.5 79.9V89h.1l1.2 20.2c.1 1.8.6 3.5 1.4 5.1h1.7c.4-1 1.3-3.4 1.4-4.8L24.6 89h.1v-8.2l-7.2-.9z"
                                                  id="PinselSchatten" opacity=".3"></path>
                                            <g id="Pinsel">
                                                <path fill="#5FB0E5"
                                                      d="M19.4 73.5c0-1.7 1.9-3 2.5-4 1.2-2 1.2-5.6 1.2-5.6 3.1.6 3.7 7 3.7 9.6 0 2.6-1.6 4.7-3.7 4.7-2 0-3.7-2.1-3.7-4.7z"
                                                      id="XMLID_635_"></path>
                                                <path fill="#FFF"
                                                      d="M23.1 85c1.6 0 2.9 1.6 2.8 3.4l-1.4 21.1c-.1 1.7-.6 3.3-1.3 4.7l-.1.1c-.9-1.5-1.4-3.3-1.5-5.1l-1.3-20.9c-.1-1.8 1.2-3.3 2.8-3.3z"
                                                      id="XMLID_634_"></path>
                                                <path fill="#0686D8"
                                                      d="M23.1 79c-2.4 0-4.4-2.4-4.4-5.5 0-1.5 1-2.6 1.8-3.5.3-.3.6-.7.8-.9 1-1.8 1.1-5.2 1.1-5.2V63l.9.2c4.1.7 4.3 8.8 4.3 10.4-.1 2.9-2.1 5.4-4.5 5.4zm.7-14c-.1 1.3-.4 3.4-1.2 4.8-.2.4-.6.8-1 1.2-.7.7-1.4 1.6-1.4 2.5 0 2.2 1.3 4 2.9 4s2.9-1.8 2.9-4c0-2.9-.6-7.1-2.2-8.5z"
                                                      id="XMLID_116_"></path>
                                                <path fill="#0686D8"
                                                      d="M23.1 114.9c-.3 0-.6-.2-.8-.4-.9-1.6-1.4-3.4-1.5-5.2l-1.3-20.9c-.1-1.2.3-2.3 1.1-3.1 1.3-1.4 3.6-1.4 4.9 0 .8.8 1.2 1.9 1.1 3.1l-1.4 21.1c-.1 1.5-1 3.9-1.4 4.9-.1.3-.3.5-.7.5zm0-29.2c-.5 0-1 .2-1.4.6-.5.5-.7 1.2-.7 2l1.3 20.9c.1 1.1.3 2.2.7 3.3.4-1.1.7-2.3.8-3l1.4-21.1c0-.8-.2-1.5-.7-2-.4-.5-.9-.7-1.4-.7z"
                                                      id="XMLID_114_"></path>
                                                <path fill="#9ECFEF" d="M20.3 77h5.6v11.3h-5.6z" id="XMLID_626_"></path>
                                                <path fill="#D2E9F7" d="M20.3 77h2.8v11.3h-2.8z" id="XMLID_113_"></path>
                                                <path fill="#0686D8" d="M26.7 89h-7.1V76.2h7.1V89zM21 87.5h4.1v-9.8H21v9.8z"
                                                      id="XMLID_636_"></path>
                                            </g>
                                            <g id="Auge">
                                                <path fill="#FFF"
                                                      d="M58.6 43.2S49.8 53 42.7 53s-15.9-9.8-15.9-9.8 8.8-9.8 15.9-9.8 15.9 9.8 15.9 9.8z"
                                                      id="XMLID_625_"></path>
                                                <path fill="#0686D8"
                                                      d="M42.6 53.7c-7.4 0-16.1-9.6-16.5-10l-.5-.5.5-.5c.4-.4 9.1-10 16.5-10s16.1 9.6 16.5 10l.5.5-.5.5c-.3.4-9.1 10-16.5 10zM27.7 43.2c1.9 2 9.1 9 14.9 9 5.8 0 13-7.1 14.9-9-1.9-2-9.1-9-14.9-9-5.7-.1-13 7-14.9 9z"
                                                      id="XMLID_96_"></path>
                                                <g id="XMLID_620_">
                                                    <path fill="#9ECFEF" d="M49.7 43.2c0-3.9-3.1-7-7-7.1v14.1c3.9 0 7-3.1 7-7z"
                                                          id="XMLID_624_"></path>
                                                    <path fill="#D2E9F7"
                                                          d="M42.6 36.1c-3.9 0-7.1 3.2-7.1 7.1 0 3.9 3.2 7.1 7.1 7.1V36.1c.1 0 .1 0 0 0z"
                                                          id="XMLID_622_"></path>
                                                </g>
                                                <circle fill="#FFF" cx="42.6" cy="43.2" r="3.5" id="XMLID_615_"></circle>
                                                <path fill="#0686D8"
                                                      d="M42.6 51.3c-4.5 0-8.2-3.7-8.2-8.2 0-4.5 3.7-8.2 8.2-8.2 4.5 0 8.2 3.7 8.2 8.2 0 4.6-3.7 8.2-8.2 8.2zm0-14.8c-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7 6.7-3 6.7-6.7-3-6.7-6.7-6.7z"
                                                      id="XMLID_614_"></path>
                                                <circle fill="#5FB0E5" cx="42.6" cy="43.2" r="2.2" id="XMLID_613_"></circle>
                                                <path fill="#0686D8" d="M29.9 34.4h-1.5v-3.6h3.3v1.5h-1.8z" id="XMLID_611_"></path>
                                                <path fill="#0686D8" d="M57 57h-3.3v-1.5h1.8v-2H57z" id="XMLID_627_"></path>
                                            </g>
                                            <path fill="#0565A2" d="M333 81.7h6.3v32.6H333z" id="LinealeSchatten2" opacity=".3"></path>
                                            <path fill="#0565A2"
                                                  d="M376.7 102.5h-17.5l12-12-8.9-8.9-7.1 7.1v23.7c0 1.1.9 2 2 2h19.5v-11.9z"
                                                  id="LinealeSchatten1" opacity=".3"></path>
                                            <g id="Lineale">
                                                <g id="XMLID_702_">
                                                    <path fill="#FFF" d="M342.1 103.2h31.8v11.1h-31.8z" id="XMLID_693_"></path>
                                                    <path fill="#D2E9F7" d="M368.6 103.2h5.4v11.1h-5.4z" id="XMLID_692_"></path>
                                                    <path fill="#DBEDF9" d="M363.2 103.2h5.4v11.1h-5.4z" id="XMLID_691_"></path>
                                                    <path fill="#E4F2FA" d="M357.8 103.2h5.4v11.1h-5.4z" id="XMLID_690_"></path>
                                                    <path fill="#EDF6FC" d="M352.4 103.2h5.4v11.1h-5.4z" id="XMLID_689_"></path>
                                                    <path fill="#F6FBFD" d="M347.1 103.2h5.4v11.1h-5.4z" id="XMLID_134_"></path>
                                                    <path fill="#0686D8"
                                                          d="M374.7 115.1h-33.3v-12.6h33.3v12.6zm-31.8-1.5h30.3V104h-30.3v9.6z"
                                                          id="XMLID_658_"></path>
                                                    <path fill="#FFF" d="M360.3 82.63l7.84 7.85-22.48 22.5-7.85-7.86z"
                                                          id="XMLID_678_"></path>
                                                    <path fill="#9ECFEF" d="M360.3 82.68l7.86 7.85-3.82 3.82-7.85-7.85z"
                                                          id="XMLID_677_"></path>
                                                    <path fill="#B1D9F2" d="M356.44 86.42l7.85 7.85-3.86 3.8-7.85-7.83z"
                                                          id="XMLID_676_"></path>
                                                    <path fill="#C5E2F5" d="M352.64 90.22l7.85 7.85-3.86 3.82-7.84-7.9z"
                                                          id="XMLID_675_"></path>
                                                    <path fill="#D8ECF9" d="M348.84 94.03l7.85 7.85-3.86 3.82-7.85-7.85z"
                                                          id="XMLID_674_"></path>
                                                    <path fill="#ECF5FC" d="M345.05 97.84l7.84 7.84-3.85 3.82-7.85-7.85z"
                                                          id="XMLID_673_"></path>
                                                    <path fill="#0686D8"
                                                          d="M345.6 114.1l-8.9-8.9 23.6-23.6 8.9 8.9-23.6 23.6zm-6.8-8.9l6.8 6.8 21.5-21.5-6.8-6.8-21.5 21.5z"
                                                          id="XMLID_657_"></path>
                                                    <path fill="#FFF" d="M335.7 82.4h11.1v31.8h-11.1z" id="XMLID_671_"></path>
                                                    <path fill="#5FB0E5" d="M335.7 82.4h11.1v5.4h-11.1z" id="XMLID_670_"></path>
                                                    <path fill="#7FC0EA" d="M335.7 87.8h11.1v5.4h-11.1z" id="XMLID_669_"></path>
                                                    <path fill="#9FD0EF" d="M335.7 93.2h11.1v5.4h-11.1z" id="XMLID_668_"></path>
                                                    <path fill="#BFDFF5" d="M335.7 98.6h11.1v5.4h-11.1z" id="XMLID_667_"></path>
                                                    <path fill="#DFEFFA" d="M335.7 104h11.1v5.4h-11.1z" id="XMLID_666_"></path>
                                                    <circle fill="#0686D8" cx="341.3" cy="111.7" r="1.5" id="XMLID_665_"></circle>
                                                    <path fill="#0686D8"
                                                          d="M347.6 115.1H335V81.7h12.6v33.4zm-11.1-1.5h9.6V83.2h-9.6v30.4z"
                                                          id="XMLID_649_"></path>
                                                    <path fill="#0686D8" d="M336 87h10.8v1.5H336z" id="XMLID_660_"></path>
                                                    <path fill="#0686D8" d="M336 92.4h10.8v1.5H336z" id="XMLID_659_"></path>
                                                    <path fill="#0686D8" d="M336 97.8h10.8v1.5H336z" id="XMLID_661_"></path>
                                                    <path fill="#0686D8" d="M336 103.2h10.8v1.5H336z" id="XMLID_664_"></path>
                                                    <path fill="#0686D8" d="M357.18 86.18l7.63 7.64-1.02 1.06-7.63-7.64z"
                                                          id="XMLID_694_"></path>
                                                    <path fill="#0686D8" d="M353.2 89.72l7.65 7.63-1.06 1.06-7.68-7.6z"
                                                          id="XMLID_133_"></path>
                                                    <path fill="#0686D8" d="M349.17 93.32l7.64 7.64-1.02 1.06-7.64-7.64z"
                                                          id="XMLID_695_"></path>
                                                    <path fill="#0686D8" d="M347.56 99.25l5.94 5.94-1.06 1.02-5.94-5.94z"
                                                          id="XMLID_696_"></path>
                                                    <path fill="#0686D8" d="M351.7 105.7h1.5v8.6h-1.5z" id="XMLID_699_"></path>
                                                    <path fill="#0686D8" d="M357.1 103.2h1.5v11.1h-1.5z" id="XMLID_698_"></path>
                                                    <path fill="#0686D8" d="M362.5 103.2h1.5v11.1h-1.5z" id="XMLID_700_"></path>
                                                    <path fill="#0686D8" d="M367.8 103.2h1.5v11.1h-1.5z" id="XMLID_701_"></path>
                                                    <path fill="#0686D8" d="M347.3 106.63l2.33 2.33-1.06 1.06-2.33-2.33z"
                                                          id="XMLID_697_"></path>
                                                    <path fill="#0686D8" d="M336 108.6h10.8v1.5H336z" id="XMLID_672_"></path>
                                                </g>
                                            </g>
                                            <path fill="#0565A2"
                                                  d="M399.7 112.4V76.6c-.6-.1-1.2-.2-1.9-.2-1.6 0-3.1.3-4.5.9l.3.7c-.5.2-.9.4-1.4.7l-.4-.7-.2.1c-.7.4-1.1.6-1.8 1.4l.5.5c-.4.4-.8.7-1.1 1.1l-.6-.5c-1.8 2.2-2.8 4.9-2.8 7.8 0 4.1 2.2 8 5.7 10.2v2.3h-.9v1.5h.9v1.1h-.9v1.5h.9v1.1h-.9v1.5h.9v1.1h-.9v1.5h1.2l1.6 3h2v.5c0 .3.1.5.2.7h2.2c1-.1 1.9-.9 1.9-2z"
                                                  id="BirneSchatten" opacity=".3"></path>
                                            <g id="Birne">
                                                <path fill="#5FB0E5"
                                                      d="M400.4 114.6H399c-.6 0-1-.5-1-1v-3.2c0-.6.4-1 1-1h1.4c.6 0 1 .4 1 1v3.2c0 .6-.4 1-1 1z"
                                                      id="XMLID_255_"></path>
                                                <path fill="#0686D8"
                                                      d="M400.4 115.4H399c-1 0-1.8-.8-1.8-1.8v-3.2c0-1 .8-1.8 1.8-1.8h1.4c1 0 1.8.8 1.8 1.8v3.2c0 1-.8 1.8-1.8 1.8zm-1.4-5.2c-.1 0-.3.1-.3.3v3.2c0 .1.1.3.3.3h1.4c.1 0 .3-.1.3-.3v-3.2c0-.1-.1-.3-.3-.3H399z"
                                                      id="XMLID_254_"></path>
                                                <path fill="#FFF"
                                                      d="M411.1 88.4c0-6.2-5.1-11.3-11.3-11.3s-11.3 5.1-11.3 11.3c0 4.2 2.3 7.8 5.7 9.8v11.1l1.6 3h7.8l1.9-3V98.2c3.3-1.9 5.6-5.6 5.6-9.8z"
                                                      id="XMLID_253_"></path>
                                                <path fill="#9ECFEF" d="M394.2 102.2v7.1l1.6 3.1h7.7l1.9-3.1v-7.1z"
                                                      id="XMLID_252_"></path>
                                                <path fill="#5FB0E5" d="M405.4 109.3l-1.9 3.1h-7.7l-1.6-3.1z" id="XMLID_251_"></path>
                                                <path fill="#0686D8"
                                                      d="M403.9 113.1h-8.6l-1.9-3.6V98.6c-3.5-2.2-5.7-6.1-5.7-10.2 0-2.8 1-5.6 2.8-7.8l1.1 1c-1.6 1.9-2.5 4.3-2.5 6.8 0 3.7 2 7.2 5.3 9.1l.4.2v11.4l1.3 2.5h6.9l1.6-2.5V97.8l.4-.2c3.3-1.9 5.3-5.4 5.3-9.1 0-5.8-4.7-10.5-10.5-10.5-1.4 0-2.7.3-4 .8l-.6-1.4c1.4-.6 3-.9 4.5-.9 6.6 0 12 5.4 12 12 0 4.1-2.2 8-5.7 10.2v10.9l-2.1 3.5z"
                                                      id="XMLID_250_"></path>
                                                <path fill="#0686D8"
                                                      d="M392.8 80.5l-1.1-1.1c.7-.7 1.1-.9 1.8-1.4l.2-.1.7 1.3-.2.1c-.6.5-.8.7-1.4 1.2z"
                                                      id="XMLID_249_"></path>
                                                <path fill="#0686D8" d="M392.5 100.9h14.6v1.5h-14.6z" id="XMLID_246_"></path>
                                                <path fill="#0686D8" d="M392.5 103.5h14.6v1.5h-14.6z" id="XMLID_244_"></path>
                                                <path fill="#0686D8" d="M392.5 106h14.6v1.5h-14.6z" id="XMLID_243_"></path>
                                                <path fill="#0686D8" d="M392.5 108.6h14.6v1.5h-14.6z" id="XMLID_242_"></path>
                                            </g>
                                            <g id="Blatt2">
                                                <path fill="#9ECFEF"
                                                      d="M343.9 13.8s4.4 4.2 4.4 8-4.4 8-4.4 8-4.4-4.2-4.4-8 4.4-8 4.4-8z"
                                                      id="XMLID_241_"></path>
                                                <path fill="#0686D8"
                                                      d="M343.9 30.8l-.5-.5c-.2-.2-4.7-4.5-4.7-8.5s4.5-8.3 4.7-8.5l.5-.5.5.5c.2.2 4.7 4.5 4.7 8.5s-4.5 8.3-4.7 8.5l-.5.5zm0-15.9c-1.1 1.2-3.7 4.3-3.7 6.9 0 2.6 2.6 5.7 3.7 6.9 1.1-1.2 3.7-4.3 3.7-6.9-.1-2.7-2.6-5.7-3.7-6.9z"
                                                      id="XMLID_240_"></path>
                                                <path fill="#0686D8" d="M343.1 13.8h1.5v66h-1.5z" id="XMLID_239_"></path>
                                                <path fill="#0686D8" d="M341.04 17.05l3.4 3.54-1.1 1-3.38-3.54z" id="XMLID_235_"></path>
                                                <path fill="#0686D8" d="M340.02 20.67l4.36 4.83-1.12 1-4.35-4.82z"
                                                      id="XMLID_234_"></path>
                                                <path fill="#0686D8" d="M346.63 17.1l1.08 1.03-3.35 3.54-1.08-1.04z"
                                                      id="XMLID_203_"></path>
                                                <path fill="#0686D8" d="M347.58 20.6l1.12 1-4.36 4.83-1.1-1z" id="XMLID_200_"></path>
                                            </g>
                                            <g id="Blatt1">
                                                <path fill="#9ECFEF"
                                                      d="M350.9 36.8s4.4 4.2 4.4 8c0 3.7-4.4 8-4.4 8s-4.4-4.2-4.4-8c-.1-3.8 4.4-8 4.4-8z"
                                                      id="XMLID_274_"></path>
                                                <path fill="#0686D8"
                                                      d="M350.9 53.8l-.5-.5c-.2-.2-4.7-4.5-4.7-8.5s4.5-8.3 4.7-8.5l.5-.5.5.5c.2.2 4.7 4.5 4.7 8.5s-4.5 8.3-4.7 8.5l-.5.5zm0-15.9c-1.1 1.2-3.7 4.3-3.7 6.9 0 2.6 2.6 5.7 3.7 6.9 1.1-1.2 3.7-4.3 3.7-6.9-.1-2.7-2.6-5.7-3.7-6.9z"
                                                      id="XMLID_273_"></path>
                                                <path fill="#0686D8" d="M350.1 36.8h1.5v50h-1.5z" id="XMLID_272_"></path>
                                                <path fill="#0686D8" d="M348.04 40.05l3.4 3.54-1.1 1-3.38-3.54z" id="XMLID_269_"></path>
                                                <path fill="#0686D8" d="M347.02 43.67l4.36 4.83-1.12 1-4.35-4.82z"
                                                      id="XMLID_268_"></path>
                                                <path fill="#0686D8" d="M353.63 40.1l1.08 1.03-3.35 3.54-1.08-1.04z"
                                                      id="XMLID_264_"></path>
                                                <path fill="#0686D8" d="M354.58 43.6l1.12 1-4.36 4.83-1.1-1z" id="XMLID_258_"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="brand__ci bg-faded__ci py-5__ci">
                    <div className="container__ci">
                        <div className="row__ci">
                            <div className="col-md-3__ci">
                                <hr className="boldline__ci left__ci" />
                                <h2>Brand</h2>
                            </div>
                            <div className="col-md-3__ci text-center__ci mt-4__ci">
                                <div className="m-usp__ci">
                                    <i className="m-usp-icon__ci aa-icon__ci aa-icon-logo-l__ci" />
                                    <h3 className="m-usp-title__ci">Logos</h3>
                                    <p className="m-usp-description__ci">Learn how to use our logo</p>
                                    <p className="m-usp-more-link__ci">
                                        <Link to="/corporateIdentity/Brand">View logo variants <i className="aa-icon__ci aa-icon-arrow-right__ci" /></Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3__ci text-center__ci mt-4__ci">
                                <div className="m-usp__ci">
                                    <i className="m-usp-icon__ci aa-icon__ci aa-icon-color-l__ci" />
                                    <h3 className="m-usp-title__ci">Colors</h3>
                                    <p className="m-usp-description__ci">View our color palette and the use case of each color</p>
                                    <p className="m-usp-more-link__ci">
                                        <Link to="/corporateIdentity/Brand">View our colors <i className="aa-icon__ci aa-icon-arrow-right__ci" /></Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3__ci text-center__ci mt-4__ci">
                                <div className="m-usp__ci">
                                    <i className="m-usp-icon__ci aa-icon__ci aa-icon-text-l__ci" />
                                    <h3 className="m-usp-title__ci">Typography</h3>
                                    <p className="m-usp-description__ci">Fonts and font-sizes we use in our interfaces and print media.</p>
                                    <p className="m-usp-more-link__ci">
                                        <Link to="/corporateIdentity/Brand">View all types <i className="aa-icon__ci aa-icon-arrow-right__ci" /></Link>
                                    </p>
                                </div>
                            </div>
                            <div className="offset-md-3 col-md-3__ci text-center__ci mt-4__ci">
                                <div className="m-usp__ci">
                                    <i className="m-usp-icon__ci aa-icon__ci aa-icon-icons-l__ci" />
                                    <h3 className="m-usp-title__ci">Icons</h3>
                                    <p className="m-usp-description__ci">Our icon font provides icons for a lot of use cases. Check it out.</p>
                                    <p className="m-usp-more-link__ci">
                                        <Link to="/corporateIdentity/Brand">View all icons <i className="aa-icon__ci aa-icon-arrow-right__ci" /></Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3__ci text-center__ci mt-4__ci">
                                <div className="m-usp__ci">
                                    <i className="m-usp-icon__ci aa-icon__ci aa-icon-layout-l__ci" />
                                    <h3 className="m-usp-title__ci">Layout</h3>
                                    <p className="m-usp-description__ci">Layouts for interfaces and print media can be a challenge. Use our guidelines to create yours quickly.</p>
                                    <p className="m-usp-more-link__ci">
                                        <Link to="/corporateIdentity/Brand">View layout options <i className="aa-icon__ci aa-icon-arrow-right__ci" /></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4__ci">
                            <div className="offset-md-3 col-md-9">
                                <Link to="/corporateIdentity/Brand" className="btn__ci btn-outline-primary__ci btn-block__ci">
                                    View brand guidelines
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="components__ci py-5__ci">
                    <div className="container__ci">
                        <div className="row__ci">
                            <div className="col-md-3__ci">
                                <hr className="boldline__ci left__ci" />
                                <h2>Components</h2>
                            </div>
                            <div className="col-md-3__ci text-center__ci mt-4__ci">
                                <div className="m-usp__ci">
                                    <i className="m-usp-icon__ci aa-icon__ci aa-icon-atoms-l__ci"  />
                                    <h3 className="m-usp-title__ci">Atoms</h3>
                                    <p className="m-usp-description__ci">Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.</p>
                                </div>
                            </div>
                            <div className="col-md-3__ci text-center__ci mt-4__ci">
                                <div className="m-usp__ci">
                                    <i className="m-usp-icon__ci aa-icon__ci aa-icon-molecules-l__ci"  />
                                    <h3 className="m-usp-title__ci">Molecules</h3>
                                    <p className="m-usp-description__ci">Things start getting more interesting and tangible when we start combining atoms together. Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.</p>
                                </div>
                            </div>
                            <div className="col-md-3__ci text-center__ci mt-4__ci">
                                <div className="m-usp__ci">
                                    <i className="m-usp-icon__ci aa-icon__ci aa-icon-organisms-l__ci"  />
                                    <h3 className="m-usp-title__ci">Organisms</h3>
                                    <p className="m-usp-description__ci">Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row__ci mt-4__ci">
                            <div className="offset-md-3__ci col-md-9__ci">
                                <Link to="/" className="btn__ci btn-block__ci btn-outline-primary__ci">
                                    View User Interface components
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="components__ci py-5__ci bg-faded__ci">
                    <div className="container__ci">
                        <div className="row__ci">
                            <div className="col-md-3__ci">
                                <hr className="boldline__ci left__ci" />
                                <h2>Downloads</h2>
                            </div>
                            <div className="col-md-9__ci">
                                <table className="table__ci">
                                    <tbody>
                                        <tr>
                                            <td>Logos</td>
                                            <td>
                                                <Link to="/corporateIdentity/Logos">
                                                    Show downloads <i className="aa-icon__ci aa-icon-caret-right__ci" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Powerpoint</td>
                                            <td>
                                                <Link to="/corporateIdentity/Fonts">
                                                    Show downloads <i className="aa-icon__ci aa-icon-caret-right__ci" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Word</td>
                                            <td>
                                                <Link to="/corporateIdentity/Word">
                                                    Show downloads <i className="aa-icon__ci aa-icon-caret-right__ci" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Powerpoint</td>
                                            <td>
                                                <Link to="/corporateIdentity/Powerpoint">
                                                    Show downloads <i className="aa-icon__ci aa-icon-caret-right__ci" />
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Card>
    );
    /* eslint-enable react/self-closing-comp, react/jsx-closing-bracket-location */
}

export default {
    title,
    render
}