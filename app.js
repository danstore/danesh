document.addEventListener('DOMContentLoaded', function() {
    // Load initial products
    const productsContainer = document.querySelector('.products-container');
    const sliderContainer = document.querySelector('.slider-container');
    const modal = document.getElementById('product-modal');
    const modalBody = document.querySelector('.modal-body');
    const ebookReaderModal = document.getElementById('ebook-reader-modal');
    const ebookReaderBody = document.querySelector('#ebook-reader-modal .modal-body');
    const closeModal = document.querySelector('.close-modal');
    const languageSelector = document.getElementById('language-selector');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Set default language
    let currentLanguage = localStorage.getItem('language') || 'en';
    languageSelector.value = currentLanguage;

    // Load translations
    loadTranslations(currentLanguage);

    // Number of products to display initially
    const initialProductCount = 4;
    let displayedProducts = 0;
    let currentSlide = 0;

    // Get products from localStorage or use default productData if not available
    let productsList = JSON.parse(localStorage.getItem('products')) || productData;
    let filteredProducts = [...productsList];

    // Load initial products
    loadMoreProducts();

    // Load featured products in slider
    loadFeaturedProducts();

    // Search functionality
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm === '') {
            filteredProducts = [...productsList];
        } else {
            filteredProducts = productsList.filter(product => {
                const titleMatch = product.title[currentLanguage].toLowerCase().includes(searchTerm) || 
                                  product.title.en.toLowerCase().includes(searchTerm);
                const descMatch = product.description[currentLanguage].toLowerCase().includes(searchTerm) || 
                                 product.description.en.toLowerCase().includes(searchTerm);

                // Search in features and details if they exist
                let featuresMatch = false;
                if (product.features && product.features[currentLanguage]) {
                    featuresMatch = product.features[currentLanguage].some(feature => 
                        feature.toLowerCase().includes(searchTerm)
                    );
                }

                let detailsMatch = false;
                if (product.details && product.details[currentLanguage]) {
                    detailsMatch = product.details[currentLanguage].toLowerCase().includes(searchTerm);
                }

                return titleMatch || descMatch || featuresMatch || detailsMatch;
            });
        }

        // Clear products container and reset display counter
        productsContainer.innerHTML = '';
        displayedProducts = 0;

        // Show "no results" message if no products match
        if (filteredProducts.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = translations[currentLanguage].noResults;
            productsContainer.appendChild(noResults);

            // Hide the load more button
            document.getElementById('load-more').style.display = 'none';
        } else {
            // Load filtered products
            loadMoreProducts();

            // Show or hide load more button
            document.getElementById('load-more').style.display = 
                displayedProducts >= filteredProducts.length ? 'none' : 'block';
        }
    }

    // Load more products when button is clicked
    document.getElementById('load-more').addEventListener('click', loadMoreProducts);

    // Slider controls
    document.querySelector('.next').addEventListener('click', slideNext);
    document.querySelector('.prev').addEventListener('click', slidePrev);

    // Language selector change event
    languageSelector.addEventListener('change', function() {
        currentLanguage = this.value;
        localStorage.setItem('language', currentLanguage);
        loadTranslations(currentLanguage);

        // Update search placeholder
        if (searchInput.placeholder) {
            searchInput.placeholder = translations[currentLanguage].searchProducts;
        }

        // Reload products to update their language
        productsContainer.innerHTML = '';
        sliderContainer.innerHTML = '';
        displayedProducts = 0;
        filteredProducts = [...productsList]; // Reset filtered products
        loadMoreProducts();
        loadFeaturedProducts();
        loadProductPromoSlideshow();
    });

    // Close modal when clicking on the close button or outside the modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Your message has been successfully sent. We will contact you soon.');
        this.reset();
    });

    // Newsletter form submission
    document.getElementById('newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Your email has been successfully registered for our newsletter.');
        this.reset();
    });

    // Setup categories
    setupCategories();
    setupTopCategories();

    // Setup sticky sidebar close buttons
    setupStickyBoxCloseButtons();

    // Function to load translations
    function loadTranslations(language) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[language] && translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });

        // Update placeholder texts for inputs
        const inputs = document.querySelectorAll('[data-i18n-placeholder]');
        inputs.forEach(input => {
            const key = input.getAttribute('data-i18n-placeholder');
            if (translations[language] && translations[language][key]) {
                input.placeholder = translations[language][key];
            }
        });

        // Update category items text
        const categoryItems = document.querySelectorAll('[data-i18n-category]');
        categoryItems.forEach(element => {
            const key = element.getAttribute('data-i18n-category');
            if (translations[language] && translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });

        // Update document direction based on language
        if (language === 'fa') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
    }

    // Function to load more products
    function loadMoreProducts() {
        const remainingProducts = filteredProducts.length - displayedProducts;
        const productsToLoad = Math.min(initialProductCount, remainingProducts);

        for (let i = 0; i < productsToLoad; i++) {
            const product = filteredProducts[displayedProducts];
            productsContainer.appendChild(createProductCard(product));
            displayedProducts++;
        }

        // Initialize badge slideshows
        initBadgeSlideshows();

        // Hide load more button if all products are displayed
        if (displayedProducts >= filteredProducts.length) {
            document.getElementById('load-more').style.display = 'none';
        } else {
            document.getElementById('load-more').style.display = 'block';
        }
    }

    // Function to load featured products in the slider
    function loadFeaturedProducts() {
        const featuredProducts = productsList.filter(product => product.featured);

        featuredProducts.forEach(product => {
            sliderContainer.appendChild(createProductCard(product, 'slider-item'));
        });

        // Initialize badge slideshows
        initBadgeSlideshows();
    }

    // Function to create a product card
    function createProductCard(product, additionalClass = '') {
        const productCard = document.createElement('div');
        productCard.className = `product-card ${additionalClass}`;

        let badgeHTML = '';
        if (product.badge) {
            const badgeText = product.badge[currentLanguage] || product.badge.en;
            if (badgeText && badgeText.toLowerCase() === 'sale') {
                // Create animated product image slideshow for "Sale" badge
                badgeHTML = `
                    <span class="product-badge animated">
                        <div class="badge-slideshow" data-product-id="${product.id}">
                            <img src="${product.image}" class="badge-slide active" alt="sale">
                            <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90" class="badge-slide" alt="sale">
                            <img src="https://images.unsplash.com/photo-1607853202273-797f1c22a38e" class="badge-slide" alt="sale">
                        </div>
                    </span>`;
            } else {
                badgeHTML = `<span class="product-badge">${badgeText}</span>`;
            }
        }

        // Generate star rating HTML
        const stars = generateStarRating(product.rating);

        const title = product.title[currentLanguage] || product.title.en;
        const description = product.description[currentLanguage] || product.description.en;

        // Check if product is in favorites
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const isFavorite = currentUser && currentUser.favorites && 
                           currentUser.favorites.includes(product.id);
        const heartIcon = isFavorite ? 'fas fa-heart' : 'far fa-heart';

        // Determine buttons based on product type
        let actionButton = '';
        if (product.type === 'ebook') {
            actionButton = `<button class="btn read-online-btn" data-id="${product.id}"><i class="fas fa-book-reader"></i> ${translations[currentLanguage].readOnline}</button>`;
        } else {
            actionButton = `<button class="btn details" data-id="${product.id}">${translations[currentLanguage].viewDetails}</button>`;
        }

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${title}">
                ${badgeHTML}
            </div>
            <div class="product-info">
                <h3 class="product-title">${title}</h3>
                <p class="product-description">${description}</p>
                <div class="product-meta">
                    <span class="product-price">${product.price}</span>
                    <div class="product-rating">
                        ${stars}
                        <span>(${product.rating})</span>
                    </div>
                </div>
                <div class="product-actions">
                    ${actionButton}
                    <a href="${product.amazonLink}" target="_blank" class="btn">${translations[currentLanguage].buyFromAmazon}</a>
                    <button class="add-to-favorites" data-id="${product.id}"><i class="${heartIcon}"></i></button>
                </div>
            </div>
        `;

        // Add event listener to the appropriate button
        if (product.type === 'ebook') {
            productCard.querySelector('.read-online-btn').addEventListener('click', function() {
                openEbookReader(product.id);
            });
        } else {
            productCard.querySelector('.details').addEventListener('click', function() {
                openProductDetails(product.id);
            });
        }

        return productCard;
    }

    // Function to generate star rating HTML
    function generateStarRating(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i === fullStars && halfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }

        return stars;
    }

    // Function to open product details modal
    function openProductDetails(productId) {
        const product = productsList.find(p => p.id === productId);

        if (product) {
            // Generate star rating HTML
            const stars = generateStarRating(product.rating);

            // Generate features list HTML
            let featuresHTML = '';
            if (product.features && product.features[currentLanguage]) {
                featuresHTML = `<h4>${translations[currentLanguage].productFeatures}</h4><ul>`;
                product.features[currentLanguage].forEach(feature => {
                    featuresHTML += `<li>${feature}</li>`;
                });
                featuresHTML += '</ul>';
            }

            const title = product.title[currentLanguage] || product.title.en;
            const details = (product.details && product.details[currentLanguage]) || 
                           (product.details && product.details.en) || 
                           (product.description && product.description[currentLanguage]) || 
                           product.description.en;

            // Initialize comments array if it doesn't exist
            if (!product.comments) {
                product.comments = [];
            }

            // Generate comments HTML
            let commentsHTML = generateCommentsHTML(product);

            modalBody.innerHTML = `
                <div class="product-details">
                    <div class="product-details-image">
                        <img src="${product.image}" alt="${title}">
                    </div>
                    <div class="product-details-info">
                        <h2 class="product-details-title">${title}</h2>
                        <div class="product-details-meta">
                            <div class="product-details-rating">
                                ${stars}
                                <span>(${product.rating})</span>
                            </div>
                            <span class="product-details-price">${product.price}</span>
                        </div>
                        <div class="product-details-description">
                            <p>${details}</p>
                        </div>
                        <div class="product-details-features">
                            ${featuresHTML}
                        </div>
                        <div class="product-details-actions">
                            <a href="${product.amazonLink}" target="_blank" class="btn amazon-btn">
                                <i class="fab fa-amazon"></i>
                                ${translations[currentLanguage].buyFromAmazon}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-comments">
                    <h3>${translations[currentLanguage].comments}</h3>
                    ${commentsHTML}
                    <div class="comment-form">
                        <h4>${translations[currentLanguage].addComment}</h4>
                        <form id="comment-form" data-product-id="${product.id}">
                            <div class="form-group">
                                <label>${translations[currentLanguage].yourName}</label>
                                <input type="text" id="comment-name" required>
                            </div>
                            <div class="form-group">
                                <label>${translations[currentLanguage].yourEmail}</label>
                                <input type="email" id="comment-email" required>
                            </div>
                            <div class="form-group rating-select">
                                <label>${translations[currentLanguage].rateProduct}</label>
                                <div class="star-rating">
                                    <input type="radio" id="star5" name="rating" value="5" required/>
                                    <label for="star5"><i class="fas fa-star"></i></label>
                                    <input type="radio" id="star4" name="rating" value="4" />
                                    <label for="star4"><i class="fas fa-star"></i></label>
                                    <input type="radio" id="star3" name="rating" value="3" />
                                    <label for="star3"><i class="fas fa-star"></i></label>
                                    <input type="radio" id="star2" name="rating" value="2" />
                                    <label for="star2"><i class="fas fa-star"></i></label>
                                    <input type="radio" id="star1" name="rating" value="1" />
                                    <label for="star1"><i class="fas fa-star"></i></label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>${translations[currentLanguage].yourComment}</label>
                                <textarea id="comment-text" rows="4" required></textarea>
                            </div>
                            <button type="submit" class="btn">${translations[currentLanguage].submitComment}</button>
                        </form>
                    </div>
                </div>
            `;

            // Add event listener to the comment form
            document.getElementById('comment-form').addEventListener('submit', function(e) {
                e.preventDefault();
                submitComment(this);
            });

            modal.style.display = 'block';
        }
    }

    // Function to generate comments HTML
    function generateCommentsHTML(product) {
        if (!product.comments || product.comments.length === 0) {
            return `<p class="no-comments">${translations[currentLanguage].noComments}</p>`;
        }

        let html = '<div class="comment-list">';
        product.comments.forEach(comment => {
            const commentStars = generateStarRating(comment.rating);
            html += `
                <div class="comment-item">
                    <div class="comment-header">
                        <span class="comment-author">${comment.name}</span>
                        <span class="comment-date">${comment.date}</span>
                    </div>
                    <div class="comment-rating">
                        ${commentStars}
                    </div>
                    <p class="comment-text">${comment.text}</p>
                </div>
            `;
        });
        html += '</div>';
        return html;
    }

    // Function to submit a new comment
    function submitComment(form) {
        const productId = parseInt(form.getAttribute('data-product-id'));
        const name = document.getElementById('comment-name').value;
        const email = document.getElementById('comment-email').value;
        const rating = parseInt(form.rating.value);
        const text = document.getElementById('comment-text').value;
        
        // Create comment object
        const comment = {
            name,
            email,
            rating,
            text,
            date: new Date().toLocaleDateString()
        };
        
        // Find the product and add the comment
        const product = productsList.find(p => p.id === productId);
        if (product) {
            if (!product.comments) {
                product.comments = [];
            }
            product.comments.push(comment);
            
            // Recalculate product rating based on all comments
            const totalComments = product.comments.length;
            const sumRatings = product.comments.reduce((sum, comment) => sum + comment.rating, 0);
            const newRating = (sumRatings / totalComments).toFixed(1);
            
            // Update product rating (capped at 5.0)
            product.rating = Math.min(parseFloat(newRating), 5.0);
            
            // Save updated products to localStorage
            localStorage.setItem('products', JSON.stringify(productsList));
            
            // Show success message and refresh comments section
            alert(translations[currentLanguage].commentSuccess);
            form.reset();
            
            // Refresh the comments section
            const commentsHTML = generateCommentsHTML(product);
            document.querySelector('.product-comments').innerHTML = `
                <h3>${translations[currentLanguage].comments}</h3>
                ${commentsHTML}
                <div class="comment-form">
                    <h4>${translations[currentLanguage].addComment}</h4>
                    ${form.outerHTML}
                </div>
            `;
            
            // Re-add event listener to the new form
            document.getElementById('comment-form').addEventListener('submit', function(e) {
                e.preventDefault();
                submitComment(this);
            });
        }
    }

    // Function to setup category sidebar
    function setupCategories() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const subcategoryList = document.getElementById(targetId);
                
                // Toggle active class on button
                this.classList.toggle('active');
                
                // Toggle subcategory visibility
                subcategoryList.classList.toggle('show');
            });
        });
        
        // Handle subcategory clicks
        const subcategoryItems = document.querySelectorAll('.subcategory-item');
        subcategoryItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all subcategories
                subcategoryItems.forEach(subitem => subitem.classList.remove('active'));
                
                // Add active class to clicked subcategory
                this.classList.add('active');
                
                // Filter products by category
                const category = this.getAttribute('data-category');
                filterProductsByCategory(category);
            });
        });
    }

    // Function to setup categories in top navigation
    function setupTopCategories() {
        const categoryLinks = document.querySelectorAll('.category-dropdown .dropdown-content a');
        
        categoryLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const category = this.getAttribute('data-category');
                filterProductsByCategory(category);
                
                // Scroll to products section
                document.getElementById('products').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Function to filter products by category
    function filterProductsByCategory(category) {
        filteredProducts = productsList.filter(product => {
            return product.category === category || 
                   product.category && product.category.includes(category);
        });
        
        // Clear products container and reset display counter
        productsContainer.innerHTML = '';
        displayedProducts = 0;
        
        // Show "no results" message if no products match
        if (filteredProducts.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = translations[currentLanguage].noResults;
            productsContainer.appendChild(noResults);
            
            // Hide the load more button
            document.getElementById('load-more').style.display = 'none';
        } else {
            // Load filtered products
            loadMoreProducts();
            
            // Show or hide load more button
            document.getElementById('load-more').style.display = 
                displayedProducts >= filteredProducts.length ? 'none' : 'block';
        }
    }

    // Function to initialize badge slideshows
    function initBadgeSlideshows() {
        const slideshows = document.querySelectorAll('.badge-slideshow');
        
        slideshows.forEach(slideshow => {
            const slides = slideshow.querySelectorAll('.badge-slide');
            let currentSlide = 0;
            
            // Change slide every 2 seconds
            setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 2000);
        });
    }

    // Slider functions
    function slideNext() {
        const featuredProducts = productsList.filter(product => product.featured);
        currentSlide = (currentSlide + 1) % featuredProducts.length;
        updateSliderPosition();
    }

    function slidePrev() {
        const featuredProducts = productsList.filter(product => product.featured);
        currentSlide = (currentSlide - 1 + featuredProducts.length) % featuredProducts.length;
        updateSliderPosition();
    }

    function updateSliderPosition() {
        const sliderItems = document.querySelectorAll('.slider-item');
        const itemWidth = sliderItems[0].offsetWidth + parseInt(getComputedStyle(sliderItems[0]).marginLeft);
        sliderContainer.style.transform = `translateX(${currentSlide * itemWidth}px)`;
    }

    // Automatic slider
    setInterval(slideNext, 5000);

    // Load user favorites if on profile page
    if (window.location.hash === '#profile') {
        loadUserFavorites();
    }

    // Function to load user favorites
    function loadUserFavorites() {
        const favoritesContainer = document.getElementById('favorites-container');
        if (!favoritesContainer) return;

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser || !currentUser.favorites || currentUser.favorites.length === 0) {
            favoritesContainer.innerHTML = `<p class="no-favorites">${translations[currentLanguage].noFavorites}</p>`;
            return;
        }

        favoritesContainer.innerHTML = '';
        currentUser.favorites.forEach(productId => {
            const product = productsList.find(p => p.id === productId);
            if (product) {
                favoritesContainer.appendChild(createProductCard(product));
            }
        });
    }

    // Listen for hash changes to handle profile page navigation
    window.addEventListener('hashchange', function() {
        if (window.location.hash === '#profile') {
            loadUserFavorites();
        }
    });

    // Function to open ebook reader
    function openEbookReader(ebookId) {
        const ebook = productsList.find(p => p.id === ebookId);
        
        if (ebook) {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const title = ebook.title[currentLanguage] || ebook.title.en;
            
            if (currentUser) {
                // User is logged in, show the ebook content
                const content = ebook.content[currentLanguage] || ebook.content.en;
                
                ebookReaderBody.innerHTML = `
                    <div class="ebook-reader-container">
                        <h1 class="ebook-title">${title}</h1>
                        <div class="ebook-content">
                            ${content}
                        </div>
                    </div>
                `;
            } else {
                // User is not logged in, show members-only message
                ebookReaderBody.innerHTML = `
                    <div class="ebook-members-only">
                        <i class="fas fa-lock"></i>
                        <h2>${translations[currentLanguage].ebooks}</h2>
                        <p>${translations[currentLanguage].ebooks} - ${translations[currentLanguage].ebooks}</p>
                        <p>${translations[currentLanguage].loginToRead}</p>
                        <button class="btn show-login-modal">
                            ${translations[currentLanguage].loginRegister}
                        </button>
                    </div>
                `;
                
                // Add event listener to login button
                ebookReaderBody.querySelector('.show-login-modal').addEventListener('click', function() {
                    ebookReaderModal.style.display = 'none';
                    document.querySelectorAll('.show-login-modal').forEach(btn => {
                        btn.click();
                    });
                });
            }
            
            ebookReaderModal.style.display = 'block';
        }
    }
    
    // Close ebook reader modal when clicking on the close button or outside
    document.querySelector('#ebook-reader-modal .close-modal').addEventListener('click', function() {
        ebookReaderModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === ebookReaderModal) {
            ebookReaderModal.style.display = 'none';
        }
    });

    // Function to setup sticky sidebar close buttons
    function setupStickyBoxCloseButtons() {
        const closeButtons = document.querySelectorAll('.sidebar-box .close-box');
        
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const parentBox = this.closest('.sidebar-box');
                parentBox.style.display = 'none';
                
                // Remove local storage setting
                //localStorage.setItem(parentBox.id + '-closed', 'true');
            });
        });
        
        // Remove check for previously closed boxes
        /*document.querySelectorAll('.sidebar-box').forEach(box => {
            if (localStorage.getItem(box.id + '-closed') === 'true') {
                box.style.display = 'none';
            }
        });*/
    }

    // Function to load product promo slideshow
    function loadProductPromoSlideshow() {
        const slideshow = document.getElementById('category-promo-slideshow');
        const dotContainer = document.getElementById('promo-dots');
        if (!slideshow || !dotContainer) return;
        
        // Get featured products for slideshow
        const promoProducts = productsList.filter(product => product.featured).slice(0, 4);
        
        // Clear existing content
        slideshow.innerHTML = '';
        dotContainer.innerHTML = '';
        
        // Add slides
        promoProducts.forEach((product, index) => {
            const title = product.title[currentLanguage] || product.title.en;
            
            const slide = document.createElement('div');
            slide.className = `promo-slide ${index === 0 ? 'active' : ''}`;
            slide.innerHTML = `
                <img src="${product.image}" alt="${title}">
                <div class="promo-slide-content">
                    <div class="promo-title">${title}</div>
                    <div class="promo-price">${product.price}</div>
                </div>
            `;
            slideshow.appendChild(slide);
            
            // Add dot control
            const dot = document.createElement('div');
            dot.className = `promo-dot ${index === 0 ? 'active' : ''}`;
            dot.dataset.index = index;
            dotContainer.appendChild(dot);
            
            // Add click event to slide
            slide.addEventListener('click', function() {
                openProductDetails(product.id);
            });
        });
        
        // Add click event to dots
        const dots = document.querySelectorAll('.promo-dot');
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.dataset.index);
                changePromoSlide(slideIndex);
            });
        });
        
        // Auto change slides
        let currentPromoSlide = 0;
        setInterval(() => {
            currentPromoSlide = (currentPromoSlide + 1) % promoProducts.length;
            changePromoSlide(currentPromoSlide);
        }, 4000);
        
        // Function to change slides
        function changePromoSlide(index) {
            const slides = document.querySelectorAll('.promo-slide');
            const dots = document.querySelectorAll('.promo-dot');
            
            if (slides.length === 0 || dots.length === 0) return;
            
            // Remove active class from all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Add active class to current slide and dot
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }
    }

    // Load product promo slideshow for the category sidebar
    loadProductPromoSlideshow();
});