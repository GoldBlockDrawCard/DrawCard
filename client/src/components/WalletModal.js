import React from "react";
import { useConnect } from "wagmi";
import { ReactComponent as Closebtn } from "../assets/svg/closebtn.svg";
import { ReactComponent as MetaMask } from "../assets/svg/metaMask.svg";
import { ReactComponent as CoinBase } from "../assets/svg/coinBase.svg";
import { ReactComponent as WalletConnect } from "../assets/svg/walletConnect.svg";

const WalletModal = ({ cancelModal }) => {
  const { connect, connectors } = useConnect();

  const connectMetaMask = async () => {
    await connect({ connector: connectors[0] });
    if (!connectors[0].ready) {
      alert("Please install MeataMask Wallet!");
      window.open("https://metamask.io/download/");
      window.location.reload();
    }
    cancelModal();
  };

  const connectCoinBase = async () => {
    await connect({ connector: connectors[1] });
    cancelModal();
  };

  const connectWalletConnect = async () => {
    await connect({ connector: connectors[2] });
    cancelModal();
  };

  return (
    <div className="container">
      <div className="modal-overlay" onClick={cancelModal}>
        <div className="walletModal" onClick={(e) => e.stopPropagation()}>
          <div className="walletTitle d-flex">
            <div>Connect Wallet</div>
            <Closebtn onClick={cancelModal} />
          </div>
          <div>
            <div className="walletbtn d-flex" onClick={connectMetaMask}>
              <MetaMask />
              <div className="walletbtnName d-flex col-9 justify-content-center">MetaMask</div>
            </div>
            <div className="walletbtn d-flex" onClick={connectCoinBase}>
              <CoinBase />
              <div className="walletbtnName d-flex col-9 justify-content-center">Coinbase</div>
            </div>
            <div className="walletbtn d-flex" onClick={connectWalletConnect}>
              <WalletConnect />
              <div className="walletbtnName d-flex col-9 justify-content-center">WalletConnect</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
