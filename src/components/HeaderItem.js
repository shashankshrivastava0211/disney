import React from 'react'

const HeaderItem = ({name,Icon}) => {
    return (
        <div className='text-white items-center gap-3 font-semibold cursor-pointer flex hover:underline underline-offset-8 text-lg'>
            <Icon />
            <h2 className='hidden md:block ' >{name }</h2>
        </div>
    )
}

export default HeaderItem
