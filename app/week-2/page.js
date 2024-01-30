import Link from "next/link";
import StudentInfo from "./student-info";

export default function Page() {
    return (
      <main>
        <h1>Shopping List</h1>
        <Link href = ''><StudentInfo /></Link>
      </main>
    );
  }