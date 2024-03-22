export const CouponCard = ({coupon}) => {
    return (
        <div className={"w-[154.667px] transition-transform relative h-full shrink-0"}>
            <section className={"flex-col flex rounded-md border-surface-dark border-[0.0625rem ] bg-surface-main px-3 py-2 h-[3.25rem]"}>
                <p className={"font-iranSans text-sm text-inactive-dark"}>dfghdfh</p>
                <p className={"font-iranSans text-xs text-inactive-dark"}>{coupon}</p>
            </section>
        </div>
    )
}