import React from 'react'
import './HiddenSidebar.css'

function HiddenSidebarRow({selected, Icon, title}) {
    return (
        <div className={`hiddenSidebarRow ${selected && 'selected'}`}>
            <Icon className="hiddenSidebarRow__icon" />
            <h2 className="hiddenSidebarRow__title">{title}</h2>
        </div>
    )
}

export default HiddenSidebarRow
