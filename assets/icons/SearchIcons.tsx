export default function SearchIcon({
  width,
  height,
  color,
  className,
}: {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "20"}
      height={height ? height : "20"}
      viewBox={`0 0 ${width ? width : "20"} ${height ? height : "20"}`}
      fill="none"
      className={className}
    >
      <path
        d="M17.4999 17.4999L13.8808 13.8808M13.8808 13.8808C14.4998 13.2617 14.9909 12.5267 15.3259 11.7179C15.661 10.909 15.8334 10.0421 15.8334 9.16659C15.8334 8.29109 15.661 7.42416 15.326 6.61531C14.9909 5.80645 14.4998 5.0715 13.8808 4.45243C13.2617 3.83335 12.5267 3.34228 11.7179 3.00724C10.909 2.6722 10.0421 2.49976 9.16659 2.49976C8.29109 2.49976 7.42416 2.6722 6.61531 3.00724C5.80645 3.34228 5.0715 3.83335 4.45243 4.45243C3.20215 5.7027 2.49976 7.39844 2.49976 9.16659C2.49976 10.9347 3.20215 12.6305 4.45243 13.8808C5.7027 15.131 7.39844 15.8334 9.16659 15.8334C10.9347 15.8334 12.6305 15.131 13.8808 13.8808Z"
        stroke={color ? color : "black"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
