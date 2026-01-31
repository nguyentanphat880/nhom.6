// search-pagination.js - Hệ thống tìm kiếm và phân trang cho hải sản

// Cấu hình phân trang
const PRODUCTS_PER_PAGE = 9;

// Hợp nhất tất cả sản phẩm hải sản
const ALL_HAISAN = [
    ...dshaisan1.map(p => ({...p, type: 'caocap'})),
    ...dshaisan2.map(p => ({...p, type: 'donglanh'})),
    ...dshaisan3.map(p => ({...p, type: 'tuoisong'})),
    ...dshaisan4.map(p => ({...p, type: 'banchay'}))
];

// Biến toàn cục
let currentCategory = 'all';
let currentPage = 1;
let filteredProducts = [...ALL_HAISAN];
let isSearching = false;
let searchResults = [];
let searchQuery = '';

// Hàm lọc sản phẩm theo danh mục
function filterProducts(category) {
    if (isSearching) {
        clearSearch();
    }
    
    currentCategory = category;
    currentPage = 1;
    
    // Cập nhật active state cho danh mục
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
        if (item.onclick && item.onclick.toString().includes(`'${category}'`)) {
            item.classList.add('active');
        }
    });
    
    // Lọc sản phẩm
    if (category === 'all') {
        filteredProducts = [...ALL_HAISAN];
        document.getElementById('category-title').textContent = 'TẤT CẢ HẢI SẢN';
        document.getElementById('category-description').textContent = 'Khám phá hải sản tươi ngon, chất lượng cao';
    } else if (category === 'caocap') {
        filteredProducts = ALL_HAISAN.filter(p => p.type === 'caocap');
        document.getElementById('category-title').textContent = 'HẢI SẢN CAO CẤP';
        document.getElementById('category-description').textContent = 'Những loại hải sản cao cấp, nhập khẩu chất lượng';
    } else if (category === 'donglanh') {
        filteredProducts = ALL_HAISAN.filter(p => p.type === 'donglanh');
        document.getElementById('category-title').textContent = 'HẢI SẢN ĐÔNG LẠNH';
        document.getElementById('category-description').textContent = 'Hải sản đông lạnh, tiện lợi, bảo quản lâu';
    } else if (category === 'tuoisong') {
        filteredProducts = ALL_HAISAN.filter(p => p.type === 'tuoisong');
        document.getElementById('category-title').textContent = 'HẢI SẢN TƯƠI SỐNG';
        document.getElementById('category-description').textContent = 'Hải sản tươi sống, đánh bắt trong ngày';
    } else if (category === 'banchay') {
        filteredProducts = ALL_HAISAN.filter(p => p.type === 'banchay');
        document.getElementById('category-title').textContent = 'HẢI SẢN BÁN CHẠY';
        document.getElementById('category-description').textContent = 'Những loại hải sản được ưa chuộng nhất';
    } else if (category === 'sale') {
        // Sản phẩm giảm giá (demo)
        filteredProducts = ALL_HAISAN.slice(0, 15).map(p => ({
            ...p,
            originalPrice: parseInt(p.gia) * 1.2
        }));
        document.getElementById('category-title').textContent = 'HẢI SẢN KHUYẾN MÃI';
        document.getElementById('category-description').textContent = 'Ưu đãi đặc biệt cho hải sản tươi ngon';
    } else if (category === 'new') {
        // Sản phẩm mới (demo - lấy 10 sản phẩm đầu)
        filteredProducts = ALL_HAISAN.slice(0, 10);
        document.getElementById('category-title').textContent = 'HẢI SẢN MỚI VỀ';
        document.getElementById('category-description').textContent = 'Những loại hải sản mới nhất';
    }
    
    // Hiển thị sản phẩm
    renderProducts();
    renderPagination();
}

