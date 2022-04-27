import { useState, useEffect, useCallback } from "react";
import { notify } from "../utils/notifications";
import { useRouter } from "next/router";

import useFirebaseStore from "../stores/useFirebaseStore";

// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

function Admin(props) {
  const wallet = useWallet();
  const { connection } = useConnection();

  const { listBid, getBids, getListings, winner, stopAuction } =
    useFirebaseStore();
  const listing = useFirebaseStore((state) => state.listing);
  const bids = useFirebaseStore((state) => state.bids);
  const topBidder = useFirebaseStore((state) => state.topBidder);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [minIncrease, setMinIncrease] = useState("");
  let router = useRouter();

  const submitForm = (event) => {
    event.preventDefault();
    if (
      !wallet.publicKey ||
      wallet.publicKey.toBase58() !==
        "ZRq9NgBsqtQ3HkK1tUk9pkSj7vF7PhTi2jziuQRtPPp"
    )
      throw new notify({
        type: "error",
        message: `Please Connect Admin Wallet`,
      });
    listBid(amount, wallet.publicKey, description, name, url, minIncrease);
    // router.push('/');
  };

  useEffect(() => {
    getListings();
    getBids();
    winner();
    console.log(topBidder);
  }, [bids.length, topBidder.length]);

  return (
    <>
      <div className="mx-auto  border-gray-900 rounded-md flex flex-col sm:flex-row sm:justify-evenly">
        <div className="p-2 flex flex-col pr-10">
       
          {!wallet.publicKey ||
          wallet.publicKey.toBase58() !==
          //HdPZPnYQMCxkJb89Ywg2FBpmeEPySHS32q7Er4Lm5S6e
          //ZRq9NgBsqtQ3HkK1tUk9pkSj7vF7PhTi2jziuQRtPPp
            "ZRq9NgBsqtQ3HkK1tUk9pkSj7vF7PhTi2jziuQRtPPp" ? (
            ""
          ) : (
            <>
               <img
            src={listing.length !== 0 ? listing[0].url : ""}
            alt=""
            width={380}
            height={380}
            className="block object-cover object-center w-100  rounded-md  dark:bg-coolGray-500"
          ></img>

          <h1 className="text-2xl font-bold text-center mt-5">
            Highest Bidder Wallet with SOL{" "}
            {topBidder.length > 0 ? topBidder[0].bidAmount : ""}
          </h1>

          <h3 className="text-lg font-bold text-center mt-5">
            {topBidder.length > 0 ? topBidder[0].wallet : "fetching wallet...."}
          </h3>
           <button
              disabled={!(listing.length !== 0 ? listing[0].state : "")}
              onClick={stopAuction}
              className="group mt-5 block w-full p-3 text-center rounded-sm dark:text-black-900 dark:bg-red-400"
            >
              <div className="hidden group-disabled:block"> NO OPEN BID</div>
              <span className="block group-disabled:hidden">
                CLOSE {listing.length !== 0 ? listing[0].name : ""} NFT AUCTION
              </span>
            </button>
            </>
           
          )}
        </div>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-black-900 dark:text-black-900 p-2 flex flex-col pr-10">
          {/* <h1 className="text-2xl font-bold text-center">Auction Config</h1> */}
          {!wallet.publicKey ||
          wallet.publicKey.toBase58() !==
            
            "ZRq9NgBsqtQ3HkK1tUk9pkSj7vF7PhTi2jziuQRtPPp" ? (
            " "
          ) : (
            <form
              onSubmit={submitForm}
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="block dark:text-black-400">
                  NFT NAME
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                  className="input w-full px-4 py-3 rounded-md bg-white text-gray-700"
                ></input>
              </div>
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="description"
                  className="block dark:text-white-400"
                >
                  NFT Description
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  className="textarea w-full text-gray-700
                  bg-white bg-clip-padding"
                  placeholder="NFT description"
                ></textarea>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="imageUrl" className="block dark:text-black-400">
                  NFT Image Url
                </label>
                <input
                  onChange={(e) => setUrl(e.target.value)}
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  pattern="https?://.+"
                  required
                  placeholder="NFT image Url"
                  className="input w-full px-4 py-3 rounded-md bg-white text-gray-700"
                ></input>
                <div className="flex justify-end text-xs dark:text-black-400">
                  <a rel="noopener noreferrer" href="#">
                    you can find it on solscan!
                  </a>
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="minBid" className="block dark:text-black-400">
                  Min Bid Amount - SOL
                </label>
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  type="number" 
                  step="any"
                  name="minBid"
                  id="minBid"
                  required
                  placeholder="Min SOL bid Amount"
                  className="input w-full px-4 py-3 rounded-md bg-white text-gray-700"
                ></input>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="min" className="block dark:text-black-400">
                  MIN BID INCREASE 
                </label>
                <input
                  type="number" 
                  step="any"
                  name="min"
                  id="bid"
                  placeholder="Min SOL increase"
                  className="input w-full px-4 py-3 rounded-md bg-white text-gray-700"
                  onChange={(e) => setMinIncrease(e.target.value)}
                  required
                  data-mdb-toggle="input-toggle-timepicker"
                ></input>
              </div>
              {
              listing.length !== 0 ? !(listing[0].state) ? (
                <button className="group block w-full p-3 text-center rounded-sm dark:text-black-900 dark:bg-violet-400">
                  <span className="block group-disabled:hidden">
                    START AUCTION
                  </span>
                </button>
              ) : (
                ""
              ) : ""
              }
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;
