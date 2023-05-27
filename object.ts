const object = await client.object.headObject('nar-test')

from '@bnb-chain/greenfield-cosmos-types/greenfield/storage/tx';

createObject(getApprovalParams: IGetCreateObjectApproval): Promise<TxResponse>;

uploadObject(configParam: IPutObjectPropsType): Promise<IObjectResultType<null>>;

cancelCreateObject(msg: MsgCancelCreateObject): Promise<TxResponse>;

deleteObject(msg: MsgDeleteObject): Promise<TxResponse>;

headObject(bucketName: string, objectName: string): Promise<QueryHeadObjectResponse>;

headObjectById(objectId: string): Promise<QueryHeadObjectResponse>;

getObject(configParam: IGetObjectPropsType): Promise<IObjectResultType<Blob>>;

downloadFile(configParam: IGetObjectPropsType): Promise<void>;

listObjects(
  configParam: IListObjectsByBucketNamePropsType,
): Promise<IObjectResultType<Array<IObjectProps>>>;