// Hàm hiển thị sản phẩm
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    // Tính toán sản phẩm cho trang hiện tại
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    // Xóa nội dung cũ
    grid.innerHTML = '';
    
    // Hiển thị sản phẩm
    productsToShow.forEach(product => {
        const cardClass = getCardClassByType(product.type);
        const formattedPrice = formatPrice(product.gia);
        
        // Highlight từ khóa tìm kiếm nếu đang tìm kiếm
        let productName = product.tendv || 'Hải sản không tên';
        if (isSearching && searchQuery) {
            productName = highlightSearchText(productName, searchQuery);
        }
        
        const card = document.createElement("div");
        card.className = cardClass;
        
        // Kiểm tra nếu có giá gốc (sale)
        let priceHTML = `<div class="gia">${formattedPrice} VNĐ</div>`;
        if (product.originalPrice) {
            const originalFormatted = formatPrice(product.originalPrice);
            priceHTML = `
                <div class="gia sale-price">
                    <span class="original-price">${originalFormatted} VNĐ</span>
                    <span class="current-price">${formattedPrice} VNĐ</span>
                    <span class="discount-badge">-20%</span>
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.anh || './ảnh/default-product.jpg'}" 
                     alt="${product.tendv}" 
                     onerror="this.onerror=null; this.src='./ảnh/default-product.jpg';">
                ${product.originalPrice ? '<div class="sale-tag">Sale</div>' : ''}
                ${currentCategory === 'new' ? '<div class="new-tag">Mới</div>' : ''}
            </div>
            <div class="product-info">
                <div class="ten">${productName}</div>
                <div class="product-category">${product.category}</div>
                <div class="product-details">
                    <span class="weight"><i class="fas fa-weight"></i> ${product.weight || '1kg'}</span>
                    <span class="origin"><i class="fas fa-map-marker-alt"></i> ${product.origin || 'Việt Nam'}</span>
                </div>
                ${priceHTML}
                <div class="action-buttons">
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                    <button class="view-detail-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i> Xem chi tiết
                    </button>
                </div>
            </div>
        `;
        
        // Thêm sự kiện click
        card.addEventListener("click", (e) => {
            if (e.target.closest('.add-to-cart-btn') || e.target.closest('.view-detail-btn')) {
                return;
            }
            
            try {
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "product-detail.html";
            } catch (error) {
                console.error('Lỗi khi lưu sản phẩm:', error);
                alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
            }
        });
        
        // Sự kiện cho nút thêm vào giỏ
        const addBtn = card.querySelector('.add-to-cart-btn');
        if (addBtn) {
            addBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                handleAddToCart(product, this);
            });
        }
        
        // Sự kiện cho nút xem chi tiết
        const viewBtn = card.querySelector('.view-detail-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                try {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    window.location.href = "product-detail.html";
                } catch (error) {
                    console.error('Lỗi khi lưu sản phẩm:', error);
                    alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
                }
            });
        }
        
        grid.appendChild(card);
    });
    
    // Nếu không có sản phẩm
    if (productsToShow.length === 0) {
        const message = isSearching ? 
            `Không tìm thấy hải sản nào phù hợp với "${searchQuery}"` :
            'Hiện không có sản phẩm nào trong danh mục này';
        
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fas fa-fish" style="font-size: 60px; color: #ddd; margin-bottom: 20px;"></i>
                <h3 style="color: #666; margin-bottom: 10px;">Không tìm thấy sản phẩm</h3>
                <p style="color: #999;">${message}</p>
            </div>
        `;
    }
}

// Hàm hiển thị phân trang
function renderPagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    
    // Nếu chỉ có 1 trang thì ẩn phân trang
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // Nút Previous
    html += `
        <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
    `;
    
    // Các trang số
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += `
            <button onclick="changePage(${i})" ${i === currentPage ? 'class="active"' : ''}>
                ${i}
            </button>
        `;
    }
    
    // Nút Next
    html += `
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    // Thông tin phân trang
    const startItem = (currentPage - 1) * PRODUCTS_PER_PAGE + 1;
    const endItem = Math.min(currentPage * PRODUCTS_PER_PAGE, filteredProducts.length);
    
    html += `
        <div class="pagination-info">
            Hiển thị ${startItem}-${endItem} của ${filteredProducts.length} sản phẩm
        </div>
    `;
    
    pagination.innerHTML = html;
}

