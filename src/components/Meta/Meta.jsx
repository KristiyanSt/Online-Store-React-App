import { Helmet } from "react-helmet";

import React from 'react';

function Meta({ title }) {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
        </Helmet>
    );
}

export default Meta;
