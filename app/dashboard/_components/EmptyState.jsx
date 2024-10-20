import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function EmptyState() {
  return (
    <div className='px-20'>
    <div className='p-5 py-24 flex items-center flex-col mt-10 border-2 border-dotted rounded '>
      <h2>You dont have any short video created</h2>
      <Link href={'dashboard/create-new'}>
      <div className='p-5'>
        <Button >+ Create new Short Video</Button>
        </div>
      </Link>
    </div>
    </div>
  );
}

export default EmptyState;