#!/usr/bin/env npx ts-node
// const Bucket = require('./bucket');
const { Client } = require('@bnb-chain/greenfield-chain-sdk');

(async () => {
    const client = Client.create('https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org', '5600');

    const getArgs = () => {
        // We retrieve all the command argumnts except the first 2
        return process.argv.slice(2);
    }

    console.log(getArgs());

    // const commands = {
    //     bucket: new Bucket(client),
    // };

    // const args = getArgs();
    // const resultFunc = async function () {
    //     await commands[args[0]].execute(args.slice(1));
    // };
    //
    // console.log(await commands.bucket.execute('nar-test'));

    // console.log(getArgs());

    // const account = await client.account.getAccount('0xCc9DB4cf17b3c5B21811921b40C6f34e55f99fB2');
    const buckets = await client.bucket.headBucket('nat-test1');
    // const object = await client.object.headObject('nar-test')
    // const buckets = await client.bucket.createBucket(params: IGetCreateBucketApproval);
    // const buckets = await client.bucket.deleteBucket(params: IGetCreateBucketApproval);

    // console.log(account);
    console.log(buckets);
})();

