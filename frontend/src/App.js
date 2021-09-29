import polygon from './assets/polygon.svg';
import faucet from './assets/faucet.svg';
import dchan from './assets/dchan.png';
import './App.css';
import packageJson from "../package.json";
import LoadButton from "./LoadButton";
import AppExplanations from "./AppExplanations";
import AccountManager from "./controller/accountManager";
import faucetClaim from "./controller/faucet";
import React, { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "react-global-configuration";
import configuration from './config.json';
import HCaptcha from '@hcaptcha/react-hcaptcha';

config.set(configuration);

const accountManager = new AccountManager();

function App() {
  const [account, setAccount] = useState("Not connected");
  const [balance, setBalance] = useState(0);
  const [formattedBalance, setFormattedBalance] = useState("");
  const [txLink, setTxLink] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [disabled, setDisabled] = useState(false)
  const [sending, setSending] = useState(false)
  const [presses, setPresses] = useState(0)

  useEffect(() => {
    setDisabled(sending || Number(balance) >= config.get("maxAmount") || captcha === "")
  }, [balance, captcha, sending])

  const refreshBalance = useCallback(() => {
    accountManager.getBalance().then((balance) => { 
      setBalance(parseFloat(balance.replace(/[^0-9]/g, "")))
      setFormattedBalance(balance)
    });
  })
  
  return (
    <div className="App">
      <ToastContainer hideProgressBar={true} />
      <div className="App-banner">
        <div className="App-title" style={{display: "flex", alignItems: "center"}}><img src={polygon} className="App-polygon" alt="polygon"  /> Polygon Faucet</div>
        <div className="App-subtitle" style={{display: "flex", alignItems: "center", padding: "2rem"}}>@<a href="//dchan.network" target="_blank">dchan.network</a><img src={dchan} className="App-dchan" alt="dchan" style={{zIndex: -1, width: "4rem"}} /></div>
      </div>
      <header className="App-header">
        <div className="Commands" style={{position: "relative"}}>
          <img src={faucet} className="App-faucet" alt="faucet" style={{position: "absolute", right: "0px", bottom: "0px", width: "8rem", transform: "translate(100%, 0%) scale(-1, 1)"}} />
          <LoadButton
            text="Connect"
            loadingText="Loading..."
            color="#8248e5"
            hidden={account !== "Not connected"}
            onClick={() => accountManager.connect().then((account) => {
              if (!account) {
                toast.error(`Wrong network: Please select Matic/Polygon network first`)
              }
              else {
                setAccount(account);
                refreshBalance()
              }
            })}
          />
          <LoadButton
            text={Number(balance) >= config.get("maxAmount") ? "Balance too high" : "Receive"}
            loadingText="Sending..."
            color="#8248e5"
            disabled={disabled}
            hidden={account === "Not connected"}
            onClick={() => {
              setPresses(presses + 1)
              setSending(true)
              try {
                faucetClaim(account, captcha)
                .then((hash) => {
                  toast.success("Transaction sent!");
                  setTxLink(hash);
                  setCaptcha("");
                  setSending(false)
                })
                .catch((error) => {
                  console.error({error})
                  toast.error(`😕 ${error.message || error.response.data.err.message}`)
                  setSending(false)
                })
              } catch(e) {
                toast.error(`Error: ${JSON.stringify(e)}`)
                setSending(false)
              }
            }}
          />
        </div>
        <div>{presses > 10 ? <span style={{
          fontSize: `${1+presses*0.001}rem`
        }}>Presses: {presses}</span> : ""}</div>
        <form id="receive" action="" method="POST">
          <HCaptcha
            theme="dark"
            sitekey={config.get("hcaptchasitekey")}
            onVerify={(token, ekey) => { setCaptcha(token) }}
          />
        </form>
        <p hidden={account === "Not connected"}>{account}</p>
        <p hidden={account === "Not connected"}>{"Your balance: " + String(formattedBalance)}</p>
        <a hidden={txLink === ""} target="_blank" rel="noopener noreferrer" href={txLink}>{txLink}</a>
        <br></br>
        <AppExplanations></AppExplanations>
        <div className="App-footer">
          <p>
            Credits to <a href="https://github.com/TamtamHero/polygon-faucet/" target="_blank" rel="noopener noreferrer">TamtamHero</a> for the Web App. v
            {`${packageJson.version}`}.{" "}
          </p>
          <p>
            Polygon donation: <a h href="https://polygonscan.com/address/0xa3b832e52bc12df5a5eeb885370bc9b54d19bc1a/transactions" target="_blanc" rel="noopener noreferrer">0xa3b832e52bc12df5a5eeb885370bc9b54d19bc1a</a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
