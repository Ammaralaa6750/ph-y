const questions = [
    // --- Assignment 4 (Potential Energy) ---
    {
        question: "1. Doubling both charges changes the potential energy for a pair of point charges by a factor of:",
        options: ["2", "4", "1/2", "1/4", "1 (no change)"],
        correctIndex: 1
    },
    {
        question: "2. Tripling the separation between charges changes the potential energy of a pair of point charges by a factor of:",
        options: ["3", "9", "1/3", "1/9", "1 (no change)"],
        correctIndex: 2
    },
    {
        question: "3. The potential energy of a 3.5 pC charge separated by 6.2 cm from a 1.6 µC charge is:",
        options: ["1.3 × 10⁻⁷ J", "8.1 × 10⁻⁷ J", "1.2 × 10⁻⁵ J", "8.1 × 10⁻⁵ J", "1.0 × 10⁻⁵ J"],
        correctIndex: 1
    },
    {
        question: "4. The SI unit for electric potential energy is equivalent to:",
        options: ["N·m²", "V·C", "N/m", "C·m²", "None of these"],
        correctIndex: 1
    },
    {
        question: "5. Three point charges, q1=2.0 µC, q2=2.0 µC, and q3=-1.0 µC, are located at the vertices of an equilateral triangle of side length 30 cm. What is the potential energy?",
        options: ["0.24 J", "0.12 J", "-0.24 J", "-0.12 J", "0"],
        correctIndex: 4
    },
    {
        question: "6. Three point charges, q1, q2, and q3 are located at the vertices of an equilateral triangle. If q1=q2 what value must q3 have so that the total potential energy of the arrangement is zero?",
        options: ["q1", "0.5 q1", "-0.5 q1", "(q1+q2)/2", "No value"],
        correctIndex: 2
    },
    {
        question: "7. The unit of electric potential, the volt, is equal to a:",
        options: ["C-N", "C²·N/s", "J²/C", "J/C", "J/C²"],
        correctIndex: 3
    },
    {
        question: "8. A 2.5-mC charge is on the y-axis at y=3.0 m, and a 6.3-mC charge is on the x-axis at x=3.0 m. What is the direction of the electric potential at the origin?",
        options: ["22.0°", "168°", "292°", "332°", "Potential has no direction"],
        correctIndex: 4
    },
    {
        question: "9. A 3.6 µC charge is moved from a position where its electric potential energy is 7.2 mJ to a position where its potential energy is 1.8 mJ. What is the potential at the first position?",
        options: ["1500 V", "2000 V", "-2000 V", "3500 V", "-1500 V"],
        correctIndex: 1
    },

    // --- Assignment 5 (Current & Circuits) ---
    {
        question: "1) If 64 coulombs flow along a wire in 4.0 seconds, what is the average current?",
        options: ["64 A", "16 A", "32 A", "4.0 A", "None of these"],
        correctIndex: 1
    },
    {
        question: "2) An ampere, A, is equivalent to a:",
        options: ["V·C", "N/V", "V/m", "C/s", "C·s"],
        correctIndex: 3
    },
    {
        question: "3) When current flows through a wire:",
        options: [
            "Protons are moving in the direction of the current.",
            "Electrons are moving in the direction of the current.",
            "Both protons and electrons are moving.",
            "Electrons are moving opposite the direction of the current.",
            "Protons are moving opposite the direction of the current."
        ],
        correctIndex: 3
    },
    {
        question: "4) An ohm is equivalent to which of the following?",
        options: ["volt/ampere", "ampere/coulomb", "ampere·coulomb", "coulomb/volt", "volt/meter"],
        correctIndex: 0
    },
    {
        question: "5) Aluminum has a resistivity of 2.65×10⁻⁸ Ω·m. What is the resistance of 15 m of aluminum wire with cross-sectional area 1.0 mm²?",
        options: ["0.13 Ω", "1.6 Ω", "56 Ω", "1.3×10² Ω", "0.40 Ω"],
        correctIndex: 4
    },
    {
        question: "6) A 12.0 V battery is connected across a 4.00-Ω resistor. If the current through the resistor is 2.80 A, what is the internal resistance of the battery?",
        options: ["0.200 Ω", "0.800 Ω", "0.286 Ω", "3.71 Ω", "4.29 Ω"],
        correctIndex: 2
    },
    {
        question: "7) Four 12 Ω resistors are connected together. What is the maximum resistance that can be attained?",
        options: ["24 Ω", "12 Ω", "48 Ω", "36 Ω", "44 Ω"],
        correctIndex: 2
    },
    {
        question: "8) Four 12 Ω resistors are connected together. What is the least resistance that can be attained?",
        options: ["6.0 Ω", "2.0 Ω", "12 Ω", "3.0 Ω", "1.0 Ω"],
        correctIndex: 3
    },

    // --- Assignment 2 (Electric Fields) ---
    {
        question: "1) What is the magnitude of the electric field 30.0 cm from a point charge of 0.35 μC?",
        options: ["1.2×10⁻² N/C", "9.5×10⁴ N/C", "9.5×10⁻⁴ N/C", "3.5×10⁴ N/C", "1.1×10⁴ N/C"],
        correctIndex: 3
    },
    {
        question: "2) The electric field has a magnitude of 3.00 N/C at a distance of 60.0 cm from a point charge. What is the charge?",
        options: ["3.00 nC", "1.40 nC", "120 pC", "12.0 μC", "36.0 mC"],
        correctIndex: 2
    },
    {
        question: "4) In a diagram of electric field lines, what is represented by lines that are drawn closer together?",
        options: ["A more positive field", "A more negative field", "Nothing", "A stronger field", "A weaker field"],
        correctIndex: 3
    },
    {
        question: "6) A proton is moving in an electric field. The direction of the acceleration of the proton is:",
        options: ["In direction of motion", "Perpendicular to motion", "In direction of electric field", "Opposite to electric field", "Opposite to motion"],
        correctIndex: 2
    },
    {
        question: "7) A long wire with uniform linear charge density 1.35 nC/m is surrounded by a concentric cylindrical surface of length 1.60 m and radius 23.6 cm. What is the magnitude of the electric field at the curved surface?",
        options: ["51.5 N/C", "103 N/C", "0.0", "436 N/C", "135 N/C"],
        correctIndex: 1
    },

    // --- Assignment 1 (Charge & Force) ---
    {
        question: "1. A plastic rod is rubbed with animal fur and acquires a negative charge. What is true about the charge on the fur?",
        options: ["Positive, greater magnitude", "Positive, less magnitude", "Positive, same magnitude", "No charge"],
        correctIndex: 2
    },
    {
        question: "2. Two positive charges with magnitudes 4Q and Q are separated by distance r. Which is true?",
        options: ["Greater magnitude exerts larger force", "Greater magnitude exerts smaller force", "Forces are same magnitude and opposite", "Forces are same magnitude and same direction"],
        correctIndex: 2
    },
    {
        question: "5. Two charges Q1 and -Q2 attract with force F. What is the new force if the distance is tripled?",
        options: ["3 F", "9 F", "F/6", "F/9"],
        correctIndex: 3
    }
];

