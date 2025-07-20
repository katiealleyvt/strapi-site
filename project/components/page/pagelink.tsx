import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Page, Hero, PageButton } from '../../api/interfaces.tsx';



export const PageLink: React.FC<PageButton> = ({ color, isExternal, text, url }) => {


    return(
        <Link href={url}>
                <Button size="lg" className={`mr-4 text-md bg-${color} text-white hover:text-${color} hover:bg-white`}>{text}</Button>
        </Link>
    );
}