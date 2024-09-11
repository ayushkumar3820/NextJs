import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Display from "./component/Display";
import AddUser from "./component/add-user";

export default function Home() {
  return (
    <main >
      <Link href="/products">products</Link>
      <Link href="/add-products">ADD-products</Link>
       <AddUser/>
       <Display/>
    </main>
  );
}
