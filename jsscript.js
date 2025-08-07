document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Basic example - in a real app, you'd fetch product data from a server
    let productData;

    switch (productId) {
        case '1':
            productData = {
                name: 'Smartphone',
                description: 'This is a powerful smartphone with a high-resolution display, advanced camera features, and long battery life.',
                price: '$499',
                image: 'https://source.unsplash.com/400x300/?electronics' //Replace with your link
            };
            break;
        case '2':
            productData = {
                name: 'Fashionable Dress',
                description: 'Elegant dress for special occasions.',
                price: '$79',
                image: 'https://source.unsplash.com/400x300/?clothing' //Replace with your link
            };
            break;
        case '3':
            productData = {
                name: 'Modern Sofa',
                description: 'Comfortable and stylish sofa for your living room.',
                price: '$799',
                image: 'https://source.unsplash.com/400x300/?furniture' //Replace with your link
            };
            break;
        case '4':
            productData = {
                name: 'Gaming Laptop',
                description: 'Latest model with advanced features.',
                price: '$1499',
                image: 'https://source.unsplash.com/400x300/?laptop' //Replace with your link
            };
            break;
        default:
            productData = {
                name: 'Product Not Found',
                description: 'Product data unavailable.',
                price: 'N/A',
                image: 'https://via.placeholder.com/400x300?text=Not+Found'
            };
    }

    // Update the product page with the fetched data
    if (productData) {
        document.querySelector('#product-details .product-image img').src = productData.image;
        document.querySelector('#product-details .product-info h2').textContent = productData.name;
        document.querySelector('#product-details .product-info .description').textContent = productData.description;
        document.querySelector('#product-details .product-info .price').textContent = productData.price;
    }
});
