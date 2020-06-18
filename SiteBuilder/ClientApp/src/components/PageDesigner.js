import React, { useReducer, useEffect } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'sections':
            state.sections = action.value;
            return { sections: action.value, ...state };
        case 'newSection':
            state.sections.push({ name: "section2" });
            return { sections: action.value, ...state };
        case 'tab':
            state.activeTab = action.value;
            return { activeTab: action.value, ...state };
        default:
            throw new Error();
    }
}

function renderHeader(activeTab, dispatch) {
    return <div className="header">
        <div className={`tab ${activeTab === 'designer' ? 'active' : ''}`} onClick={() => { dispatch({ type: "tab", value: "designer"  }) }}>Design</div>
        <div className={`tab ${activeTab === 'info' ? 'active' : ''}`} onClick={() => { dispatch({ type: "tab", value: "info" }) }}>Info</div>
    </div>;
}

function renderSections(sections) {
    return sections.map((section) => {
        return <div className="section">{section.name}</div>
    });
}

export default function ContentTree() {
    const [state, dispatch] = useReducer(reducer, { sections: [], activeTab: "designer" });

    useEffect(() => {
        var sections = [{ name: 'section1' }];
        dispatch({ type: 'sections', value: sections });
    }, []);


    return <div className="pageDesigner">
        {renderHeader(state.activeTab, dispatch)}
        {renderSections(state.sections)}
        <div className="addSection" onClick={() => { dispatch({"type": "newSection" }) }}>
            <span className="glyphicon glyphicon-plus"></span>
            <div>Add Section</div>
        </div>
    </div>;
}