import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: `${process.env.SHAREME_SANITY_PROJECT_ID}`,
    dataset: 'shareme',
    apiVersion: '2023-02-06',
    useCdn: true,
    token: `${process.env.SHAREME_SANITY_PROJECT_TOKEN}`,
});

//console.log(process.env.SHAREME_SANITY_PROJECT_ID);

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
