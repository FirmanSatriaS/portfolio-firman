// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const backToTopBtn = document.querySelector('#backToTop');
const modalOverlay = document.querySelector('#projectModal');
const closeModalBtn = document.querySelector('#closeModal');
const projectLinks = document.querySelectorAll('.project-link');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const filterButtons = document.querySelectorAll('.filter-btn');
const contactForm = document.querySelector('#contactForm');
const loadingSpinner = document.querySelector('#loadingSpinner');

// Typing Animation
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');
const textArray = [
    'Electrical Engineering',
    'Machine Learning Enthusiast',
    'IoT Developer', 
    'Embedded Systems Specialist',
    'Problem Solver',
    'Technology Innovator'
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

// Project Data with Multiple Images and Multiple Categories
const projects = {
    1: {
        title: 'Capstone Project: Culinaryndo Application',
        categories: ['Application Development', 'Machine Learning', 'Cloud Computing'],
        images: [
            'images/projects/Culinaryndo/Culinaryndo 1.png',
            'images/projects/Culinaryndo/Culinaryndo 2.png',
            'images/projects/Culinaryndo/Culinaryndo 3.png',
            'images/projects/Culinaryndo/Culinaryndo 4.png',
            'images/projects/Culinaryndo/Culinaryndo 5.png',
        ],
        description: 'Culinaryndo adalah aplikasi Android berbasis machine learning yang dirancang untuk mengidentifikasi berbagai jenis kuliner khas Indonesia melalui citra makanan. Aplikasi ini membantu pengguna mengenali nama makanan serta memahami asal daerah dan bahan utamanya, sehingga meningkatkan literasi dan apresiasi terhadap kekayaan kuliner Indonesia.',
        details: 'Proyek ini dikembangkan untuk menjawab keterbatasan pengetahuan masyarakat mengenai ragam kuliner Nusantara. Culinaryndo memanfaatkan teknologi pengolahan citra dan pembelajaran mesin untuk mengklasifikasikan makanan berdasarkan gambar yang diinput oleh pengguna.<br><br>Pengembangan sistem melibatkan proses pengumpulan dan pembersihan data (data cleaning), pelatihan model menggunakan arsitektur Convolutional Neural Network (CNN) dengan MobileNet, serta integrasi model ke dalam aplikasi Android agar dapat berjalan secara efisien pada perangkat mobile.<br><br>Selain fungsi identifikasi, aplikasi ini juga menyajikan informasi edukatif mengenai makanan Indonesia, termasuk asal daerah dan bahan utama, dengan tujuan mendukung pelestarian budaya serta meningkatkan kesadaran akan kualitas dan keamanan pangan.<br><br>',
        technologies: ['Indonesian Food Recognition', 'Machine Learning', 'CNN MobileNet', 'Android App', 'Food Classification'],
        features: [
            'Identifikasi makanan Indonesia berbasis gambar',
            'Akurasi klasifikasi mencapai 87%',
            'Lokasi yang menjual makanan terkait terdekat',
            'Informasi asal daerah dan bahan utama makanan',
            'Dukungan multi-bahasa'
        ]
    },
    2: {
        title: 'Prototipe Sistem Pemilahan Sampah Otomatis',
        categories: ['Machine Learning', 'Embedded System'],
        images: [
            'images/projects/Pemilah Sampah/Sampah 1.png',
            'images/projects/Pemilah Sampah/Sampah 2.png',
            'images/projects/Pemilah Sampah/Sampah 3.png',
            'images/projects/Pemilah Sampah/Sampah 4.png',
            'images/projects/Pemilah Sampah/Sampah 5.png'
        ],
        description: 'Proyek ini mengembangkan prototipe sistem pemilahan sampah otomatis berbasis CNN menggunakan arsitektur MobileNetV2 yang terintegrasi dengan Raspberry Pi 3 dan NodeMCU ESP8266. Sistem mampu mengklasifikasikan sampah ke dalam empat kelas dengan akurasi tinggi dan melakukan pemilahan secara otomatis. Semua komponen hardware dan software bekerja secara optimal sesuai rancangan.',
        details: 'Sistem menggunakan model CNN MobileNetV2 untuk mengenali jenis sampah (gelas, kertas, logam, plastik) dengan dimensi input 224x224 piksel. Proses klasifikasi dilakukan dalam waktu 6 detik, lalu motor servo dan motor DC menggerakkan mekanisme pemilahan sehingga total satu siklus membutuhkan 10 detik.<br><br>Perangkat keras sistem meliputi Raspberry Pi 3, NodeMCU ESP8266, motor servo, motor DC, dan mini conveyor. Sistem perangkat lunak mengontrol klasifikasi, pengaturan sudut servo 135°, dan pengiriman perintah ke motor untuk memindahkan sampah ke tempat yang sesuai.<br><br>Hasil evaluasi menunjukkan akurasi validasi sebesar 86,23% dan akurasi pengujian nyata rata-rata 87,5%, dengan precision, recall, dan F1-score yang tinggi. Model terbukti efektif dalam mengklasifikasikan sampah dengan kesalahan yang rendah, sehingga sistem layak digunakan sebagai prototipe pemilahan otomatis.<br><br>',
        technologies: ['Waste Sorting', 'CNN MobileNetV2', 'Embedded System', 'Raspberry Pi', 'Smart Trash'],
        features: [
            'Klasifikasi 4 jenis sampah (gelas, kertas, logam, plastik)',
            'Pemilahan sampah otomatis melalui motor servo dan conveyor',
            'Integrasi dengan Raspberry Pi 3 dan NodeMCU ESP8266',
            'Kinerja tinggi dengan akurasi pengujian nyata 87,5%',
            'Sistem cepat: satu siklus pemilahan hanya 10 detik'
        ]
    },
    3: {
        title: 'Sistem Pemantauan Kecepatan Kendaraan Berbasis IoT',
        categories: ['IoT', 'Embedded System'],
        images: [
            'images/projects/Kecepatan Kendaraan/Vehicle Speed 1.png',
            'images/projects/Kecepatan Kendaraan/Vehicle Speed 2.png',
            'images/projects/Kecepatan Kendaraan/Vehicle Speed 3.png'
        ],
        description: 'IoT-Based Vehicle Speed Monitoring and Overspeed Alert System adalah sistem pemantauan kecepatan kendaraan yang dirancang untuk mendeteksi kecepatan secara real-time dan memberikan peringatan ketika kendaraan melebihi batas kecepatan. Sistem ini memanfaatkan teknologi IoT untuk meningkatkan keselamatan lalu lintas dan kesadaran pengemudi terhadap batas kecepatan.',
        details: 'Proyek ini dikembangkan untuk memantau kecepatan kendaraan menggunakan dua sensor inframerah yang ditempatkan pada titik tertentu di jalan. Data waktu tempuh kendaraan yang terdeteksi oleh sensor diproses oleh ESP32 untuk menghitung kecepatan kendaraan secara real-time.<br><br>Data kecepatan yang dihasilkan kemudian dikirimkan melalui koneksi internet ke platform ThingSpeak sebagai media komunikasi IoT. Informasi kecepatan dapat dipantau secara jarak jauh melalui perangkat mobile, sementara buzzer berfungsi sebagai peringatan langsung jika kendaraan terdeteksi melebihi batas kecepatan yang telah ditentukan.<br><br>Selain berfungsi sebagai sistem peringatan, data kecepatan kendaraan yang dikumpulkan dapat digunakan untuk analisis lalu lintas dan mendukung pengambilan keputusan terkait manajemen dan keselamatan infrastruktur jalan.<br><br>',
        technologies: ['Vehicle Speed Monitoring', 'IoT Traffic System', 'ESP32', 'Overspeed Alert', 'Real-time Data'],
        features: [
            'Pemantauan kecepatan kendaraan secara real-time',
            'Sistem peringatan overspeed menggunakan buzzer',
            'Monitoring jarak jauh melalui platform ThingSpeak',
            'Tampilan data kecepatan pada LCD I2C',
            'Sistem berbasis IoT menggunakan ESP32'
        ]
    },
    4: {
        title: 'Sistem Absensi Sekolah Berbasis RFID',
        categories: ['IoT', 'Embedded System', 'Web'],
        images: [
            'images/projects/Absensi RFID/School Attendance 1.png',
            'images/projects/Absensi RFID/School Attendance 2.png',
            'images/projects/Absensi RFID/School Attendance 3.png',
            'images/projects/Absensi RFID/School Attendance 4.png',
            'images/projects/Absensi RFID/School Attendance 5.png',
            'images/projects/Absensi RFID/School Attendance 6.png',
            'images/projects/Absensi RFID/School Attendance 7.png',
            'images/projects/Absensi RFID/School Attendance 8.png'
        ],
        description: 'School Attendance System Based on RFID adalah sistem absensi sekolah otomatis yang memanfaatkan teknologi RFID untuk mencatat kehadiran siswa secara digital. Sistem ini dirancang untuk meningkatkan efisiensi, akurasi, dan kemudahan pengelolaan data absensi.',
        details: 'Proyek ini menggunakan ESP8266 sebagai mikrokontroler utama yang terhubung dengan modul RFID RC522 untuk membaca ID kartu siswa. Ketika kartu terdeteksi, sistem memberikan umpan balik visual dan audio melalui LED dan buzzer sebagai indikator keberhasilan pembacaan.<br><br>Proyek ini menggunakan ESP8266 sebagai mikrokontroler utama yang terhubung dengan modul RFID RC522 untuk membaca ID kartu siswa. Ketika kartu terdeteksi, sistem memberikan umpan balik visual dan audio melalui LED dan buzzer sebagai indikator keberhasilan pembacaan.<br><br>Informasi absensi ditampilkan melalui sebuah website yang memungkinkan pengguna untuk memantau, mengelola, dan memperbarui data kehadiran siswa secara terstruktur dan real-time.<br><br>',
        technologies: ['RFID Attendance System', 'IoT School Management', 'ESP8266', 'REST API', 'Real-time Monitoring'],
        features: [
            'Pencatatan absensi otomatis berbasis RFID',
            'Indikator LED dan buzzer sebagai notifikasi',
            'Penyimpanan data pada database server lokal (XAMPP)',
            'Website monitoring absensi siswa',
            'REST API (Create, Read, Update, Delete data)'
        ]
    },
    5: {
        title: 'Pengendalian Kecepatan Motor DC Menggunakan Mikrokontroler',
        categories: ['Embedded System', 'Control System'],
        images: [
            'images/projects/Kecepatan Motor DC/DC Motor Speed 1.png',
            'images/projects/Kecepatan Motor DC/DC Motor Speed 2.png',
            'images/projects/Kecepatan Motor DC/DC Motor Speed 3.png',
            'images/projects/Kecepatan Motor DC/DC Motor Speed 4.png'
        ],
        description: 'DC Motor Speed Control Using PID adalah sistem pengendalian kecepatan motor DC yang dirancang dengan menerapkan metode kontrol PID untuk menghasilkan respon kecepatan yang stabil dan terkontrol. Proyek ini bertujuan untuk memahami perbedaan karakteristik sistem open-loop dan closed-loop dalam pengendalian motor.',
        details: 'Proyek ini mengimplementasikan kontrol PID sebagai pengatur kecepatan motor DC dengan mengendalikan nilai PWM untuk mengatur arus jangkar motor. Sistem diuji menggunakan rangkaian open-loop dan closed-loop pada DC servo motor trainer guna membandingkan performa pengendalian kecepatan.<br><br>Pengujian dilakukan dengan mengukur deadband voltage, tegangan keluaran potensiometer, serta kecepatan putar motor dalam satuan rad/sec. Selain itu, analisis bentuk gelombang dilakukan menggunakan osiloskop untuk mengamati kestabilan frekuensi pada rangkaian pengendali motor DC.<br><br>Implementasi lanjutan dilakukan menggunakan Arduino Uno sebagai pengendali utama, dilengkapi dengan sensor kecepatan motor, LCD I2C, dan keypad. Visualisasi respon PID ditampilkan melalui Serial Plotter Arduino IDE untuk mempermudah analisis dan penyetelan parameter PID.<br><br>',
        technologies: ['DC Motor PID Control', 'Embedded Control System', 'Arduino Uno', 'PWM Motor Speed', 'Open-loop & Closed-loop'],
        features: [
            'Pengendalian kecepatan motor DC menggunakan metode PID',
            'Implementasi sistem open-loop dan closed-loop',
            'Pengaturan kecepatan berbasis PWM',
            'Monitoring kecepatan motor secara real-time',
            'Visualisasi respon PID menggunakan Serial Plotter'
        ]
    },
    6: {
        title: 'Sistem Penyiraman Tanaman Otomatis',
        categories: ['IoT', 'Embedded System'],
        images: [
            'images/projects/Penyiram Tanaman Otomatis/Penyiram Tanaman.png'
        ],
        description: 'Automatic Plant Watering System adalah sistem penyiraman tanaman otomatis berbasis IoT yang dirancang untuk mengontrol dan memantau kondisi tanaman secara jarak jauh melalui perangkat mobile. Sistem ini membantu memastikan tanaman mendapatkan air secara tepat dan efisien.',
        details: 'Proyek ini menggunakan ESP8266 sebagai pengendali utama yang terhubung dengan sensor kelembapan tanah untuk menentukan kebutuhan air tanaman. Ketika kelembapan tanah berada di bawah ambang batas yang ditentukan, sistem akan mengaktifkan relay untuk menyalakan pompa air secara otomatis.<br><br>Data kelembapan tanah dan aliran air dipantau secara real-time dan dikirimkan melalui koneksi internet ke platform ThingSpeak. Informasi ini memungkinkan pengguna untuk memantau kondisi tanaman serta kinerja sistem penyiraman dari jarak jauh menggunakan perangkat mobile.<br><br>',
        technologies: ['Automatic Plant Watering', 'IoT Agriculture', 'Soil Moisture Sensor', 'ESP8266', 'Remote Monitoring'],
        features: [
            'Penyiraman tanaman otomatis berbasis sensor kelembapan tanah',
            'Monitoring real-time melalui platform ThingSpeak',
            'Sistem IoT menggunakan ESP8266',
            'Kontrol pompa air menggunakan relay 5V',
            'Notifikasi status sistem menggunakan buzzer'
        ]
    }
};

// Slider State
let currentSlide = 0;
let currentProjectId = null;

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            
            // Smooth scroll
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Typing Animation Functions
function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
        }
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

