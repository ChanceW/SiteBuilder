import React, { useReducer, useEffect } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'sections':
            state.sections = action.value;
            return { sections: action.value, ...state };
        case 'newSection':
            state.sections.push({ name: "section2" });
            return { sections: action.value, ...state };
        default:
            throw new Error();
    }
}

function renderSections(sections) {
    return sections.map((section) => {
        return <div className="section">{section.name}</div>
    });
}

export default function ContentTree() {
    const [state, dispatch] = useReducer(reducer, { sections: [] });

    useEffect(() => {
        var sections = [{ name: 'section1' }];
        dispatch({ type: 'sections', value: sections });
    }, []);


    return <div className="pageDesigner">
        {renderSections(state.sections)}
        <div className="addSection" onClick={() => { dispatch({"type": "newSection" }) }}>
            <span className="glyphicon glyphicon-plus"></span>
            <div>Add Section</div>
        </div>
    </div>;
}