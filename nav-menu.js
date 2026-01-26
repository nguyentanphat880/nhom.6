
// nav-menu.js - Quản lý menu điều hướng (ĐÃ SỬA HOÀN TOÀN)
class NavigationMenu {
    constructor() {
        this.initMenu();
    }
    
    initMenu() {
        // Tạo menu sản phẩm dropdown
        this.createProductMenu();
        
        // Thêm sự kiện cho dropdown
        this.addDropdownEvents();
        
        // Cập nhật menu active
        this.updateActiveMenu();
        
        // Xử lý hash URL
        this.handleHashUrl();
    }
    
    createProductMenu() {
        const menuContainer = document.getElementById('menu');
        if (!menuContainer) return;
        
        // Tìm item "Sản phẩm"
        const productItem = Array.from(menuContainer.querySelectorAll('.item')).find(item => 
            item.textContent.includes('Sản phẩm') || 
            item.querySelector('a[href*="#products"]')
        );
        
        if (productItem) {
            // Chuyển đổi thành dropdown
            productItem.classList.add('dropdown');
            
            // Thêm icon mũi tên
            const link = productItem.querySelector('a');
            if (link) {
                link.innerHTML = 'Sản phẩm <i class="fas fa-chevron-down" style="font-size: 12px; margin-left: 5px;"></i>';
            }
            
            // Tạo dropdown menu
            const dropdownMenu = document.createElement('ul');
            dropdownMenu.className = 'dropdown-menu';
            dropdownMenu.innerHTML = `
                <li><a href="#products" class="dropdown-item" data-category="all">📦 Tất cả sản phẩm</a></li>
                <li><a href="#products" class="dropdown-item" data-category="caocap">⭐ Hải sản cao cấp</a></li>
                <li><a href="#products" class="dropdown-item" data-category="donglanh">❄️ Hải sản đông lạnh</a></li>
                <li><a href="#products" class="dropdown-item" data-category="tuoisong">🐟 Hải sản tươi sống</a></li>
                <li><a href="#products" class="dropdown-item" data-category="banchay">🔥 Hải sản bán chạy</a></li>
                <li class="divider"></li>
                <li><a href="#products" class="dropdown-item" data-category="new">🆕 Hải sản mới về</a></li>
                <li><a href="#products" class="dropdown-item" data-category="sale">🎯 Khuyến mãi</a></li>
                <li><a href="sop.html" class="dropdown-item">🛒 Xem giỏ hàng</a></li>
            `;
            
            productItem.appendChild(dropdownMenu);
        }
    }
    
    addDropdownEvents() {
        // Sự kiện hover để hiển thị/ẩn dropdown
        document.addEventListener('mouseover', (e) => {
            const dropdown = e.target.closest('.dropdown');
            if (dropdown) {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (menu) menu.style.display = 'block';
            }
        });
        
        document.addEventListener('mouseout', (e) => {
            const dropdown = e.target.closest('.dropdown');
            if (dropdown && !dropdown.contains(e.relatedTarget)) {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (menu) menu.style.display = 'none';
            }
        });
        
        // Sự kiện click chọn danh mục
        document.addEventListener('click', (e) => {
            const dropdownItem = e.target.closest('.dropdown-item');
            if (dropdownItem && dropdownItem.dataset.category) {
                e.preventDefault();
                e.stopPropagation();
                
                const category = dropdownItem.dataset.category;
                this.handleCategoryClick(category);
                
                // Ẩn dropdown
                const dropdownMenu = dropdownItem.closest('.dropdown-menu');
                if (dropdownMenu) {
                    dropdownMenu.style.display = 'none';
                }
            }
        });
    }
    
