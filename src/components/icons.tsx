import type { ReactNode, SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & { size?: number };

function Base({ size = 32, children, ...rest }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const SearchBulb = (p: IconProps) => (
  <Base strokeWidth={1.8} {...p}>
    <circle cx="10" cy="10" r="6.5" />
    <path d="m21 21-6-6" />
    <path d="M8.2 11.5h3.6M9 13h2" />
    <path d="M10 4.6a3.6 3.6 0 0 0-1.8 6.7c.4.3.6.7.6 1.2h2.4c0-.5.2-.9.6-1.2A3.6 3.6 0 0 0 10 4.6z" />
  </Base>
);

export const CheckCircle = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="m8 12 3 3 5-6" />
  </Base>
);

export const Magnifier = (p: IconProps) => (
  <Base {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
    <path d="M11 8v3l2 1" />
  </Base>
);

export const Book = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z" />
    <path d="M4 19.5V22h16v-3" />
  </Base>
);

export const Bulb = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
  </Base>
);

export const Plane = ({ off, ...p }: IconProps & { off?: boolean }) => (
  <Base strokeWidth={1.8} {...p}>
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    {off && <path d="M2 22 22 2" strokeDasharray="2 3" />}
  </Base>
);

export const Snowflake = (p: IconProps) => (
  <Base strokeWidth={1.8} {...p}>
    <path d="M12 2v20M4.9 7l14.2 10M4.9 17 19.1 7" />
    <path d="m9.5 3.5 2.5 2 2.5-2M9.5 20.5l2.5-2 2.5 2" />
  </Base>
);

export const Pencil = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
  </Base>
);

export const Warning = (p: IconProps) => (
  <Base {...p}>
    <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
    <path d="M12 9v4M12 17h.01" />
  </Base>
);

export const Compass = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="m16 8-2 6-6 2 2-6z" />
  </Base>
);
