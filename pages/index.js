import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import QrGenerator from "@/components/QrGenerator";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>QRGPF</title>
        <meta name="description" content="QR Global Production Firm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <QrGenerator />
        <p className={styles.endertext}>-GMG PRODUCTIONS '23-</p>
      </main>
    </>
  );
}