    handleCategoryClick(category) {
        console.log('Chọn danh mục:', category);
        
        // Lưu danh mục đã chọn
        sessionStorage.setItem('selectedCategory', category);
        
        // Kiểm tra nếu đang ở trang chủ
        const isHomePage = window.location.pathname.endsWith('index.html') || 
                          window.location.pathname.endsWith('/') ||
                          window.location.pathname === '';
        
        if (!isHomePage) {
            // Chuyển về trang chủ với hash
            window.location.href = 'index.html#products';
            return;
        }
        
        // Cuộn đến phần sản phẩm
        this.scrollToProducts();
        
        // Lọc sản phẩm theo danh mục
        this.filterProductsByCategory(category);
        
        // Cập nhật UI
        this.updateCategoryUI(category);
    }
    
    scrollToProducts() {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    filterProductsByCategory(category) {
        // Gọi hàm filterProducts từ search-pagination.js
        if (typeof window.filterProducts === 'function') {
            console.log('Gọi filterProducts với:', category);
            window.filterProducts(category);
        } else {
            console.warn('Hàm filterProducts chưa sẵn sàng. Thử lại sau...');
            setTimeout(() => {
                if (typeof window.filterProducts === 'function') {
                    window.filterProducts(category);
                }
            }, 300);
        }
    }
    
    updateCategoryUI(category) {
        // Cập nhật nút danh mục
        const categoryButtons = document.querySelectorAll('.category-item');
        categoryButtons.forEach(button => {
            button.classList.remove('active');
            const onclickAttr = button.getAttribute('onclick');
            if (onclickAttr && onclickAttr.includes(`'${category}'`)) {
                button.classList.add('active');
            }
        });
        
        // Cập nhật dropdown item
        const dropdownItems = document.querySelectorAll('.dropdown-item[data-category]');
        dropdownItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.category === category) {
                item.classList.add('active');
            }
        });
    }
    
    updateActiveMenu() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const menuItems = document.querySelectorAll('#menu .item a');
        
        menuItems.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href');
            
            if (currentPage === 'index.html' && (href === 'index.html' || href === '#')) {
                item.classList.add('active');
            } else if (href === currentPage) {
                item.classList.add('active');
            }
        });
    }
    
    handleHashUrl() {
        // Xử lý khi load trang với hash #products
        if (window.location.hash === '#products') {
            setTimeout(() => {
                this.scrollToProducts();
                
                // Kiểm tra danh mục đã chọn trước đó
                const savedCategory = sessionStorage.getItem('selectedCategory');
                if (savedCategory) {
                    this.filterProductsByCategory(savedCategory);
                    this.updateCategoryUI(savedCategory);
                }
            }, 500);
        }
    }
}

// Khởi tạo khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    new NavigationMenu();
    
    // Thêm CSS động cho dropdown
    if (!document.querySelector('#dropdown-styles')) {
        const style = document.createElement('style');
        style.id = 'dropdown-styles';
        style.textContent = `
            /* Dropdown Menu Styles */
            .dropdown {
                position: relative;
            }
            
            .dropdown-menu {
                position: absolute;
                top: 100%;
                left: 0;
                min-width: 220px;
                background: white;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                padding: 10px 0;
                display: none;
                z-index: 1000;
                border: 1px solid #e0e0e0;
                animation: fadeIn 0.3s ease;
            }
            
            .dropdown:hover .dropdown-menu {
                display: block;
            }
            
            .dropdown-menu li {
                list-style: none;
                margin: 0;
            }
            
            .dropdown-menu li a {
                display: block;
                padding: 12px 20px;
                color: #333;
                text-decoration: none;
                font-size: 14px;
                font-weight: 500;
                transition: all 0.2s ease;
            }
            
            .dropdown-menu li a:hover {
                background: linear-gradient(135deg, #3F7BEE, #36D1DC);
                color: white;
                padding-left: 25px;
            }
            
            .dropdown-menu .divider {
                height: 1px;
                background: #e0e0e0;
                margin: 8px 20px;
            }
            
            .dropdown-menu li a.active {
                background: linear-gradient(135deg, #3F7BEE, #36D1DC);
                color: white;
                font-weight: bold;
            }
            
            .dropdown-menu li a.active:hover {
                background: linear-gradient(135deg, #2c5dc4, #2ab1c9);
            }
            
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
});