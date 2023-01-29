import React from 'react'

export default function LinksCategory({links, classnameUl, classnameLi}) {

    return (
        <div className={classnameUl}>
            {links.map(name_link => 
                <li key={name_link.name} className={classnameLi}>
                    <a href={name_link.href}>{name_link.name}</a>
                </li>
            )}
        </div>
    )
}
