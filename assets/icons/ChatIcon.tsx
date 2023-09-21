export default function ChatIcon({
  width,
  height,
  color,
  className,
  isActive,
}: {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
  isActive?: boolean;
}) {
  if (isActive) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <g clip-path="url(#clip0_31_58)">
          <path
            d="M1.5 3.5L2 1.5H16.5V12.5L12.5 13.5L9 16.5L5 13.5L1.5 13V3.5Z"
            fill="#9C00CD"
          />
          <path
            d="M3.37524 1.125H14.6246"
            stroke="#9C00CD"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M16.8752 3.375C16.8752 2.77826 16.6382 2.20597 16.2162 1.78401C15.7943 1.36206 15.222 1.125 14.6252 1.125"
            stroke="#9C00CD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.12525 3.375C1.12525 2.77826 1.3623 2.20597 1.78426 1.78401C2.20621 1.36206 2.77851 1.125 3.37524 1.125"
            stroke="#9C00CD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.12525 11.25C1.12525 11.5455 1.18345 11.8381 1.29652 12.111C1.40959 12.384 1.57533 12.6321 1.78426 12.841C1.99319 13.0499 2.24123 13.2157 2.51421 13.3287C2.78719 13.4418 3.07977 13.5 3.37524 13.5"
            stroke="#9C00CD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.8752 11.25C16.8752 11.8467 16.6382 12.419 16.2162 12.841C15.7943 13.2629 15.222 13.5 14.6252 13.5"
            stroke="#9C00CD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.12524 3.375V11.25"
            stroke="#9C00CD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.8752 3.375V11.25"
            stroke="#9C00CD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.37524 13.5H5.62524L9.00023 16.875L12.3752 13.5H14.6252"
            stroke="#9C00CD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_31_58">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <g clip-path="url(#clip0_31_43)">
          <path
            d="M3.37524 1.125H14.6246"
            stroke="#393838"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M16.8752 3.375C16.8752 2.77826 16.6382 2.20597 16.2162 1.78401C15.7943 1.36206 15.222 1.125 14.6252 1.125"
            stroke="#393838"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.12525 3.375C1.12525 2.77826 1.3623 2.20597 1.78426 1.78401C2.20621 1.36206 2.77851 1.125 3.37524 1.125"
            stroke="#393838"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.12525 11.25C1.12525 11.5455 1.18345 11.8381 1.29652 12.111C1.40959 12.384 1.57533 12.6321 1.78426 12.841C1.99319 13.0499 2.24123 13.2157 2.51421 13.3287C2.78719 13.4418 3.07977 13.5 3.37524 13.5"
            stroke="#393838"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.8752 11.25C16.8752 11.8467 16.6382 12.419 16.2162 12.841C15.7943 13.2629 15.222 13.5 14.6252 13.5"
            stroke="#393838"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.12524 3.375V11.25"
            stroke="#393838"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.8752 3.375V11.25"
            stroke="#393838"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.37524 13.5H5.62524L9.00023 16.875L12.3752 13.5H14.6252"
            stroke="#393838"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_31_43">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
}
