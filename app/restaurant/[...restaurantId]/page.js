export default function RestaurantId ({params}) {
    console.log(params)
    return (
        <h1>Hello world! {params.restaurantId[1]}</h1>
    )
}
