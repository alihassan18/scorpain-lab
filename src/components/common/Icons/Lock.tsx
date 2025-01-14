import { IconProps } from "@/interfaces/icon.interface";

const Lock = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_900_798)">
        <path
          d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.895 8 4 8.895 4 10V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V10C20 8.895 19.105 8 18 8ZM12 17C10.895 17 10 16.105 10 15C10 13.895 10.895 13 12 13C13.105 13 14 13.895 14 15C14 16.105 13.105 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
          fill="#FF4581"
        />
      </g>
      <defs>
        <clipPath id="clip0_900_798">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Lock;
