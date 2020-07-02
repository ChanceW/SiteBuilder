import React from 'react';

export default function ContentTree(props) {
    const getContextMenu = (page) => {
        return <div className="contextMenu">
            <span className="contextItem glyphicon glyphicon-plus" onClick={props.addPage} title="Add Child Page"></span>
            {!page.isRoot ? <span className="contextItem glyphicon glyphicon-remove" title="Delete Page"></span> : null}
        </div>
    };

    const buildTree = (pages, level) => {
        level = level ? level : 0;
        let childIdx = 0;
        return pages ? pages.map((page) => {
            const icon = page.isRoot ? "glyphicon glyphicon-home" : page.subpages ? "glyphicon glyphicon-chevron-down" : "";
            const indent = { paddingLeft: (level * 30) + "px" };
            return <div key={childIdx++} className="nodeContainer" style={indent}>
                <div className="pageNode"><span className={icon} />   {page.name}
                {getContextMenu(page)}
                </div>
                {page.subpages ? buildTree(page.subpages, ++level) : null}
            </div>;
        }) : null;
    };

    return <div className="contentTree">
        {buildTree(props.pages)}
    </div>;
}