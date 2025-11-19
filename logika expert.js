// LOGIC: Expert System (Enhanced)
        function calculateMatch(laptop, answers) {
            let score = 0;
            let maxScore = 0;
            let details = {};

            Object.keys(answers).forEach(key => {
                if (laptop.matchCriteria[key]) {
                    maxScore += 1;
                    if (laptop.matchCriteria[key].includes(answers[key])) {
                        score += 1;
                        details[key] = true;
                    } else {
                        details[key] = false;
                    }
                }
            });

            return {
                score: maxScore > 0 ? (score / maxScore) * 100 : 0,
                details: details
            };
        }

        function getRecommendations(answers) {
            return laptopDatabase
                .map(laptop => {
                    const match = calculateMatch(laptop, answers);
                    return {
                        ...laptop,
                        matchScore: match.score,
                        matchDetails: match.details
                    };
                })
                .sort((a, b) => b.matchScore - a.matchScore)
                .slice(0, 5);
        }