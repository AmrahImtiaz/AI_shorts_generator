"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import EmptyState from './_components/EmptyState';

function Dashboard() {
  const [videoList, setVideoList] = useState([]);

  return (
    <div>
      <div className='p-5 flex justify-between items-center mb-4'>
        <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
        <Link href={'dashboard/create-new'}>
        <Button>Create new Short Video</Button>
        </Link>
      </div>
      {videoList.length === 0 && (
        <div>
          <EmptyState />
        </div>
      )}
    </div>
  );
}

export default Dashboard;