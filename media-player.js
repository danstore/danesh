// Media Player functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle clicks on media items that need the player
    document.addEventListener('click', function(e) {
        const mediaBtn = e.target.closest('.play-media-btn');
        if (mediaBtn) {
            const mediaType = mediaBtn.getAttribute('data-media-type');
            const mediaSrc = mediaBtn.getAttribute('data-media-src');
            const mediaTitle = mediaBtn.getAttribute('data-media-title');
            
            openMediaPlayer(mediaType, mediaSrc, mediaTitle);
        }
    });
    
    // Function to open media player modal
    function openMediaPlayer(mediaType, mediaSrc, title) {
        const modal = document.getElementById('media-player-modal');
        const modalContent = document.querySelector('#media-player-modal .modal-body');
        
        // Create appropriate player based on media type
        let playerHTML = '';
        
        if (mediaType === 'video') {
            playerHTML = `
                <div class="media-player-container">
                    <h2 class="media-title">${title}</h2>
                    <video controls width="100%" class="media-player">
                        <source src="${mediaSrc}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            `;
        } else if (mediaType === 'audio') {
            playerHTML = `
                <div class="media-player-container">
                    <h2 class="media-title">${title}</h2>
                    <div class="audio-player-wrapper">
                        <img src="${mediaSrc.replace('.mp3', '.jpg')}" alt="${title}" class="audio-cover">
                        <audio controls class="media-player">
                            <source src="${mediaSrc}" type="audio/mp3">
                            Your browser does not support the audio tag.
                        </audio>
                    </div>
                </div>
            `;
        }
        
        modalContent.innerHTML = playerHTML;
        modal.style.display = 'block';
        
        // Auto play the media
        const player = modalContent.querySelector('.media-player');
        if (player) {
            player.play().catch(e => console.log('Auto-play prevented:', e));
        }
    }
    
    // Close modal when clicking on the close button
    document.querySelector('#media-player-modal .close-modal').addEventListener('click', function() {
        const modal = document.getElementById('media-player-modal');
        const player = modal.querySelector('.media-player');
        
        // Pause media when closing the modal
        if (player) {
            player.pause();
        }
        
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('media-player-modal');
        if (event.target === modal) {
            const player = modal.querySelector('.media-player');
            
            // Pause media when closing the modal
            if (player) {
                player.pause();
            }
            
            modal.style.display = 'none';
        }
    });
});