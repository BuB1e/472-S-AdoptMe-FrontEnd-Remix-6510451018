import props from "./icon_props"

export default function IconCat({colorCode, width, height} : props) {
    return(
        <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${width} ${height}`}
            width={width}
            height={height}
          >
            <g
              fill="none"
              stroke={colorCode??"#000000"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path
                d="M12 5c.67 0 1.35.09 2 .26c1.78-2 5.03-2.84 6.42-2.26c1.4.58-.42 7-.42 7c.57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44c0 0-1.89-6.42-.5-7c1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5m-4 9v.5m8-.5v.5"
              />
              <path d="M11.25 16.25h1.5L12 17z" />
            </g>
          </svg>
    );
}