const quizContainer = document.getElementById('quiz-container');

function renderQuiz() {
    quizContainer.innerHTML = '';
    questions.forEach((q, index) => {
        const card = document.createElement('div');
        card.classList.add('question-card');
        card.id = `question-${index}`;
        // Slight stagger for cards themselves
        card.style.animationDelay = `${index * 0.1}s`;

        // Question Title
        const questionTitle = document.createElement('div');
        questionTitle.classList.add('question-text');
        questionTitle.textContent = q.question;
        card.appendChild(questionTitle);

        // Options Grid
        const optionsGrid = document.createElement('div');
        optionsGrid.classList.add('options-grid');

        q.options.forEach((opt, optIndex) => {
            const btn = document.createElement('button');
            btn.classList.add('option-btn');
            btn.innerHTML = opt;
            btn.onclick = () => checkAnswer(index, optIndex, btn);

            // Stagger animation for options within the card
            // index * 0.1 to wait for card, + optIndex * 0.1 for nice cascade
            btn.style.animationDelay = `${(index * 0.1) + (optIndex * 0.1)}s`;

            optionsGrid.appendChild(btn);
        });

        card.appendChild(optionsGrid);
        quizContainer.appendChild(card);
    });
}

function checkAnswer(questionIndex, selectedOptionIndex, btnElement) {
    const questionObj = questions[questionIndex];
    const card = document.getElementById(`question-${questionIndex}`);
    const correctIndex = questionObj.correctIndex;

    // Check if already answered
    if (card.classList.contains('answered')) return;
    card.classList.add('answered');

    const options = card.querySelectorAll('.option-btn');

    if (selectedOptionIndex === correctIndex) {
        btnElement.classList.add('correct');
    } else {
        btnElement.classList.add('wrong');
        options[correctIndex].classList.add('correct');
    }
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render the quiz immediately (in background)
    renderQuiz();

    // 2. Handle Loading Screen
    const loadingScreen = document.getElementById('loading-screen');
    const mainContainer = document.querySelector('.container');

    if (loadingScreen && mainContainer) {
        // Wait for 3 seconds, then fade out loader
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            mainContainer.classList.add('visible');

            // Remove loader from DOM after transition to free up resources
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 800);
        }, 3000);
    }
});
