
// ==========================================
// SÍTIO DO BETO - MAIN SCRIPT
// ==========================================
console.log("Sítio do Beto Script: Loading...");

// Inicializar Ícones Lucide
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    } else {
        console.warn("Lucide library not loaded.");
    }
});

// ==========================================
// DADOS (DATA SOURCES)
// ==========================================

const rentalsData = [
    {
        title: "Quiosque com Churrasqueira",
        price: "R$ 70,00 / dia",
        description: "Localizados à beira do lago, no morro e em meio a natureza, são Quiosques com Churrasqueira, pia, mesas, bancos, chuveiro e luz (220 w). Para que você passe bons momentos com sua família.",
        features: [
            "Capacidade: Até 12 pessoas",
            "Disponível diariamente (alta temporada)",
            "Churrasqueira, Pia, Mesa e Bancos",
            "Ponto de luz 220V",
            "Estacionamento (cobrado à parte)"
        ],
        images: [
            "img/sp2.webp",
            "img/ps1.webp",
            
        ]
    },
    {
        title: "Hospedagem / Pousada",
        price: "A partir de R$ 140,00",
        description: "Hospedagem completa para aproveitar o parque por mais tempo.\n\nVALORES:\nSegunda a Sexta: R$ 140 por pessoa (Ingresso incluso).\nSábado e Domingo: R$ 160 por pessoa (Ingresso incluso).\n\nPacote para 2 dias e uma noite.",
        features: [
            "Ingresso do parque incluso (2 dias)",
            "Cozinha c/ utensílios",
            "Banheiro privativo",
            "WI-FI e Ventilador de teto",
            "Roupa de cama não inclusa"
        ],
        images: [
          "img/pousada.webp",
          "img/p2.webp",
          "img/p3.webp",
          "img/p4.webp",
          "img/p5.webp",
          "img/p6.webp",
        ]
    },
    {
        title: "Piscina Privativa",
        price: "Sob Consulta",
        description: "O local ideal para sua confraternização e aniversário. Este espaço possui estrutura privilegiada com salão para até 40 pessoas, piscina privativa, cadeiras de sol, chuveiro, em uma área particular.",
        features: [
            "Capacidade: 40 a 120 pessoas",
            "Piscina Privativa Exclusiva",
            "Salão Coberto com Churrasqueira",
            "Geladeira e Banheiros",
            "Guarda-Sóis e Cadeiras de sol",
            "Área exclusiva"
        ],
        images: [
            "img/pis1.webp",
            "img/pis2.webp",
            "img/pis3.webp",
        
            "img/pis6.webp",
            "img/pis7.webp",
            "img/pis8.webp"
        ]
    }
];

const eventSpacesData = [
    {
        name: "Salão Acácia",
        capacity: "Até 300 Pessoas",
        description: "Nosso maior e mais tradicional salão. Perfeito para grandes casamentos, formaturas e eventos corporativos que exigem espaço amplo e versatilidade.",
        features: ["Palco para banda/DJ", "Cozinha industrial anexa", "Camarim privativo", "Ar condicionado central", "Acesso independente"],
        images: [
            "img/sa1.webp",
            "img/sa2.webp",
            "img/sa3.webp",
            "img/sa5.webp",
            "img/sa6.webp"
        ]
    },
    {
        name: "Espaço VIP",
        capacity: "Até 80 Pessoas",
        description: "Um ambiente intimista e sofisticado para pequenas celebrações. O Espaço VIP oferece privacidade total com acabamentos de alto padrão.",
        features: ["Lounge com sofás", "Bar privativo", "Iluminação cênica", "Smart TV 75\"", "Acústica tratada"],
        images: [
            "img/pis1.webp",
            "img/pis2.webp",
            "img/pis3.webp",
            "img/pis6.webp"
        ]
    },
    {
        name: "Salão Panorâmico",
        capacity: "Até 200 Pessoas",
        description: "Com paredes de vidro e vista privilegiada para o lago e as piscinas, integra seu evento à natureza exuberante do parque.",
        features: ["Vista 360º", "Luz natural abundante", "Deck externo anexo", "Cortinas automatizadas", "Piso em porcelanato"],
        images: [
            "img/sp1.webp",
            "img/sp2.webp",
            "img/sp3.webp", 
             "img/sp4.webp"
        ]
    },
    {
        name: "Salão Ipê",
        capacity: "Até 150 Pessoas",
        description: "O charme rústico define o Salão Ipê. Construído com madeiras nobres e detalhes em pedra, cria uma atmosfera acolhedora.",
        features: ["Estilo rústico chique", "Lareira decorativa", "Varanda coberta", "Mesas de madeira maciça", "Churrasqueira interna"],
        images: [
            "img/sli1.webp",
            "img/sli2.webp",
            "img/sli3.webp",
            "img/sli4.webp",
            "img/sli5.webp",
            "img/sli6.webp",
            "img/sli7.webp"

        ]
    },
    {
        name: "Salão Imbuia",
        capacity: "Até 120 Pessoas",
        description: "Moderno e funcional, o Salão Imbuia é a escolha certa para workshops, palestras e treinamentos empresariais.",
        features: ["Projetor e Telão", "Sistema de som integrado", "Mesas modulares", "Internet dedicada", "Área para Coffee Break"],
        images: [
            "img/imbu1.webp",
            "img/imbu2.webp",
            "img/imbu3.webp",
            "img/imbu4.webp",
            "img/imbu5.webp",
            "img/imbu6.webp"
        ]
    }
];

