#!/usr/bin/env npx ts-node

const { Client } = require('@bnb-chain/greenfield-chain-sdk');
// const { getCheckSums } = require('@bnb-chain/greenfiled-file-handle/files');
const fs = require('fs');

// const client = Client.create('https://data-seed-prebsc-1-s1.binance.org:8545', '97');
const client = Client.create('https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org', '5600');

// (async () => {
//   const filePath = './package.json';
//   const fileBuf = fs.readFileSync(filePath);
//   const DEFAULT_SEGMENT_SIZE = 16 * 1024 * 1024;
//   const DEFAULT_DATA_BLOCKS = 4;
//   const DEFAULT_PARITY_BLOCKS = 2;
//   const bytes = new Uint8Array(fileBuf);

//   const hashResult = await getCheckSums(
//     Buffer.from(bytes).toString('hex'),
//     DEFAULT_SEGMENT_SIZE,
//     DEFAULT_DATA_BLOCKS,
//     DEFAULT_PARITY_BLOCKS,
//   );
//   console.log('hashResult', hashResult);
// })();

(async () => {
    const account = await client.account.getAccount('0xCc9DB4cf17b3c5B21811921b40C6f34e55f99fB2');
    const buckets = await client.bucket.headBucket('nar-test');

    console.log(account);
    console.log(buckets);
    const getArgs = () => {
        // We retrieve all the command argumnts except the first 2
        return process.argv.slice(2);
    }

    console.log(getArgs());
})();
