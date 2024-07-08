// pages/index.js
import Head from "next/head";
import OrderForm from "../components/OrderForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flower Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Selamat Datang di Blossom Haven</h1>
        <OrderForm />
      </main>
    </div>
  );
}
