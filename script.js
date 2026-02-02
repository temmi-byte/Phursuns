
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    hamburger.onclick = () => sidebar.classList.add('active');
    closeBtn.onclick = () => sidebar.classList.remove('active');

    // Close sidebar when clicking any link
    document.querySelectorAll('.sidebar-links a').forEach(link => {
        link.onclick = () => sidebar.classList.remove('active');
    });