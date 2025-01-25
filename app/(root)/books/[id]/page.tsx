import { auth } from "@/auth";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import BookVideo from "@/components/BookVideo";
import SimiliarBooks from "@/components/SimiliarBooks";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { eq, and, ne } from "drizzle-orm";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const session = await auth();
  const { id } = await params;

  // fetch book details
  const [bookDetails] = await db
    .select()
    .from(books)
    .where(eq(books.id, id))
    .limit(1);

  if (!bookDetails) redirect("/404");

  // fetch similiar books
  const similiarBooks = await db
    .select()
    .from(books)
    .where(
      and(eq(books.genre, bookDetails.genre), ne(books.id, bookDetails.id))
    );

  return (
    <>
      <BookOverview {...bookDetails} userId={session?.user?.id as string} />

      <div className="flex lg:flex-row flex-col gap-10">
        <div className="book-details flex-1">
          <section className="flex flex-col gap-7">
            <h3>Video</h3>
            <BookVideo videoUrl={bookDetails.videoUrl} />
          </section>
          <section className="mt-10 flex flex-col gap-7">
            <h3>Summary</h3>
            <div className="space-y-5 text-xl text-light-100">
              {bookDetails.summary.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </section>
        </div>
        {similiarBooks.length > 0 && (
          <div className="book-details-similiar-books flex-1">
            <SimiliarBooks books={similiarBooks} />
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