// Portfolio filtering with multiple categories and center alignment
function initPortfolioFilter() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            const portfolioGrid = document.querySelector('.portfolio-grid');
            let visibleItems = [];
            
            portfolioItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(',');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    item.style.display = 'block';
                    visibleItems.push(item);
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
            
            // Center alignment logic
            setTimeout(() => {
                visibleItems.forEach(item => {
                    item.classList.remove('single-item', 'single-row');
                });
                
                if (visibleItems.length === 1) {
                    visibleItems[0].classList.add('single-item');
                } else if (visibleItems.length % 2 === 1) {
                    // If odd number of items, center the last one
                    const lastItem = visibleItems[visibleItems.length - 1];
                    lastItem.classList.add('single-row');
                }
            }, 350);
        });
    });
}

// Image Slider Functions with Responsive Images
function createImageSlider(images) {
    const sliderContainer = document.querySelector('.modal-slider');
    const indicatorsContainer = document.querySelector('.slider-indicators');
    
    // Clear previous content
    sliderContainer.innerHTML = '';
    indicatorsContainer.innerHTML = '';
    
    // Create slides and indicators
    images.forEach((image, index) => {
        // Create slide container
        const slide = document.createElement('div');
        slide.className = `modal-slide ${index === 0 ? 'active' : ''}`;
        
        // Create image with responsive sizing
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Project Image ${index + 1}`;
        img.loading = 'lazy';
        
        // Handle image load errors
        img.onerror = function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
            this.style.maxWidth = '400px';
            this.style.maxHeight = '300px';
        };
        
        slide.appendChild(img);
        sliderContainer.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('button');
        indicator.className = `slider-indicator ${index === 0 ? 'active' : ''}`;
        indicator.setAttribute('data-index', index);
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    // Reset slide position
    currentSlide = 0;
    updateSlider();
}

function nextSlide() {
    const project = projects[currentProjectId];
    if (!project) return;
    
    currentSlide = (currentSlide + 1) % project.images.length;
    updateSlider();
}

function prevSlide() {
    const project = projects[currentProjectId];
    if (!project) return;
    
    currentSlide = (currentSlide - 1 + project.images.length) % project.images.length;
    updateSlider();
}

function goToSlide(index) {
    const project = projects[currentProjectId];
    if (!project || index < 0 || index >= project.images.length) return;
    
    currentSlide = index;
    updateSlider();
}

function updateSlider() {
    const slides = document.querySelectorAll('.modal-slide');
    const indicators = document.querySelectorAll('.slider-indicator');
    
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Project Modal Functions
function openModal(projectId) {
    const project = projects[projectId];
    if (!project) return;
    
    currentProjectId = projectId;
    
    // Show loading
    loadingSpinner.classList.add('active');
    
    // Set modal content after a short delay to show loading animation
    setTimeout(() => {
        // Create image slider
        createImageSlider(project.images);
        
        // Set modal content
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = `
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-categories">
                ${project.categories.map(cat => `<span class="modal-category">${cat}</span>`).join('')}
            </div>
            <p class="modal-description">${project.description}</p>
            <div class="modal-tech">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="modal-details">
                <h4>Detail Proyek</h4>
                <p>${project.details}</p>
                <h4>Fitur Utama</h4>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `;
        
        // Hide loading and show modal
        loadingSpinner.classList.remove('active');
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add event listeners for slider arrows
        const prevArrow = document.querySelector('.slider-prev');
        const nextArrow = document.querySelector('.slider-next');
        
        // Remove existing listeners
        prevArrow.replaceWith(prevArrow.cloneNode(true));
        nextArrow.replaceWith(nextArrow.cloneNode(true));
        
        // Get new references
        const newPrevArrow = document.querySelector('.slider-prev');
        const newNextArrow = document.querySelector('.slider-next');
        
        newPrevArrow.addEventListener('click', prevSlide);
        newNextArrow.addEventListener('click', nextSlide);
        
        // Add keyboard navigation
        document.addEventListener('keydown', handleKeyboardNavigation);
    }, 500);
}

function handleKeyboardNavigation(e) {
    if (!modalOverlay.classList.contains('active')) return;
    
    switch(e.key) {
        case 'ArrowLeft':
            prevSlide();
            break;
        case 'ArrowRight':
            nextSlide();
            break;
        case 'Escape':
            closeModal();
            break;
    }
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Remove keyboard event listener
    document.removeEventListener('keydown', handleKeyboardNavigation);
}

// Add click event to project links
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = link.getAttribute('data-project');
        openModal(projectId);
    });
});

// Add click event to portfolio images for modal
portfolioItems.forEach(item => {
    const img = item.querySelector('.portfolio-img');
    img.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        openModal(projectId);
    });
});

// Close modal with close button
closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Form submission with FormSubmit
function initContactForm() {
    if (contactForm) {
        // Form is already configured for FormSubmit
        // We'll just add some client-side validation
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
            submitBtn.disabled = true;
            
            // FormSubmit will handle the actual submission
            // We'll just show a success message after a delay
            setTimeout(() => {
                showAlert('Pesan Anda telah dikirim! Saya akan membalas secepatnya.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Show alert function
function showAlert(message, type) {
    // Remove existing alerts
    const existingAlert = document.querySelector('.custom-alert');
    if (existingAlert) existingAlert.remove();
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `custom-alert alert-${type}`;
    alert.innerHTML = `
        <div class="alert-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="alert-close"><i class="fas fa-times"></i></button>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(alert);
    
    // Show alert
    setTimeout(() => alert.classList.add('show'), 10);
    
    // Close button
    alert.querySelector('.alert-close').addEventListener('click', () => {
        alert.classList.remove('show');
        setTimeout(() => alert.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.classList.remove('show');
            setTimeout(() => alert.remove(), 300);
        }
    }, 5000);
}

// Add CSS for alerts
const alertStyle = document.createElement('style');
alertStyle.textContent = `
    .custom-alert {
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        transform: translateX(400px);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
        border-left: 4px solid var(--primary-color);
    }
    
    .custom-alert.show {
        transform: translateX(0);
    }
    
    .alert-success {
        border-left-color: #10b981;
    }
    
    .alert-error {
        border-left-color: #ef4444;
    }
    
    .alert-content {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .alert-content i:first-child {
        font-size: 1.5rem;
    }
    
    .alert-success .alert-content i:first-child {
        color: #10b981;
    }
    
    .alert-error .alert-content i:first-child {
        color: #ef4444;
    }
    
    .alert-content span {
        flex: 1;
        font-weight: 500;
        color: var(--dark-color);
    }
    
    .alert-close {
        background: none;
        border: none;
        color: var(--gray-color);
        cursor: pointer;
        padding: 5px;
        transition: color 0.3s ease;
    }
    
    .alert-close:hover {
        color: var(--dark-color);
    }
`;
document.head.appendChild(alertStyle);

// Back to top button
function initBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
        
        // Navbar scroll effect
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animate elements on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.skill-category, .portfolio-item, .experience-item, .info-card').forEach(el => {
        observer.observe(el);
    });
}

// Preload images
function preloadImages() {
    const images = [
        'images/profile.PNG'
    ];
    
    // Preload all project images
    Object.values(projects).forEach(project => {
        if (project.images) {
            project.images.forEach(image => {
                images.push(image);
            });
        }
    });
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start typing animation
    if (textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }
    
    // Initialize components
    initPortfolioFilter();
    initContactForm();
    initBackToTop();
    initScrollAnimations();
    preloadImages();
    
    // Add loading state to page load
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// Add CSS for animated elements
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .skill-category, .portfolio-item, .experience-item, .info-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
                    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .skill-category.animated, .portfolio-item.animated, .experience-item.animated, 
    .info-card.animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    .loaded .hero-content {
        animation: fadeInUp 0.8s ease-out;
    }
    
    .loaded .hero-image {
        animation: fadeIn 1s ease-out;
    }
`;
document.head.appendChild(animationStyle);