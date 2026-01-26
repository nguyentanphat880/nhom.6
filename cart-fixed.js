
class CartManager {
    constructor() {
        this.loadCart();
    }
    
    loadCart() {
        const cartData = localStorage.getItem('cart');
        this.cart = cartData ? JSON.parse(cartData) : [];
    }
    
    addToCart(product, quantity = 1) {
        const existingItem = this.cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: product.id,
                name: product.tendv || product.name,
                image: product.anh || product.image,
                price: parseInt(product.gia || product.price),
                quantity: quantity,
                category: product.category
            });
        }
        
        this.saveCart();
        this.updateCartCount();
        return true;
    }
    
    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
    }
    
    updateQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartCount();
            }
        }
    }
    
    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartCount();
    }
    
    getTotalItems() {
        return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    }
    
    getTotalPrice() {
        return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
    
    getCart() {
        return this.cart;
    }
    
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    
    updateCartCount() {
        const totalItems = this.getTotalItems();
        
        // Cập nhật badge giỏ hàng trong header
        const cartBadge = document.getElementById('cart-badge');
        if (cartBadge) {
            cartBadge.textContent = totalItems;
            cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
        }
        
        // Cập nhật tất cả các phần tử có class cart-count
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(element => {
            element.textContent = totalItems;
            element.style.display = totalItems > 0 ? 'inline-block' : 'none';
        });
        
        // Cập nhật số lượng trên icon giỏ hàng
        const cartIconBadge = document.querySelector('.cart-icon-badge');
        if (cartIconBadge) {
            cartIconBadge.textContent = totalItems;
            cartIconBadge.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }
}

// Khởi tạo CartManager toàn cục
const cartManager = new CartManager();

// Cập nhật số lượng giỏ hàng khi trang load
document.addEventListener('DOMContentLoaded', function() {
    cartManager.updateCartCount();
    
    // Thêm sự kiện cho các nút "Thêm vào giỏ hàng"
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            const product = getProductById(productId);
            if (product) {
                cartManager.addToCart(product);
                showNotification('Đã thêm vào giỏ hàng!');
            }
        });
    });
});

// Hàm lấy sản phẩm theo ID (cần định nghĩa trong file dữ liệu)
function getProductById(productId) {
    // Tìm sản phẩm trong tất cả danh sách
    const allProducts = [...dshaisan1, ...dshaisan2, ...dshaisan3, ...dshaisan4];
    return allProducts.find(p => p.id === productId);
}

// Hiển thị thông báo
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Thêm CSS animation cho thông báo
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .cart-icon-badge {
        position: absolute;
        top: -5px;
        right: -5px;
        background: #e91e63;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
document.head.appendChild(style);