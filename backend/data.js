import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Venesa',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name:"Men's hoodie",
      category:'Hoodie',
      image:'/images/p1.jpeg',
      price: 120,
      countInStock: 10,
      rating:0,
      numReviews:0,
      description: 'A closet staple, the Sportswear Club Fleece Pullover Hoodie combines classic style with the soft comfort of fleece.'
     
    },
    {
      name:"Men's hoodie Sport",
      category:'Hoodie',
      image:'/images/p2.jpeg',
      price: 105,
      countInStock: 10,
      rating:0,
      numReviews:0,
      description: 'A closet staple, the Sportswear Club Fleece Pullover Hoodie combines classic style with the soft comfort of fleece.'
     
    },
    {
      name:"Men's hoodie Elevator",
      category:'Hoodie',
      image:'/images/p3.jpeg',
      price: 55,
      countInStock: 10,
      rating:0,
      numReviews:0,
      description: 'A closet staple, the Sportswear Club Fleece Pullover Hoodie combines classic style with the soft comfort of fleece.'
     
    },
    {
      name:"Women's hoodie Combine",
      category:'Hoodie',
      image:'/images/p4.jpeg',
      price: 89,
      countInStock: 10,
      rating:0,
      numReviews:0,
      description: 'A closet staple, the Sportswear Club Fleece Pullover Hoodie combines classic style with the soft comfort of fleece.'
   
    },
    {
      name:"Women's hoodie Club",
      category:'Hoodie',
      image:'/images/p5.jpeg',
      price: 45,
      countInStock: 10,
      rating:0,
      numReviews:0,
      description: 'A closet staple, the Sportswear Club Fleece Pullover Hoodie combines classic style with the soft comfort of fleece.'
   
     
    },
    {
      name:"Men's shirt Comfort",
      category:'Shirts',
      image:'/images/p6.jpeg',
      price: 28,
      countInStock: 10,
      rating:0,
      numReviews:0,
      description: 'Stitching and fabric applique at the hem accent the fabric, which is made from a blend of at least 75% recycled and organic materials'
   
    
    },

    {
      name:"Men's shirt Hem",
      category:'Shirts',
      image:'/images/p7.jpeg',
      price: 37,
      countInStock: 10,
      rating:0,
      numReviews:0,
      description: 'Stitching and fabric applique at the hem accent the fabric, which is made from a blend of at least 75% recycled and organic materials'
   
    
    },

    {
      name:"Women's shirt Cotton",
      category:'Shirts',
      image:'/images/p8.jpeg',
      price: 39,
      countInStock: 10,
      rating:0,
      numReviews:0,
      description: 'Stitching and fabric applique at the hem accent the fabric, which is made from a blend of at least 75% recycled and organic materials'
   
    
    },
    {
      name:"Women's shirt Fabulous",
      category:'Shirts',
      image:'/images/p9.jpeg',
      price: 28,
      countInStock: 10,
      rating:0,
      numReviews:0,
      description: 'Stitching and fabric applique at the hem accent the fabric, which is made from a blend of at least 75% recycled and organic materials'
   
    
    },
    {
      name:"Women's shirt Organic",
      category:'Shirts',
      image:'/images/p10.jpeg',
      price: 45,
      countInStock: 10,
      rating:0,
      numReviews:0,
      description: 'Stitching and fabric applique at the hem accent the fabric, which is made from a blend of at least 75% recycled and organic materials'
   
    
    },
  ],
};
export default data;