// Hàm chuyển trang
function changePage(page) {
    if (page < 1 || page > Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)) {
        return;
    }
    
    currentPage = page;
    renderProducts();
    renderPagination();
    
    // Cuộn lên đầu phần sản phẩm
    const productsSection = document.querySelector('#products');
    if (productsSection) {
        productsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Hàm lấy class card theo loại
function getCardClassByType(type) {
    switch(type) {
        case 'caocap': return 'ten-card1';
        case 'donglanh': return 'ten-card2';
        case 'tuoisong': return 'ten-card3';
        case 'banchay': return 'ten-card4';
        default: return 'ten-card1';
    }
}

// Hàm định dạng giá
function formatPrice(price) {
    return parseInt(price || 0).toLocaleString('vi-VN');
}

// Hàm xử lý thêm vào giỏ hàng
function handleAddToCart(product, button) {
    try {
        if (window.cartManager && typeof window.cartManager.addToCart === 'function') {
            const success = window.cartManager.addToCart(product, 1);
            if (success) {
                showNotification(`Đã thêm "${product.tendv}" vào giỏ hàng!`, 'success');
                
                button.style.backgroundColor = '#4CAF50';
                button.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
                setTimeout(() => {
                    button.style.backgroundColor = '';
                    button.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
                }, 1000);
            }
        } else {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cart.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.tendv,
                    image: product.anh || './ảnh/default-product.jpg',
                    price: parseInt(product.gia || 0),
                    quantity: 1,
                    category: product.category || 'Không phân loại',
                    type: product.type || 'unknown'
                });
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            showNotification(`Đã thêm "${product.tendv}" vào giỏ hàng!`, 'success');
            
            button.style.backgroundColor = '#4CAF50';
            button.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
            setTimeout(() => {
                button.style.backgroundColor = '';
                button.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
            }, 1000);
        }
    } catch (error) {
        console.error('Lỗi khi thêm vào giỏ hàng:', error);
        showNotification('Không thể thêm sản phẩm vào giỏ hàng', 'error');
    }
}

// Hàm cập nhật số lượng giỏ hàng
function updateCartCount() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + (parseInt(item.quantity) || 0), 0);
        
        document.querySelectorAll('#cart-badge, .cart-badge').forEach(badge => {
            if (badge) {
                badge.textContent = totalItems > 99 ? '99+' : totalItems;
                badge.style.display = totalItems > 0 ? 'flex' : 'none';
            }
        });
        
        return totalItems;
    } catch (error) {
        console.error('Lỗi khi cập nhật số lượng giỏ hàng:', error);
        return 0;
    }
}

