import React, { useReducer, useEffect } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'pages':
            state.pages = action.value;
            return { pages: action.value, ...state }; 
        default:
            throw new Error();
    }
}

function buildTree(pages) {
    return pages.map((page, idx) => {
        return <div className="pageNode"><span className="glyphicon glyphicon-chevron-right" />   {page.name}
            {page.subpages ? buildTree(page.subpages) : null}
        </div>;
    });
}

export default function ContentTree() {
    const [state, dispatch] = useReducer(reducer, { pages: []});

    useEffect(() => {
        var pages = [{ name: 'Home'}];
        dispatch({ type: 'pages', value: pages });
    }, []);


    return <div className="contentTree">
        {buildTree(state.pages)}
    </div>;
}