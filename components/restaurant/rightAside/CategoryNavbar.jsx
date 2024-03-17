export const CategoryNavbar = ({resInfo}) => {
    return (
        <nav className={"h-[30vh] CatNavbar-RightAside overflow-y-auto flex flex-col min-h-[9.375rem]"}>
            <p className={"mb-4 text-carbon-light text-sm font-iranSans cursor-pointer px-3 py-0.5"}>
                پر‌طرفدارها
            </p>
            {
                resInfo.discount && <p className={"mb-4 text-carbon-light text-sm font-iranSans cursor-pointer px-3 py-0.5"}>
                    تخفیف‌دارها
                </p>
            }
            {
                resInfo.foodList.map((item, i) => (
                    <p className={"mb-4 text-carbon-light text-sm font-iranSans cursor-pointer px-3 py-0.5"} key={i}>
                        {item}
                    </p>
                ))
            }
        </nav>
    )
}