let productData = [
    {
        name:"Plain Notebook",
        img:"plainNoteboo",
        price: 109.00
    },
    {
        name:"Casual Handbag",
        img:"casualHandbag",
        price: 49.00
    },
    {
        name:"e-book Reader",
        img:"ebookReader",
        price: 199.00
    },
    {
        name:"Hard Coverbook",
        img:"CardboardBoxes",
        price: 59.00
    },
    {
        name:"Mug Mockup",
        img:"CardboardBoxes",
        price: 99.00
    },
    {
        name:"Hoodie Red",
        img:"CardboardBoxes",
        price: 599.00
    },
    {
        name:"Poster Mockup",
        img:"CardboardBoxes",
        price: 89.00
    },
    {
        name:"Cardboard Boxer",
        img:"CardboardBoxes",
        price: 99.00
    },
    {
        name:"Online Book",
        img:"CardboardBoxes",
        price: 99.00
    },
    {
        name:"Casual Shirts",
        img:"plainNoteboo",
        price: 11.00
    },
    {
        name:"Girls Wear",
        img:"casualHandbag",
        price: 3.00
    },
    {
        name:"Cricket Bats",
        img:"ebookReader",
        price: 50.00
    },
    {
        name:"Home Gym combos",
        img:"CardboardBoxes",
        price: 25.00
    },
    {
        name:"Pollution Masks",
        img:"CardboardBoxes",
        price: 17.00
    },
    {
        name:"Headphones",
        img:"CardboardBoxes",
        price: 59.00
    },
    {
        name:"Roller Ball pens",
        img:"CardboardBoxes",
        price: 8.00
    },
    {
        name:"Ladies beg",
        img:"CardboardBoxes",
        price: 37.00
    },
    {
        name:"Science Book",
        img:"CardboardBoxes",
        price: 22.00
    }
]

export const getProductList = () => dispatch =>{

    dispatch({
        type:"GET_PRODUCT_LIST",
        payload: productData
    })
}