// STATE MANAGEMENT
        let currentStep = 0;
        let answers = {};
        let recommendations = null;
        let isDarkMode = false; // ⬅️ TAMBAHAN: State Dark Mode

        // DARK MODE LOGIC (TAMBAHAN)
        function initDarkMode() {
            const html = document.documentElement;
            // 1. Cek localStorage
            const storedMode = localStorage.getItem('color-theme');
            
            if (storedMode === 'dark' || (!storedMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                html.classList.add('dark');
                isDarkMode = true;
            } else {
                html.classList.remove('dark');
                isDarkMode = false;
            }
        }

        function toggleDarkMode() {
            const html = document.documentElement;
            html.classList.toggle('dark');
            isDarkMode = html.classList.contains('dark');
            localStorage.setItem('color-theme', isDarkMode ? 'dark' : 'light');
            render(); 
        }