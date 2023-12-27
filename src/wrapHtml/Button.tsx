import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <div>
      <button className={`class-with-${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
};

/*
<CustomButton variant="secondary" onClick={() => console.log("clicked")}>
Secondary Button
</CustomButton>
*/
