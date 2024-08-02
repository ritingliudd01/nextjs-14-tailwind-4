import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import cn from "classnames";

// function htmlDecode(input:string) {
//     var doc = new DOMParser().parseFromString(input, "text/html");
//     return doc.documentElement.textContent;
//   }

export default function classnames(...inputs: ClassValue[]) {
    return cn(inputs)
    // return twMerge(clsx(inputs))
}