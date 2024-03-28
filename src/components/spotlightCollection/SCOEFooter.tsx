import React from 'react'

export default function SCOEFooter({CollectionName}:{CollectionName:String}) {
  return (
    <div className='bg-black text-white p-3 text-center absolute bottom-3  w-[calc(85%_-_1.5rem)]'>{CollectionName}</div>
  )
}
