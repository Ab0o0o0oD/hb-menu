export const ResponsiveLayOut = () => {
    return (
        <div className="flex flex-col">
            <div className={"bg-blue-500 text-center text-white py-4"}>Top ssection</div>

            <div className="flex flex-col md:flex-row">
                <div className={"w-full md:w-1/2 bg-red-500 text-white text-center py-4"}>Left Column</div>
                <div className={"w-full md:w-1/2 bg-gray-500 text-white text-center py-4"}>Left Column</div>
            </div>
            <div className="h-64 flex items-center justify-center bg-yellow-500 text-white">
                Centered Content
            </div>
        </div>
    )
}