const attractionsData = [
    {
        title: "Complexo de Piscinas",
        subtitle: "17 Piscinas Adulto e 5 Infantis",
        description: "O parque aquático do Sítio do Beto possui um complexo com 17 piscinas adulto e 5 piscinas infantis, para seu amplo lazer e diversão.",
        features: [
            "Qtd: 17 piscinas (adulto) e 5 (infantil)",
            "Profundidade: 1,2m (adulto) e 60cm (infantil)",
            "Água tratada diariamente",
            "Monitoramento constante"
        ],
        images: ["img/complexo1.webp", "img/complexo2.webp"]
    },
    {
        title: "Toboáguas Radicais",
        subtitle: "Aventuras de até 15 metros",
        description: "Descidas que chegam até 15 metros de altura e até 65 metros de comprimento. Adrenalina pura!",
        features: [
            "Amarelo: 15m alt, 30km/h",
            "Azul: 14m alt, 40km/h",
            "Branco: 13m alt, 40km/h",
            "Restrição: A partir de 8 anos / 80cm"
        ],
        images: ["img/toboga1.webp", "img/toboga2.webp", "img/toboga3.webp", "img/toboga4.webp"]
    },
    {
        title: "Tirolesa e Natureza",
        subtitle: "360m de percurso",
        description: "O Sítio do Beto conta com a maior tirolesa do estado (360m), atravessando todo o Sítio. Reserva ambiental preservada.",
        features: [
            "Tirolesa: 360m de percurso",
            "Velocidade média: 70km/h",
            "Reserva Ambiental preservada",
            "Trilhas ecológicas (preservação)"
        ],
        images: ["img/aventura.webp", "img/aventura2.webp", "img/aventura3.webp", "img/aventura4.webp"]
    },
    {
        title: "Esportes e Lazer",
        subtitle: "Futebol, Vôlei e Jogos",
        description: "Cancha de Futebol de Praia com iluminação, Vôlei de Praia e Sala de Jogos com ping-pong e snooker.",
        features: [
            "Futebol 7 (Areia)",
            "Vôlei de Praia",
            "Sala de Jogos Completa",
            "Uso livre para visitantes"
        ],
        images: ["img/jogo.webp", "img/jogo2.webp", "img/jogo4.webp", "img/jogo5.webp"]
    }
];

// ==========================================
// FUNÇÕES DE MODAIS (GLOBAL SCOPE)
// ==========================================

// --- RENTAL MODAL ---
window.changeRentalImage = function(src, thumbElement) {
    const mainImg = document.getElementById('rental-main-img');
    if(mainImg) {
        mainImg.style.opacity = '0.5';
        setTimeout(() => {
            mainImg.src = src;
            mainImg.style.opacity = '1';
        }, 200);
    }
    document.querySelectorAll('#rental-thumbnails .rental-thumb').forEach(el => el.classList.remove('active'));
    if(thumbElement) thumbElement.classList.add('active');
};

