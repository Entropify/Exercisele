// Exercise database
const exercises = [
    // Barbell Exercises
    {
        name: "bench press",
        primaryMuscles: ["chest", "triceps"],
        equipment: "barbell",
        type: "compound",
        difficulty: "medium",
        tip: "Keep your feet flat on the floor, retract your shoulder blades, and lower the bar to your chest with control.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "squat",
        primaryMuscles: ["quadriceps", "glutes", "hamstrings"],
        equipment: "barbell",
        type: "compound",
        difficulty: "medium",
        tip: "Keep your chest up, knees tracking over toes, and descend until thighs are parallel to the floor.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "deadlift",
        primaryMuscles: ["hamstrings", "glutes", "lower back"],
        equipment: "barbell",
        type: "compound",
        difficulty: "hard",
        tip: "Keep the bar close to your body, maintain a neutral spine, and drive through your heels.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "overhead press",
        primaryMuscles: ["shoulders", "triceps", "core"],
        equipment: "barbell",
        type: "compound",
        difficulty: "medium",
        tip: "Keep your core tight, press straight up overhead, and avoid arching your back excessively.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "romanian deadlift",
        primaryMuscles: ["hamstrings", "glutes"],
        equipment: "barbell",
        type: "compound",
        difficulty: "medium",
        tip: "Keep legs relatively straight, hinge at the hips, and lower the bar along your legs while feeling the hamstring stretch.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "barbell row",
        primaryMuscles: ["lats", "rhomboids", "biceps"],
        equipment: "barbell",
        type: "compound",
        difficulty: "medium",
        tip: "Keep your chest up, pull the bar to your lower chest, and squeeze your shoulder blades together.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "front squat",
        primaryMuscles: ["quadriceps", "glutes", "hamstrings"],
        equipment: "barbell",
        type: "compound",
        difficulty: "hard",
        tip: "Rest the bar on your front delts, keep your elbows high, and maintain an upright torso throughout the movement.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "barbell curl",
        primaryMuscles: ["biceps"],
        equipment: "barbell",
        type: "isolation",
        difficulty: "easy",
        tip: "Keep your elbows stationary, curl the bar up with control, and squeeze your biceps at the top.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "close grip bench press",
        primaryMuscles: ["triceps", "chest"],
        equipment: "barbell",
        type: "compound",
        difficulty: "medium",
        tip: "Use a narrow grip, keep your elbows close to your body, and focus on tricep activation.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "barbell hip thrust",
        primaryMuscles: ["glutes", "hamstrings"],
        equipment: "barbell",
        type: "compound",
        difficulty: "medium",
        tip: "Drive your hips up by squeezing your glutes, keep your core tight, and pause at the top.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },

    // Dumbbell Exercises
    {
        name: "bicep curl",
        primaryMuscles: ["biceps"],
        equipment: "dumbbell",
        type: "isolation",
        difficulty: "easy",
        tip: "Keep your elbows stationary, curl the weight up with control, and squeeze at the top.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "shoulder press",
        primaryMuscles: ["shoulders", "triceps", "core"],
        equipment: "dumbbell",
        type: "compound",
        difficulty: "medium",
        tip: "Start with weights at shoulder level, press straight up overhead, and lower with control.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "chest fly",
        primaryMuscles: ["chest"],
        equipment: "dumbbell",
        type: "isolation",
        difficulty: "easy",
        tip: "Keep a slight bend in your elbows, bring weights together in front of your chest, and feel the stretch.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "tricep extension",
        primaryMuscles: ["triceps"],
        equipment: "dumbbell",
        type: "isolation",
        difficulty: "easy",
        tip: "Keep your elbows stationary, extend your arms overhead, and feel the stretch in your triceps.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "dumbbell row",
        primaryMuscles: ["lats", "rhomboids", "biceps"],
        equipment: "dumbbell",
        type: "compound",
        difficulty: "easy",
        tip: "Keep your back straight, pull the weight to your hip, and squeeze your shoulder blade.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "dumbbell bench press",
        primaryMuscles: ["chest", "triceps", "shoulders"],
        equipment: "dumbbell",
        type: "compound",
        difficulty: "medium",
        tip: "Control the weights down to your chest, press up with both arms simultaneously, and maintain stability.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "dumbbell squat",
        primaryMuscles: ["quadriceps", "glutes", "hamstrings"],
        equipment: "dumbbell",
        type: "compound",
        difficulty: "easy",
        tip: "Hold dumbbells at shoulder level, keep your chest up, and squat down until thighs are parallel.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "lateral raise",
        primaryMuscles: ["shoulders"],
        equipment: "dumbbell",
        type: "isolation",
        difficulty: "easy",
        tip: "Raise weights out to the sides until arms are parallel to the floor, control the descent.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "hammer curl",
        primaryMuscles: ["biceps", "forearms"],
        equipment: "dumbbell",
        type: "isolation",
        difficulty: "easy",
        tip: "Keep palms facing each other throughout the movement, curl up with control.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "dumbbell lunges",
        primaryMuscles: ["quadriceps", "glutes", "hamstrings"],
        equipment: "dumbbell",
        type: "compound",
        difficulty: "medium",
        tip: "Hold dumbbells at your sides, step forward into a lunge, and push back to starting position.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },

    // Machine Exercises
    {
        name: "lat pulldown",
        primaryMuscles: ["lats", "biceps", "rhomboids"],
        equipment: "machine",
        type: "compound",
        difficulty: "easy",
        tip: "Pull the bar to your upper chest, squeeze your shoulder blades together, and control the weight on the way up.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "leg press",
        primaryMuscles: ["quadriceps", "glutes"],
        equipment: "machine",
        type: "compound",
        difficulty: "easy",
        tip: "Keep your feet shoulder-width apart, lower until knees reach 90 degrees, and drive through your heels.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "chest press machine",
        primaryMuscles: ["chest", "triceps", "shoulders"],
        equipment: "machine",
        type: "compound",
        difficulty: "easy",
        tip: "Keep your back flat against the pad, press handles forward with control, and squeeze your chest.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "seated row",
        primaryMuscles: ["lats", "rhomboids", "biceps"],
        equipment: "machine",
        type: "compound",
        difficulty: "easy",
        tip: "Pull handles to your chest, squeeze your shoulder blades together, and maintain good posture.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "leg extension",
        primaryMuscles: ["quadriceps"],
        equipment: "machine",
        type: "isolation",
        difficulty: "easy",
        tip: "Extend your legs against the resistance, squeeze your quads at the top, and control the descent.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "leg curl",
        primaryMuscles: ["hamstrings"],
        equipment: "machine",
        type: "isolation",
        difficulty: "easy",
        tip: "Curl your heels toward your glutes, squeeze your hamstrings, and control the weight back down.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "shoulder press machine",
        primaryMuscles: ["shoulders", "triceps"],
        equipment: "machine",
        type: "compound",
        difficulty: "easy",
        tip: "Press handles overhead, keep your core tight, and avoid arching your back excessively.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "cable crossover",
        primaryMuscles: ["chest"],
        equipment: "machine",
        type: "isolation",
        difficulty: "easy",
        tip: "Bring cables together in front of your chest, squeeze your chest muscles, and control the stretch.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "cable row",
        primaryMuscles: ["lats", "rhomboids", "biceps"],
        equipment: "machine",
        type: "compound",
        difficulty: "easy",
        tip: "Pull cable to your chest, squeeze your shoulder blades together, and maintain a straight back.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "cable tricep pushdown",
        primaryMuscles: ["triceps"],
        equipment: "machine",
        type: "isolation",
        difficulty: "easy",
        tip: "Keep your elbows stationary, push the cable down until arms are fully extended, and control the return.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },

    // Bodyweight Exercises
    {
        name: "push up",
        primaryMuscles: ["chest", "triceps", "shoulders"],
        equipment: "bodyweight",
        type: "compound",
        difficulty: "easy",
        tip: "Keep your body straight, hands slightly wider than shoulders, and lower until chest nearly touches the floor.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "pull up",
        primaryMuscles: ["lats", "biceps", "rhomboids"],
        equipment: "bodyweight",
        type: "compound",
        difficulty: "hard",
        tip: "Start from a dead hang, pull yourself up until chin clears the bar, and lower with control.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "lunges",
        primaryMuscles: ["quadriceps", "glutes", "hamstrings"],
        equipment: "bodyweight",
        type: "compound",
        difficulty: "medium",
        tip: "Step forward into a lunge position, keep your front knee over your ankle, and push back to starting position.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "plank",
        primaryMuscles: ["core", "shoulders"],
        equipment: "bodyweight",
        type: "isolation",
        difficulty: "easy",
        tip: "Keep your body straight from head to heels, engage your core, and breathe normally while holding the position.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "burpees",
        primaryMuscles: ["chest", "shoulders", "quadriceps", "core"],
        equipment: "bodyweight",
        type: "compound",
        difficulty: "hard",
        tip: "Start standing, drop to push-up position, do a push-up, jump feet to hands, then jump up with arms overhead.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "mountain climbers",
        primaryMuscles: ["core", "shoulders", "quadriceps"],
        equipment: "bodyweight",
        type: "compound",
        difficulty: "medium",
        tip: "Start in plank position, alternate bringing knees to chest rapidly while maintaining plank form.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "jumping jacks",
        primaryMuscles: ["quadriceps", "shoulders"],
        equipment: "bodyweight",
        type: "compound",
        difficulty: "easy",
        tip: "Jump feet apart while raising arms overhead, then jump back to starting position.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "wall sit",
        primaryMuscles: ["quadriceps", "glutes"],
        equipment: "bodyweight",
        type: "isolation",
        difficulty: "medium",
        tip: "Slide down wall until thighs are parallel to floor, hold position with back flat against wall.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "dips",
        primaryMuscles: ["triceps", "chest", "shoulders"],
        equipment: "bodyweight",
        type: "compound",
        difficulty: "hard",
        tip: "Lower your body by bending elbows, keep chest up, and push back up to starting position.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "pike push up",
        primaryMuscles: ["shoulders", "triceps", "core"],
        equipment: "bodyweight",
        type: "compound",
        difficulty: "hard",
        tip: "Start in downward dog position, lower head toward hands, and push back up.",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "single leg glute bridge",
        primaryMuscles: ["glutes", "hamstrings"],
        equipment: "bodyweight",
        type: "isolation",
        difficulty: "medium",
        tip: "Lift one leg up, drive through the heel of the planted foot, and squeeze your glutes at the top.",
        youtube: "https://www.youtube.com/shorts/J-Zi-sMb3qA"
    },
    {
        name: "russian twists",
        primaryMuscles: ["obliques", "core"],
        equipment: "bodyweight",
        type: "isolation",
        difficulty: "easy",
        tip: "Sit with knees bent, lean back slightly, and rotate your torso side to side while keeping feet off ground.",
        youtube: "https://www.youtube.com/shorts/J-Zi-sMb3qA"
    },
    {
        name: "bear crawl",
        primaryMuscles: ["core", "shoulders", "quadriceps"],
        equipment: "bodyweight",
        type: "compound",
        difficulty: "medium",
        tip: "Start on hands and knees, lift knees slightly off ground, and crawl forward maintaining this position.",
        youtube: "https://www.youtube.com/shorts/J-Zi-sMb3qA"
    },
    {
        name: "handstand push up",
        primaryMuscles: ["shoulders", "triceps"],
        equipment: "bodyweight",
        type: "compound",
        difficulty: "hard",
        tip: "Start in handstand position against wall, lower head toward ground, and push back up.",
        youtube: "https://www.youtube.com/shorts/J-Zi-sMb3qA"
    },
    {
        name: "pistol squat",
        primaryMuscles: ["quadriceps", "glutes"],
        equipment: "bodyweight",
        type: "compound",
        difficulty: "hard",
        tip: "Stand on one leg, extend other leg forward, and squat down on single leg while keeping extended leg off ground.",
        youtube: "https://www.youtube.com/shorts/J-Zi-sMb3qA"
    }
];

// Expose exercises globally for other pages like list.html
if (typeof window !== 'undefined') {
    window.exercises = exercises;
}

// Game state
let targetExercise = null;
let attempts = 0;
let maxAttempts = 6;
let gameOver = false;
let guessedNames = new Set();

// DOM elements
const exerciseInput = document.getElementById('exercise-input');
const autocompleteDropdown = document.getElementById('autocomplete-dropdown');
const guessBtn = document.getElementById('guess-btn');
const attemptsDisplay = document.getElementById('attempts');
const guessesContainer = document.getElementById('guesses-container');
const tipSection = document.getElementById('tip-section');
const tipText = document.getElementById('tip-text');
const tipVideoLink = document.getElementById('tip-video-link');
const gameOverSection = document.getElementById('game-over');
const gameResult = document.getElementById('game-result');
const newGameBtn = document.getElementById('new-game-btn');

// Autocomplete functionality
let currentSuggestions = [];
let selectedIndex = -1;

function filterExercises(query) {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    return exercises.filter(exercise => 
        exercise.name.toLowerCase().includes(lowerQuery)
    ).slice(0, 5); // Limit to 5 suggestions
}

function showSuggestions(suggestions) {
    autocompleteDropdown.innerHTML = '';
    
    if (suggestions.length === 0) {
        autocompleteDropdown.style.display = 'none';
        return;
    }
    
    suggestions.forEach((exercise, index) => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        item.textContent = exercise.name;
        item.addEventListener('click', () => selectExercise(exercise.name));
        autocompleteDropdown.appendChild(item);
    });
    
    autocompleteDropdown.style.display = 'block';
    currentSuggestions = suggestions;
}

function selectExercise(exerciseName) {
    exerciseInput.value = exerciseName;
    autocompleteDropdown.style.display = 'none';
    currentSuggestions = [];
    selectedIndex = -1;
}

function highlightSuggestion(index) {
    const items = autocompleteDropdown.querySelectorAll('.autocomplete-item');
    items.forEach((item, i) => {
        item.classList.toggle('highlighted', i === index);
    });
}

// Initialize game
function initGame() {
    if (!exerciseInput || !guessBtn || !attemptsDisplay || !guessesContainer || !tipSection || !gameOverSection) {
        return;
    }
    
    targetExercise = exercises[Math.floor(Math.random() * exercises.length)];
    attempts = 0;
    gameOver = false;
    guessedNames = new Set();
    guessesContainer.innerHTML = '';
    tipSection.style.display = 'none';
    if (tipVideoLink) {
        tipVideoLink.style.display = 'none';
        tipVideoLink.href = '#';
    }
    gameOverSection.style.display = 'none';
    exerciseInput.value = '';
    exerciseInput.disabled = false;
    guessBtn.disabled = false;
    autocompleteDropdown.style.display = 'none';
    updateAttemptsDisplay();
    console.log('Target exercise:', targetExercise.name); // For debugging
}

// Update attempts display
function updateAttemptsDisplay() {
    attemptsDisplay.textContent = attempts;
}

// Find exercise by name (case-insensitive)
function findExercise(name) {
    return exercises.find(exercise => 
        exercise.name.toLowerCase() === name.toLowerCase()
    );
}

// Calculate muscle similarity percentage
function calculateMuscleSimilarity(guessMuscles, targetMuscles) {
    const guessSet = new Set(guessMuscles);
    const targetSet = new Set(targetMuscles);
    const intersection = new Set([...guessSet].filter(x => targetSet.has(x)));
    const union = new Set([...guessSet, ...targetSet]);
    return Math.round((intersection.size / union.size) * 100);
}

// Get muscle group hints showing which muscles it's NOT similar to
function getMuscleGroupHints(guessMuscles, targetMuscles) {
    const guessSet = new Set(guessMuscles);
    const targetSet = new Set(targetMuscles);
    const intersection = new Set([...guessSet].filter(x => targetSet.has(x)));
    const union = new Set([...guessSet, ...targetSet]);
    const similarity = Math.round((intersection.size / union.size) * 100);
    
    if (similarity >= 80) {
        // Show which muscles are correct
        const correctMuscles = [...intersection];
        if (correctMuscles.length === 1) {
            return { percentage: similarity, text: `Correct: ${correctMuscles[0]}` };
        } else if (correctMuscles.length === 2) {
            return { percentage: similarity, text: `Correct: ${correctMuscles[0]} and ${correctMuscles[1]}` };
        } else {
            return { percentage: similarity, text: `Correct: ${correctMuscles.slice(0, -1).join(', ')} and ${correctMuscles[correctMuscles.length - 1]}` };
        }
    } else if (similarity >= 50) {
        const overlappedMuscles = [...intersection];
        if (overlappedMuscles.length === 1) {
            return { percentage: similarity, text: `Overlapped muscles: ${overlappedMuscles[0]}` };
        } else if (overlappedMuscles.length === 2) {
            return { percentage: similarity, text: `Overlapped muscles: ${overlappedMuscles[0]} and ${overlappedMuscles[1]}` };
        } else {
            return { percentage: similarity, text: `Overlapped muscles: ${overlappedMuscles.slice(0, -1).join(', ')} and ${overlappedMuscles[overlappedMuscles.length - 1]}` };
        }
    } else if (similarity >= 25) {
        const overlappedMuscles = [...intersection];
        if (overlappedMuscles.length === 1) {
            return { percentage: similarity, text: `Overlapped muscles: ${overlappedMuscles[0]}` };
        } else if (overlappedMuscles.length === 2) {
            return { percentage: similarity, text: `Overlapped muscles: ${overlappedMuscles[0]} and ${overlappedMuscles[1]}` };
        } else {
            return { percentage: similarity, text: `Overlapped muscles: ${overlappedMuscles.slice(0, -1).join(', ')} and ${overlappedMuscles[overlappedMuscles.length - 1]}` };
        }
    } else {
        // Show that the target exercise does NOT target the muscles that the guess targets
        const guessMusclesList = [...guessSet];
        if (guessMusclesList.length === 1) {
            return { percentage: similarity, text: `The actual muscle groups for the answer are not ${guessMusclesList[0]}` };
        } else if (guessMusclesList.length === 2) {
            return { percentage: similarity, text: `The actual muscle groups for the answer are not ${guessMusclesList[0]} or ${guessMusclesList[1]}` };
        } else {
            return { percentage: similarity, text: `The actual muscle groups for the answer are not ${guessMusclesList.slice(0, -1).join(', ')} or ${guessMusclesList[guessMusclesList.length - 1]}` };
        }
    }
}

// Get equipment match status with "not" hints
function getEquipmentMatch(guessEquipment, targetEquipment) {
    if (guessEquipment === targetEquipment) {
        return { status: 'exact', text: `Correct: ${targetEquipment}` };
    }
    
    // Show that the target exercise does NOT use the equipment that the guess uses
    return { status: 'none', text: `Not ${guessEquipment}` };
}

// Get exercise type match with "not" hints
function getTypeMatch(guessType, targetType) {
    if (guessType === targetType) {
        return { status: 'exact', text: `Correct: ${targetType}` };
    }
    
    // Provide "not" hint mirroring equipment style: say not the guessed type
    return { status: 'none', text: `Not ${guessType}` };
}

// Get difficulty comparison
function getDifficultyComparison(guessDifficulty, targetDifficulty) {
    const difficultyOrder = { 'easy': 1, 'medium': 2, 'hard': 3 };
    const guessLevel = difficultyOrder[guessDifficulty];
    const targetLevel = difficultyOrder[targetDifficulty];
    
    if (guessLevel === targetLevel) {
        return { status: 'exact', text: 'Same difficulty' };
    } else if (Math.abs(guessLevel - targetLevel) === 1) {
        return { status: 'close', text: guessLevel > targetLevel ? 'Harder' : 'Easier' };
    } else {
        return { status: 'far', text: guessLevel > targetLevel ? 'Much harder' : 'Much easier' };
    }
}

// Get feedback class for styling
function getFeedbackClass(percentage) {
    if (percentage >= 80) return 'excellent';
    if (percentage >= 50) return 'good';
    return 'poor';
}

// Get icon for match status
function getMatchIcon(status) {
    switch (status) {
        case 'exact': return '✓';
        case 'partial': case 'close': return '~';
        case 'none': case 'far': return '✗';
        default: return '?';
    }
}

// Create guess feedback element
function createGuessElement(guessExercise) {
    const muscleHints = getMuscleGroupHints(guessExercise.primaryMuscles, targetExercise.primaryMuscles);
    const equipmentMatch = getEquipmentMatch(guessExercise.equipment, targetExercise.equipment);
    const typeMatch = getTypeMatch(guessExercise.type, targetExercise.type);
    const isCorrect = guessExercise.name.toLowerCase() === targetExercise.name.toLowerCase();
    const difficultyHint = isCorrect
        ? { status: 'exact', text: `Correct: ${targetExercise.difficulty}` }
        : { status: 'none', text: `Not ${guessExercise.difficulty}` };
    
    
    const guessElement = document.createElement('div');
    guessElement.className = 'guess-item';
    
    guessElement.innerHTML = `
        <div class="guess-header">
            <span class="exercise-name ${isCorrect ? 'correct' : ''}">${guessExercise.name}</span>
            ${isCorrect ? '<span class="correct">Correct!</span>' : ''}
        </div>
        <div class="feedback-grid">
            <div class="feedback-item">
                <div class="feedback-label">
                    <span class="hint-icon ${muscleHints.percentage >= 50 ? 'correct' : muscleHints.percentage >= 25 ? 'partial' : 'incorrect'}">
                        ${getMatchIcon(muscleHints.percentage >= 50 ? 'exact' : muscleHints.percentage >= 25 ? 'partial' : 'none')}
                    </span>
                    Muscle Groups
                </div>
                <div class="feedback-bar">
                    <div class="feedback-fill ${getFeedbackClass(muscleHints.percentage)}" style="width: ${muscleHints.percentage}%"></div>
                </div>
                <div class="feedback-text">${muscleHints.text}</div>
            </div>
            
            <div class="feedback-item">
                <div class="feedback-label">
                    <span class="hint-icon ${equipmentMatch.status === 'exact' ? 'correct' : equipmentMatch.status === 'partial' ? 'partial' : 'incorrect'}">
                        ${getMatchIcon(equipmentMatch.status)}
                    </span>
                    Equipment
                </div>
                <div class="feedback-text">${equipmentMatch.text}</div>
            </div>
            
            <div class="feedback-item">
                <div class="feedback-label">
                    <span class="hint-icon ${typeMatch.status === 'exact' ? 'correct' : 'incorrect'}">
                        ${getMatchIcon(typeMatch.status)}
                    </span>
                    Exercise Type
                </div>
                <div class="feedback-text">${typeMatch.text}</div>
            </div>

            <div class="feedback-item">
                <div class="feedback-label">
                    <span class="hint-icon ${difficultyHint.status === 'exact' ? 'correct' : 'incorrect'}">
                        ${getMatchIcon(difficultyHint.status)}
                    </span>
                    Difficulty
                </div>
                <div class="feedback-text">${difficultyHint.text}</div>
            </div>
        </div>
    `;
    
    return guessElement;
}

// Handle guess submission
function handleGuess() {
    if (gameOver) return;
    
    const guessName = exerciseInput.value.trim();
    if (!guessName) return;

    // Prevent duplicate guesses (case-insensitive)
    const normalized = guessName.toLowerCase();
    if (guessedNames.has(normalized)) {
        alert('You already guessed that exercise. Try a different one.');
        exerciseInput.value = '';
        autocompleteDropdown.style.display = 'none';
        return;
    }
    
    const guessExercise = findExercise(guessName);
    if (!guessExercise) {
        alert('Exercise not found! Please check your spelling or try a different exercise.');
        return;
    }
    
    // Add guess to container
    const guessElement = createGuessElement(guessExercise);
    guessesContainer.appendChild(guessElement);
    guessedNames.add(normalized);
    
    attempts++;
    updateAttemptsDisplay();
    
    // Check if correct
    if (guessExercise.name.toLowerCase() === targetExercise.name.toLowerCase()) {
        gameOver = true;
        tipText.textContent = targetExercise.tip;
        tipSection.style.display = 'block';
        if (tipVideoLink) {
            const url = (targetExercise.youtube || '').trim();
            tipVideoLink.style.display = url ? 'inline' : 'none';
            if (url) tipVideoLink.href = url;
        }
        gameResult.textContent = `Congratulations! You guessed it in ${attempts} attempt${attempts === 1 ? '' : 's'}!`;
        gameOverSection.style.display = 'block';
        exerciseInput.disabled = true;
        guessBtn.disabled = true;
    } else if (attempts >= maxAttempts) {
        gameOver = true;
        tipText.textContent = targetExercise.tip;
        tipSection.style.display = 'block';
        if (tipVideoLink) {
            const url = (targetExercise.youtube || '').trim();
            tipVideoLink.style.display = url ? 'inline' : 'none';
            if (url) tipVideoLink.href = url;
        }
        gameResult.textContent = `Game Over! The exercise was: ${targetExercise.name}`;
        gameOverSection.style.display = 'block';
        exerciseInput.disabled = true;
        guessBtn.disabled = true;
    }
    
    exerciseInput.value = '';
    autocompleteDropdown.style.display = 'none';
}

// Event listeners (guarded for non-game pages)
if (guessBtn) {
    guessBtn.addEventListener('click', handleGuess);
}

if (exerciseInput) {
    exerciseInput.addEventListener('input', (e) => {
        const query = e.target.value;
        const suggestions = filterExercises(query);
        showSuggestions(suggestions);
        selectedIndex = -1;
    });

    // Show all options when focusing/clicking an empty input
    function showAllOptionsIfEmpty() {
        if (!exerciseInput.value.trim()) {
            const all = [...exercises].sort((a, b) => a.name.localeCompare(b.name));
            showSuggestions(all);
            selectedIndex = -1;
        }
    }

    exerciseInput.addEventListener('focus', showAllOptionsIfEmpty);
    exerciseInput.addEventListener('click', showAllOptionsIfEmpty);

    exerciseInput.addEventListener('keydown', (e) => {
        const dropdownOpen = autocompleteDropdown.style.display !== 'none';

        if (e.key === 'Enter') {
            e.preventDefault();
            if (dropdownOpen && selectedIndex >= 0 && currentSuggestions[selectedIndex]) {
                selectExercise(currentSuggestions[selectedIndex].name);
            } else {
                handleGuess();
            }
            return;
        }

        if (!dropdownOpen) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                selectedIndex = Math.min(selectedIndex + 1, currentSuggestions.length - 1);
                highlightSuggestion(selectedIndex);
                break;
            case 'ArrowUp':
                e.preventDefault();
                selectedIndex = Math.max(selectedIndex - 1, -1);
                highlightSuggestion(selectedIndex);
                break;
            case 'Escape':
                autocompleteDropdown.style.display = 'none';
                selectedIndex = -1;
                break;
        }
    });

    exerciseInput.addEventListener('blur', () => {
        // Delay hiding dropdown to allow clicking on suggestions
        setTimeout(() => {
            autocompleteDropdown.style.display = 'none';
        }, 200);
    });
}

if (newGameBtn) {
    newGameBtn.addEventListener('click', initGame);
}

// Initialize only on pages with game UI
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        if (exerciseInput && guessBtn && attemptsDisplay && guessesContainer) {
            initGame();
        }
    });
}
