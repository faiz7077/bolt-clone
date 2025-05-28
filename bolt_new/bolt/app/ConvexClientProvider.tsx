"use client";

import { ConvexProvider, ConvexReactClient } from 'convex/react';
import React from 'react'

type Props = {
  children: React.ReactNode;
};

const ConvexClientProvider = ({ children }: Props) => {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  
  return (
    <>
      return <ConvexProvider client={convex}>{children}</ConvexProvider>
    </>
  )
}

export default ConvexClientProvider