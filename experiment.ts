import { IndexedTx, StargateClient } from "@cosmjs/stargate"
import { Tx } from "cosmjs-types/cosmos/tx/v1beta1/tx"
const rpc = "rpc.sentry-01.theta-testnet.polypore.xyz:26657"

const runAll = async(): Promise<void> => {
    console.log("TODO");
    const client = await StargateClient.connect(rpc);
    console.log("With client, chain id:", await client.getChainId(), ", height:", await client.getHeight())
    console.log(
        "Alice balances:",
         await client.getAllBalances("cosmos1uwyxp69uh8ndhm3zasahd8k6pl9hs6wsvc4509"), // <-- replace with your generated address
    );
    const faucetTx: IndexedTx = (await client.getTx(
         "7DE714F749235FF5C918EE1311E5B3640913B01E377F350913C03DCEB9861193",
    ))!
    
    console.log("Faucet Tx:", faucetTx);
    const decodedTx: Tx = Tx.decode(faucetTx.tx);
    console.log("DecodedTx:", decodedTx);
}

runAll()


