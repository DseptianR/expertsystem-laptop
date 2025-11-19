// RENDER FUNCTIONS
        function renderProgressBar() {
            const percentage = (currentStep / questions.length) * 100;
            return `
                <div class="mb-8 slide-up">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Langkah ${currentStep + 1} dari ${questions.length}</span>
                        <span class="text-sm font-bold gradient-text">${Math.round(percentage)}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner dark:bg-slate-700">
                        <div class="gradient-bg h-3 rounded-full progress-bar shadow-lg" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
        }

        function renderQuestion() {
            const question = questions[currentStep];
            
            const optionsHTML = question.options.map((option, index) => {
                
                // --- LOGIKA KONDISIONAL UNTUK GAMBAR/EMOJI (Sesuai perbaikan sebelumnya) ---
                let iconContent;
                let iconClasses = "text-3xl group-hover:scale-110 transition-transform duration-300";

                if (question.id === 'brand' && option.value !== 'any') {
                    iconContent = `<img src="${option.emoji}" class="h-8 w-8 object-contain" alt="${option.label} Logo">`;
                    iconClasses = "group-hover:scale-110 transition-transform duration-300";
                } else {
                    iconContent = option.emoji;
                }
                
                return `
                    <button onclick="handleAnswer('${option.value}')" 
                        class="option-card w-full text-left p-5 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group bg-white 
                        
                        /* ⬅️ TAMBAHKAN CLASS DARK MODE DI SINI */
                        dark:bg-slate-800 dark:border-slate-700 dark:hover:border-indigo-500
                        "
                        style="animation-delay: ${index * 0.05}s">
                        <div class="flex items-center gap-4">
                            <div class="${iconClasses}">
                                ${iconContent} 
                            </div>
                            <div class="flex-1">
                                <div class="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors dark:text-white">${option.label}</div>
                                <div class="text-sm text-gray-500 mt-1 dark:text-gray-400">${option.desc}</div>
                            </div>
                            <div class="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                        </div>
                    </button>
                `;
            }).join('');

            // --- Bagian tampilan pertanyaan utama (tidak diubah) ---
            return `
                <div class="mb-8 fade-in">
                    <div class="flex justify-center mb-6">
                        <div class="gradient-bg p-6 rounded-2xl shadow-xl animate-bounce">
                            <span class="text-5xl">${question.icon}</span>
                        </div>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-800 text-center mb-3">${question.question}</h2>
                    <p class="text-center text-gray-500 mb-8 text-lg">${question.description}</p>
                    <div class="space-y-3 fade-in">${optionsHTML}</div>
                </div>
            `;
        }

        function renderQuestionPage() {
            return `
                <div class="min-h-screen p-4 py-8">
                    <div class="max-w-3xl mx-auto">
                        <div class="flex justify-end mb-4 fade-in">
                            <button onclick="toggleDarkMode()" 
                                class="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 dark:bg-slate-700 dark:text-yellow-400 text-gray-800">
                                ${isDarkMode ? '🌞' : '🌙'}
                            </button>
                        </div>

                        <div class="glass-effect rounded-3xl shadow-2xl p-8 md:p-12 dark:shadow-xl dark:shadow-indigo-900/50">
                            <div class="text-center mb-10">
                                <div class="inline-block gradient-bg text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 badge">
                                    Expert System
                                </div>
                                <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 dark:text-white">
                                    Temukan Laptop <span class="gradient-text">Impian</span> Anda
                                </h1>
                                <p class="text-gray-600 text-lg dark:text-gray-300">Jawab beberapa pertanyaan untuk mendapatkan rekomendasi terbaik</p>
                            </div>
                            ${renderProgressBar()}
                            ${renderQuestion()}
                            ${currentStep > 0 ? `
                                <button onclick="handleBack()" 
                                    class="w-full bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 mt-4 flex items-center justify-center gap-2 shadow-sm dark:bg-slate-700 dark:text-gray-200 dark:hover:bg-slate-600">
                                    <span>←</span> Kembali
                                </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        function getScoreColor(score) {
            if (score >= 80) return 'text-green-600';
            if (score >= 60) return 'text-blue-600';
            if (score >= 40) return 'text-orange-600';
            return 'text-red-600';
        }

        function getScoreBgColor(score) {
            if (score >= 80) return 'bg-green-500';
            if (score >= 60) return 'bg-blue-500';
            if (score >= 40) return 'bg-orange-500';
            return 'bg-red-500';
        }

        function renderResults() {
            const resultsHTML = recommendations.map((laptop, index) => {
                const scoreColor = getScoreColor(laptop.matchScore);
                const scoreBgColor = getScoreBgColor(laptop.matchScore);
                
                return `
                <div class="card-hover border-2 border-gray-200 rounded-2xl p-6 bg-white shadow-lg dark:bg-slate-800 dark:border-slate-700" style="animation-delay: ${index * 0.1}s">
                    <div class="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                        <div class="flex-1">
                            <div class="flex items-center gap-3 mb-3">
                                <span class="inline-block gradient-bg text-white text-xs px-3 py-1 rounded-full font-semibold">
                                    #${index + 1}
                                </span>
                                <span class="inline-block bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-semibold dark:bg-indigo-900/50 dark:text-indigo-300">
                                    ${laptop.category}
                                </span>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-2 dark:text-white">${laptop.name}</h3>
                            <p class="text-gray-600 mb-2 leading-relaxed dark:text-gray-400">${laptop.specs}</p>
                            <div class="flex items-center gap-2">
                                <span class="text-2xl font-bold text-green-600">💰 ${laptop.price}</span>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="text-sm text-gray-500 mb-1 font-medium dark:text-gray-400">Tingkat Kesesuaian</div>
                            <div class="text-5xl font-extrabold ${scoreColor} mb-2">${Math.round(laptop.matchScore)}%</div>
                            <div class="w-32 bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner dark:bg-slate-700">
                                <div class="${scoreBgColor} h-3 rounded-full transition-all duration-1000 shadow-lg" style="width: ${laptop.matchScore}%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                        <div class="text-sm text-gray-600 font-semibold mb-2 dark:text-gray-300">Kecocokan Kriteria:</div>
                        <div class="flex flex-wrap gap-2">
                            ${Object.keys(laptop.matchDetails).map(key => {
                                const matched = laptop.matchDetails[key];
                                return `
                                    <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${matched ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300' : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300'}">
                                        ${matched ? '✓' : '○'} ${key}
                                    </span>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `}).join('');

            return `
                <div class="min-h-screen p-4 py-8">
                    <div class="max-w-5xl mx-auto">
                        <div class="flex justify-end mb-4 fade-in">
                            <button onclick="toggleDarkMode()" 
                                class="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 dark:bg-slate-700 dark:text-yellow-400 text-gray-800">
                                ${isDarkMode ? '🌞' : '🌙'}
                            </button>
                        </div>

                        <div class="glass-effect rounded-3xl shadow-2xl p-8 md:p-12 dark:shadow-xl dark:shadow-indigo-900/50">
                            <div class="text-center mb-10 fade-in">
                                <div class="text-7xl mb-4 animate-bounce">💻</div> 
                                <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 dark:text-white">
                                    Rekomendasi <span class="gradient-text">Laptop Terbaik</span>
                                </h1>
                                <p class="text-gray-600 text-lg dark:text-gray-300">Berdasarkan kebutuhan dan preferensi Anda</p>
                                <div class="mt-6 inline-flex items-center gap-3 bg-indigo-50 px-6 py-3 rounded-full dark:bg-indigo-900/50">
                                    <span class="text-sm font-medium text-indigo-700 dark:text-indigo-300">Menemukan ${recommendations.length} laptop yang cocok</span>
                                </div>
                            </div>
                            
                            <div class="space-y-6 mb-8 fade-in">${resultsHTML}</div>
                            
                            <div class="flex gap-4">
                                <button onclick="handleReset()" 
                                    class="flex-1 gradient-bg text-white py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                     Cari Lagi
                                </button>
                                <button onclick="handlePrint()" 
                                    class="flex-1 bg-white border-2 border-indigo-500 text-indigo-600 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-300 dark:bg-slate-800 dark:text-indigo-400 dark:hover:bg-slate-700">
                                     Cetak Hasil
                                </button>
                            </div>
                            
                            <div class="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl dark:from-slate-700 dark:to-slate-800">
                                <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2 dark:text-white">
                                    <span class="text-2xl">💡</span> Tips Pembelian Laptop
                                </h3>
                                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <li class="flex items-start gap-2">
                                        <span class="text-indigo-500 mt-1">•</span>
                                        <span>Bandingkan harga di beberapa toko online sebelum membeli</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-indigo-500 mt-1">•</span>
                                        <span>Pastikan garansi resmi dan layanan purna jual yang baik</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-indigo-500 mt-1">•</span>
                                        <span>Pertimbangkan upgrade RAM atau storage di masa depan</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-indigo-500 mt-1">•</span>
                                        <span>Baca review pengguna untuk mengetahui performa real-world</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function render() {
            const app = document.getElementById('app');
            if (recommendations) {
                app.innerHTML = renderResults();
            } else {
                app.innerHTML = renderQuestionPage();
            }
        }

        // EVENT HANDLERS
        function handleAnswer(value) {

            answers[questions[currentStep].id] = value;
            
            if (currentStep < questions.length - 1) {
                    currentStep++;
                    render();
            } else {
                recommendations = getRecommendations(answers);
                    render();
            }
        }

        function handleBack() {
            if (currentStep > 0) {
                currentStep--;
                render();
            }
        }

        function handleReset() {
            currentStep = 0;
            answers = {};
            recommendations = null;
            render();
        }

        function handlePrint() {
            window.print();
        }

        // INITIALIZE APP
        document.addEventListener('DOMContentLoaded', () => {
            initDarkMode();
            render();
        });