export const EMAIL = 'digipulseid@gmail.com';

export const services = [
  {
    slug: 'web-development', no: '01', title: 'Web Development', short: 'Website profesional yang mudah ditemukan dan cepat diakses.',
    desc: 'Kami membangun website yang rapi, cepat diakses melalui ponsel, dan mudah ditemukan di mesin pencari.',
    points: ['Tampilan yang menyesuaikan identitas usaha Anda', 'Waktu muat cepat, termasuk pada koneksi seluler', 'Optimasi SEO teknis dan pemasangan analytics', 'Konten dapat diperbarui sendiri melalui panel pengelola'],
    tags: ['React', 'Vite', 'Tailwind', 'SEO'], fit: 'Website',
    stack: [{ g: 'Frontend', items: ['react', 'vite', 'tailwind', 'typescript'] }, { g: 'Performa & SEO', items: ['ga4', 'searchconsole'] }, { g: 'Deploy', items: ['vercel', 'cloudflare', 'githubactions'] }],
  },
  {
    slug: 'web-application', no: '02', title: 'Web Application', short: 'Aplikasi web yang disesuaikan dengan alur kerja tim Anda.',
    desc: 'Dasbor, sistem internal, hingga portal pelanggan untuk menggantikan pencatatan manual dan pekerjaan berulang.',
    points: ['Hak akses berdasarkan peran pengguna', 'Laporan dan ekspor data secara otomatis', 'Antarmuka yang mudah dipelajari oleh staf', 'Struktur sistem yang siap dikembangkan lebih lanjut'],
    tags: ['Dashboard', 'API', 'Database', 'Auth'], fit: 'Aplikasi',
    stack: [{ g: 'Frontend', items: ['react', 'typescript'] }, { g: 'Backend', items: ['node', 'laravel', 'postgres'] }, { g: 'Keamanan', items: ['jwt', 'cloudflare'] }],
  },
  {
    slug: 'saas-development', no: '03', title: 'SaaS Development', short: 'Pengembangan produk berlangganan sejak tahap awal.',
    desc: 'Kami membantu menyusun versi pertama produk Anda (MVP), termasuk sistem langganan dan pembayaran, agar dapat segera diuji oleh pengguna.',
    points: ['Penentuan fitur inti untuk versi pertama', 'Arsitektur multi-tenant untuk banyak pelanggan', 'Integrasi pembayaran berulang dan paket langganan', 'Data penggunaan sebagai dasar pengembangan berikutnya'],
    tags: ['MVP', 'Billing', 'Multi-tenant', 'Cloud'], fit: 'Aplikasi',
    stack: [{ g: 'Produk', items: ['next', 'typescript', 'postgres', 'redis'] }, { g: 'Pembayaran', items: ['stripe', 'xendit'] }, { g: 'Infrastruktur', items: ['docker', 'aws', 'githubactions'] }],
  },
  {
    slug: 'ui-ux-design', no: '04', title: 'UI/UX Design', short: 'Rancangan antarmuka yang jelas sebelum tahap pengembangan.',
    desc: 'Riset pengguna, alur aplikasi, dan prototipe interaktif untuk memastikan produk mudah digunakan sebelum dibangun.',
    points: ['Riset kebutuhan dan perilaku pengguna', 'Wireframe dan prototipe yang dapat diuji', 'Design system untuk tampilan yang konsisten', 'Mengurangi revisi pada tahap pengembangan'],
    tags: ['Figma', 'Prototype', 'Design System', 'Riset'], fit: 'Website',
    stack: [{ g: 'Desain', items: ['figma'] }, { g: 'Serah terima', items: ['storybook'] }],
  },
  {
    slug: 'system-integration', no: '05', title: 'System Integration', short: 'Menghubungkan sistem yang selama ini berjalan terpisah.',
    desc: 'Integrasi antaraplikasi, layanan pembayaran, dan API pihak ketiga agar data tersinkron tanpa input ulang.',
    points: ['Pemetaan sistem dan sumber data yang ada', 'Integrasi API, webhook, dan payment gateway', 'Sinkronisasi data yang dapat dipantau', 'Dokumentasi teknis untuk tim internal'],
    tags: ['REST', 'Webhook', 'ETL', 'Payment'], fit: 'Aplikasi',
    stack: [{ g: 'Koneksi', items: ['graphql', 'whatsapp', 'google'] }, { g: 'Alur data', items: ['n8n', 'node'] }, { g: 'Pemantauan', items: ['sentry'] }],
  },
  {
    slug: 'iot-embedded-system', no: '06', title: 'IoT & Embedded System', short: 'Pemantauan perangkat dan lingkungan secara real-time.',
    desc: 'Sensor, perangkat, dan dasbor untuk memantau kondisi di lapangan, dilengkapi notifikasi ketika terjadi perubahan.',
    points: ['Pemantauan melalui ponsel maupun komputer', 'Notifikasi otomatis ketika nilai melewati batas', 'Perangkat hemat daya untuk penggunaan jangka panjang', 'Pengerjaan perangkat keras, firmware, dan dasbor'],
    tags: ['ESP32', 'MQTT', 'Sensor', 'Dashboard'], fit: 'IoT',
    stack: [{ g: 'Perangkat', items: ['esp32', 'arduino', 'raspberrypi'] }, { g: 'Komunikasi', items: ['mqtt'] }, { g: 'Dasbor', items: ['nodered', 'grafana', 'influxdb', 'telegram'] }],
  },
  {
    slug: 'graphic-design', no: '07', title: 'Graphic Design', short: 'Desain promosi yang rapi dan sesuai karakter usaha.',
    desc: 'Poster, banner, konten media sosial, dan label kemasan yang dirancang dengan gaya visual yang konsisten.',
    points: ['Poster, flyer, spanduk, dan banner', 'Konten media sosial dengan gaya yang seragam', 'Desain label dan kemasan produk', 'Ilustrasi vektor dan penyuntingan foto dasar'],
    tags: ['Poster', 'Banner', 'Label Kemasan', 'Vector'], fit: 'Kreatif',
    stack: [{ g: 'Vector & ilustrasi', items: ['illustrator', 'coreldraw'] }, { g: 'Foto & layout', items: ['photoshop', 'canva', 'figma'] }],
  },
  {
    slug: 'video-editing', no: '08', title: 'Video Editing', short: 'Video singkat dan undangan digital untuk berbagai keperluan.',
    desc: 'Penyuntingan video promosi dan konten media sosial, serta pembuatan undangan digital dalam format gambar maupun video.',
    points: ['Undangan digital dalam format gambar atau video', 'Video promosi singkat dengan teks dan musik', 'Format yang sesuai untuk WhatsApp, Instagram, dan TikTok', 'Revisi sesuai kesepakatan di awal'],
    tags: ['Undangan Digital', 'Video Singkat', 'Reels', 'Teks & Musik'], fit: 'Kreatif',
    stack: [{ g: 'Penyuntingan', items: ['premiere', 'capcut', 'davinci'] }, { g: 'Efek & teks', items: ['aftereffects'] }],
  },
  {
    slug: 'maintenance-support', no: '09', title: 'Maintenance & Support', short: 'Pemeliharaan rutin agar sistem tetap aman dan stabil.',
    desc: 'Pemantauan, pembaruan keamanan, dan perbaikan berkala untuk website maupun aplikasi yang sudah berjalan.',
    points: ['Pemantauan uptime dan error', 'Pembaruan keamanan secara berkala', 'Penanganan kendala sesuai prioritas', 'Pencadangan data dan rencana perbaikan'],
    tags: ['Monitoring', 'Security', 'SLA', 'Backup'], fit: 'Aplikasi',
    stack: [{ g: 'Pemantauan', items: ['sentry', 'cloudflare'] }, { g: 'Versi & cadangan', items: ['git', 'githubactions', 'docker'] }],
  },
];

