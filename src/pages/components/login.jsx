import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Items from "./items";
import styles from "@/styles/Home.module.css";


const ConnectWallet = () => {
  const [accounts, setAccounts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function getAccounts() {
      if (window.ethereum) {
        try {
          await window.ethereum.enable();
          const accounts = await window.ethereum.request({ method: "eth_accounts" });
          setAccounts(accounts);
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success' 
          )
        } catch (error) {
          console.error(error);
        }
      }
    }
    getAccounts();
  }, []);

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        setAccounts(accounts);
        router.push("/components/items"); // Navigate to dashboard page
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      {accounts.length > 0 ? (
        <Items />
      ) : (
        <>
        {ConnectWallet}
        <div className={styles.loginBtnWrapper}>
        <h2 className={styles.loginHeader}>Doesnt get a Popup check the extentions tab and click Meta mask</h2>
        <p>Make sure you have a Pop up or a Notification in Meta mask</p>
        <Image src="/fox.png" alt="Meta mask Logo" width="50" height="50" className='rounded-2xl ml-80 mb-10 pb-10' />
        </div>
        </>
      )}
    </div>
  );
};

export default ConnectWallet;
