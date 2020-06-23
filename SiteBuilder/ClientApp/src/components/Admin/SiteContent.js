import React, { /*useReducer,*/ useEffect } from 'react';
import './SiteContent.css';
import ContentTree from './ContentTree';
import PageDesigner from './PageDesigner';

//function reducer(state, action) {
//    switch (action.type) {
//        default:
//            throw new Error();
//    }
//}

export default function SiteContent() {
    //const [state, dispatch] = useReducer(reducer, {});

    useEffect(() => {
    }, []);


    return <div className="main">
        <div><ContentTree /></div>
        <div><PageDesigner /></div>
    </div>;
}