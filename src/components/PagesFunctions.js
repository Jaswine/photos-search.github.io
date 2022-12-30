import React, {useState,useEffect} from 'react';

function PagesFunctions() {
    const pageTitle = (title) => {
        document.title = title;
    }

    return {
        pageTitle,
    }
}

export default PagesFunctions