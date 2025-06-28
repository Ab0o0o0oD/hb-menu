import React from "react";
import {MenuSection} from "@/pages/MenuSection.tsx";
import menu from "@/menu.ts";


export const Menu: React.FC = () => {

    return (
        <div><MenuSection
            title={menu.pizza.title}
            items={menu.pizza.items}
        /></div>
    );
};