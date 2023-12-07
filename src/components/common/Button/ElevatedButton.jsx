"use client";
import Link from "next/link";
export default function ElevatedButton(props) {
   const { href, name, click } = props;

   return href ? (
      <Link
         href={href}
         onClick={click && click}
         className="flex h-10 min-w-max items-center break-normal rounded-full px-6 font-medium text-white  transition-[background,transform] hover:bg-l-p-600 active:scale-90 dark:bg-[oklch(0%_0_360)]  dark:bg-d-primary"
      >
         {name}
      </Link>
   ) : (
      <button
         onClick={click && click}
         className="flex h-10 min-w-max items-center break-normal rounded-full bg-l-primary px-6 font-medium text-white transition-[background,transform] active:scale-90 dark:bg-d-primary"
      >
         {name}
      </button>
   );
}
