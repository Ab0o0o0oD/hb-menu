interface TabsBtnProps {
    label: string;
    setActiveTab: (val: string) => void;
    activeTab: string;
    className?: string;
    iconSrc?: string;
}

export const TabBtn = ({

                           label,
                           setActiveTab,
                           activeTab,
                           className,
                           iconSrc

                       }: TabsBtnProps) => {
    return (
        <button
            type="button"
            className={`${className} py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-lg font-bold whitespace-nowrap ${
                activeTab === label
                    ? 'border-red-600 text-red-400 font-semibold'
                    : 'border-transparent text-gray-600 hover:text-black-200'
            }`}
            onClick={(e) => {
                e.preventDefault();
                setActiveTab(label)
            }}
        >

            {iconSrc ? <img width={24} height={24} src={iconSrc} alt="shawarma"/> : <></>}
            {label}
        </button>
    )
}