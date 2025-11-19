// DATA: Database Laptop (Diperluas)
        const laptopDatabase = [
            {
                name: 'ASUS VivoBook 14',
                specs: 'Intel Core i3-1215U, 8GB RAM, 512GB SSD, 14" FHD',
                price: '4-5 juta',
                category: 'Budget',
                brandType: 'asus',
                matchCriteria: { 
                    usage: ['office', 'student', 'browsing'], 
                    budget: ['low'], 
                    performance: ['basic'], 
                    portability: ['high', 'medium'],
                    brand: ['asus', 'any'],
                    screenSize: ['14', 'small'],
                    battery: ['medium', 'long']
                }
            },
            {
                name: 'Lenovo IdeaPad Slim 3',
                specs: 'AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD, 14" FHD',
                price: '5-7 juta',
                category: 'Budget',
                brandType: 'lenovo',
                matchCriteria: { 
                    usage: ['office', 'student', 'programming', 'browsing'], 
                    budget: ['low', 'medium'], 
                    performance: ['basic', 'medium'], 
                    portability: ['high'],
                    brand: ['lenovo', 'any'],
                    screenSize: ['14', 'small'],
                    battery: ['long']
                }
            },
            {
                name: 'HP Pavilion 14',
                specs: 'Intel Core i5-1235U, 16GB RAM, 512GB SSD, 14" FHD IPS',
                price: '7-9 juta',
                category: 'Mid-Range',
                brandType: 'hp',
                matchCriteria: { 
                    usage: ['office', 'programming', 'student', 'browsing'], 
                    budget: ['medium'], 
                    performance: ['medium'], 
                    portability: ['medium', 'high'],
                    brand: ['hp', 'any'],
                    screenSize: ['14', 'small'],
                    battery: ['medium', 'long']
                }
            },
            {
                name: 'Acer Swift 3',
                specs: 'Intel Core i5-1240P, 8GB RAM, 512GB SSD, 14" FHD IPS',
                price: '6-8 juta',
                category: 'Mid-Range',
                brandType: 'acer',
                matchCriteria: { 
                    usage: ['office', 'student', 'browsing'], 
                    budget: ['medium'], 
                    performance: ['basic', 'medium'], 
                    portability: ['high'],
                    brand: ['acer', 'any'],
                    screenSize: ['14', 'small'],
                    battery: ['long']
                }
            },
            {
                name: 'Lenovo ThinkPad E14',
                specs: 'Intel Core i5-1235U, 16GB RAM, 512GB SSD, 14" FHD',
                price: '9-11 juta',
                category: 'Business',
                brandType: 'lenovo',
                matchCriteria: { 
                    usage: ['office', 'programming', 'business'], 
                    budget: ['medium', 'high'], 
                    performance: ['medium'], 
                    portability: ['medium'],
                    brand: ['lenovo', 'any'],
                    screenSize: ['14', 'small'],
                    battery: ['long']
                }
            },
            {
                name: 'ASUS TUF Gaming F15',
                specs: 'Intel Core i5-12500H, RTX 3050, 16GB RAM, 512GB SSD, 15.6" 144Hz',
                price: '10-12 juta',
                category: 'Gaming',
                brandType: 'asus',
                matchCriteria: { 
                    usage: ['gaming', 'programming', 'design'], 
                    budget: ['medium', 'high'], 
                    performance: ['medium', 'high'], 
                    portability: ['low', 'medium'],
                    brand: ['asus', 'any'],
                    screenSize: ['15', 'large'],
                    battery: ['short', 'medium']
                }
            },
            {
                name: 'Acer Nitro 5',
                specs: 'AMD Ryzen 5 7535HS, RTX 4050, 16GB RAM, 512GB SSD, 15.6" 144Hz',
                price: '11-13 juta',
                category: 'Gaming',
                brandType: 'acer',
                matchCriteria: { 
                    usage: ['gaming', 'design'], 
                    budget: ['medium', 'high'], 
                    performance: ['high'], 
                    portability: ['low', 'medium'],
                    brand: ['acer', 'any'],
                    screenSize: ['15', 'large'],
                    battery: ['short', 'medium']
                }
            },
            {
                name: 'MacBook Air M2',
                specs: 'Apple M2, 8GB RAM, 256GB SSD, 13.6" Liquid Retina',
                price: '15-17 juta',
                category: 'Premium',
                brandType: 'apple',
                matchCriteria: { 
                    usage: ['design', 'programming', 'office', 'student'], 
                    budget: ['high', 'premium'], 
                    performance: ['medium', 'high'], 
                    portability: ['high'],
                    brand: ['apple', 'any'],
                    screenSize: ['13', 'small'],
                    battery: ['long']
                }
            },
            {
                name: 'MacBook Pro 14" M3',
                specs: 'Apple M3 Pro, 18GB RAM, 512GB SSD, 14.2" Liquid Retina XDR',
                price: '28-32 juta',
                category: 'Premium',
                brandType: 'apple',
                matchCriteria: { 
                    usage: ['design', 'programming', 'video'], 
                    budget: ['premium'], 
                    performance: ['high'], 
                    portability: ['medium', 'high'],
                    brand: ['apple', 'any'],
                    screenSize: ['14', 'small'],
                    battery: ['long']
                }
            },
            {
                name: 'Dell XPS 15',
                specs: 'Intel Core i7-13700H, 16GB RAM, 512GB SSD, 15.6" 4K OLED',
                price: '18-22 juta',
                category: 'Premium',
                brandType: 'dell',
                matchCriteria: { 
                    usage: ['design', 'programming', 'video'], 
                    budget: ['high', 'premium'], 
                    performance: ['high'], 
                    portability: ['medium'],
                    brand: ['dell', 'any'],
                    screenSize: ['15', 'large'],
                    battery: ['medium']
                }
            },
            {
                name: 'ASUS ROG Zephyrus G14',
                specs: 'AMD Ryzen 9 7940HS, RTX 4060, 16GB RAM, 1TB SSD, 14" QHD 165Hz',
                price: '20-24 juta',
                category: 'Gaming Premium',
                brandType: 'asus',
                matchCriteria: { 
                    usage: ['gaming', 'design', 'programming'], 
                    budget: ['premium'], 
                    performance: ['high'], 
                    portability: ['high', 'medium'],
                    brand: ['asus', 'any'],
                    screenSize: ['14', 'small'],
                    battery: ['medium']
                }
            },
            {
                name: 'MSI Creator Z16',
                specs: 'Intel Core i7-13700H, RTX 4070, 32GB RAM, 1TB SSD, 16" QHD+',
                price: '25-30 juta',
                category: 'Workstation',
                brandType: 'msi',
                matchCriteria: { 
                    usage: ['design', 'video'], 
                    budget: ['premium'], 
                    performance: ['high'], 
                    portability: ['low', 'medium'],
                    brand: ['msi', 'any'],
                    screenSize: ['16', 'large'],
                    battery: ['short', 'medium']
                }
            },
            {
                name: 'HP Envy 13',
                specs: 'Intel Core i7-1355U, 16GB RAM, 512GB SSD, 13.3" FHD',
                price: '12-14 juta',
                category: 'Premium Ultrabook',
                brandType: 'hp',
                matchCriteria: { 
                    usage: ['office', 'student', 'business', 'browsing'], 
                    budget: ['high'], 
                    performance: ['medium'], 
                    portability: ['high'],
                    brand: ['hp', 'any'],
                    screenSize: ['13', 'small'],
                    battery: ['long']
                }
            },
            {
                name: 'Lenovo Yoga Slim 7',
                specs: 'AMD Ryzen 7 7735U, 16GB RAM, 512GB SSD, 14" 2.8K OLED',
                price: '13-15 juta',
                category: 'Premium Ultrabook',
                brandType: 'lenovo',
                matchCriteria: { 
                    usage: ['office', 'design', 'student', 'programming'], 
                    budget: ['high'], 
                    performance: ['medium', 'high'], 
                    portability: ['high'],
                    brand: ['lenovo', 'any'],
                    screenSize: ['14', 'small'],
                    battery: ['long']
                }
            },
            {
                name: 'ASUS ZenBook 14 OLED',
                specs: 'Intel Core i7-1355U, 16GB RAM, 512GB SSD, 14" 2.8K OLED',
                price: '14-16 juta',
                category: 'Premium Ultrabook',
                brandType: 'asus',
                matchCriteria: { 
                    usage: ['office', 'design', 'student', 'programming'], 
                    budget: ['high'], 
                    performance: ['medium', 'high'], 
                    portability: ['high'],
                    brand: ['asus', 'any'],
                    screenSize: ['14', 'small'],
                    battery: ['long']
                }
            },
            {
                name: 'MSI Prestige 14 Evo',
                specs: 'Intel Core i7-1360P, 16GB RAM, 1TB SSD, 14" FHD+',
                price: '15-17 juta',
                category: 'Business Premium',
                brandType: 'msi',
                matchCriteria: { 
                    usage: ['business', 'programming', 'office'], 
                    budget: ['high'], 
                    performance: ['medium', 'high'], 
                    portability: ['high'],
                    brand: ['msi', 'any'],
                    screenSize: ['14', 'small'],
                    battery: ['long']
                }
            },
            {
                name: 'Dell Inspiron 14',
                specs: 'Intel Core i5-1335U, 8GB RAM, 512GB SSD, 14" FHD',
                price: '7-9 juta',
                category: 'Mid-Range',
                brandType: 'dell',
                matchCriteria: { 
                    usage: ['office', 'student', 'browsing'], 
                    budget: ['medium'], 
                    performance: ['basic', 'medium'], 
                    portability: ['medium', 'high'],
                    brand: ['dell', 'any'],
                    screenSize: ['14', 'small'],
                    battery: ['medium', 'long']
                }
            },
            {
                name: 'Lenovo Legion 5 Pro',
                specs: 'AMD Ryzen 7 7745HX, RTX 4070, 16GB RAM, 1TB SSD, 16" QHD+ 240Hz',
                price: '22-26 juta',
                category: 'Gaming Premium',
                brandType: 'lenovo',
                matchCriteria: { 
                    usage: ['gaming', 'design', 'video'], 
                    budget: ['premium'], 
                    performance: ['high'], 
                    portability: ['low', 'medium'],
                    brand: ['lenovo', 'any'],
                    screenSize: ['16', 'large'],
                    battery: ['short', 'medium']
                }
            }
        ];