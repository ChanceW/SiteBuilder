import React, { useReducer, useEffect } from 'react';
import './SiteContent.css';
import ContentTree from './ContentTree';
import PageDesigner from './PageDesigner';

function reducer(state, action) {
    switch (action.type) {
        case 'pages':
            state.pages = action.value
            return {pages:action.value, ...state}
        default:
            throw new Error();
    }
}

export default function SiteContent() {
    const [state, dispatch] = useReducer(reducer, {});

    const addPage = () => {
        var pages = [{ name: "Home", isRoot: true, subpages: [{ name: "Page1_Lvl2", subpages: [{ name: "Page1_Lvl3" }] }, { name: "Page2_Lvl2" }]}];
        dispatch({ "type": "pages", value: pages });
    };

    useEffect(() => {
        var pages = [{ name: "Home", isRoot: true }];
        dispatch({ "type": "pages", value: pages });
    }, []);


    return <div className="main">
        <div><ContentTree pages={state.pages ? state.pages : []} addPage={addPage} /></div>
        <div><PageDesigner /></div>
    </div>;
}