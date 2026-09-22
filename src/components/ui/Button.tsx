import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { MotionPressWrap } from "./MotionPressWrap";

type Variant = "primary" | "ghost";

interface SharedProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition-colors duration-150";

const variants: Record<Variant, string> = {
  primary: "bg-sand text-[var(--color-base)] hover:bg-nude",
  ghost:
    "bg-transparent text-text border border-line-strong hover:border-sand",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    const isExternal = /^https?:\/\//.test(href) || href.startsWith("wa.me");
    const isHash = href.includes("#") && !href.startsWith("/");

    if (isExternal) {
      return (
        <MotionPressWrap className="inline-block">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
            {...anchorRest}
          >
            {children}
          </a>
        </MotionPressWrap>
      );
    }

    return (
      <MotionPressWrap className="inline-block">
        <Link href={href} scroll={isHash} className={classes} {...anchorRest}>
          {children}
        </Link>
      </MotionPressWrap>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <MotionPressWrap className="inline-block">
      <button className={classes} {...buttonRest}>
        {children}
      </button>
    </MotionPressWrap>
  );
}
