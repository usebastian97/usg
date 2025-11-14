import "@testing-library/jest-dom";
import React from "react";

vi.mock("next/link", () => {
  return {
    default: ({ href, children, ...props }: React.ComponentProps<"a"> & { href: string }) => (
      <a href={href} {...props}>
        {children}
      </a>
    ),
  };
});

vi.mock("next/navigation", () => {
  return {
    usePathname: () => "/",
  };
});
