"use client"
import React from 'react'
import { PagesProgressProvider as ProgressProvider } from '@bprogress/next';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="4px"
      color="#155dfc"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ProgressProvider>
  )
}

export default AppProvider