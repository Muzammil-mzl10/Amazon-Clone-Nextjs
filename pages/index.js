import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { getSession } from "next-auth/react";
import ProductFeed from "../components/ProductFeed";
export default function Home(props) {
  // console.log(props.data);
  return (
    <>
      <div className="bg-gray-100">
        <Head>
          <title>Amazon 2.0</title>
        </Head>

        <Header />

        <main className="max-w-screen-2xl mx-auto">
          <Banner />

          <ProductFeed 
            products =  {props.data}
          />
        </main>
      </div>
    </>
  );
}
// https://fakestoreapi.com/products
export async function getServerSideProps(context) {
  const session = await getSession(context)
  const products = await fetch('https://fakestoreapi.com/products')
  const data  = await products.json();


  return {
    props: {
      data, session
    }
  }
}
