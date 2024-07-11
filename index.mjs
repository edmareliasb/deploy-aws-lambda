import { s3 } from '@aws-sdk/client-s3';
import { log } from "./log.mjs";


const s3Client = new s3({ region: 'us-east-1' })

export const handler = async (event) => {

    const record = event.Records[0];
    const Bucket = record.s3.bucket.name;
    const key = record.s3.object.key;

    const getObjectResult = await s3Client.getObject({
        Bucket,
        Key,
    });

    const megaByte = 1024 * 1024;

    if (getObjectResult.ContentLength > megaByte) {
        log('Objeto muito grande');
        return 'Objeto muito grande';
    }

    log('Objeto de tamanho OK');

    return 'Objeto de tamanho OK';
  };
  