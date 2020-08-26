import React from 'react'
import './Sidebar.css'

function SidebarRow({selected, Icon, title}) {
    return (
        <div className={`sidebarRow ${selected && 'selected'}`}>
            <Icon className="sidebarRow__icon" />
            <span className="sidebarRow__title">{title}</span>
        </div>
    )
}

export default SidebarRow