export const steps = [
  { t: 'Konsultasi', d: 'Kami memahami kebutuhan, konteks, prioritas, dan batasan Anda sebelum menentukan pendekatan terbaik.' },
  { t: 'Analisis', d: 'Kebutuhan diterjemahkan menjadi lingkup pekerjaan, struktur data, dan pemetaan risiko yang jelas.' },
  { t: 'Desain', d: 'Alur pengguna, struktur halaman, dan antarmuka disusun sesuai lingkup yang telah disepakati.' },
  { t: 'Pengembangan', d: 'Dikerjakan secara bertahap, dengan pembaruan rutin yang dapat Anda coba di lingkungan uji.' },
  { t: 'Pengujian', d: 'Fungsi, responsivitas, aksesibilitas, performa, dan keamanan diperiksa secara menyeluruh.' },
  { t: 'Peluncuran', d: 'Domain, sertifikat keamanan, analytics, dan pemantauan kami siapkan hingga seluruhnya berjalan.' },
  { t: 'Dukungan', d: 'Pendampingan setelah rilis, pemeliharaan, dan pengembangan lanjutan sesuai kebutuhan Anda.' },
];

export const projects = [
  {
    slug: 'apex-financial-dashboard', title: 'Apex Financial Dashboard', cat: 'Web App', tag: 'Website',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=70',
    desc: 'Platform pemantauan portofolio aset dengan analitik otomatis dan prediksi tren.',
    problem: 'Tim analis harus memindahkan data dari berbagai sumber ke spreadsheet secara manual setiap hari.',
    solution: 'Kami membangun dasbor real-time yang menarik data secara otomatis, lengkap dengan grafik interaktif dan peringatan.',
    result: ['Pelaporan harian berubah dari hitungan jam menjadi menit', 'Satu sumber data tepercaya untuk seluruh tim', 'Peringatan otomatis saat angka melewati batas'],
  },
  {
    slug: 'velox-ecommerce', title: 'Velox E-Commerce Experience', cat: 'UI/UX', tag: 'Website',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=70',
    desc: 'Toko online fesyen dengan pratinjau produk 3D dan proses checkout yang ringkas.',
    problem: 'Banyak pengunjung meninggalkan halaman di tengah proses pembelian karena alurnya terlalu panjang.',
    solution: 'Kami merombak alur belanja, menambahkan pratinjau produk interaktif, dan menyederhanakan proses checkout.',
    result: ['Checkout dipangkas menjadi tiga langkah', 'Pratinjau produk 360° di perangkat seluler', 'Halaman tetap ringan di jaringan yang lambat'],
  },
  {
    slug: 'pulse-ai-mobile', title: 'Pulse AI Assistant', cat: 'Mobile', tag: 'Aplikasi',
    img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1000&q=70',
    desc: 'Aplikasi asisten suara untuk mengatur tugas harian dan mencatat rapat secara otomatis.',
    problem: 'Catatan rapat tercecer dan tindak lanjut sering terlewat.',
    solution: 'Kami membuat aplikasi yang mentranskripsi suara, merangkum poin penting, dan menjadwalkan pengingat.',
    result: ['Transkripsi langsung selama rapat berlangsung', 'Ringkasan dan daftar tugas yang dibuat otomatis', 'Sinkronisasi di Android dan iOS'],
  },
  {
    slug: 'nexus-saas-portal', title: 'Nexus SaaS Portal', cat: 'Web App', tag: 'Aplikasi',
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=70',
    desc: 'Situs pemasaran dan portal pelanggan untuk produk langganan, lengkap dengan onboarding.',
    problem: 'Calon pelanggan kesulitan memulai karena situs pemasaran dan aplikasi terpisah.',
    solution: 'Kami menyatukan pengalaman dari halaman awal, pendaftaran, hingga panduan penggunaan pertama.',
    result: ['Pendaftaran selesai dalam satu alur', 'Panduan interaktif untuk pengguna baru', 'Pengelolaan paket dan tagihan secara mandiri'],
  },
];

