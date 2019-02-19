/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary');

const Container = CompLibrary.Container;

const CWD = process.cwd();

const versions = require(`${CWD}/versions.json`);

function Versions(props) {
    const { config: siteConfig, language } = props;
    const latestVersion = versions[0];
    const repoUrl = `https://github.com/${siteConfig.organizationName}/${
        siteConfig.projectName
        }`;

    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;
    const docUrlWithVersion = (doc, version) => `${baseUrl}${docsPart}${langPart}${version}/${doc}`;

    return (
        <div className="docMainWrapper wrapper">
            <Container className="mainContainer versionsContainer">
                <div className="post">
                    <header className="postHeader">
                        <h1>{siteConfig.title} Versions</h1>
                    </header>
                    <p>New versions of this project are released every so often.</p>
                    <h3 id="latest">Current version (Stable)</h3>
                    <table className="versions">
                        <tbody>
                            <tr>
                                <th>{latestVersion}</th>
                                <td>
                                    <a href={docUrl('getting-started.html')}>
                                        Documentation
                                    </a>
                                </td>
                                <td>
                                    <a href="https://github.com/Weffe/react-placeholder-fallback/blob/master/CHANGELOG.md">
                                        Release Notes
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Latest stable version of react-placeholder-fallback
                    </p>
                    <h3 id="rc">Latest version</h3>
                    <p>
                        Here you can find the latest unreleased documentation and code.
                    </p>
                    <table className="versions">
                        <tbody>
                            <tr>
                                <th>master</th>
                                <td>
                                    <a
                                        href={`${
                                            siteConfig.baseUrl
                                            }docs/en/next/getting-started.html`}
                                    >
                                        Documentation
                                    </a>
                                </td>
                                <td>
                                    <a href="https://github.com/Weffe/react-placeholder-fallback">Source Code</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="archive">Past Versions</h3>
                    <table className="versions">
                        <tbody>
                            {versions.map(
                                version =>
                                    (version !== latestVersion) && (
                                        <tr key={version}>
                                            <th>{version}</th>
                                            <td>
                                                <a href={docUrlWithVersion('getting-started.html', version)}>Documentation</a>
                                            </td>
                                            <td>
                                                <a href={`https://github.com/Weffe/react-placeholder-fallback/blob/v${version}/CHANGELOG.md`}>
                                                    Release Notes
                                                </a>
                                            </td>
                                        </tr>
                                    ),
                            )}
                        </tbody>
                    </table>
                    <p>
                        You can find past versions of this project on{' '}
                        <a href={repoUrl}>GitHub</a>.
                    </p>
                </div>
            </Container>
        </div>
    );
}

module.exports = Versions;
