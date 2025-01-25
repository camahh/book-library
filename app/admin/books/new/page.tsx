import BookForm from '@/components/admin/Books/BookForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
        <Button asChild>
            <Link href="/admin/books" className='back-btn'>Go Back</Link>
        </Button>

        <section className='w-full max-w-2xl'>
            <BookForm />
        </section>
    </>
  )
}

export default Page