import { useState, useEffect} from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { notify } from "../utils/notifications";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



export const Bid = (props) => {



    const theme = useTheme();
  
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const [isLoading, setLoading] = useState(false);


    const bidAction = async () => {
        
        if (props.bidPermission === false) throw new notify({ type: 'error', message: `Please make sure you have minimum bid amount to place bid ` });
        props.placeBid();
        //the above is the store to add new bid to database
        notify({ type: 'success', message: `Bid placed successfully! ` });
    }


    const onClick = async () => {
        if (!publicKey) throw new notify({ type: 'error', message: `Wallet Not Connected! ` });
        bidAction();

    };





    useEffect(() => {
        // checkNft()
    }, [connection, publicKey])


    return (
        <div className="mt-1">
      
            <div className="container mx-auto flex flex-col items-center justify-center lg:space-y-0 lg:flex-row lg:justify-between">
        
                <button onClick={onClick} disabled={!props.bidPermission || !publicKey || !props.auctionState }
                    className="relative group mt-5 w-full btn animate-pulse disabled:animate-none bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... "
                >
                    <span className="block group-disabled:hidden"  >
                        Place Bid
                    </span>

                    <div className="hidden group-disabled:block ">
                        {
                            !publicKey ? "Wallet Not Connected": (!props.auctionState ? "AUCTION CLOSED" : "Not Enough SOL") 
                        }
                       
                    </div>

                </button>
              
            </div>
        </div>

    )
};