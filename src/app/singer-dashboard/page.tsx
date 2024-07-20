import { handlers, auth, signIn, signOut } from "@/auth";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  let session: Session | null | boolean = await auth();
  console.log("session", session);
  let user = session?.user?.email;
  console.log("user", user);

  // session = false;

  if (session) {
    return (
      <div>Singer dashboard page - you need to be logged in to view this</div>
    );
  } else {
    redirect("/");
  }
}
