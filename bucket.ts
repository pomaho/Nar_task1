(async () => {
    const account = await client.account.getAccount('0xCc9DB4cf17b3c5B21811921b40C6f34e55f99fB2');
    const buckets = await client.bucket.headBucket('nar-test');
    const object = await client.object.headObject('nar-test')
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
