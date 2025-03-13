// Admin panel functionality
document.addEventListener('DOMContentLoaded', function() {
    const adminForm = document.getElementById('admin-login-form');
    const adminPanel = document.getElementById('admin-panel');
    const productForm = document.getElementById('product-form');
    const productsList = document.getElementById('products-list');
    const logoutBtn = document.getElementById('admin-logout');
    const addNewBtn = document.getElementById('add-new-product');
    const backToListBtn = document.getElementById('back-to-list');
    
    // Check if admin is logged in
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
    
    if (isLoggedIn) {
        showAdminPanel();
    }
    
    // Admin login
    if (adminForm) {
        adminForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('admin-username').value;
            const password = document.getElementById('admin-password').value;
            
            // Simple authentication (replace with proper authentication in production)
            if (username === 'admin' && password === 'danesh123') {
                sessionStorage.setItem('adminLoggedIn', 'true');
                showAdminPanel();
            } else {
                alert('Invalid credentials');
            }
        });
    }
    
    // Logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            sessionStorage.removeItem('adminLoggedIn');
            window.location.href = 'admin.html';
        });
    }
    
    // Toggle between add product form and products list
    if (addNewBtn) {
        addNewBtn.addEventListener('click', function() {
            document.getElementById('products-manager').style.display = 'none';
            document.getElementById('product-editor').style.display = 'block';
            resetProductForm();
        });
    }
    
    if (backToListBtn) {
        backToListBtn.addEventListener('click', function() {
            document.getElementById('product-editor').style.display = 'none';
            document.getElementById('products-manager').style.display = 'block';
        });
    }
    
    // Load products in admin panel
    if (productsList) {
        loadProductsForAdmin();
    }
    
    // Product form submission
    if (productForm) {
        productForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveProduct();
        });
    }
    
    function showAdminPanel() {
        if (adminForm) {
            window.location.href = 'admin-panel.html';
        }
    }
    
    function loadProductsForAdmin() {
        productsList.innerHTML = '';
        let storedProducts = JSON.parse(localStorage.getItem('products')) || productData;
        
        storedProducts.forEach(product => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${product.id}</td>
                <td>
                    <img src="${product.image}" alt="${product.title.en}" width="50">
                </td>
                <td>${product.title.en}</td>
                <td>${product.price}</td>
                <td>${product.rating}</td>
                <td>
                    <button class="btn btn-edit" data-id="${product.id}">Edit</button>
                    <button class="btn btn-delete" data-id="${product.id}">Delete</button>
                </td>
            `;
            
            productsList.appendChild(row);
        });
        
        // Add event listeners to edit and delete buttons
        document.querySelectorAll('.btn-edit').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                editProduct(productId);
            });
        });
        
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                deleteProduct(productId);
            });
        });
    }
    
    function editProduct(productId) {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || productData;
        const product = storedProducts.find(p => p.id === productId);
        
        if (product) {
            document.getElementById('product-id').value = product.id;
            document.getElementById('product-title-en').value = product.title.en;
            document.getElementById('product-title-de').value = product.title.de;
            document.getElementById('product-title-fa').value = product.title.fa;
            document.getElementById('product-description-en').value = product.description.en;
            document.getElementById('product-description-de').value = product.description.de;
            document.getElementById('product-description-fa').value = product.description.fa;
            document.getElementById('product-price').value = product.price.replace('€', '');
            document.getElementById('product-rating').value = product.rating;
            document.getElementById('product-image').value = product.image;
            document.getElementById('product-amazon-link').value = product.amazonLink;
            
            // Set category if it exists
            if (product.category) {
                document.getElementById('product-category').value = product.category;
            }
            
            // Set badge values if they exist
            if (product.badge && product.badge.en) {
                document.getElementById('product-badge-en').value = product.badge.en;
            }
            if (product.badge && product.badge.de) {
                document.getElementById('product-badge-de').value = product.badge.de;
            }
            if (product.badge && product.badge.fa) {
                document.getElementById('product-badge-fa').value = product.badge.fa;
            }
            
            // Set featured checkbox
            document.getElementById('product-featured').checked = product.featured;
            
            // Set features
            if (product.features) {
                if (product.features.en) {
                    document.getElementById('product-features-en').value = product.features.en.join('\n');
                }
                if (product.features.de) {
                    document.getElementById('product-features-de').value = product.features.de.join('\n');
                }
                if (product.features.fa) {
                    document.getElementById('product-features-fa').value = product.features.fa.join('\n');
                }
            }
            
            // Set details
            if (product.details) {
                if (product.details.en) {
                    document.getElementById('product-details-en').value = product.details.en;
                }
                if (product.details.de) {
                    document.getElementById('product-details-de').value = product.details.de;
                }
                if (product.details.fa) {
                    document.getElementById('product-details-fa').value = product.details.fa;
                }
            }
            
            // Show form
            document.getElementById('products-manager').style.display = 'none';
            document.getElementById('product-editor').style.display = 'block';
        }
    }
    
    function deleteProduct(productId) {
        if (confirm('Are you sure you want to delete this product?')) {
            let storedProducts = JSON.parse(localStorage.getItem('products')) || productData;
            storedProducts = storedProducts.filter(p => p.id !== productId);
            
            localStorage.setItem('products', JSON.stringify(storedProducts));
            loadProductsForAdmin();
        }
    }
    
    function saveProduct() {
        const productId = document.getElementById('product-id').value;
        const storedProducts = JSON.parse(localStorage.getItem('products')) || productData;
        
        const product = {
            id: productId ? parseInt(productId) : getNextProductId(storedProducts),
            title: {
                en: document.getElementById('product-title-en').value,
                de: document.getElementById('product-title-de').value,
                fa: document.getElementById('product-title-fa').value
            },
            description: {
                en: document.getElementById('product-description-en').value,
                de: document.getElementById('product-description-de').value,
                fa: document.getElementById('product-description-fa').value
            },
            price: '€' + document.getElementById('product-price').value,
            rating: parseFloat(document.getElementById('product-rating').value),
            image: document.getElementById('product-image').value,
            category: document.getElementById('product-category').value,
            badge: {
                en: document.getElementById('product-badge-en').value || null,
                de: document.getElementById('product-badge-de').value || null,
                fa: document.getElementById('product-badge-fa').value || null
            },
            featured: document.getElementById('product-featured').checked,
            amazonLink: document.getElementById('product-amazon-link').value,
            features: {
                en: document.getElementById('product-features-en').value.split('\n').filter(Boolean),
                de: document.getElementById('product-features-de').value.split('\n').filter(Boolean),
                fa: document.getElementById('product-features-fa').value.split('\n').filter(Boolean)
            },
            details: {
                en: document.getElementById('product-details-en').value,
                de: document.getElementById('product-details-de').value,
                fa: document.getElementById('product-details-fa').value
            },
            comments: productId ? (storedProducts.find(p => p.id === parseInt(productId))?.comments || []) : []
        };
        
        if (productId) {
            // Update existing product
            const index = storedProducts.findIndex(p => p.id === parseInt(productId));
            if (index !== -1) {
                storedProducts[index] = product;
            }
        } else {
            // Add new product
            storedProducts.push(product);
        }
        
        localStorage.setItem('products', JSON.stringify(storedProducts));
        
        document.getElementById('product-editor').style.display = 'none';
        document.getElementById('products-manager').style.display = 'block';
        loadProductsForAdmin();
    }
    
    function getNextProductId(products) {
        if (products.length === 0) return 1;
        return Math.max(...products.map(p => p.id)) + 1;
    }
    
    function resetProductForm() {
        document.getElementById('product-id').value = '';
        document.getElementById('product-title-en').value = '';
        document.getElementById('product-title-de').value = '';
        document.getElementById('product-title-fa').value = '';
        document.getElementById('product-description-en').value = '';
        document.getElementById('product-description-de').value = '';
        document.getElementById('product-description-fa').value = '';
        document.getElementById('product-price').value = '';
        document.getElementById('product-rating').value = '5.0';
        document.getElementById('product-image').value = '';
        document.getElementById('product-amazon-link').value = '';
        document.getElementById('product-badge-en').value = '';
        document.getElementById('product-badge-de').value = '';
        document.getElementById('product-badge-fa').value = '';
        document.getElementById('product-featured').checked = false;
        document.getElementById('product-category').value = 'electronics'; // Default category
        document.getElementById('product-features-en').value = '';
        document.getElementById('product-features-de').value = '';
        document.getElementById('product-features-fa').value = '';
        document.getElementById('product-details-en').value = '';
        document.getElementById('product-details-de').value = '';
        document.getElementById('product-details-fa').value = '';
    }
});