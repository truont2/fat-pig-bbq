// use getserverside prop in order to check data before it renders if we are authenticated

import { fetcher } from "../../lib/api";
const Item = ({menuItem}) => {

}

export async function getserversideProps({params}) {
    const {slug} = params;
    const menuResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/menu-items/${slug}`);
    return {
        props: {
            menuItem: menuResponse.data
        }
    }

}

export default Item;