import { Key } from "react";

export interface Datatype{
    _id: Key | null | undefined;
    title: string;
    link: string;
    category:string;
    date:Date;
    content:string;

}