// Download functionality for the website
document.addEventListener('DOMContentLoaded', function() {
    // Reference to the download button
    const downloadBtn = document.getElementById('download-website-btn');
    
    // Add click event listener to the download button
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            prepareDownload();
        });
    }
    
    // Function to prepare and initiate the download
    function prepareDownload() {
        // Show loading indicator
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing download...';
        downloadBtn.disabled = true;
        
        // Simulate preparing files (in a real environment, this would connect to the server)
        setTimeout(function() {
            // Create a dummy anchor element to trigger the download
            const downloadLink = document.createElement('a');
            downloadLink.href = 'https://example.com/danesh-store.zip'; // This would be a real URL in production
            downloadLink.download = 'danesh-store.zip';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            
            // Reset button
            setTimeout(function() {
                downloadBtn.innerHTML = originalText;
                downloadBtn.disabled = false;
                
                // Show success message
                alert('Your website package has been downloaded successfully!');
            }, 1000);
        }, 2000);
    }
}
