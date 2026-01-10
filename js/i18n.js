/* Simple client-side i18n for English and French
   Usage: add data-i18n="key" attributes to elements. Keys below map to translations.
   Language is saved in localStorage under 'lang'. */

(function () {
    const translations = {
        en: {
            "nav.home": "Homepage",
            "nav.about": "About Us",
            "nav.program": "Program",
            "nav.pricing": "Pricing & FAQ",
            "nav.trainers": "Trainers",
            "nav.faq": "FAQs",
            "nav.contact": "Contact Us",

            "banner.subtitle": "FORGE YOUR FIGHT",
            "banner.h1": "WE BUILD <span class=\"accent-color\">REAL FIGHTERS</span> NOT JUST FITNESS.",
            "banner.p": "Elite MMA training for all levels. From striking and grappling to strength and conditioning, Borz MMA Club sharpens skill, discipline, and confidence inside and outside the cage.",

            "cards.equipment.title": "Pro Equipment",
            "cards.equipment.p": "Top-tier equipment for both MMA and bodybuilding. From cages, mats, and bags to free weights and machines, our gym is fully equipped for strength, power, and combat performance.",
            "cards.trainers.title": "Expert Trainers",
            "cards.trainers.p": "Train with experienced Chechen coaches, professional fighters, and certified strength trainers. Whether your goal is competition, muscle growth, or total fitness, our coaches guide you with discipline and precision.",
            "cards.health.title": "HEALTH, PERFORMANCE",
            "cards.health.p": "Smart training, recovery, and conditioning for fighters and lifters alike. We focus on strength, endurance, mobility, and long-term health to keep your body performing at its best.",

            "about.title": "About Us",
            "about.h3": "BUILT FOR FIGHTERS <span class=\"accent-color\">BUILT FOR STRENGTH</span>",
            "about.h3.accent": "BUILT FOR STRENGTH",
            "about.p": "Borz MMA Club is more than a fight gym. We are a complete training facility for MMA athletes, bodybuilders, and anyone serious about physical performance. Our environment is built on discipline, respect, and results. With 10+ specialized training programs, we combine combat sports, strength training, and conditioning under one roof.",
            "about.learn_more": "Learn More",
            "about.features.full_body": "Full bodybuilding and strength training programs.",
            "about.features.for_who": "Programs for beginners, advanced athletes, and competitors.",
            "about.features.combat": "MMA, grappling, boxing, kickboxing, and BJJ training.",
            "about.features.experienced": "Experienced Chechen coaches and professional athletes.",

            "programs.title": "Our Program",
            "programs.h3": "BUILD YOUR BODY <span> SHARPEN YOUR SKILLS.</span>",
            "programs.p": "We create structured training programs for MMA, combat sports, and bodybuilding. Whether you’re a beginner or an experienced athlete, our system helps you build strength, technique, and confidence.",
            "programs.contact": "Contact",
            "programs.basic.title": "Basic Exercise",
            "programs.basic.p": "Build strength, fitness, and movement fundamentals with structured beginner programs.",
            "programs.advanced.title": "Advanced Exercises",
            "programs.advanced.p": "High-intensity training focused on performance, technique, and progression.",
            "programs.mma.title": "MMA",
            "programs.mma.p": "Complete MMA training including striking, grappling, and fight conditioning.",
            "programs.bodybuilding.title": "BODYBUILDING",
            "programs.bodybuilding.p": "Muscle-building and strength programs using professional equipment.",

            "trainers.title": "Trainers",
            "trainers.h3": "Team Of <span class=\"accent-color\">Expert</span> Coaches.",
            "trainers.p": "Our coaching team brings decades of experience in combat sports and physical preparation. From champions to dedicated mentors, each coach at Borz MMA Club is committed to developing skill, strength, and discipline.",

            "testimonials.title": "Testimonials",
            "testimonials.h3": "What They Say <span class=\"accent-color\">About Us.</span>",
            "testimonials.slide1": "“Their personalized approach and unwavering support have helped me achieve goals I never thought possible. The workouts are challenging yet enjoyable. I’ve gained not just strength and endurance but also a renewed confidence in myself.”",
            "testimonials.slide2": "“Highly satisfied — great facility, welcoming staff, professional coaches. I recommend without hesitation.”",
            "header.contact_btn": "Contact Us",
            "blog.h3": "All About <span class=\"accent-color\">Healthy</span> Updates.",
            "trainers.ismail.bio": "Lutte libre specialist and 6-time wrestling champion in France. With over 20 years of coaching experience, Ismail focuses on elite grappling fundamentals, control, and competition-level performance.",
            "trainers.kharon.bio": "Specialist in MMA, boxing, grappling, and kickboxing. With 13 years of coaching experience, Kharon builds complete fighters through smart striking, cage control, and fight conditioning.",
            "trainers.imran.bio": "Expert in Lutte, BJJ, and Grappling, with a strong background in physical preparation. Bringing 10 years of coaching experience, Imran develops strength, endurance, and technical efficiency for all levels.",
            "counter.certified": "Certified Trainer",
            "counter.happy": "Happy Clients",
            "counter.years": "Years Experience",
            "counter.programs": "Training Programs",
            "about.call_us": "Call Us Anytime",
            "about.training_programs": "Training Programs",
            "footer.home": "Home",
            "footer.about": "About Us",
            "footer.services": "Services",
            "footer.pricing_plan": "Pricing Plan",
            "footer.contact_link": "Contact Us",
            "footer.programs": "Programs",
            "footer.programs.basic": "Basic Exercise",
            "footer.programs.advanced": "Advanced Exercises",
            "footer.programs.bodybuilding": "Bodybuilding",
            "footer.programs.regular": "Regular Workout",
            "footer.programs.stretching": "Streching Workout",
            "footer.programs.crossfit": "Crossfit",

            "pricing.title": "Our Program",
            "pricing.h3": "Special For <span class=\"accent-color\">Membership.</span>",
            "pricing.p": "Simple and flexible membership plans for MMA, combat sports, and bodybuilding. Choose your commitment, train seriously, and achieve real results.",
            "pricing.plan": "Pricing Plan",
            "pricing.standard.title": "Standard Plan",
            "pricing.premium.title": "Premium Package",
            "pricing.get_started": "Get Started",
            "pricing.per_month": "/MONTH",

            "pricing.standard.header": "No commitment. Total freedom. <br> <b>Includes:</b>",
            "pricing.standard.includes.full_access": "Full access to MMA & bodybuilding",
            "pricing.standard.includes.feature2": "Vivamus sit amet erat turpis.",
            "pricing.standard.includes.combat": "BJJ, grappling, boxing, kickboxing, MMA",
            "pricing.standard.includes.bodybuilding": "Fully equipped bodybuilding area",
            "pricing.standard.includes.coaching": "Professional coaching",
            "pricing.standard.includes.unlimited": "Unlimited access based on schedule",

            "pricing.premium.header": "Advance payment. Best value option. <br><b>Options:</b>",
            "pricing.premium.options.3months": "3 months: 2,700 DHS : 900 DHS / month (–10%)",
            "pricing.premium.options.12months": "12 months: 9,600 DHS : 800 DHS / month (–20%)",
            "pricing.premium.includes_header": "Includes:",
            "pricing.premium.includes.full_access": "Full MMA & bodybuilding access",
            "pricing.premium.includes.all_classes": "All combat sports classes",
            "pricing.premium.includes.coaching": "Ongoing coaching and guidance",
            "pricing.premium.includes.progression": "Serious progression and visible results",
            "pricing.premium.includes.priority": "Priority access to selected sessions",
            "pricing.premium.savings_text": "The longer you commit, the more you save.",

            "cta.title": "Join Now",
            "cta.h3": "PERSONALIZED TRAINING PLANS <span class=\"accent-color\">TO BUILD</span> STRENGTH AND SKILL",
            "cta.p": "Train with programs tailored to your goals. Whether you aim to compete in MMA, master combat disciplines, or build muscle and power, our coaches design a plan that fits your body, your level, and your ambition.",
            "cta.button": "Contact Us",

            "footer.quick": "Quick Link",
            "footer.contact": "Contact Us",
            "contact.location": "Location",
            "contact.email": "Email",
            "contact.phone": "Phone",

            "faq.title": "FAQs.",
            "faq.q1": "How can I choose the right training program for my goals?",
            "faq.a1": "Our coaches assess your level, goals, and physical condition, then recommend the best program for MMA, combat sports, bodybuilding, or general fitness.",
            "faq.q2": "What should I expect during my first training session?",
            "faq.a2": "Your first session includes a goal discussion, basic assessment, and an introduction to training techniques and equipment.",
            "faq.q3": "How often should I train to see results?",
            "faq.a3": "Most members train 3 to 5 times per week. Your coach will adjust frequency based on your goals and recovery.",
            "faq.q4": "Do I need experience to start MMA or bodybuilding training?",
            "faq.a4": "No experience is required. We offer beginner-friendly programs and progress you step by step.",
            "faq.q5": "How do coaches help members stay motivated?",
            "faq.a5": "Coaches provide structured programs, regular feedback, and clear progression to keep you focused and improving.",
            "faq.q6": "How is progress tracked during training?",
            "faq.a6": "We track progress through performance improvements, strength gains, technique development, and regular coach evaluations.",

            "contact.title": "Contact Us",
            "contact.ask": "Ask us Anything.",
            "contact.p": "Duis at consectetur lorem donec massa sapien faucibus et molestie. Ut etiam sit amet nisl purus. Massa tempor nec feugiat nisl pretium.",

            "copyright": "Copyright © 2025 BORZ MMA. All Rights Reserved."
        },
        fr: {
            "nav.home": "Accueil",
            "nav.about": "À propos",
            "nav.program": "Programme",
            "nav.pricing": "Tarifs & FAQ",
            "nav.trainers": "Entraîneurs",
            "nav.faq": "FAQs",
            "nav.contact": "Contact",

            "banner.subtitle": "FORGEZ VOTRE COMBAT",
            "banner.h1": "NOUS FORGEONS <span class=\"accent-color\">DE VRAIS COMBATTANTS</span>, PAS SEULEMENT DU FITNESS.",
            "banner.p": "Entraînement MMA d'élite pour tous les niveaux. Du striking et du grappling à la force et au conditionnement, Borz MMA Club affine les compétences, la discipline et la confiance à l'intérieur et à l'extérieur de la cage.",

            "cards.equipment.title": "Équipements pro",
            "cards.equipment.p": "Équipements de premier ordre pour la fois MMA et musculation. Des cages, tapis et sacs aux poids libres et machines, notre salle est entièrement équipée pour la force, la puissance et la performance de combat.",
            "cards.trainers.title": "Entraîneurs experts",
            "cards.trainers.p": "Entraînez-vous avec des coachs expérimentés, des combattants professionnels et des préparateurs physiques certifiés. Que votre objectif soit la compétition, la prise de masse ou la forme générale, nos coachs vous guident avec discipline et précision.",
            "cards.health.title": "SANTÉ, PERFORMANCE",
            "cards.health.p": "Entraînement intelligent, récupération et conditionnement pour combattants et haltérophiles. Nous nous concentrons sur la force, l'endurance, la mobilité et la santé à long terme.",

            "about.title": "À propos",
            "about.h3": "CONÇU POUR LES COMBATTANTS <span class=\"accent-color\">CONÇU POUR LA FORCE</span>",
            "about.h3.accent": "CONÇU POUR LA FORCE",
            "about.p": "Borz MMA Club est plus qu'une salle de combat. Nous sommes une installation complète pour les athlètes MMA, les culturistes et toute personne sérieuse à propos de la performance physique. Avec plus de 10 programmes spécialisés, nous combinons sports de combat, entraînement de force et conditionnement.",
            "about.learn_more": "En savoir plus",
            "about.features.full_body": "Programmes complets de musculation et de renforcement.",
            "about.features.for_who": "Programmes pour débutants, athlètes avancés et compétiteurs.",
            "about.features.combat": "MMA, grappling, boxe, kickboxing et entraînement BJJ.",
            "about.features.experienced": "Coachs tchétchènes expérimentés et athlètes professionnels.",

            "programs.title": "Notre Programme",
            "programs.h3": "CONSTRUISEZ VOTRE CORPS <span> AFFÛTEZ VOS COMPÉTENCES.</span>",
            "programs.p": "Nous créons des programmes d'entraînement structurés pour le MMA, les sports de combat et la musculation. Que vous soyez débutant ou confirmé, notre système vous aide à gagner en force, technique et confiance.",
            "programs.contact": "Contactez-nous",
            "programs.basic.title": "Exercice de base",
            "programs.basic.p": "Renforcez la force, la condition physique et les fondamentaux du mouvement avec des programmes structurés pour débutants.",
            "programs.advanced.title": "Exercices avancés",
            "programs.advanced.p": "Entraînement à haute intensité axé sur la performance, la technique et la progression.",
            "programs.mma.title": "MMA",
            "programs.mma.p": "Entraînement MMA complet comprenant striking, grappling et conditionnement de combat.",
            "programs.bodybuilding.title": "BODYBUILDING",
            "programs.bodybuilding.p": "Programmes de prise de masse et de force utilisant un équipement professionnel.",

            "trainers.title": "Entraîneurs",
            "trainers.h3": "Équipe d'<span class=\"accent-color\">entraîneurs experts</span>",
            "trainers.p": "Notre équipe d'entraînement apporte des décennies d'expérience dans les sports de combat et la préparation physique. De champions à des mentors dévoués, chaque coach chez Borz MMA Club est engagé à développer la compétence, la force et la discipline.",

            "testimonials.title": "Témoignages",
            "testimonials.h3": "Ce qu'ils disent de nous.",
            "testimonials.slide1": "“Leur approche personnalisée et leur soutien indéfectible m'ont aidé à atteindre des objectifs que je ne pensais pas possibles. Les séances sont exigeantes mais agréables. J'ai gagné en force et en endurance, et retrouvé confiance en moi.”",
            "testimonials.slide2": "“Très satisfaite — salle très bien équipée, personnel accueillant, coachs professionnels. Je recommande sans hésitation.”",
            "header.contact_btn": "Contact",
            "blog.h3": "Tout sur les mises à jour <span class=\"accent-color\">Santé</span>.",
            "trainers.ismail.bio": "Spécialiste de la lutte libre et champion de lutte à 6 reprises en France. Avec plus de 20 ans d'expérience d'entraînement, Ismail se concentre sur les fondamentaux du grappling, le contrôle et la performance de niveau compétition.",
            "trainers.kharon.bio": "Spécialiste du MMA, de la boxe, du grappling et du kickboxing. Avec 13 ans d'expérience d'entraînement, Kharon forme des combattants complets grâce à des frappes intelligentes, le contrôle de la cage et la condition physique de combat.",
            "trainers.imran.bio": "Expert en Lutte, BJJ et Grappling, avec une solide expérience en préparation physique. Fort de 10 ans d'expérience d'entraînement, Imran développe la force, l'endurance et l'efficacité technique pour tous les niveaux.",
            "counter.certified": "Entraîneur certifié",
            "counter.happy": "Clients satisfaits",
            "counter.years": "Années d'expérience",
            "counter.programs": "Programmes d'entraînement",
            "about.call_us": "Appelez-nous à tout moment",
            "about.training_programs": "Programmes d'entraînement",
            "footer.home": "Accueil",
            "footer.about": "À propos",
            "footer.services": "Services",
            "footer.pricing_plan": "Forfaits",
            "footer.contact_link": "Contact",
            "footer.programs": "Programmes",
            "footer.programs.basic": "Exercice de base",
            "footer.programs.advanced": "Exercices avancés",
            "footer.programs.bodybuilding": "Bodybuilding",
            "footer.programs.regular": "Entraînement régulier",
            "footer.programs.stretching": "Entraînement d'étirement",
            "footer.programs.crossfit": "Crossfit",

            "pricing.title": "Nos Programmes",
            "pricing.h3": "Offres d'<span class=\"accent-color\">abonnement.</span>",
            "pricing.p": "Des offres d'abonnement simples et flexibles pour le MMA, les sports de combat et la musculation. Choisissez votre engagement, entraînez-vous sérieusement et obtenez des résultats.",
            "pricing.plan": "Forfaits",
            "pricing.standard.title": "Forfait Standard",
            "pricing.premium.title": "Pack Premium",
            "pricing.get_started": "Commencer",
            "pricing.per_month": "/MOIS",

            "pricing.standard.header": "Sans engagement. Liberté totale. <br> <b>Comprend :</b>",
            "pricing.standard.includes.full_access": "Accès complet au MMA et à la musculation",
            "pricing.standard.includes.feature2": "Vivamus sit amet erat turpis.",
            "pricing.standard.includes.combat": "BJJ, grappling, boxe, kickboxing, MMA",
            "pricing.standard.includes.bodybuilding": "Zone de musculation entièrement équipée",
            "pricing.standard.includes.coaching": "Encadrement professionnel",
            "pricing.standard.includes.unlimited": "Accès illimité selon le planning",

            "pricing.premium.header": "Paiement anticipé. Meilleure valeur. <br><b>Options :</b>",
            "pricing.premium.options.3months": "3 mois : 2 700 DHS : 900 DHS / mois (–10%)",
            "pricing.premium.options.12months": "12 mois : 9 600 DHS : 800 DHS / mois (–20%)",
            "pricing.premium.includes_header": "Comprend:",
            "pricing.premium.includes.full_access": "Accès complet MMA et musculation",
            "pricing.premium.includes.all_classes": "Toutes les séances de sports de combat",
            "pricing.premium.includes.coaching": "Encadrement continu et suivi",
            "pricing.premium.includes.progression": "Progression sérieuse et résultats visibles",
            "pricing.premium.includes.priority": "Accès prioritaire à certaines séances",
            "pricing.premium.savings_text": "Plus vous vous engagez, plus vous économisez.",

            "cta.title": "Rejoignez-nous",
            "cta.h3": "PLANS D'ENTRAÎNEMENT PERSONNALISÉS <span class=\"accent-color\">POUR CONSTRUIRE</span> FORCE ET COMPÉTENCE",
            "cta.p": "Entraînez-vous avec des programmes adaptés à vos objectifs. Que vous visiez la compétition en MMA, maîtrisiez les disciplines de combat ou construisiez du muscle, nos coachs conçoivent un plan adapté.",
            "cta.button": "Contactez-nous",

            "footer.quick": "Liens rapides",
            "footer.contact": "Contact",
            "contact.location": "Emplacement",
            "contact.email": "E-mail",
            "contact.phone": "Téléphone",

            "faq.title": "FAQs.",
            "faq.q1": "Comment choisir le bon programme d'entraînement pour atteindre mes objectifs ?",
            "faq.a1": "Nos coachs évaluent votre niveau, vos objectifs et votre condition physique, puis recommandent le programme le plus adapté pour le MMA, les sports de combat, la musculation ou la remise en forme.",
            "faq.q2": "À quoi dois-je m'attendre lors de ma première séance d'entraînement ?",
            "faq.a2": "Votre première séance comprend un dialogue sur vos objectifs, une évaluation de base et une introduction aux techniques d'entraînement et à l'équipement.",
            "faq.q3": "À quelle fréquence dois-je m'entraîner pour voir des résultats ?",
            "faq.a3": "La plupart des membres s'entraînent 3 à 5 fois par semaine. Votre coach ajustera la fréquence en fonction de vos objectifs et de votre récupération.",
            "faq.q4": "Ai-je besoin d'expérience pour commencer l'entraînement MMA ou la musculation ?",
            "faq.a4": "Aucune expérience n'est requise. Nous proposons des programmes pour débutants et vous faisons progresser étape par étape.",
            "faq.q5": "Comment les coachs aident-ils les membres à rester motivés ?",
            "faq.a5": "Les coachs fournissent des programmes structurés, des retours réguliers et une progression claire pour vous maintenir concentré et en amélioration.",
            "faq.q6": "Comment le progrès est-il suivi pendant l'entraînement ?",
            "faq.a6": "Nous suivons les progrès par l'amélioration des performances, les gains de force, le développement technique et les évaluations régulières des coachs.",

            "contact.title": "Contact",
            "contact.ask": "Posez-nous toutes vos questions.",
            "contact.p": "Duis at consectetur lorem donec massa sapien faucibus et molestie. Ut etiam sit amet nisl purus. Massa tempor nec feugiat nisl pretium.",

            "copyright": "Copyright © 2025 BORZ MMA. Tous droits réservés."
        }
    };

    function applyTranslations(lang) {
        const map = translations[lang] || translations.en;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (map[key] !== undefined) {
                el.innerHTML = map[key];
            }
        });
    }

    function setLang(lang) {
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        const cur = document.getElementById('current-lang');
        if (cur) cur.textContent = lang.toUpperCase();
        applyTranslations(lang);
    }

    document.addEventListener('DOMContentLoaded', function () {
        // support clicks on child elements inside the button (use closest)
        document.body.addEventListener('click', function (e) {
            const btn = (e.target && e.target.closest) ? e.target.closest('.lang-select') : null;
            if (btn) {
                const lang = btn.getAttribute('data-lang');
                console.info('i18n: language button clicked', lang);
                setLang(lang);
            }
        });

        const saved = localStorage.getItem('lang');
        let lang = saved || (navigator.language && navigator.language.startsWith('fr') ? 'fr' : 'en');
        setLang(lang);
        // debug: confirm initialization in console
        console.info('i18n initialized — language:', lang);
    });

    // expose for debugging
    window.__i18n = { setLang, applyTranslations, translations };
})();
