const { Client } = require('@bnb-chain/greenfield-chain-sdk');
// const { getCheckSums } = require('@bnb-chain/greenfiled-file-handle/files');
// const fs = require('fs');

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
    // const buckets = await client.bucket.createBucket(params: IGetCreateBucketApproval);
    // const buckets = await client.bucket.deleteBucket(params: IGetCreateBucketApproval);

    console.log(account);
    console.log(buckets);
    createBucket(params: IGetCreateBucketApproval): Promise<TxResponse>;
    deleteBucket(msg: MsgDeleteBucket): Promise<TxResponse>;
    updateBucketInfo(msg: MsgUpdateBucketInfo): Promise<TxResponse>;
    deleteBucketPolicy(msg: MsgDeletePolicy): Promise<TxResponse>;

})();

export interface IGetCreateBucketApproval {
    bucketName: string;
    creator: string;
    visibility: keyof typeof VisibilityType;
    chargedReadQuota: string;
    spInfo: ISpInfo;
    duration?: number;
  }

  import {
    VisibilityType
 } from '@bnb-chain/greenfield-cosmos-types/greenfield/storage/common';

 export interface ISpInfo {
    endpoint: string;
    primarySpAddress?: string;
    sealAddress: string;
    secondarySpAddresses: string[];
  }



  export const MsgDeleteBucketTypeUrl = '/greenfield.storage.MsgDeleteBucket';

  export const MsgDeleteBucketSDKTypeEIP712 = {
    Msg: [
      {
        name: 'type',
        type: 'string',
      },
      {
        name: 'operator',
        type: 'string',
      },
      {
        name: 'bucket_name',
        type: 'string',
      },
    ],
  };

  MsgUpdateBucketInfo,
} from '@bnb-chain/greenfield-cosmos-types/greenfield/storage/tx';
import { bytesFromBase64 } from '@bnb-chain/greenfield-cosmos-types/helpers';
import Long from 'long';
import { container, delay, inject, singleton } from 'tsyringe';
import { TxResponse } from '..';
import {
  BucketProps,
  GetObjectPropsType,
  getUserBucketsPropsType,
  ICreateBucketMsgType,
  IGetCreateBucketApproval,
  IObjectResultType,
  IQuotaProps,
} from '../types/storage';
import { Basic } from './basic';
import { RpcQueryClient } from './queryclient';

import MsgDeletePolicy
import {
  MsgCreateBucket,
  MsgDeleteBucket,
  MsgDeletePolicy,
  MsgPutPolicy,
  MsgUpdateBucketInfo,
} from '@bnb-chain/greenfield-cosmos-types/greenfield/storage/tx';