export const products = [
  { slug: 'pulsedesk', name: 'PulseDesk', status: 'Tersedia', desc: 'Sistem tiket bantuan pelanggan yang merapikan keluhan, penugasan, dan riwayat percakapan dalam satu layar.', feats: ['Kotak masuk terpadu', 'Penugasan otomatis', 'Laporan waktu respons'], c: 'primary' },
  { slug: 'pulsestock', name: 'PulseStock', status: 'Tersedia', desc: 'Pencatatan stok multi-gudang dengan pemindai kode batang dan peringatan otomatis saat stok menipis.', feats: ['Multi-gudang', 'Pindai barcode', 'Peringatan stok'], c: 'accent' },
  { slug: 'pulsesense', name: 'PulseSense', status: 'Dalam pengembangan', desc: 'Platform pemantauan sensor IoT untuk suhu, kelembapan, dan energi, lengkap dengan notifikasi saat melewati ambang batas.', feats: ['Dasbor real-time', 'Notifikasi ambang', 'Riwayat data'], c: 'primary' },
];

export const tools = { react: 'React', vite: 'Vite', tailwind: 'Tailwind CSS', typescript: 'TypeScript', ga4: 'Google Analytics', searchconsole: 'Search Console', vercel: 'Vercel', cloudflare: 'Cloudflare', githubactions: 'GitHub Actions', node: 'Node.js', laravel: 'Laravel', postgres: 'PostgreSQL', jwt: 'JWT', next: 'Next.js', redis: 'Redis', stripe: 'Stripe', xendit: 'Xendit', docker: 'Docker', aws: 'AWS', figma: 'Figma', storybook: 'Storybook', graphql: 'GraphQL', whatsapp: 'WhatsApp Business API', google: 'Google Workspace', n8n: 'n8n', sentry: 'Sentry', git: 'Git', esp32: 'ESP32', arduino: 'Arduino', raspberrypi: 'Raspberry Pi', mqtt: 'MQTT', nodered: 'Node-RED', grafana: 'Grafana', influxdb: 'InfluxDB', telegram: 'Telegram', illustrator: 'Adobe Illustrator', photoshop: 'Adobe Photoshop', premiere: 'Adobe Premiere Pro', aftereffects: 'After Effects', canva: 'Canva', coreldraw: 'CorelDRAW', davinci: 'DaVinci Resolve', capcut: 'CapCut' };

