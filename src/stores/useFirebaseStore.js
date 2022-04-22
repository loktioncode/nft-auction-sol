import create, { State } from "zustand";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import {
  getFirestore,
  collection,
  query,
  doc,
  limit,
  onSnapshot,
  addDoc,
  updateDoc,
  orderBy
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { notify } from "../utils/notifications";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9J6K4rMZiRAyGz2QaQ7CmyXR7TX-ifhA",
  authDomain: "solot-6fe85.firebaseapp.com",
  projectId: "solot-6fe85",
  storageBucket: "solot-6fe85.appspot.com",
  messagingSenderId: "783738821563",
  appId: "1:783738821563:web:80bf3f97215a85d97b029e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const useFirebaseStore = create((set, _get) => ({
  bids: [],
  filteredBids: [],
  listing: [],
  topBidder: [],
  getBids: () => {
    onSnapshot(collection(db, "bids"), (snapshot) => {
      set({ bids: snapshot.docs.map((doc) => doc.data()) });
    });
    onSnapshot(query(collection(db, "bids"), limit(10)), (snapshot) => {
      set({ filteredBids: snapshot.docs.map((doc) => doc.data()) });
    });
  },
  placeBid: async (amount, publicKey) => {
    const docRef = await addDoc(collection(db, "bids"), {
      bidAmount: amount,
      wallet: publicKey,
    });
    if (docRef.id) {
      console.log("bid placed>>: ", docRef.id);
    }
  },
  listBid: (amount, publicKey, description, Nftname, url, minIncrease) => {
    set({ loader: true });
    console.log("adding: ");
    let data = {
      wallet: publicKey.toBase58(),
      description: description,
      name: Nftname,
      state: true,
      url: url,
      bidAmount: amount,
      minIncrease: minIncrease,
    };
    updateDoc(doc(db, "listings", "nft"), data).then(
      notify({ type: "success", message: `Listing update successful!!` })
    );
  },
  getListings: () => {
    onSnapshot(collection(db, "listings"), (snapshot) => {
      set({ listing: snapshot.docs.map((doc) => doc.data()) });
    });
  },
  stopAuction: async () => {
    let data = {
      state: false,
    };
    await updateDoc(doc(db, "listings", "nft"), data).then(
      notify({ type: "success", message: `Bid Closed successful!!` })
    );
    onSnapshot(collection(db, "listings"), (snapshot) => {
     snapshot.docs.map((doc) => doc.ref.delete) 
    });
  },
  winner: () => {
    onSnapshot(query(collection(db, "bids"),orderBy("bidAmount", "desc"), limit(1)), (snapshot) => {
      set({ topBidder: snapshot.docs.map((doc) => doc.data()) });
    });
  },
 
}));

export default useFirebaseStore;
