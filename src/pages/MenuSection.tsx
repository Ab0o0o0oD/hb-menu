import React from "react";
import type {Item} from "@/types.ts";

interface MenuSectionProps {
    title: string;
    items: Item[]
}

export const MenuSection: React.FC<MenuSectionProps> = ({items,title}:MenuSectionProps) => {
    return (
        <section className="my-6 px-4 md:px-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex justify-between">
                        <span>{item.name}</span>
                        <span className="font-semibold">{item.price}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};