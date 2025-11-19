// DATA: Pertanyaan (Diperluas)
        const questions = [
            {
                id: 'usage',
                question: 'Apa kegunaan utama laptop yang Anda butuhkan?',
                icon: '💻',
                description: 'Pilih aktivitas yang paling sering Anda lakukan',
                options: [
                    { value: 'office', label: 'Pekerjaan Kantor', desc: 'Office, Email, Browsing', emoji: '📊' },
                    { value: 'design', label: 'Desain Grafis', desc: 'Photoshop, Illustrator', emoji: '🎨' },
                    { value: 'video', label: 'Video Editing', desc: 'Premiere, After Effects', emoji: '🎬' },
                    { value: 'gaming', label: 'Gaming', desc: 'Game AAA, Streaming', emoji: '🎮' },
                    { value: 'programming', label: 'Programming', desc: 'Development, Coding', emoji: '💻' },
                    { value: 'student', label: 'Kuliah/Sekolah', desc: 'Tugas, Presentasi', emoji: '🎓' },
                    { value: 'business', label: 'Business', desc: 'Meeting, Travel', emoji: '💼' },
                    { value: 'browsing', label: 'Browsing Ringan', desc: 'Internet, Media', emoji: '🌐' }
                ]
            },
            {
                id: 'budget',
                question: 'Berapa budget yang Anda miliki?',
                icon: '💰',
                description: 'Tentukan range harga yang sesuai',
                options: [
                    { value: 'low', label: 'Budget Friendly', desc: 'Di bawah 5 juta', emoji: '💵' },
                    { value: 'medium', label: 'Mid-Range', desc: '5 - 10 juta', emoji: '💶' },
                    { value: 'high', label: 'High-End', desc: '10 - 20 juta', emoji: '💷' },
                    { value: 'premium', label: 'Premium', desc: 'Di atas 20 juta', emoji: '💎' }
                ]
            },
            {
                id: 'brand',
                question: 'Apakah Anda memiliki preferensi brand tertentu?',
                icon: '🏷️',
                description: 'Pilih brand yang Anda sukai atau "Semua Brand"',
                options: [
                    { value: 'any', label: 'Semua Brand', desc: 'Tidak ada preferensi', emoji: '🌟' },
                    { value: 'asus', label: 'ASUS', desc: 'ROG, TUF, VivoBook', emoji: 'logo/asus.png' },
                    { value: 'lenovo', label: 'Lenovo', desc: 'ThinkPad, Legion, IdeaPad', emoji: 'logo/lenovo.png' },
                    { value: 'hp', label: 'HP', desc: 'Pavilion, Envy, Omen', emoji: 'logo/hp.png' },
                    { value: 'dell', label: 'Dell', desc: 'XPS, Inspiron, Alienware', emoji: 'logo/dell.png' },
                    { value: 'apple', label: 'Apple', desc: 'MacBook Air, MacBook Pro', emoji: 'logo/apple.png' },
                    { value: 'acer', label: 'Acer', desc: 'Swift, Nitro, Predator', emoji: 'logo/acer.png' },
                    { value: 'msi', label: 'MSI', desc: 'Creator, Prestige, Gaming', emoji: 'logo/msi.png' }
                ]
            },
            {
                id: 'portability',
                question: 'Seberapa penting portabilitas untuk Anda?',
                icon: '🎒',
                description: 'Seberapa sering Anda membawa laptop bepergian?',
                options: [
                    { value: 'high', label: 'Sangat Penting', desc: 'Sering dibawa bepergian', emoji: '✈️' },
                    { value: 'medium', label: 'Cukup Penting', desc: 'Kadang-kadang dibawa', emoji: '🚗' },
                    { value: 'low', label: 'Tidak Penting', desc: 'Mostly di meja kerja', emoji: '🏠' }
                ]
            },
            {
                id: 'performance',
                question: 'Kebutuhan performa yang diinginkan?',
                icon: '🚀',
                description: 'Pilih level performa yang Anda butuhkan',
                options: [
                    { value: 'basic', label: 'Basic', desc: 'Browsing, Office, Email', emoji: '🐢' },
                    { value: 'medium', label: 'Medium', desc: 'Multitasking, Light Gaming', emoji: '🐇' },
                    { value: 'high', label: 'High Performance', desc: 'Gaming, Rendering, Heavy Tasks', emoji: '🚀' }
                ]
            },
            {
                id: 'screenSize',
                question: 'Ukuran layar yang Anda inginkan?',
                icon: '📺',
                description: 'Pilih ukuran layar yang nyaman untuk Anda',
                options: [
                    { value: 'small', label: 'Compact', desc: '13-14 inch (Portabel)', emoji: '📱' },
                    { value: '13', label: '13 inch', desc: 'Ultra portabel', emoji: '💼' },
                    { value: '14', label: '14 inch', desc: 'Balanced portability', emoji: '⚖️' },
                    { value: '15', label: '15-15.6 inch', desc: 'Standard size', emoji: '🖥️' },
                    { value: '16', label: '16+ inch', desc: 'Large workspace', emoji: '🎬' },
                    { value: 'large', label: 'Large', desc: '15-16 inch (Workspace)', emoji: '🖥️' }
                ]
            },
            {
                id: 'battery',
                question: 'Berapa lama daya tahan baterai yang Anda butuhkan?',
                icon: '🔋',
                description: 'Estimasi penggunaan tanpa charger',
                options: [
                    { value: 'short', label: 'Pendek', desc: '3-5 jam (Mostly AC)', emoji: '⚡' },
                    { value: 'medium', label: 'Sedang', desc: '6-8 jam (Normal)', emoji: '🔋' },
                    { value: 'long', label: 'Panjang', desc: '9+ jam (All day)', emoji: '🔌' }
                ]
            }
        ];