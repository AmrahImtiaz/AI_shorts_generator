"use client"

import React, { useEffect } from 'react';
import { db } from '@/configs/db'; 
import { Users } from '@/configs/schema'; 
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      isNewUser();
    }
  }, [user]);

  const isNewUser=async () => {
    const result = await db.select().from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress));
    console.log(result);

    if (!result[0]) {
      await db.insert(Users).values({
        name: user.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl // Corrected this line
      });
    }
  };

  return (
    <div>
      {children}
    </div>
  );
}

export default Provider;