const PRODUCTS_DATA = [
    {
        id: "aura-soundwave",
        name: "Aura SoundWave ANC",
        category: "Audio",
        price: 299.00,
        oldPrice: 349.00,
        rating: 4.8,
        reviewsCount: 142,
        badge: "Best Seller",
        image: "assets/products/soundwave.png",
        thumbnails: [
            "assets/products/soundwave.png",
            "assets/products/soundwave-angle.png",
            "assets/products/soundwave-box.png",
            "assets/products/soundwave-lifestyle.png"
        ],
        description: "Experience absolute acoustic purity. The SoundWave ANC combines industry-leading active noise cancellation with custom-tuned 40mm dynamic drivers to deliver a warm, detailed, and wide soundstage. Crafted with eco-leather memory foam cups and a solid aluminum chassis for ultimate comfort.",
        colors: [
            { name: "Matte Black", hex: "#121212" },
            { name: "Nordic Silver", hex: "#D1D5DB" },
            { name: "Copper Bronze", hex: "#8C6239" }
        ],
        sizes: ["Standard Edition", "Pro Hardcase Edition"],
        specs: {
            "Driver Size": "40mm Dynamic",
            "Frequency Response": "4Hz - 40kHz",
            "Battery Life": "Up to 45 hours (ANC off)",
            "Connectivity": "Bluetooth 5.2, AAC, aptX Adaptive, 3.5mm Aux",
            "Weight": "250g"
        },
        reviews: [
            { author: "Marcus K.", rating: 5, date: "2026-05-12", title: "Acoustic Perfection", content: "The noise cancelling is incredible, easily blocking out train noise. Sound profile is rich and not overly bassy. Absolute luxury.", verified: true },
            { author: "Sophia V.", rating: 4, date: "2026-04-28", title: "Incredibly comfortable, slightly heavy", content: "I wear these for 6+ hours at my desk. No ear fatigue at all. The copper bronze color looks even better in person.", verified: true }
        ]
    },
    {
        id: "aura-timepiece",
        name: "Aura Timepiece Pro",
        category: "Wearables",
        price: 249.00,
        rating: 4.7,
        reviewsCount: 98,
        badge: "Trending",
        image: "assets/products/timepiece.png",
        thumbnails: [
            "assets/products/timepiece.png",
            "assets/products/timepiece-detail.png",
            "assets/products/timepiece-active.png",
            "assets/products/timepiece-box.png"
        ],
        description: "A luxury smartwatch designed to merge timeless aesthetics with cutting-edge health tracking. Features a crystal-clear 1.43\" Always-On AMOLED screen protected by curved sapphire glass. Monitor your heart rate, sleep quality, stress levels, and blood oxygen with advanced biosensors.",
        colors: [
            { name: "Obsidian Black", hex: "#1a1a1a" },
            { name: "Champagne Gold", hex: "#E5D3B3" },
            { name: "Sage Green", hex: "#7E8F7C" }
        ],
        sizes: ["40mm", "44mm (+ $30)"],
        specs: {
            "Display": "1.43\" AMOLED, 466x466 px",
            "Materials": "Stainless Steel Case, Sapphire Glass, Fluororubber Strap",
            "Sensors": "Heart Rate, SpO2, Accelerometer, Gyroscope, Barometer",
            "Water Resistance": "5 ATM (up to 50m)",
            "Battery Life": "Up to 12 days typical use"
        },
        reviews: [
            { author: "David L.", rating: 5, date: "2026-05-20", title: "Stunning Display", content: "The battery easily lasts 10 days, and the AMOLED display is sharp and readable even under direct sunlight. Premium construction.", verified: true }
        ]
    },
    {
        id: "aura-glowlight",
        name: "Aura GlowLight Desk Lamp",
        category: "Desk Setup",
        price: 89.00,
        oldPrice: 99.00,
        rating: 4.5,
        reviewsCount: 64,
        badge: "New",
        image: "assets/products/glowlight.png",
        thumbnails: [
            "assets/products/glowlight.png",
            "assets/products/glowlight-warm.png",
            "assets/products/glowlight-lifestyle.png"
        ],
        description: "Illuminate your workflow. The GlowLight is a smart LED desk lamp featuring dynamic color temperature adjustments (2700K - 6500K) and an integrated ambient back-light that reduces eye strain by projecting smooth glow gradients onto the wall behind your monitor.",
        colors: [
            { name: "Satin White", hex: "#F3F4F6" },
            { name: "Space Grey", hex: "#4B5563" }
        ],
        sizes: ["Standard Mount", "Desk Clamp Mount (+ $15)"],
        specs: {
            "Luminous Flux": "800 Lumens Max",
            "Color Temp": "2700K - 6500K (Stepless)",
            "Control": "Touch Slider & Companion Mobile App",
            "Power Input": "USB-C 12V 2A",
            "Desk Space footprint": "10cm diameter base"
        },
        reviews: [
            { author: "Liam T.", rating: 5, date: "2026-05-01", title: "Transformed my workspace", content: "The bias lighting on the back makes working late so much easier on the eyes. High build quality, sleek aluminum stem.", verified: true }
        ]
    },
    {
        id: "aura-chargedock",
        name: "Aura ChargeDock Trio",
        category: "Power",
        price: 79.00,
        rating: 4.6,
        reviewsCount: 112,
        badge: "",
        image: "assets/products/chargedock.png",
        thumbnails: [
            "assets/products/chargedock.png",
            "assets/products/chargedock-use.png"
        ],
        description: "The ultimate power hub for your daily essentials. Wirelessly charge your smartphone, smartwatch, and earbud case simultaneously. Featuring MagSafe-compatible alignment magnets encased in a sandblasted aluminum stand with a premium walnut wood base plate.",
        colors: [
            { name: "Walnut Dark", hex: "#3D2B1F" },
            { name: "Maple Light", hex: "#E8D3A7" }
        ],
        sizes: ["US Plug", "EU Plug", "UK Plug"],
        specs: {
            "Wireless Output": "Phone: 15W, Watch: 5W, Buds: 5W (25W Total Max)",
            "Input Port": "USB-C (Power Delivery 30W+ adapter required)",
            "Dimensions": "150mm x 90mm x 120mm",
            "Weight": "380g",
            "Safety Features": "Foreign Object Detection, Over-voltage protection"
        },
        reviews: [
            { author: "Elena R.", rating: 5, date: "2026-04-18", title: "Beautiful Walnut Base", content: "Looks beautiful on my nightstand. The MagSafe connection is strong, and it declutters all the charging cords.", verified: true }
        ]
    },
    {
        id: "aura-keyset84",
        name: "Aura Keyset-84 Keyboard",
        category: "Desk Setup",
        price: 189.00,
        rating: 4.9,
        reviewsCount: 88,
        badge: "Special Edition",
        image: "assets/products/keyset84.png",
        thumbnails: [
            "assets/products/keyset84.png",
            "assets/products/keyset84-profile.png",
            "assets/products/keyset84-box.png"
        ],
        description: "A compact 75% mechanical keyboard designed for tactile comfort and rich acoustics. Equipped with factory-lubed linear Silent Aura switches, hot-swappable sockets, and double-shot PBT keycaps. Encased in a solid CNC-milled walnut wood chassis with brass accent plates.",
        colors: [
            { name: "Natural Walnut", hex: "#5C4033" },
            { name: "Carbon Ash", hex: "#2B2C2C" }
        ],
        sizes: ["Linear Switches", "Tactile Switches", "Clicky Switches"],
        specs: {
            "Layout": "75% ANSI layout (84 keys)",
            "Switch Sockets": "5-pin hot-swappable",
            "Backlight": "South-facing customizable RGB",
            "Connectivity": "USB-C, 2.4GHz wireless, Bluetooth 5.1 (Up to 3 devices)",
            "Battery Capacity": "4000mAh"
        },
        reviews: [
            { author: "Alex G.", rating: 5, date: "2026-05-15", title: "Typing Heaven", content: "The sound signature is deep and quiet, like raindrops. The walnut chassis matches my solid wood desk perfectly. Best keyboard I own.", verified: true }
        ]
    },
    {
        id: "aura-soundpod",
        name: "Aura SoundPod Mini",
        category: "Audio",
        price: 119.00,
        rating: 4.4,
        reviewsCount: 76,
        badge: "",
        image: "assets/products/soundpod.png",
        thumbnails: [
            "assets/products/soundpod.png",
            "assets/products/soundpod-lifestyle.png"
        ],
        description: "A compact portable Bluetooth speaker that defies its size. Featuring a powerful 20W dual-passive radiator setup, the SoundPod Mini fills any space with rich 360-degree high-resolution sound. Fully waterproof and ruggedized with rubberized armor and tactile woven grill cloth.",
        colors: [
            { name: "Midnight Teal", hex: "#004B49" },
            { name: "Nordic Grey", hex: "#6B7280" },
            { name: "Lava Coral", hex: "#F05D5E" }
        ],
        sizes: ["Standard"],
        specs: {
            "Audio Output": "20W RMS (Class-D Amplifier)",
            "Waterproof Rating": "IP67 dust and water resistant",
            "Battery Life": "Up to 18 hours playtime",
            "Charging Time": "2.5 hours via USB-C fast charging",
            "Stereo Link": "Pair two speakers for stereo sound"
        },
        reviews: [
            { author: "Chloe M.", rating: 4, date: "2026-04-10", title: "Massive bass for the size", content: "I take this on hikes and to the pool. It sounds incredibly loud without distorting at high volumes.", verified: false }
        ]
    },
    {
        id: "aura-powercore",
        name: "Aura PowerCore Slim",
        category: "Power",
        price: 59.00,
        oldPrice: 69.00,
        rating: 4.5,
        reviewsCount: 154,
        badge: "Value Pick",
        image: "assets/products/powercore.png",
        thumbnails: [
            "assets/products/powercore.png",
            "assets/products/powercore-ports.png"
        ],
        description: "Ultra-high capacity meets ultra-sleek design. Encased in a tactile sandblasted space-aluminum shell, this 20,000mAh power bank supports 45W Power Delivery to fast-charge smartphones, tablets, and even compatible USB-C laptops. Features a smart LED screen showing precise charge percentage.",
        colors: [
            { name: "Graphite Grey", hex: "#374151" },
            { name: "Titanium Silver", hex: "#E5E7EB" }
        ],
        sizes: ["20,000 mAh", "10,000 mAh (- $20)"],
        specs: {
            "Capacity": "20,000mAh / 74Wh",
            "Ports": "2x USB-C (In/Out), 1x USB-A (Out)",
            "Power Delivery": "45W USB-C PD 3.0",
            "Recharging Time": "3 hours using a 45W charger",
            "Weight": "320g"
        },
        reviews: [
            { author: "Ryan H.", rating: 5, date: "2026-05-08", title: "Charges my MacBook!", content: "Excellent companion for work travel. It can top up my laptop and phone simultaneously. The metal casing is highly durable.", verified: true }
        ]
    },
    {
        id: "aura-bandlite",
        name: "Aura Band Lite Tracker",
        category: "Wearables",
        price: 69.00,
        rating: 4.2,
        reviewsCount: 41,
        badge: "",
        image: "assets/products/bandlite.png",
        thumbnails: [
            "assets/products/bandlite.png",
            "assets/products/bandlite-back.png"
        ],
        description: "Strip away the noise and focus on what matters. The Band Lite tracker features a high-contrast e-paper display that consumes virtually zero power, granting up to 30 days of continuous battery life. Automatically tracks step count, sleep scores, heart rate variability, and passive breathing rate.",
        colors: [
            { name: "Charcoal Black", hex: "#1f1f1f" },
            { name: "Arctic Mist", hex: "#E1E8EB" }
        ],
        sizes: ["Standard Fit", "Sport Perforated Strap (+ $10)"],
        specs: {
            "Display": "1.1\" Always-On Reflective E-Paper",
            "Sensors": "Optical HR Sensor, 3-axis accelerometer, SpO2 sensor",
            "Battery Life": "Up to 30 days battery life",
            "Compatibility": "iOS & Android companion app integration",
            "Weight": "18g featherweight design"
        },
        reviews: [
            { author: "Naomi W.", rating: 4, date: "2026-05-19", title: "Forget it is on my wrist", content: "Super light, battery lasts forever. The e-paper screen is extremely crisp and readable outside. Highly recommend if you want to detox from smartwatch screen notifications.", verified: true }
        ]
    }
];
