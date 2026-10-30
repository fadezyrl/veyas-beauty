import type { JSX } from "react";

type PlaceholderImageProps = {
  label: string;
  className?: string;
};

export const PlaceholderImage = ({
  label,
  className = "",
}: PlaceholderImageProps): JSX.Element => {
  return (
    <div className={`ph ${className}`.trim()} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
};
