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
        const icon = idx === 0 ? "glyphicon glyphicon-home" : page.subpages ? "glyphicon glyphicon-chevron-right" : "";
        return <div className="pageNode"><span className={icon} />   {page.name}
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