// Hàm hiển thị thông báo
function showNotification(message, type = 'success') {
    try {
        let notification = document.getElementById('global-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'global-notification';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 25px;
                border-radius: 8px;
                color: white;
                font-weight: bold;
                z-index: 9999;
                display: none;
                min-width: 300px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            `;
            document.body.appendChild(notification);
        }
        
        const colors = {
            'success': 'linear-gradient(135deg, #4CAF50, #2E7D32)',
            'error': 'linear-gradient(135deg, #ff5252, #d32f2f)',
            'info': 'linear-gradient(135deg, #2196F3, #1976D2)',
            'warning': 'linear-gradient(135deg, #FF9800, #F57C00)'
        };
        
        notification.style.background = colors[type] || colors['success'];
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        notification.style.display = 'block';
        
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    } catch (error) {
        console.error('Lỗi khi hiển thị thông báo:', error);
    }
}

// ==================== HỆ THỐNG TÌM KIẾM ====================

// Hàm tìm kiếm sản phẩm
function searchProducts(event) {
    if (event.key === 'Enter') {
        performSearch();
        return;
    }
    
    // Tự động tìm kiếm sau 500ms ngừng gõ
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
        performSearch();
    }, 500);
}

// Thực hiện tìm kiếm
function performSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    searchQuery = searchInput.value.trim().toLowerCase();
    
    if (searchQuery.length === 0) {
        clearSearch();
        return;
    }
    
    isSearching = true;
    
    // Tìm kiếm trong tất cả sản phẩm
    searchResults = ALL_HAISAN.filter(product => {
        const searchFields = [
            product.tendv || '',
            product.category || '',
            product.tt1 || '',
            ...(product.tags || [])
        ].join(' ').toLowerCase();
        
        return searchFields.includes(searchQuery);
    });
    
    // Hiển thị kết quả tìm kiếm
    displaySearchResults();
}

// Hiển thị kết quả tìm kiếm
function displaySearchResults() {
    const resultsHeader = document.getElementById('search-results-header');
    const resultsCount = document.getElementById('search-results-count');
    const categoryTitle = document.getElementById('category-title');
    const categoryDescription = document.getElementById('category-description');
    
    if (searchResults.length === 0) {
        // Không tìm thấy kết quả
        const grid = document.getElementById('products-grid');
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fas fa-search" style="font-size: 60px; color: #ddd; margin-bottom: 20px;"></i>
                <h3 style="color: #666; margin-bottom: 10px;">Không tìm thấy hải sản</h3>
                <p style="color: #999; margin-bottom: 20px;">Không tìm thấy hải sản nào phù hợp với từ khóa "<strong>${searchQuery}</strong>"</p>
                <button onclick="clearSearch()" style="background: #3F7BEE; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                    <i class="fas fa-times"></i> Xóa tìm kiếm
                </button>
            </div>
        `;
        
        if (resultsHeader) resultsHeader.style.display = 'block';
        if (resultsCount) resultsCount.textContent = `Tìm thấy 0 sản phẩm cho "${searchQuery}"`;
        document.getElementById('pagination').innerHTML = '';
        
    } else {
        // Có kết quả tìm kiếm
        if (resultsHeader) {
            resultsHeader.style.display = 'block';
            resultsCount.textContent = `Tìm thấy ${searchResults.length} sản phẩm cho "${searchQuery}"`;
        }
        
        if (categoryTitle) categoryTitle.textContent = 'KẾT QUẢ TÌM KIẾM';
        if (categoryDescription) categoryDescription.textContent = `Tìm kiếm: "${searchQuery}"`;
        
        // Hiển thị sản phẩm tìm được
        filteredProducts = searchResults;
        currentPage = 1;
        renderProducts();
        renderPagination();
    }
}

// Xóa tìm kiếm
function clearSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    isSearching = false;
    searchQuery = '';
    searchResults = [];
    
    const resultsHeader = document.getElementById('search-results-header');
    if (resultsHeader) resultsHeader.style.display = 'none';
    
    // Quay lại danh mục hiện tại
    filterProducts(currentCategory);
}

// Hàm highlight từ khóa tìm kiếm
function highlightSearchText(text, query) {
    if (!query || !text) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Khởi tạo khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo hệ thống tìm kiếm và phân trang cho hải sản...');
    
    // Kiểm tra xem có phần hiển thị sản phẩm mới không
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        // Ẩn các phần hiển thị sản phẩm cũ
        document.querySelectorAll('.ten-container1, .ten-container2, .ten-container3, .ten-container4').forEach(container => {
            container.style.display = 'none';
        });
        
        // Ẩn các tiêu đề cũ
        document.querySelectorAll('#products ~ h2').forEach(el => {
            el.style.display = 'none';
        });
        
        // Khởi tạo hiển thị sản phẩm
        filterProducts('all');
    }
});

// Export functions to global scope
window.filterProducts = filterProducts;
window.changePage = changePage;
window.handleAddToCart = handleAddToCart;
window.searchProducts = searchProducts;
window.performSearch = performSearch;
window.clearSearch = clearSearch;
window.formatPrice = formatPrice;
