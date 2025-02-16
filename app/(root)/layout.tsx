import { auth } from "@/auth";
import Header from "@/components/Header";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { after } from "next/server";
import React, { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session) redirect("/sign-in");

  after(async () => {
    if (!session?.user?.id) return;

    // update only if user was not active today
    const user = await db.select().from(users).where(eq(users.id, session?.user?.id)).limit(1);
    const today = new Date().toISOString().slice(0, 10);

    if(user[0]?.lastActivityDate === today) return;

    // update last activity date 
    // from user in database
    // without time
    await db
      .update(users)
      .set({ lastActivityDate: today})
      .where(eq(users.id, session?.user?.id));
  });

  return (
    <main className="root-container">
      <div className="mx-auto max-w-7xl">
        <Header session={session} />
        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
