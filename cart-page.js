// cart-page.js - Xử lý trang giỏ hàng
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('cart-table')) {
        loadCartItems();
        setupCartEvents();
    }
});

function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartBody = document.querySelector('#cart-table tbody');
    const grandTotalElement = document.getElementById('grand-total');
    
    if (!cartBody) return;
    
    // Xóa nội dung cũ
    cartBody.innerHTML = '';
    
    let grandTotal = 0;
    
    if (cart.length === 0) {
        cartBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px;">
                    <p>Giỏ hàng của bạn đang trống</p>
                    <a href="index.html#products" style="color: #e91e63; text-decoration: underline;">
                        Tiếp tục mua sắm
                    </a>
                </td>
            </tr>
        `;
        return;
    }
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        grandTotal += itemTotal;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${item.image}" alt="${item.name}" 
                     onerror="this.src='./ảnh/default-product.jpg'">
            </td>
            <td>${item.name}</td>
            <td>${formatPrice(item.price)} VNĐ</td>
            <td>
                <div style="display: flex; align-items: center; gap: 10px; justify-content: center;">
                    <button class="btn-quantity minus" data-id="${item.id}">-</button>
                    <input type="number" value="${item.quantity}" min="1" 
                           class="quantity-input" data-id="${item.id}" style="width: 60px; text-align: center;">
                    <button class="btn-quantity plus" data-id="${item.id}">+</button>
                </div>
            </td>
            <td class="item-total">${formatPrice(itemTotal)} VNĐ</td>
            <td>
                <button class="btn-remove" data-id="${item.id}" 
                        style="background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">
                    Xóa
                </button>
            </td>
        `;
        
        cartBody.appendChild(row);
    });
    
    if (grandTotalElement) {
        grandTotalElement.textContent = formatPrice(grandTotal) + ' VNĐ';
    }
}

function setupCartEvents() {
    // Sự kiện thay đổi số lượng
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-quantity')) {
            const productId = e.target.dataset.id;
            const input = document.querySelector(`.quantity-input[data-id="${productId}"]`);
            let quantity = parseInt(input.value);
            
            if (e.target.classList.contains('minus')) {
                quantity = Math.max(1, quantity - 1);
            } else if (e.target.classList.contains('plus')) {
                quantity += 1;
            }
            
            input.value = quantity;
            updateCartItem(productId, quantity);
        }
        
        if (e.target.classList.contains('btn-remove')) {
            const productId = e.target.dataset.id;
            removeCartItem(productId);
        }
    });
    
    // Sự kiện input trực tiếp
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('quantity-input')) {
            const productId = e.target.dataset.id;
            const quantity = parseInt(e.target.value);
            
            if (quantity > 0) {
                updateCartItem(productId, quantity);
            }
        }
    });
    
    // Sự kiện thanh toán
    document.getElementById('checkout-btn')?.addEventListener('click', function() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            alert('Giỏ hàng của bạn đang trống!');
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`Thanh toán thành công!\nTổng tiền: ${formatPrice(total)} VNĐ\nCảm ơn bạn đã mua hàng!`);
        
        // Xóa giỏ hàng sau khi thanh toán
        localStorage.removeItem('cart');
        loadCartItems();
        
        // Cập nhật số lượng giỏ hàng
        if (typeof cartManager !== 'undefined') {
            cartManager.updateCartCount();
        }
    });
}

function updateCartItem(productId, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems();
        
        // Cập nhật số lượng trên header
        if (typeof cartManager !== 'undefined') {
            cartManager.updateCartCount();
        }
    }
}

function removeCartItem(productId) {
    if (confirm('Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?')) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const newCart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(newCart));
        loadCartItems();
        
        // Cập nhật số lượng trên header
        if (typeof cartManager !== 'undefined') {
            cartManager.updateCartCount();
        }
        
        showNotification('Đã xóa sản phẩm khỏi giỏ hàng');
    }
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function showNotification(message) {
    // Sử dụng hàm từ cart-fixed.js hoặc tạo mới
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff4444;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}
