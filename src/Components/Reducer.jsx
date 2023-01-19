export const initialState = {
    authInfo : {},
    cartList: [],
    productList: [{
        title: "Keyboard",
        price: ' 499',
        rating: '1.9',
        imageURL: 'https://th.bing.com/th/id/R.ee7a1edd378a60029aa6ed98259b23ff?rik=rs3WKB11tSsDUA&riu=http%3a%2f%2fcliparts.co%2fcliparts%2fpc7%2frnX%2fpc7rnX4ni.jpg&ehk=soVHxvYrwXN15VRlkR8IYBfyckB9CPDevUWqnNuMwkA%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        title: "Laptop",
        price: ' 39999',
        rating: '3.4',
        imageURL: 'https://www.adorama.com/images/Large/acv513110174.jpg'
    }, {
        title: "Headphone",
        price: ' 1599',
        rating: '4.8',
        imageURL: 'https://i5.walmartimages.com/asr/8d41493a-3ca3-4d77-9634-5ba815573f97_1.a208e12fea139617aed026e24905572b.jpeg'
    },
    {
        title: "Wired earphone",
        price: ' 699',
        rating: '4',
        imageURL: 'https://cdn.shopify.com/s/files/1/1083/4908/products/AF781-0-01_HERO_HIGHRES.jpg?v=1458085059'
    },
    {
        title: "Laptop charger",
        price: ' 499',
        rating: '4.5',
        imageURL: 'https://i5.walmartimages.com/asr/4c10c855-b88d-40d9-8f0e-cacaf7abfd98_1.ee406ca2ff799841fa1576f2f4051657.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff'
    },
    {
        title: "Macbook Air Pro 13",
        price: ' 89999',
        rating: '4.7',
        imageURL: 'https://techcrunch.com/wp-content/uploads/2015/04/macbook-front.jpg'
    },
    {
        title: "Pendrive",
        price: ' 999',
        rating: '2.3',
        imageURL: 'https://th.bing.com/th/id/OIP.__h1jRLrUgcRZHglCHx5zgHaE5?pid=ImgDet&rs=1'
    },
    {
        title: "Phone",
        price: '10999',
        rating: '4.5',
        imageURL: 'https://static.digit.in/product/1a2ed0b150e41a41e20d24cbce5b7b2f06c91018.jpeg?tr=w-1200'
    },
    {
        title: "Smartwatch",
        price: '2999',
        rating: '3',
        imageURL: 'https://th.bing.com/th/id/OIP.3jOBtBw9Q9iB8CU2YCFjxQHaHa?pid=ImgDet&rs=1'
    },
    {
        title: "Book",
        price: '136',
        rating: '5',
        imageURL: 'https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UY218_.jpg'
    },
    {
        title: "iphone",
        price: '39999',
        rating: '4.5',
        imageURL: 'https://miro.medium.com/max/1200/1*4Swg7iGW3J4YJIaAGXvugQ.jpeg'
    },
    {
        title: "Data cable",
        price: '199',
        rating: '2',
        imageURL: 'https://n4.sdlcdn.com/imgs/h/y/u/INDIASHOPERS-USB-Data-Cable-White-SDL334740225-2-c150c.jpeg'
    }

    ]
}
export const reducer = ( state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartList: [...state.cartList, action.payload]
            }
            case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartList: state.cartList.filter((item) =>item.id!==action.payload) 
            }
            case 'SIGN_IN':
            return {
                ...state,
                authInfo :action.payload
            }
        default:
            return state;
    }

}