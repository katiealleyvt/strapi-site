import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomePage, Hero, PageButton, DataResponse, Meta } from '../../api/components.tsx';



export const PageLink: React.FC<PageButton> = ({ color, isExternal, text, url }) => {

    // TODO: Let's make a better way to do this.
    var textColor = color == "primary" ? "white" : "black";
    var buttonClass:string = `mr-4 bg-${color} !text-${textColor}`;
    return(
        <Link href={url}>
                <Button size="lg" className={buttonClass}>{text}</Button>
        </Link>
    );
}