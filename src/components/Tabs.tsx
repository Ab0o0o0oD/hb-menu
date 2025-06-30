import React from "react";

interface TabsProps {
    tabItems: { name: string, anchor: string; }[]
}

export const Tabs: React.FC<TabsProps> = ({ tabItems}: TabsProps) => {

    return (
        <div className="md:sticky top-0" style={{backgroundColor: "#af282c"}}>
            <div className="border-b border-gray-200 dark:border-gray-700 ">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-white dark:text-gray-400">
                    <li className="me-2">
                        <a href={tabItems[0].anchor}
                           className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-white-600 hover:border-gray-300 dark:hover:text-yellow-300 group">
                            {tabItems[0].name}
                        </a>
                    </li>
                    <li className="me-2">
                        <a href={tabItems[1].anchor}
                           className="inline-flex items-center justify-center p-4 border-b-2 text-white border-transparent rounded-t-lg hover:text-white-600 hover:border-gray-300 dark:hover:text-yellow-300 group"
                           aria-current="page">
                            {tabItems[1].name}
                        </a>
                    </li>
                    <li className="me-2">
                        <a href={tabItems[2].anchor}
                           className="inline-flex items-center justify-center p-4 border-b-2 text-white border-transparent rounded-t-lg hover:text-white-600 hover:border-gray-300 dark:hover:text-yellow-300 group">
                            {tabItems[2].name}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}