// Nomor WhatsApp bisnis, format internasional tanpa "+" atau spasi, mis. '6281234567890'.
// Selama kosong, semua tombol konsultasi mengarah ke halaman Kontak.
export const WHATSAPP = '';
export const WA_TEXT = 'Halo DigiPulse, saya ingin berkonsultasi mengenai kebutuhan digital usaha saya.';

// Empat bidang layanan, ditampilkan di Beranda, menu, dan halaman Layanan
export const groups = [
  { slug: 'website', title: 'Website', hook: 'Website yang mencerminkan kredibilitas usaha Anda.', desc: 'Kami merancang website yang rapi, cepat diakses melalui ponsel, mudah ditemukan di mesin pencari, dan memudahkan pengunjung untuk menghubungi Anda.', who: 'UMKM, company profile, toko online, dan institusi', items: ['web-development', 'ui-ux-design'] },
  { slug: 'aplikasi', title: 'Aplikasi & Sistem', hook: 'Operasional yang lebih tertata dalam satu sistem.', desc: 'Pekerjaan yang selama ini bergantung pada spreadsheet dan input berulang kami pindahkan ke aplikasi yang disesuaikan dengan alur kerja tim Anda.', who: 'Perusahaan, startup, sekolah, dan klinik', items: ['web-application', 'saas-development', 'system-integration', 'maintenance-support'] },
  { slug: 'iot', title: 'IoT', hook: 'Kondisi perangkat dan lokasi dapat dipantau dari jarak jauh.', desc: 'Kami merangkai sensor, perangkat, dan dasbor yang memberi peringatan ketika terjadi perubahan kondisi, sehingga tindakan dapat diambil lebih cepat.', who: 'Pabrik, gudang, pertanian, dan pengelola gedung', items: ['iot-embedded-system'] },
  { slug: 'kreatif', title: 'Desain & Konten', hook: 'Materi promosi yang rapi dan konsisten.', desc: 'Poster, banner, konten media sosial, label kemasan, video singkat, dan undangan digital yang dikerjakan sesuai karakter usaha Anda.', who: 'UMKM, brand lokal, penyelenggara acara, dan komunitas', items: ['graphic-design', 'video-editing'] },
];

export const pains = [
  { q: 'Website sudah ada, tetapi jarang menghasilkan pertanyaan dari calon pelanggan.', a: 'Kami meninjau ulang tampilan, isi, dan alurnya agar pengunjung lebih mudah memahami layanan Anda, lalu menghubungi.', to: 'website' },
  { q: 'Data operasional masih tersebar di spreadsheet dan percakapan.', a: 'Kami menyusun aplikasi yang menyatukan data tersebut, sehingga laporan dapat dibuat tanpa rekap manual.', to: 'aplikasi' },
  { q: 'Gangguan pada perangkat baru diketahui setelah menimbulkan kerugian.', a: 'Kami memasang sensor dan notifikasi agar perubahan kondisi dapat diketahui lebih awal.', to: 'iot' },
  { q: 'Materi promosi belum konsisten dari satu unggahan ke unggahan berikutnya.', a: 'Kami menyiapkan desain dan video dengan gaya yang seragam, sesuai identitas usaha Anda.', to: 'kreatif' },
];

export const faqs = [
  { q: 'Berapa lama waktu pengerjaannya?', a: 'Waktu pengerjaan bergantung pada lingkup pekerjaan. Website profil umumnya selesai lebih cepat dibandingkan aplikasi atau sistem IoT. Estimasi waktu akan kami sampaikan setelah konsultasi awal.' },
  { q: 'Bagaimana penentuan biayanya?', a: 'Biaya ditentukan berdasarkan lingkup dan tingkat kerumitan pekerjaan. Setelah kebutuhan Anda jelas, kami akan mengirimkan penawaran tertulis yang memuat rincian pekerjaan dan biayanya.' },
  { q: 'Apa saja yang perlu disiapkan sebelum konsultasi?', a: 'Gambaran singkat mengenai usaha Anda, kendala yang ingin diatasi, dan hasil yang diharapkan sudah cukup. Dokumen yang lengkap tidak diwajibkan.' },
  { q: 'Apakah perkembangan pekerjaan dapat dipantau?', a: 'Dapat. Hasil pekerjaan kami unggah secara bertahap ke lingkungan uji, sehingga Anda dapat mencobanya dan memberikan masukan.' },
  { q: 'Bagaimana jika terjadi kendala setelah peluncuran?', a: 'Kami menyediakan layanan Maintenance & Support yang mencakup pemantauan, pembaruan keamanan, dan perbaikan.' },
  { q: 'Apakah layanan desain atau video dapat dipesan secara terpisah?', a: 'Dapat. Layanan Desain & Konten, seperti poster, konten media sosial, label kemasan, dan undangan digital, dapat dipesan tanpa layanan lainnya.' },
];

export const groupOf = (slug) => groups.find((g) => g.items.includes(slug));
