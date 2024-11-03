import { Link } from "@remix-run/react"
import props from "./icon_props"
import { useEffect, useState } from "react";

export default function IconSearch({colorCode, width, height} : props) {
    const [clear, setClear] = useState(false);

    useEffect(() => {
        if (clear) {
          sessionStorage.clear();
        }
      }, [clear]);

    return(
        <Link to="/" onClick={() => {
            setClear(true);
          }}
          prefetch="intent"
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} fill={colorCode??"#000000"} style={{width:width, height:height}}>
            <path fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd" />
        </svg>
        </Link>
    );
}