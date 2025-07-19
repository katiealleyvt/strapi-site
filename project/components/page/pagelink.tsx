import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomePage, Hero, PageButton, DataResponse, Meta } from '../../api/interfaces.tsx';



export const PageLink: React.FC<PageButton> = ({ color, isExternal, text, url }) => {


    return(
        <Link href={url}>
                <Button size="lg" className='mr-4 text-md' variant={color}>{text}</Button>
        </Link>
    );
}