window.openRentalModal = function(index) {
    const modal = document.getElementById('rental-modal');
    const data = rentalsData[index];
    if(!modal || !data) return;

    // Set Text
    const setText = (id, text) => { const el = document.getElementById(id); if(el) el.innerText = text; };
    setText('rental-title', data.title);
    setText('rental-title-overlay', data.title);
    setText('rental-price', data.price);
    setText('rental-desc', data.description);

    // Set Features
    const featuresList = document.getElementById('rental-features');
    if (featuresList) {
        featuresList.innerHTML = '';
        data.features.forEach(feat => {
            const li = document.createElement('li');
            li.className = 'flex items-center text-gray-600 text-sm';
            li.innerHTML = `<i data-lucide="check" class="text-green-500 mr-2 w-4 flex-shrink-0"></i> <span>${feat}</span>`;
            featuresList.appendChild(li);
        });
    }

    // Set Images
    const mainImg = document.getElementById('rental-main-img');
    if (mainImg && data.images.length > 0) mainImg.src = data.images[0];

    const thumbsContainer = document.getElementById('rental-thumbnails');
    if (thumbsContainer) {
        thumbsContainer.innerHTML = '';
        data.images.forEach((imgSrc, i) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.className = `w-20 h-20 object-cover rounded-lg cursor-pointer rental-thumb ${i === 0 ? 'active' : ''}`;
            img.onclick = () => window.changeRentalImage(imgSrc, img);
            thumbsContainer.appendChild(img);
        });
    }

    if(window.lucide) lucide.createIcons();
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
};

window.closeRentalModal = function() {
    const modal = document.getElementById('rental-modal');
    if(modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.classList.add('hidden'), 300);
        document.body.style.overflow = '';
    }
};

// --- EVENTS MODAL ---
window.loadEventSpace = function(index, btnElement) {
    const data = eventSpacesData[index];
    if(!data) return;

    // Reset styles
    document.querySelectorAll('.event-menu-btn').forEach(b => {
        b.className = `group flex items-center gap-3 p-3 md:p-4 rounded-full md:rounded-xl transition-all font-medium text-sm border flex-shrink-0 min-w-[150px] md:min-w-0 md:w-full text-center md:text-left mb-0 md:mb-2 mr-0 md:mr-0 event-menu-btn bg-white text-gray-600 hover:bg-gray-50 border-transparent md:border-transparent`;
        const icon = b.querySelector('.chevron-icon');
        if(icon) icon.style.opacity = '0';
    });

    // Active style
    if(btnElement) {
        btnElement.className = `group flex items-center gap-3 p-3 md:p-4 rounded-full md:rounded-xl transition-all font-bold text-sm border flex-shrink-0 min-w-[150px] md:min-w-0 md:w-full text-center md:text-left mb-0 md:mb-2 mr-0 md:mr-0 event-menu-btn bg-blue-600 text-white shadow-md transform scale-100 md:scale-105 border-blue-600 md:border-blue-400`;
        const icon = btnElement.querySelector('.chevron-icon');
        if(icon) icon.style.opacity = '1';
    }

    // Content
    const setText = (id, text) => { const el = document.getElementById(id); if(el) el.innerText = text; };
    setText('event-title', data.name);
    setText('event-capacity-text', data.capacity);
    setText('event-desc', data.description);

    const featuresList = document.getElementById('event-features');
    if(featuresList) {
        featuresList.innerHTML = '';
        data.features.forEach(feat => {
            const li = document.createElement('li');
            li.className = 'flex items-center text-gray-600 text-sm';
            li.innerHTML = `<i data-lucide="check-circle" class="text-blue-600 mr-2 w-4 flex-shrink-0"></i> <span>${feat}</span>`;
            featuresList.appendChild(li);
        });
    }

    // Image
    const mainImg = document.getElementById('event-main-img');
    if(mainImg) {
        mainImg.style.opacity = 0;
        setTimeout(() => {
            mainImg.src = data.images[0];
            mainImg.style.opacity = 1;
        }, 200);
    }

    // Thumbnails
    const thumbsContainer = document.getElementById('event-thumbnails');
    if(thumbsContainer) {
        thumbsContainer.innerHTML = '';
        data.images.forEach((imgSrc, i) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.className = `w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all ${i === 0 ? 'border-yellow-400 scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`;
            img.onclick = function() {
                if(mainImg) mainImg.src = imgSrc;
                Array.from(thumbsContainer.children).forEach(c => {
                    c.classList.remove('border-yellow-400', 'scale-105');
                    c.classList.add('border-transparent', 'opacity-70');
                });
                this.classList.remove('border-transparent', 'opacity-70');
                this.classList.add('border-yellow-400', 'scale-105');
            };
            thumbsContainer.appendChild(img);
        });
    }
    if(window.lucide) lucide.createIcons();
};

