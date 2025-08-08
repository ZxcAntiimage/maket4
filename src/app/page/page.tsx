import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
export default function Page() {
  return (
    <div className='flex flex-col justify-center items-center mt-14'>
        <p className="title text-7xl">Упс😅</p>
        <p className="sub-title text-2xl mt-4 text-[#A0A0A0]">данный сайт был сделан по макету и сслыки не работают. <br />
        Вот ссылка на проект и макет: <span><Button sx={{backgroundColor: "mediumblue", color: "black"}} className='border flex justify-center items-center rounded-2xl border-black w-32 h-16'><Link href="https://github.com/ZxcAntiimage/maket3/tree/master?tab=readme-ov-file" className='text-[#b0a8ff]'>Github</Link></Button> <Button sx={{backgroundColor: "pink", color: "black"}} className='text-[20px] font-medium w-32 h-16 flex items-center justify-center'><Link href="https://www.figma.com/design/SjHvI8W1yzwJjzyUrCPpsI/House?node-id=3-838&t=9d0QNSalhnKZgzwk-0">Figma</Link></Button></span>
        </p>
        
        
    </div>
  )
}
