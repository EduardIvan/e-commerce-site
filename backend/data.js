import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name:'Eduard',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'Mihai',
            email:'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
    ],
    products:[
        {
            name:'Converse Shoes',
            category:'Shoes',
            image:'/images/product-1.png',
            price: 120,
            countInStock: 10,
            brand: 'Converse',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name:'Nike Shirt',
            category:'Shirt',
            image:'/images/product-1.png',
            price: 54,
            countInStock: 25,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name:'Adidas sport shorts',
            category:'Shorts',
            image:'/images/product-1.png',
            price: 89,
            countInStock: 50,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name:'Converse Hat',
            category:'Hat',
            image:'/images/product-1.png',
            price: 30,
            countInStock: 1,
            brand: 'Converse',
            rating: 3.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name:'Converse Socks',
            category:'Socks',
            image:'/images/product-1.png',
            price: 25,
            countInStock: 0,
            brand: 'Converse',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name:'Lacoste Belt',
            category:'Belt',
            image:'/images/product-1.png',
            price: 5,
            countInStock: 21,
            brand: 'Lacoste',
            rating: 5.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name:'Lacoste necklace',
            category:'Belt',
            image:'/images/product-1.png',
            price: 5,
            countInStock: 21,
            brand: 'Lacoste',
            rating: 5.0,
            numReviews: 10,
            description: 'high quality product',
        },
    ],
};
export default data;