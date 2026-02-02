"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export interface NavbarMenuLink {
    label: string;
    href: string;
    icon?: React.ReactNode;
    external?: boolean;
    description?: string;
    backgroundImage?: string;
    rowSpan?: number;
}

export interface NavbarMenuSection {
    id: string;
    links: NavbarMenuLink[];
    gridLayout?: string;
}

export interface NavbarMenuProps {
    activeMenu: string;
    sections: NavbarMenuSection[];
    onClose?: () => void;
}

export const ListItem = React.forwardRef<
    HTMLAnchorElement,
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        title: string;
        children?: React.ReactNode;
        href: string;
        external?: boolean;
        icon?: React.ReactNode;
        backgroundImage?: string;
        rowSpan?: number;
    }
>(
    (
        {
            className,
            title,
            children,
            href,
            external,
            icon,
            backgroundImage,
            rowSpan,
            ...props
        },
        ref,
    ) => {
        return (
            <li className={cn("list-none", rowSpan === 2 && "row-span-2")}>
                <a
                    ref={ref}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={cn(
                        "group relative flex h-full min-h-18 w-full flex-col justify-center overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-3.5 leading-none no-underline outline-none transition-all duration-150 select-none hover:bg-red-600/20 border border-white/20 hover:border-red-600/50 hover:text-white focus:bg-red-600/20 focus:text-white",
                        className,
                    )}
                    {...props}
                >
                    {backgroundImage && (
                        <>
                            <Image
                                fill
                                src={backgroundImage}
                                alt={title}
                                className="absolute inset-0 z-0 h-full w-full object-cover transition-all group-hover:brightness-60"
                            />
                            <div className="absolute inset-0 z-1 bg-linear-to-t from-black/90 via-black/50 to-black/20" />
                        </>
                    )}
                    <div
                        className={cn(
                            "flex items-start gap-3",
                            backgroundImage && "relative z-2 mt-auto",
                        )}
                    >
                        {icon && (
                            <span
                                className={cn(
                                    "relative flex min-h-10 min-w-10 items-center justify-center rounded-xl p-2 text-primary transition group-hover:text-zinc-300",
                                    backgroundImage
                                        ? "bg-white/5 backdrop-blur group-hover:bg-red-600/20 text-white"
                                        : "bg-zinc-800/80 group-hover:bg-red-600 text-white",
                                )}
                            >
                                {icon}
                            </span>
                        )}
                        <div className="flex h-full flex-col justify-start gap-1 leading-none font-normal text-red-600 group-hover:text-white transition-colors duration-150">
                            <span className="font-semibold text-sm">{title}</span>

                            {children && (
                                <p
                                    className={cn(
                                        "line-clamp-2 text-xs leading-tight font-light text-red-400 group-hover:text-white/80",
                                        backgroundImage && "relative z-2",
                                    )}
                                >
                                    {children}
                                </p>
                            )}
                        </div>
                    </div>
                </a>
            </li>
        );
    },
);

ListItem.displayName = "ListItem";

export function NavbarMenu({ activeMenu, sections }: NavbarMenuProps) {
    const activeSection = sections.find((section) => section.id === activeMenu);

    if (!activeSection) return null;

    const gridLayout =
        activeSection.gridLayout || "grid w-full grid-cols-2 gap-4";

    return (
        <motion.div
            initial={{ scaleY: 0.95, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0.95, opacity: 0 }}
            transition={{
                ease: [0.19, 1, 0.15, 1.01],
            }}
            className={cn(
                "fixed top-20 sm:top-24 left-0 right-0 z-40 w-full origin-top overflow-hidden border-b border-white/20 bg-white/30 backdrop-blur-xl outline-none shadow-2xl isolate",
            )}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
                <ul className={gridLayout}>
                    {activeSection.links.map((link) => (
                        <ListItem
                            key={link.href}
                            href={link.href}
                            title={link.label}
                            external={link.external}
                            icon={link.icon}
                            backgroundImage={link.backgroundImage}
                            rowSpan={link.rowSpan}
                        >
                            {link.description}
                        </ListItem>
                    ))}
                </ul>
            </div>
        </motion.div >
    );
}
