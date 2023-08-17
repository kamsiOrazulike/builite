"use client";
import Link from "next/link";

interface FooterLinkProps {
  href: string;
  label?: string;
  icon?: React.ReactNode;
}
export const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  label,
  icon,
}) => {
  return (
    <Link href={href}>
      <span className="flex flex-row justify-start">
        {icon}
        {label}
      </span>
    </Link>
  );
};