window.openEventsModal = function() {
    const modal = document.getElementById('events-modal');
    const listContainer = document.getElementById('event-spaces-list');
    
    if(!modal || !listContainer) {
        console.error("Modal de eventos elements not found");
        return;
    }

    listContainer.innerHTML = '';
    eventSpacesData.forEach((space, index) => {
        const btn = document.createElement('button');
        // Initial class
        btn.className = `group flex items-center gap-3 p-3 md:p-4 rounded-full md:rounded-xl transition-all font-medium text-sm border flex-shrink-0 min-w-[150px] md:min-w-0 md:w-full text-center md:text-left mb-0 md:mb-2 mr-0 md:mr-0 event-menu-btn`;
        
        btn.innerHTML = `
            <span class="w-full">${space.name}</span>
            <i data-lucide="chevron-right" class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block chevron-icon"></i>
        `;
        btn.onclick = () => window.loadEventSpace(index, btn);
        listContainer.appendChild(btn);
    });

    // Auto load first
    if (listContainer.children.length > 0) {
        window.loadEventSpace(0, listContainer.children[0]);
    }

    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
};

window.closeEventsModal = function() {
    const modal = document.getElementById('events-modal');
    if(modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.classList.add('hidden'), 300);
        document.body.style.overflow = '';
    }
};

// --- ATTRACTION MODAL ---
window.changeAttractionImage = function(src, thumbElement) {
    const mainImg = document.getElementById('attraction-main-img');
    if(mainImg) {
        mainImg.style.opacity = '0.5';
        setTimeout(() => {
            mainImg.src = src;
            mainImg.style.opacity = '1';
        }, 200);
    }
    document.querySelectorAll('#attraction-thumbnails .rental-thumb').forEach(el => el.classList.remove('active'));
    if(thumbElement) thumbElement.classList.add('active');
};

window.openAttractionModal = function(index) {
    const modal = document.getElementById('attraction-modal');
    const data = attractionsData[index];
    if(!modal || !data) return;

    const setText = (id, text) => { const el = document.getElementById(id); if(el) el.innerText = text; };
    setText('attraction-title', data.title);
    setText('attraction-title-overlay', data.title);
    setText('attraction-subtitle', data.subtitle);
    setText('attraction-desc', data.description);

    const featuresList = document.getElementById('attraction-features');
    if(featuresList) {
        featuresList.innerHTML = '';
        data.features.forEach(feat => {
            const li = document.createElement('li');
            li.className = 'flex items-center text-gray-600 text-sm';
            li.innerHTML = `<i data-lucide="zap" class="text-yellow-500 mr-2 w-4 flex-shrink-0"></i> <span>${feat}</span>`;
            featuresList.appendChild(li);
        });
    }

    const mainImg = document.getElementById('attraction-main-img');
    if(mainImg && data.images.length > 0) mainImg.src = data.images[0];

    const thumbsContainer = document.getElementById('attraction-thumbnails');
    if(thumbsContainer) {
        thumbsContainer.innerHTML = '';
        data.images.forEach((imgSrc, i) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.className = `w-20 h-20 object-cover rounded-lg cursor-pointer rental-thumb ${i === 0 ? 'active' : ''}`;
            img.onclick = () => window.changeAttractionImage(imgSrc, img);
            thumbsContainer.appendChild(img);
        });
    }

    if(window.lucide) lucide.createIcons();
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
};

window.closeAttractionModal = function() {
    const modal = document.getElementById('attraction-modal');
    if(modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.classList.add('hidden'), 300);
        document.body.style.overflow = '';
    }
};

