import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
export default function Home() {
  return (
    <>
     <div>
       <Head>
         <title>Amazon 2.0</title>
       </Head>
      
    {/* <div className=" flex items-center flex-grow py-2 bg-amazon_blue"></div> */}

      <Header/>

     </div>
    </>
  );
}
