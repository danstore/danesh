// Sample product data with multilingual support
const productData = [
    {
        id: 1,
        title: {
            en: "Sony Wireless Headphones",
            de: "Sony Kabellose Kopfhörer",
            fa: "هدفون بی‌سیم سونی"
        },
        description: {
            en: "Wireless headphones with exceptional sound quality and long battery life",
            de: "Kabellose Kopfhörer mit außergewöhnlicher Klangqualität und langer Akkulaufzeit",
            fa: "هدفون بی‌سیم با کیفیت صدای فوق‌العاده و عمر باتری طولانی"
        },
        price: "€149.99",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80",
        badge: {
            en: "Best Seller",
            de: "Bestseller",
            fa: "پرفروش"
        },
        featured: true,
        amazonLink: "https://www.amazon.com/your-product-link",
        features: {
            en: [
                "30-hour battery life",
                "Hi-Res audio quality",
                "Active noise cancellation",
                "Water and sweat resistant",
                "High-quality microphone"
            ],
            de: [
                "30-stündige Akkulaufzeit",
                "Hi-Res Audioqualität",
                "Aktive Geräuschunterdrückung",
                "Wasser- und schweißbeständig",
                "Hochwertiges Mikrofon"
            ],
            fa: [
                "عمر باتری ۳۰ ساعته",
                "کیفیت صدای Hi-Res",
                "نویز کنسلینگ فعال",
                "ضد آب و عرق",
                "دارای میکروفون با کیفیت"
            ]
        },
        details: {
            en: "Sony wireless headphones with active noise cancellation technology allow you to listen to your favorite music comfortably in any environment. The 30-hour battery life of these headphones provides an unparalleled experience. The Hi-Res audio quality of this product delivers high-definition music details to your ears. These headphones are water and sweat resistant and suitable for sports activities as well.",
            de: "Kabellose Sony-Kopfhörer mit aktiver Geräuschunterdrückungstechnologie ermöglichen es Ihnen, in jeder Umgebung bequem Ihre Lieblingsmusik zu hören. Die 30-stündige Akkulaufzeit dieser Kopfhörer bietet ein unvergleichliches Erlebnis. Die Hi-Res-Audioqualität dieses Produkts liefert hochauflösende Musikdetails an Ihre Ohren. Diese Kopfhörer sind wasser- und schweißbeständig und eignen sich auch für sportliche Aktivitäten.",
            fa: "هدفون بی‌سیم سونی با فناوری نویز کنسلینگ فعال، باعث می‌شود تا در هر محیطی بتوانید به راحتی به موسیقی مورد علاقه خود گوش دهید. عمر باتری ۳۰ ساعته این هدفون، تجربه‌ای بی‌نظیر را برای شما به ارمغان می‌آورد. کیفیت صدای Hi-Res این محصول، جزئیات موسیقی را با وضوح بالا به گوش شما می‌رساند. این هدفون ضد آب و عرق بوده و برای فعالیت‌های ورزشی نیز مناسب است."
        },
        comments: []
    },
    {
        id: 2,
        title: {
            en: "Apple Watch",
            de: "Apple Uhr",
            fa: "ساعت هوشمند اپل واچ"
        },
        description: {
            en: "Smartwatch with advanced features for fitness and health",
            de: "Smartwatch mit erweiterten Funktionen für Fitness und Gesundheit",
            fa: "ساعت هوشمند با قابلیت‌های پیشرفته برای ورزش و سلامتی"
        },
        price: "€399.99",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1546868871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        badge: {
            en: "New",
            de: "Neu",
            fa: "جدید"
        },
        featured: true,
        amazonLink: "https://www.amazon.com/your-product-link",
        features: {
            en: [
                "Always-on display",
                "Heart rate monitoring",
                "Built-in GPS",
                "Water-resistant up to 50 meters",
                "18-hour battery life"
            ],
            de: [
                "Immer-ein-Display",
                "Pulsmessung",
                "Integrierter GPS",
                "Wasserbeständig bis 50 Meter",
                "18-stündige Akkulaufzeit"
            ],
            fa: [
                "نمایشگر همیشه روشن",
                "تشخیص ضربان قلب",
                "GPS داخلی",
                "مقاوم در برابر آب تا عمق ۵۰ متر",
                "عمر باتری ۱۸ ساعته"
            ]
        },
        details: {
            en: "Apple Watch with a beautiful design and advanced features is a perfect companion for your daily activities. It has advanced sensors for health monitoring and can accurately measure various sports activities. The always-on display allows you to view information without needing to lift your wrist.",
            de: "Apple Watch mit einem schönen Design und erweiterten Funktionen ist ein perfekter Begleiter für Ihre täglichen Aktivitäten. Es hat fortschrittliche Sensoren für die Gesundheitsüberwachung und kann verschiedene Sportaktivitäten genau messen. Das Immer-ein-Display ermöglicht es Ihnen, Informationen ohne das Heben des Handgelenks anzuzeigen.",
            fa: "ساعت هوشمند اپل واچ با طراحی زیبا و امکانات پیشرفته، همراه مناسبی برای فعالیت‌های روزانه شماست. این ساعت مجهز به سنسورهای پیشرفته برای پایش سلامتی شما بوده و می‌تواند فعالیت‌های ورزشی مختلف را به دقت اندازه‌گیری کند. نمایشگر همیشه روشن آن، امکان مشاهده اطلاعات را بدون نیاز به بلند کردن مچ دست فراهم می‌کند."
        },
        comments: []
    },
    {
        id: 3,
        title: {
            en: "MacBook Air",
            de: "MacBook Air",
            fa: "لپ‌تاپ مک‌بوک ایر"
        },
        description: {
            en: "Thinnest and lightest Apple laptop with high processing power",
            de: "Dünnstes und leichtestes Apple-Laptop mit hoher Rechenleistung",
            fa: "باریک‌ترین و سبک‌ترین لپ‌تاپ اپل با قدرت پردازشی بالا"
        },
        price: "€999.99",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        badge: {
            en: null,
            de: null,
            fa: null
        },
        featured: true,
        amazonLink: "https://www.amazon.com/your-product-link",
        features: {
            en: [
                "Apple M1 processor",
                "8GB RAM",
                "256GB SSD storage",
                "18-hour battery life",
                "13-inch Retina display"
            ],
            de: [
                "Apple M1-Prozessor",
                "8GB RAM",
                "256GB SSD-Speicher",
                "18-stündige Akkulaufzeit",
                "13-Zoll-Retina-Display"
            ],
            fa: [
                "پردازنده Apple M1",
                "۸ گیگابایت رم",
                "۲۵۶ گیگابایت حافظه SSD",
                "عمر باتری ۱۸ ساعته",
                "صفحه نمایش رتینا ۱۳ اینچی"
            ]
        },
        details: {
            en: "MacBook Air with the powerful Apple M1 processor provides exceptional performance with low power consumption. Its incredibly thin and light design makes it easy to carry. The high-resolution Retina display provides an incredible visual experience.",
            de: "MacBook Air mit dem leistungsstarken Apple M1-Prozessor bietet außergewöhnliche Leistung bei geringem Energieverbrauch. Sein unglaublich dünnes und leichtes Design macht es leicht zu transportieren. Das hochauflösende Retina-Display bietet ein unglaubliches visuelles Erlebnis.",
            fa: "لپ‌تاپ مک‌بوک ایر با پردازنده قدرتمند Apple M1، عملکرد فوق‌العاده‌ای را با مصرف انرژی کم ارائه می‌دهد. طراحی فوق‌العاده نازک و سبک آن، حمل و نقل را بسیار آسان می‌کند، در حالی که صفحه نمایش رتینا با کیفیت بالا، تجربه بصری فوق‌العاده‌ای را فراهم می‌کند. عمر باتری طولانی آن برای یک روز کاری کامل کافی است."
        },
        comments: []
    },
    {
        id: 4,
        title: {
            en: "JBL Bluetooth Speaker",
            de: "JBL Bluetooth-Lautsprecher",
            fa: "اسپیکر بلوتوثی JBL"
        },
        description: {
            en: "Portable speaker with high-quality sound and strong bass",
            de: "Tragbarer Lautsprecher mit hochwertigem Sound und starkem Bass",
            fa: "اسپیکر قابل حمل با صدای با کیفیت و باس قوی"
        },
        price: "€129.99",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        badge: {
            en: "Sale",
            de: "Verkauf",
            fa: "تخفیف"
        },
        featured: false,
        amazonLink: "https://www.amazon.com/your-product-link",
        features: {
            en: [
                "20-hour battery life",
                "Water-resistant (IPX7)",
                "Bluetooth 5.1",
                "Ability to connect multiple speakers",
                "Built-in microphone for hands-free calls"
            ],
            de: [
                "20-stündige Akkulaufzeit",
                "Wasserbeständig (IPX7)",
                "Bluetooth 5.1",
                "Möglichkeit, mehrere Lautsprecher zu verbinden",
                "Integriertes Mikrofon für Freisprechen"
            ],
            fa: [
                "باتری ۲۰ ساعته",
                "مقاوم در برابر آب (IPX7)",
                "بلوتوث نسخه ۵.۱",
                "قابلیت اتصال چند اسپیکر به هم",
                "میکروفون داخلی برای تماس‌های تلفنی"
            ]
        },
        details: {
            en: "JBL Bluetooth speaker with high-quality sound and strong bass is perfect for parties and outdoor activities. It is water-resistant and can be used in pools or beaches. The long battery life allows you to play music all day long.",
            de: "JBL Bluetooth-Lautsprecher mit hochwertigem Sound und starkem Bass ist perfekt für Partys und Outdoor-Aktivitäten. Er ist wasserbeständig und kann in Pools oder an Stränden verwendet! werden. Die lange Akkulaufzeit ermöglicht es Ihnen, Musik den ganzen Tag lang zu spielen.",
            fa: "اسپیکر بلوتوثی JBL با صدای با کیفیت و باس قدرتمند، برای مهمانی‌ها و فضای باز مناسب است. این اسپیکر مقاوم در برابر آب بوده و می‌توانید آن را در استخر یا ساحل نیز استفاده کنید. عمر باتری طولانی آن، موسیقی را برای یک روز کامل پخش می‌کند. امکان اتصال چند اسپیکر به یکدیگر، تجربه صوتی فراگیرتری را ایجاد می‌کند."
        },
        comments: []
    },
    {
        id: 5,
        title: {
            en: "Sony Mirrorless Camera",
            de: "Sony Spiegellose Kamera",
            fa: "دوربین بدون آینه سونی"
        },
        description: {
            en: "Professional camera with exceptional image quality for photographers",
            de: "Professionelle Kamera mit außergewöhnlicher Bildqualität für Fotografen",
            fa: "دوربین حرفه‌ای با کیفیت تصویر فوق‌العاده برای عکاسان"
        },
        price: "€1,299.99",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
        badge: {
            en: null,
            de: null,
            fa: null
        },
        featured: true,
        amazonLink: "https://www.amazon.com/your-product-link",
        features: {
            en: [
                "24.2MP image sensor",
                "4K video recording at 30fps",
                "Fast autofocus system",
                "5-axis image stabilization",
                "3-inch touch screen"
            ],
            de: [
                "24,2-MP-Bildsensor",
                "4K-Videoaufzeichnung bei 30fps",
                "Schnelles Autofokus-System",
                "5-Achsen-Bildstabilisierung",
                "3-Zoll-Touchscreen"
            ],
            fa: [
                "سنسور تصویر ۲۴.۲ مگاپیکسلی",
                "فیلمبرداری ۴K با سرعت ۳۰ فریم بر ثانیه",
                "سیستم فوکوس خودکار سریع",
                "ثبات‌دهنده تصویر ۵ محوره",
                "نمایشگر لمسی ۳ اینچی"
            ]
        },
        details: {
            en: "Sony mirrorless camera is designed for professional and semi-professional photographers. Its large image sensor with high resolution delivers detailed images with low noise. The fast autofocus system accurately tracks moving subjects. It also has 4K video recording capability, making it suitable for video content production.",
            de: "Die Sony-Spiegellose Kamera ist für professionelle und halbprofessionelle Fotografen konzipiert. Ihr großer Bildsensor mit hoher Auflösung liefert detaillierte Bilder mit geringem Rauschen. Das schnelle Autofokus-System verfolgt bewegte Motive genau. Sie verfügt auch über die Fähigkeit, 4K-Videos aufzuzeichnen, was sie für die Produktion von Videoinhalten geeignet macht.",
            fa: "دوربین بدون آینه سونی برای عکاسان حرفه‌ای و نیمه حرفه‌ای طراحی شده است. سنسور تصویر بزرگ آن با رزولوشن بالا، تصاویری با جزئیات دقیق و نویز کم ارائه می‌دهد. سیستم فوکوس خودکار سریع و دقیق آن، سوژه‌های متحرک را به راحتی دنبال می‌کند. این دوربین قابلیت فیلمبرداری با کیفیت ۴K را نیز دارد که برای تولید محتوای ویدیویی مناسب است."
        },
        comments: []
    },
    {
        id: 6,
        title: {
            en: "iPad Pro",
            de: "iPad Pro",
            fa: "تبلت آیپد پرو"
        },
        description: {
            en: "Most powerful Apple tablet with exceptional display and fast performance",
            de: "Leistungsstärkstes Apple-Tablet mit außergewöhnlichem Display und schneller Leistung",
            fa: "قدرتمندترین تبلت اپل با نمایشگر فوق‌العاده و عملکرد سریع"
        },
        price: "€799.99",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80",
        badge: {
            en: "Best Seller",
            de: "Bestseller",
            fa: "پرفروش"
        },
        featured: false,
        amazonLink: "https://www.amazon.com/your-product-link",
        features: {
            en: [
                "Apple M1 processor",
                "Liquid Retina XDR display",
                "Ultra-wide camera with Center Stage",
                "LiDAR scanner",
                "Support for Apple Pencil (2nd generation)"
            ],
            de: [
                "Apple M1-Prozessor",
                "Liquid Retina XDR-Display",
                "Ultra-weitwinklige Kamera mit Center Stage",
                "LiDAR-Scanner",
                "Unterstützung für Apple Pencil (2. Generation)"
            ],
            fa: [
                "پردازنده Apple M1",
                "نمایشگر Liquid Retina XDR",
                "دوربین اولترا واید با قابلیت Center Stage",
                "اسکنر LiDAR",
                "پشتیبانی از Apple Pencil نسل دوم"
            ]
        },
        details: {
            en: "iPad Pro with the powerful M1 processor offers the same power as MacBook laptops. Its stunning display with ProMotion technology and 120Hz refresh rate provides a smooth and immersive user experience. This tablet is suitable for designers, digital artists, and video editing professionals, and with Apple Pencil, it offers a natural writing and drawing experience.",
            de: "iPad Pro mit dem leistungsstarken M1-Prozessor bietet die gleiche Leistung wie MacBook-Laptops. Sein atemberaubendes Display mit ProMotion-Technologie und 120Hz-Refresh-Rate bietet ein schnelles und immersives Benutzererlebnis. Dieses Tablet ist für Designer, digitale Künstler und Video-Editing-Profis geeignet und bietet mit Apple Pencil ein natürliches Schreiben- und Zeichenerlebnis.",
            fa: "تبلت آیپد پرو با پردازنده قدرتمند M1، همان قدرتی را ارائه می‌دهد که در مک‌بوک‌ها دیده می‌شود. نمایشگر خیره‌کننده آن با فناوری ProMotion و نرخ به‌روزرسانی ۱۲۰ هرتز، تجربه کاربری روان و دلپذیری را ارائه می‌دهد. این تبلت برای طراحان، هنرمندان دیجیتال و متخصصان ویرایش ویدیو مناسب است و با Apple Pencil، تجربه نوشتن و طراحی طبیعی را فراهم می‌کند."
        },
        comments: []
    },
    {
        id: 7,
        title: {
            en: "PlayStation 5",
            de: "PlayStation 5",
            fa: "کنسول بازی PlayStation 5"
        },
        description: {
            en: "Latest generation of Sony gaming consoles with exceptional graphics",
            de: "Neueste Generation von Sonys Gaming-Konsolen mit außergewöhnlicher Grafik",
            fa: "جدیدترین نسل کنسول‌های بازی سونی با گرافیک فوق‌العاده"
        },
        price: "€499.99",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
        badge: {
            en: "New",
            de: "Neu",
            fa: "جدید"
        },
        featured: true,
        amazonLink: "https://www.amazon.com/your-product-link",
        features: {
            en: [
                "8-core processor",
                "High-speed SSD storage",
                "Graphics with Ray tracing capability",
                "Support for 8K resolution",
                "DualSense controller with haptic feedback"
            ],
            de: [
                "8-Kern-Prozessor",
                "High-Speed-SSD-Speicher",
                "Grafik mit Ray-tracing-Option",
                "Unterstützung für 8K-Auflösung",
                "DualSense-Controller mit haptischem Feedback"
            ],
            fa: [
                "پردازنده ۸ هسته‌ای",
                "حافظه SSD با سرعت بالا",
                "گرافیک با قابلیت Ray tracing",
                "پشتیبانی از رزولوشن ۸K",
                "کنترلر DualSense با بازخورد لمسی"
            ]
        },
        details: {
            en: "PlayStation 5 with its powerful hardware provides an unparalleled gaming experience. The high-speed SSD storage minimizes game loading times. The Ray tracing technology creates realistic lighting effects in games. The DualSense controller with innovative features like haptic feedback and adaptive triggers offers a deeper gaming experience.",
            de: "PlayStation 5 mit ihrer leistungsstarken Hardware bietet ein unvergleichliches Gaming-Erlebnis. Der High-Speed-SSD-Speicher minimiert die Ladezeiten von Spielen. Die Ray-tracing-Technologie erzeugt realistische Lichteffekte in Spielen. Der DualSense-Controller mit innovativen Funktionen wie haptischem Feedback und adaptiven Trigger bietet ein tiefes Gaming-Erlebnis.",
            fa: "کنسول بازی PlayStation 5 با سخت‌افزار قدرتمند خود، تجربه بازی بی‌نظیری را ارائه می‌دهد. حافظه SSD فوق سریع آن، زمان بارگذاری بازی‌ها را به حداقل می‌رساند. فناوری Ray tracing، نورپردازی واقع‌گرایانه‌ای را در بازی‌ها ایجاد می‌کند. کنترلر DualSense با ویژگی‌های نوآورانه مانند بازخورد لمسی و دکمه‌های ماشه‌ای تطبیقی، تعامل عمیق‌تری با بازی‌ها را ممکن می‌سازد."
        },
        comments: []
    },
    {
        id: 8,
        title: {
            en: "Samsung Galaxy S21",
            de: "Samsung Galaxy S21",
            fa: "گوشی سامسونگ گلکسی S21"
        },
        description: {
            en: "Flagship smartphone with professional camera and AMOLED display",
            de: "Flaggschiff-Smartphone mit professioneller Kamera und AMOLED-Display",
            fa: "گوشی هوشمند پرچمدار با دوربین حرفه‌ای و نمایشگر AMOLED"
        },
        price: "€699.99",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        badge: {
            en: "Sale",
            de: "Verkauf",
            fa: "تخفیف"
        },
        featured: false,
        amazonLink: "https://www.amazon.com/your-product-link",
        features: {
            en: [
                "Exynos 2100 processor",
                "6.2-inch Dynamic AMOLED display",
                "Triple camera with 108MP sensor",
                "4000mAh battery",
                "5G network support"
            ],
            de: [
                "Exynos 2100-Prozessor",
                "6,2-Zoll-Dynamic-AMOLED-Display",
                "Dreifach-Kamera mit 108MP-Sensor",
                "4000mAh-Akku",
                "5G-Netzwerk-Unterstützung"
            ],
            fa: [
                "پردازنده Exynos 2100",
                "نمایشگر Dynamic AMOLED ۶.۲ اینچی",
                "دوربین سه‌گانه با سنسور ۱۰۸ مگاپیکسلی",
                "باتری ۴۰۰۰ میلی‌آمپر ساعتی",
                "پشتیبانی از شبکه ۵G"
            ]
        },
        details: {
            en: "Samsung Galaxy S21 with its beautiful design and powerful specifications is one of the best smartphones on the market. The AMOLED display with a 120Hz refresh rate provides a smooth and clear user experience. The advanced camera system with 8K video recording capability is perfect for mobile photography and videography enthusiasts. 5G network support offers incredibly fast internet speeds.",
            de: "Samsung Galaxy S21 mit seinem schönen Design und leistungsstarken Spezifikationen ist eines der besten Smartphones auf dem Markt. Das AMOLED-Display mit einer 120Hz-Refresh-Rate bietet ein schnelles und klares Benutzererlebnis. Das fortschrittliche Kamerassystem mit 8K-Videoaufnahmefähigkeit ist perfekt für Mobile-Fotografie- und Videografie-Enthusiasten. Die 5G-Netzwerk-Unterstützung bietet unglaublich schnelle Internetgeschwindigkeiten.",
            fa: "گوشی سامسونگ گلکسی S21 با طراحی زیبا و مشخصات فنی قدرتمند، یکی از بهترین گوشی‌های هوشمند بازار است. نمایشگر AMOLED آن با رفرش ریت ۱۲۰ هرتز، تجربه کاربری روان و واضحی را ارائه می‌دهد. سیستم دوربین پیشرفته آن با قابلیت‌های فیلمبرداری ۸K، برای علاقه‌مندان به عکاسی و فیلمبرداری موبایلی مناسب است. پشتیبانی از شبکه ۵G، سرعت اینترنت فوق‌العاده‌ای را فراهم می‌کند."
        },
        comments: []
    },
    {
        id: 9,
        title: {
            en: "The Art of Programming",
            de: "Die Kunst des Programmierens",
            fa: "هنر برنامه نویسی"
        },
        description: {
            en: "A comprehensive guide to programming for beginners and professionals",
            de: "Ein umfassender Leitfaden zum Programmieren für Anfänger und Profis",
            fa: "یک راهنمای جامع برنامه نویسی برای مبتدیان و حرفه ای ها"
        },
        price: "€24.99",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1509228627152-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        badge: {
            en: "Members Only",
            de: "Nur für Mitglieder",
            fa: "فقط اعضا"
        },
        featured: false,
        amazonLink: "https://www.amazon.com/your-product-link",
        features: {
            en: [
                "500+ pages of content",
                "Programming examples",
                "Interactive code challenges",
                "Available in PDF and ePub formats",
                "Regular updates"
            ],
            de: [
                "500+ Seiten Inhalt",
                "Programmierbeispiele",
                "Interaktive Code-Herausforderungen",
                "Verfügbar in PDF- und ePub-Formaten",
                "Regelmäßige Updates"
            ],
            fa: [
                "بیش از ۵۰۰ صفحه محتوا",
                "مثال‌های برنامه‌نویسی",
                "چالش‌های کد تعاملی",
                "قابل دسترسی در فرمت‌های PDF و ePub",
                "به‌روزرسانی‌های منظم"
            ]
        },
        details: {
            en: "The Art of Programming is a comprehensive guide that takes you through the fundamental concepts of programming to advanced techniques. Whether you're a beginner or an experienced programmer looking to refine your skills, this book offers valuable insights and practical examples. The interactive format allows you to test your knowledge as you progress through the chapters.",
            de: "Die Kunst des Programmierens ist ein umfassender Leitfaden, der Sie von den grundlegenden Konzepten der Programmierung bis zu fortgeschrittenen Techniken führt. Ob Sie Anfänger sind oder ein erfahrener Programmierer, der seine Fähigkeiten verbessern möchte, dieses Buch bietet wertvolle Einblicke und praktische Beispiele. Das interaktive Format ermöglicht es Ihnen, Ihr Wissen während des Fortschreitens durch die Kapitel zu testen.",
            fa: "هنر برنامه نویسی یک راهنمای جامع است که شما را از مفاهیم اساسی برنامه نویسی تا تکنیک‌های پیشرفته هدایت می‌کند. چه مبتدی باشید و چه یک برنامه‌نویس با تجربه که می‌خواهد مهارت‌های خود را تقویت کند، این کتاب بینش‌های ارزشمند و مثال‌های عملی ارائه می‌دهد. فرمت تعاملی به شما امکان می‌دهد دانش خود را هنگام پیشرفت در فصل‌ها آزمایش کنید."
        },
        comments: [],
        type: "ebook",
        content: {
            en: "<h2>Chapter 1: Introduction to Programming</h2><p>Programming is the process of creating a set of instructions that tell a computer how to perform a task. These instructions can be written in various programming languages, such as Python, Java, C++, and many others.</p><p>At its core, programming is about problem-solving. As a programmer, you'll be presented with a problem, and you'll need to figure out how to solve it using code. This requires logical thinking, creativity, and attention to detail.</p><h3>Why Learn Programming?</h3><p>There are many reasons to learn programming:</p><ul><li>It's a highly sought-after skill in today's job market</li><li>It allows you to create your own software and applications</li><li>It teaches you how to think logically and solve problems</li><li>It can be a fun and rewarding hobby</li></ul><p>In the following chapters, we'll dive deeper into the fundamentals of programming and gradually build up to more complex concepts and techniques.</p>",
            de: "<h2>Kapitel 1: Einführung in die Programmierung</h2><p>Programmierung ist der Prozess der Erstellung einer Reihe von Anweisungen, die einem Computer mitteilen, wie eine Aufgabe auszuführen ist. Diese Anweisungen können in verschiedenen Programmiersprachen wie Python, Java, C++ und vielen anderen geschrieben werden.</p><p>Im! Kern geht es bei der Programmierung um Problemlösung. Als Programmierer werden Ihnen ein Problem präsentiert, und Sie müssen herausfinden, wie Sie es mit Code lösen können. Dies erfordert logisches Denken, Kreativität und Aufmerksamkeit für Details.</p><h3>Warum Programmieren lernen?</h3><p>Es gibt viele Gründe, Programmieren zu lernen:</p><ul><li>Es ist eine stark nachgefragte Fähigkeit auf dem heutigen Arbeitsmarkt</li><li>Es ermöglicht Ihnen, Ihre eigene Software und Anwendungen zu erstellen</li><li>Es lehrt Sie, logisch zu denken und Probleme zu lösen</li><li>Es kann ein unterhaltsames und lohnendes Hobby sein</li></ul><p>In den folgenden Kapiteln werden wir tiefer in die Grundlagen der Programmierung eintauchen und schrittweise zu komplexeren Konzepten und Techniken übergehen.</p>",
            fa: "<h2>فصل ۱: مقدمه‌ای بر برنامه‌نویسی</h2><p>برنامه‌نویسی فرآیند ایجاد مجموعه‌ای از دستورالعمل‌هاست که به کامپیوتر می‌گویند چگونه یک کار را انجام دهد. این دستورالعمل‌ها می‌توانند در زبان‌های برنامه‌نویسی مختلف مانند پایتون، جاوا، سی++ و بسیاری دیگر نوشته شوند.</p><p>در اصل، برنامه‌نویسی درباره حل مسئله است. به عنوان یک برنامه‌نویس، یک مشکل به شما ارائه می‌شود و شما باید بفهمید چگونه آن را با استفاده از کد حل کنید. این نیازمند تفکر منطقی، خلاقیت و توجه به جزئیات است.</p><h3>چرا برنامه‌نویسی یاد بگیریم؟</h3><p>دلایل زیادی برای یادگیری برنامه‌نویسی وجود دارد:</p><ul><li>مهارتی بسیار مورد تقاضا در بازار کار امروز است</li><li>به شما امکان می‌دهد نرم‌افزارها و برنامه‌های خود را ایجاد کنید</li><li>به شما یاد می‌دهد چگونه منطقی فکر کنید و مسائل را حل کنید</li><li>می‌تواند یک سرگرمی جذاب و پاداش‌دهنده باشد</li></ul><p>در فصل‌های بعدی، عمیق‌تر به اصول برنامه‌نویسی می‌پردازیم و به تدریج به مفاهیم و تکنیک‌های پیچیده‌تر می‌رسیم.!</p>"
        }
    }
];