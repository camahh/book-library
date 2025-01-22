import { signOut } from '@/auth'
import BookList from '@/components/BookList'
import { Button } from '@/components/ui/button'
import { sampleBooks } from '@/contants'
import React from 'react'

const Page = () => {
  return (
    <>
        <form className='mb-10' action={async () => {
            'use server'

            await signOut();
        }}>
            <Button>Logout</Button>
        </form>

        <BookList title="Borrowed Books" books={sampleBooks} />
    </>
  )
}

export default Page;