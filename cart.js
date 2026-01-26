// cart.js - Quản lý giỏ hàng
class CartManager {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
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
            item.quantity = quantity;
            this.saveCart();
            this.updateCartCount();
        }
    }
    
    getTotalItems() {
        return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    }
    
    getTotalPrice() {
        return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
    
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    
    updateCartCount() {
        const totalItems = this.getTotalItems();
        const cartBadge = document.getElementById('cart-badge');
        
        if (cartBadge) {
            cartBadge.textContent = totalItems;
            cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
        }
        
        // Cập nhật trên các trang có cart-count
        const cartCountElements = document.querySelectorAll('#cart-count');
        cartCountElements.forEach(element => {
            element.textContent = totalItems;
        });
    }
}

// Khởi tạo CartManager toàn cục
const cartManager = new CartManager();

// Cập nhật số lượng giỏ hàng khi trang load
document.addEventListener('DOMContentLoaded', function() {
    cartManager.updateCartCount();
});