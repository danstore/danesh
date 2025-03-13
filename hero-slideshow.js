// Hero slideshow functionality
document.addEventListener('DOMContentLoaded', function() {
    const heroSlideshow = document.getElementById('hero-slideshow');
    
    // Slideshow content - array of images and videos
    const slideshowContent = [
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
            type: 'video',
            src: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        }
    ];
    
    // Load slideshow content
    loadHeroSlideshow();
    
    function loadHeroSlideshow() {
        // Clear existing slides
        heroSlideshow.innerHTML = '';
        
        // Create slides
        slideshowContent.forEach((slide, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.className = `hero-slide ${index === 0 ? 'active' : ''}`;
            
            if (slide.type === 'image') {
                slideDiv.style.backgroundImage = `url('${slide.src}')`;
                heroSlideshow.appendChild(slideDiv);
            } else if (slide.type === 'video') {
                slideDiv.classList.add('video-slide');
                const video = document.createElement('video');
                video.src = slide.src;
                video.muted = true;
                video.autoplay = true;
                video.loop = true;
                video.playsInline = true;
                slideDiv.appendChild(video);
                heroSlideshow.appendChild(slideDiv);
            }
        });
        
        // Auto rotate slides
        let currentSlide = 0;
        setInterval(() => {
            const slides = document.querySelectorAll('.hero-slide');
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
            
            // Play video if it's a video slide
            if (slides[currentSlide].classList.contains('video-slide')) {
                const video = slides[currentSlide].querySelector('video');
                if (video) {
                    video.play().catch(e => console.log('Auto-play prevented:', e));
                }
            }
        }, 5000);
    }
});