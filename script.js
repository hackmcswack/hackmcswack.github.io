document.getElementById('toggleImage').addEventListener('click', function() {
    var img = document.getElementById('profilePicture');
    if (img.style.display === 'none') {
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }
});
