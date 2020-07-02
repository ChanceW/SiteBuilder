import React from 'react';

export default function ContentTree(props) {
    const getContextMenu = (page) => {
        return <div className="contextMenu">
            <span className="contextItem glyphicon glyphicon-plus" onClick={props.addPage} title="Add Child Page"></span>
            {!page.isRoot ? <span className="contextItem glyphicon glyphicon-remove" title="Delete Page"></span> : null}
        </div>
    };

    const buildTree = (pages) => {
        return pages ? pages.map((page) => {
            const icon = page.isRoot ? "glyphicon glyphicon-home" : page.hasChildren ? "glyphicon glyphicon-chevron-right" : "";
            return <div className="pageNode"><span className={icon} />   {page.name}
                {getContextMenu(page)}
            </div>;
        }) : null;
    };

    return <div className="contentTree">
        {buildTree(props.pages)}
    </div>;
}