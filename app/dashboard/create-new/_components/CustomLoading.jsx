import React from 'react'
import Image from 'next/image'  

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

function CustomLoading({loading}) {
  return (
    <div>
    <AlertDialog open={loading}>
  <AlertDialogContent className='bg-white'>
    <div className='bg-white flex flex-col items-center my-10 justify-center '>
        <Image src={'/load-time.gif'} width={100} height={100}/>
        <h2>Generating your video ... Don't Refresh </h2>
    </div>
  </AlertDialogContent>
</AlertDialog>
</div>
  )
}

export default CustomLoading