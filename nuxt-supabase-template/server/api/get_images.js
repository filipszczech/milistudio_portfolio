import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

export default defineEventHandler(async (event) => {
    const accountId = process.env.CLOUDFLARE_CLIENT_ID;
    const bucketName = 'milistudio';
    const region = 'auto';
    const query = getQuery(event);
    const category = query.category + '/' || '';

    const s3Client = new S3Client({
        region: region,
        endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
        credentials: {
        accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY,
        secretAccessKey: process.env.CLOUDFLARE_SECRET_KEY,
        },
    });

    try {
        const command = new ListObjectsV2Command({
        Bucket: bucketName,
        Prefix: category,
        });
        const response = await s3Client.send(command);

        const images = response.Contents?.map((item) => {
        return {
            key: item.Key,
        };
        });
        return { images };
    } catch (error) {
        console.error('Błąd podczas pobierania zdjęć:', error);
        throw createError({
        statusCode: 500,
        statusMessage: 'Nie udało się pobrać zdjęć',
        });
    }
});