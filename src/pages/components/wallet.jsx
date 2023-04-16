import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Login from "./login";
import Web3 from "web3";
import styles from "@/styles/Home.module.css";

function Wallet() {
  const [walletAddress, setWalletAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState("");

  useEffect(() => {
    // Gpt thunai

    async function getWalletInfo() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const accounts = await web3.eth.getAccounts();
          setWalletAddress(accounts[0]);
          const balance = await web3.eth.getBalance(accounts[0]);
          setWalletBalance(web3.utils.fromWei(balance, "ether"));
        } catch (error) {
          console.error(error);
        }
      }
    }
    getWalletInfo();
  }, []);

  return (
    <div>
      <Head>
        <title>Crypt captivating</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div>

      {walletAddress ? <div>
        <p className="text-center text-xl mt-7 mb-5"><span className="font-bold">Wallet Address : </span>{walletAddress}</p>
        <p className="text-center text-xl"><span className="font-bold">Wallet Balance: </span>{walletBalance} ETH</p>
        </div> : <div>
        <>
        <p className="text-xl text-center mt-3 mb-3">Not seeing your balance Just Click Login below and see the Meta Mask popup at the extensions Bar</p>
       <p className="text-center">👇👇👇👇👇</p>
        <div className={styles.walletConnectBtn}>
        <Link href="/components/login">
        <button className="inline-flex items-center bg-gradient-to-r from-lime-500 to-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l from-green-500 to-lime-600 text-white border-0 -mr-10 py-2 px-5 rounded text-base mt-4 md:mt-0">Login 
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      </Link>
        </div>
        </>
        </div>}

      </div>
    </div>
  );
}

export default function MyPage() {
  return (
    <>
    <section className="navbar-theme">
    <div className="container flex flex-wrap p-5 pl-10 bg-dark flex-col text-white md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        {/* Logo */}
        <Image src="/Crypt-logo.png" alt="Crypt logo" height="80" width="80" />
        <span className="ml-3 -mr-14 text-white text-xl">Crypt Captivating</span>
      </a>
      <nav className="ml-96 mr-20 md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/" className="mr-5 hover:text-gray-400">Home
        </Link>
        <Link href="/components/about" className="mr-5 hover:text-gray-400">
          About
        </Link>
        <Link href="/components/items" className="mr-5 hover:text-gray-400">
          Items
        </Link>
        <Link href="/components/contact" className="mr-5 hover:text-gray-400">Contact
        </Link>
        <Link href="/components/wallet" className="mr-5 hover:text-gray-400">Wallet
        </Link>
      </nav>
      <Link href="/components/wallet">
      </Link>
      
    </div>
    </section>
    <div className="bg-gray-200 mt-20 ml-36 mr-36 pl-20 pr-20 pt-20 pb-20 rounded-2xl">
      <h1 className="text-center font-bold text-5xl mb-5">My Wallet Info</h1>
      <Wallet />
    </div>
    </>
  );
} 