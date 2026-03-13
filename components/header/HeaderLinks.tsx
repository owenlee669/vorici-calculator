"use client";

import { Link as I18nLink, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { HeaderLink } from "@/types/common";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const HeaderLinks = () => {
  const tHeader = useTranslations("Header");
  const pathname = usePathname();

  const headerLinks: HeaderLink[] = tHeader.raw("links");

  return (
    <div className="hidden md:flex flex-row items-center gap-x-2 text-sm font-medium text-muted-500">
      {headerLinks.map((link) => (
        link.href.includes("#") ? (
          <Link
            key={link.name}
            href={link.href}
            title={link.name}
            prefetch={false}
            className={cn(
              "rounded-xl px-4 py-2 flex items-center gap-x-1 hover:bg-accent-foreground/10 hover:text-accent-foreground",
              pathname === "/" && "text-accent-foreground"
            )}
          >
            {link.name}
          </Link>
        ) : (
          <I18nLink
            key={link.name}
            href={link.href}
            title={link.name}
            prefetch={link.target && link.target === "_blank" ? false : true}
            target={link.target || "_self"}
            rel={link.rel || undefined}
            className={cn(
              "rounded-xl px-4 py-2 flex items-center gap-x-1 hover:bg-accent-foreground/10 hover:text-accent-foreground",
              pathname === link.href && "font-semibold text-accent-foreground"
            )}
          >
            {link.name}
            {link.target && link.target === "_blank" && (
              <span className="text-xs">
                <ExternalLink className="w-4 h-4" />
              </span>
            )}
          </I18nLink>
        )
      ))}
    </div>
  );
};

export default HeaderLinks;