// --- LIGHTBOX ---
window.openLightbox = function(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if(lightbox && img) {
        img.src = src;
        lightbox.classList.remove('hidden');
        setTimeout(() => lightbox.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
    }
};

window.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    if(lightbox) {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.classList.add('hidden');
            const img = document.getElementById('lightbox-img');
            if(img) img.src = '';
        }, 300);
        document.body.style.overflow = '';
    }
};

// ==========================================
// INITIALIZATION & EVENT LISTENERS
// ==========================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.closeLightbox();
        window.closeRentalModal();
        window.closeAttractionModal();
        window.closeEventsModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Click Outside Overlay
    ['lightbox', 'rental-modal', 'attraction-modal', 'events-modal'].forEach(id => {
        const el = document.getElementById(id);
        if(el) {
            el.addEventListener('click', (e) => {
                if (e.target.id === id) {
                    if(id === 'lightbox') window.closeLightbox();
                    else if(id === 'rental-modal') window.closeRentalModal();
                    else if(id === 'attraction-modal') window.closeAttractionModal();
                    else if(id === 'events-modal') window.closeEventsModal();
                }
            });
        }
    });

    // Navbar Scroll
    const navbar = document.getElementById('navbar');
    const navLogo = document.getElementById('nav-logo');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    window.addEventListener('scroll', () => {
        if(!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/95', 'shadow-md', 'backdrop-blur-sm', 'py-2');
            navbar.classList.remove('bg-transparent', 'py-4', 'border-transparent');
            navLogo?.classList.remove('text-white');
            navLogo?.classList.add('text-blue-900');
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-gray-700');
            });
            if(mobileMenuBtn) mobileMenuBtn.style.color = '#1e3a8a'; 
        } else {
            navbar.classList.remove('bg-white/95', 'shadow-md', 'backdrop-blur-sm', 'py-2');
            navbar.classList.add('bg-transparent', 'py-4', 'border-transparent');
            navLogo?.classList.add('text-white');
            navLogo?.classList.remove('text-blue-900');
            navLinks.forEach(link => {
                link.classList.add('text-white');
                link.classList.remove('text-gray-700');
            });
            if(mobileMenuBtn) mobileMenuBtn.style.color = 'white';
        }
    });

    // Mobile Menu
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
    
    const toggleMenu = () => {
        if(!mobileMenu) return;
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => mobileMenu.classList.remove('translate-y-full', 'opacity-0'), 10);
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('translate-y-full', 'opacity-0');
            setTimeout(() => mobileMenu.classList.add('hidden'), 300);
            document.body.style.overflow = '';
        }
    };

    if(mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu);
    if(closeMobileMenuBtn) closeMobileMenuBtn.addEventListener('click', toggleMenu);
    document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', toggleMenu));

    // Carousel
    const carouselContainer = document.getElementById('carousel-container');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    let autoScrollInterval;
    const SCROLL_AMOUNT = 350;

    if(carouselContainer) {
        if(btnNext) {
            btnNext.addEventListener('click', () => {
                carouselContainer.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
                resetAutoScroll();
            });
        }
        if(btnPrev) {
            btnPrev.addEventListener('click', () => {
                carouselContainer.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
                resetAutoScroll();
            });
        }

        const startAutoScroll = () => {
            autoScrollInterval = setInterval(() => {
                if (Math.ceil(carouselContainer.scrollLeft + carouselContainer.clientWidth) >= carouselContainer.scrollWidth) {
                    carouselContainer.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carouselContainer.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
                }
            }, 3000);
        };
        
        const resetAutoScroll = () => {
            clearInterval(autoScrollInterval);
            startAutoScroll();
        };

        carouselContainer.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
        carouselContainer.addEventListener('mouseleave', startAutoScroll);
        
        startAutoScroll();
    }

    // FAQ
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('i');
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                if(icon) {
                    icon.classList.remove('rotate-180');
                    icon.style.transform = 'rotate(0deg)';
                }
            } else {
                document.querySelectorAll('.faq-content').forEach(el => el.style.maxHeight = null);
                document.querySelectorAll('.faq-btn i').forEach(el => el.style.transform = 'rotate(0deg)');
                content.style.maxHeight = content.scrollHeight + "px";
                if(icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});
console.log("Sítio do Beto Script: Fully Loaded.");
