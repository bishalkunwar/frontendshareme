import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "hptyd5o4",
    dataset: 'production',
    apiVersion: '2023-02-06',
    useCdn: true,
    token: "skXEyjo46YTimRFKqAAHvZUBhWFJqjiO6EnuEysVB1iJDJX3cFA6KxOhGo6tBjOo8MQrObaqwTqtmjumybMKtwo6lBCZsaKmwELqcyZ4QWhBxBgIwXzY0ZljSqJs0lBt0hce4LM812XeYx7TPf5dzfUVtmJURiKfFcqj5qZY7kGBX3qdJOvK",
});

//console.log(process.env.SHAREME_SANITY_PROJECT_ID);

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
