const { neon } = require('@neondatabase/serverless');
require('dotenv').config({ path: '.env.local' });

// Initialize database connection
const sql = neon(process.env.DATABASE_URL);

const existingProjects = [
  {
    title: "SmartHome Security - IoT Surveillance System",
    slug: "smarthome-security-iot",
    description: "Comprehensive IoT home surveillance system using STM32F407VG microcontroller with multi-sensor integration, real-time monitoring, cloud connectivity, and intelligent alert system for complete home security automation.",
    long_description: "A comprehensive IoT solution featuring STM32F407VG microcontroller, multi-sensor integration (Gas, Presence, Smoke), real-time ThingSpeak cloud integration, intelligent alert system, UART communication protocol, ADC for analog sensor reading, automated LED & buzzer control, and 30-minute gas alert system. This project showcases advanced embedded systems programming and IoT cloud connectivity.",
    category: "IoT & Embedded Systems",
    technologies: ["STM32F407VG", "C/C++", "ESP8266", "ThingSpeak IoT", "ADC", "UART", "GPIO", "Embedded Systems"],
    features: [
      "STM32F407VG Microcontroller",
      "Multi-Sensor Integration (Gas, Presence, Smoke)",
      "Real-time ThingSpeak Cloud Integration", 
      "Intelligent Alert System",
      "UART Communication Protocol",
      "ADC for Analog Sensor Reading",
      "Automated LED & Buzzer Control",
      "30-min Gas Alert System"
    ],
    image_url: "/api/placeholder/600/400",
    github_url: "https://github.com/Attafii/SmartHome-Security",
    demo_url: null,
    status: "Completed",
    featured: true
  },
  {
    title: "ArchiFlow - Architecture Office Management",
    slug: "archiflow-architecture-management",
    description: "Comprehensive Qt-based desktop application for architecture office management with AI integration, mapping services, and modular design for complete business workflow automation.",
    long_description: "A full-featured desktop application built with Qt 6.x and C++17, featuring employee management, project tracking, contract management, materials inventory, invoice generation, and AI assistant integration. The application includes SQLite database, Groq AI integration, Mapbox mapping services, and modular CMake build system.",
    category: "Desktop Application",
    technologies: ["Qt 6.x", "C++17", "SQLite", "Groq AI", "Mapbox", "CMake"],
    features: [
      "Employee Management System",
      "Project Tracking & Timeline",
      "Contract Management",
      "Materials Inventory",
      "Invoice Generation",
      "AI Assistant Integration",
      "Mapping Services",
      "Modular Architecture"
    ],
    image_url: "/api/placeholder/600/400",
    github_url: "https://github.com/Attafii/Archiflow",
    demo_url: null,
    status: "Completed",
    featured: true
  },
  {
    title: "IntelliConnect - Project Management Dashboard",
    slug: "intelliconnect-project-management",
    description: "Modern, comprehensive project management dashboard with AI-powered analytics, glassmorphism design, and intelligent insights. Features multilingual chatbot, 3D elements, and advanced data visualization.",
    long_description: "A cutting-edge project management platform built with Next.js 14 and TypeScript, featuring AI chatbot assistant in 3 languages, glassmorphism UI design, 3D Spline models integration, document intelligence, real-time analytics, global search system, project timeline management, and financial dashboard. The application showcases modern web technologies and user experience design.",
    category: "Web Development",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Spline 3D", "Radix UI"],
    features: [
      "AI Chatbot Assistant (3 Languages)",
      "Glassmorphism UI Design",
      "3D Spline Models Integration",
      "Document Intelligence",
      "Real-time Analytics",
      "Global Search System",
      "Project Timeline Management",
      "Financial Dashboard"
    ],
    image_url: "/api/placeholder/600/400",
    github_url: "https://github.com/Attafii/IntelliConnect",
    demo_url: null,
    status: "Completed",
    featured: true
  },
  {
    title: "Africa Above - Corporate Website",
    slug: "africa-above-corporate",
    description: "Professional corporate website built with WordPress and Elementor, featuring modern design, responsive layout, and optimized performance for business presence.",
    long_description: "A professional corporate website developed using WordPress and Elementor, featuring custom design, mobile optimization, SEO-friendly structure, and fast loading performance. The website showcases business services, company information, and contact features with a modern and clean design approach.",
    category: "WordPress Development",
    technologies: ["WordPress", "Elementor", "PHP", "MySQL", "CSS3"],
    features: [
      "Custom Design & Layout",
      "Mobile Responsive Design",
      "SEO Optimization",
      "Fast Loading Performance",
      "Contact Forms",
      "Service Showcase",
      "Admin Dashboard",
      "Content Management"
    ],
    image_url: "/api/placeholder/600/400",
    github_url: null,
    demo_url: "https://africaabove.com",
    status: "Live",
    featured: true
  },
  {
    title: "Adams Coffee Co - E-commerce Site",
    slug: "adams-coffee-ecommerce",
    description: "Professional coffee e-commerce website with custom design, product showcase, and seamless user experience using WordPress and Elementor.",
    long_description: "A complete e-commerce solution for coffee retail business built with WordPress and WooCommerce. Features include product catalog management, shopping cart functionality, payment gateway integration, inventory management, customer accounts, order tracking, and mobile-responsive design optimized for conversions.",
    category: "WordPress Development",
    technologies: ["WordPress", "WooCommerce", "Elementor", "Payment Gateway", "PHP", "MySQL"],
    features: [
      "Product Catalog Management",
      "Shopping Cart & Checkout",
      "Payment Gateway Integration",
      "Inventory Management",
      "Customer Account System",
      "Order Tracking",
      "Mobile Responsive",
      "SEO Optimized"
    ],
    image_url: "/api/placeholder/600/400",
    github_url: null,
    demo_url: "https://adamscoffeeco.co.za",
    status: "Live",
    featured: true
  },
  {
    title: "Portfolio Website - Personal Brand",
    slug: "portfolio-personal-brand",
    description: "Modern, responsive portfolio website built with Next.js 15, featuring advanced animations, AI chatbot, newsletter integration, and comprehensive admin dashboard.",
    long_description: "A cutting-edge personal portfolio website showcasing modern web development skills. Built with Next.js 15, TypeScript, and Tailwind CSS 4, featuring Framer Motion animations, AI-powered chatbot, newsletter system with Resend integration, comprehensive admin dashboard, database integration with Neon PostgreSQL, and modern UI components. The site demonstrates full-stack development capabilities and modern design principles.",
    category: "Web Development",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Neon PostgreSQL", "Drizzle ORM", "Resend", "NextAuth"],
    features: [
      "Modern Responsive Design",
      "Advanced Framer Motion Animations",
      "AI-Powered Chatbot",
      "Newsletter Integration",
      "Admin Dashboard",
      "Database Integration",
      "Contact Form System",
      "Blog Management",
      "Project Showcase",
      "Skills Management"
    ],
    image_url: "/api/placeholder/600/400",
    github_url: "https://github.com/Attafii/Portfolio",
    demo_url: "https://attafii.dev",
    status: "Live",
    featured: true
  }
];

const existingBlogPosts = [
  {
    title: "Building Scalable IoT Systems with Arduino and Cloud",
    slug: "building-scalable-iot-systems-arduino-cloud",
    excerpt: "Learn how to create robust IoT solutions that can handle thousands of devices while maintaining real-time responsiveness and reliability.",
    content: "In this comprehensive guide, I share my experience building large-scale IoT systems from prototype to production. We'll explore the architecture decisions, technology choices, and best practices that enable IoT systems to scale effectively.\n\nStarting with Arduino as the foundation, we'll discuss how to design sensor networks that can grow from a few devices to thousands while maintaining real-time responsiveness. Key topics include:\n\n## Architecture Design\n- Microcontroller selection and optimization\n- Communication protocols (MQTT, HTTP, WebSocket)\n- Data serialization and compression\n- Network topology considerations\n\n## Cloud Integration\n- Choosing the right cloud platform\n- Database design for IoT data\n- Real-time data processing\n- Analytics and visualization\n\n## Scalability Challenges\n- Device management at scale\n- Security considerations\n- Over-the-air updates\n- Error handling and recovery\n\nBy the end of this guide, you'll have a solid understanding of how to build IoT systems that can grow with your needs while maintaining performance and reliability.",
    category: "IoT",
    tags: ["Arduino", "IoT", "Cloud", "Scalability", "MQTT", "Real-time"],
    read_time: "8 min read",
    published_at: "2024-01-15T10:00:00Z",
    featured: true,
    external_url: "https://medium.com/@attafii/building-scalable-iot-systems"
  },
  {
    title: "QA Best Practices in Automotive Software Development",
    slug: "qa-best-practices-automotive-software",
    excerpt: "Discover essential testing strategies and quality assurance practices specifically tailored for automotive software systems.",
    content: "The automotive industry demands the highest quality standards for software systems. Safety-critical applications require rigorous testing methodologies and quality assurance practices that go beyond traditional software development.\n\n## Industry Standards and Compliance\n- ISO 26262 functional safety standard\n- ASPICE (Automotive Software Process Improvement)\n- MISRA C coding standards\n- Cybersecurity requirements (ISO/SAE 21434)\n\n## Testing Strategies\n### Unit Testing\n- Code coverage requirements (typically 95%+)\n- Static analysis tools integration\n- Automated test generation\n- Mock and stub strategies for hardware dependencies\n\n### Integration Testing\n- Hardware-in-the-loop (HIL) testing\n- Software-in-the-loop (SIL) testing\n- Bus communication validation\n- Timing and performance testing\n\n### System Testing\n- End-to-end scenario validation\n- Environmental testing conditions\n- Fail-safe behavior verification\n- User acceptance criteria\n\n## Tools and Technologies\n- Vector CANoe for network testing\n- LDRA for static analysis\n- TestComplete for automated testing\n- Jenkins for CI/CD pipelines\n\n## Quality Metrics\n- Defect density tracking\n- Test coverage analysis\n- Performance benchmarking\n- Compliance reporting\n\nImplementing these practices ensures that automotive software meets the stringent requirements for safety, reliability, and performance in modern vehicles.",
    category: "Quality Assurance",
    tags: ["QA", "Automotive", "Testing", "C#", "ISO26262", "Safety"],
    read_time: "6 min read",
    published_at: "2024-01-08T14:30:00Z",
    featured: true,
    external_url: "https://medium.com/@attafii/qa-automotive-software"
  },
  {
    title: "From Tunisia to Tech: My Journey as a Software Engineer",
    slug: "tunisia-tech-journey-software-engineer",
    excerpt: "A personal story about breaking into the tech industry, overcoming challenges, and building a career in software development.",
    content: "Starting from a small town in Tunisia, here's how I navigated the challenges and opportunities in the tech world to build a successful career as a software engineer.\n\n## The Beginning\nGrowing up in Tunisia, access to technology and programming resources was limited. However, curiosity and determination drove me to explore the world of software development through online tutorials, forums, and self-directed learning.\n\n## Early Challenges\n### Language Barriers\n- Most programming resources were in English\n- Technical documentation and tutorials\n- Community participation and networking\n\n### Limited Resources\n- Internet connectivity issues\n- Hardware limitations\n- Lack of local tech community\n\n### Educational Gaps\n- Traditional curriculum vs. industry needs\n- Practical experience opportunities\n- Mentorship and guidance\n\n## Learning Path\n### Self-Directed Education\n- Online courses and tutorials\n- Open source project contributions\n- Building personal projects\n- Participating in coding challenges\n\n### Skill Development\n- Programming languages: C++, C#, JavaScript\n- Web development: HTML, CSS, React, Node.js\n- Database technologies: SQL Server, PostgreSQL\n- IoT and embedded systems: Arduino, Raspberry Pi\n\n### Professional Growth\n- Freelance projects and client work\n- Contributing to open source projects\n- Building a portfolio and online presence\n- Networking with international developers\n\n## Breakthrough Moments\n### First International Project\nLanding my first project with a client outside Tunisia opened doors to global opportunities and exposed me to international standards and practices.\n\n### Automotive Industry Entry\nTransitioning into automotive software development provided exposure to high-quality standards and rigorous testing practices that shaped my professional approach.\n\n### Specialization in IoT\nFocusing on IoT and embedded systems allowed me to combine hardware and software skills, creating unique value in the market.\n\n## Lessons Learned\n1. **Persistence is Key**: Consistent learning and practice, even with limited resources\n2. **Global Perspective**: Technology knows no boundaries - think globally from day one\n3. **Quality over Quantity**: Focus on building high-quality solutions rather than many mediocre ones\n4. **Community Matters**: Engage with the global developer community for learning and opportunities\n5. **Continuous Learning**: Technology evolves rapidly - embrace lifelong learning\n\n## Advice for Aspiring Developers\n- Start with the fundamentals and build solid foundations\n- Work on real projects, not just tutorials\n- Document your journey and share your knowledge\n- Don't let location or resources limit your ambitions\n- Network with developers worldwide through online communities\n- Focus on solving real problems with technology\n\n## Current Focus\nToday, I continue to work on challenging projects that span IoT, web development, and quality assurance. My goal is to bridge the gap between traditional industries and modern technology while mentoring the next generation of developers.\n\nThe journey from Tunisia to the global tech industry has been challenging but incredibly rewarding. It's proof that with determination, continuous learning, and the right mindset, geographical boundaries don't limit technological ambitions.",
    category: "Personal",
    tags: ["Career", "Personal Story", "Inspiration", "Tunisia", "Software Engineering", "Journey"],
    read_time: "5 min read",
    published_at: "2024-01-01T08:00:00Z",
    featured: false,
    external_url: "https://medium.com/@attafii/tunisia-tech-journey"
  },
  {
    title: "Real-time Data Processing in IoT Applications",
    slug: "realtime-data-processing-iot-applications",
    excerpt: "Explore techniques for handling real-time data streams in IoT applications using modern technologies and best practices.",
    content: "Real-time data processing is crucial for IoT applications where immediate response to sensor data can make the difference between success and failure. This guide explores the architecture, technologies, and best practices for building effective real-time IoT systems.\n\n## Understanding Real-time Requirements\n### Latency Classifications\n- **Hard Real-time**: Microseconds to milliseconds (safety-critical systems)\n- **Soft Real-time**: Milliseconds to seconds (monitoring systems)\n- **Near Real-time**: Seconds to minutes (analytics and reporting)\n\n### Data Characteristics\n- **Volume**: Thousands to millions of data points per second\n- **Velocity**: Continuous, high-frequency streams\n- **Variety**: Multiple sensor types and data formats\n- **Veracity**: Data quality and reliability considerations\n\n## Architecture Patterns\n### Lambda Architecture\n- **Speed Layer**: Real-time processing for immediate insights\n- **Batch Layer**: Comprehensive processing for accuracy\n- **Serving Layer**: Unified view of both processed results\n\n### Kappa Architecture\n- Simplified approach using only stream processing\n- Single technology stack for all data processing\n- Event sourcing and stream replay capabilities\n\n## Technology Stack\n### Message Brokers\n- **Apache Kafka**: High-throughput, fault-tolerant streaming\n- **MQTT**: Lightweight protocol for IoT devices\n- **Redis Streams**: In-memory streaming with persistence\n- **Apache Pulsar**: Multi-tenant, geo-replicated messaging\n\n### Stream Processing Engines\n- **Apache Kafka Streams**: Lightweight, library-based processing\n- **Apache Flink**: Low-latency, high-throughput processing\n- **Apache Storm**: Real-time computation system\n- **Azure Stream Analytics**: Cloud-native stream processing\n\n### Time Series Databases\n- **InfluxDB**: Purpose-built for time series data\n- **TimescaleDB**: PostgreSQL extension for time series\n- **Amazon Timestream**: Serverless time series database\n- **Apache Cassandra**: Distributed database for large-scale data\n\n## Implementation Strategies\n### Data Ingestion\n```javascript\n// MQTT data ingestion example\nconst mqtt = require('mqtt');\nconst client = mqtt.connect('mqtt://broker.example.com');\n\nclient.on('message', (topic, message) => {\n  const sensorData = JSON.parse(message.toString());\n  \n  // Validate and enrich data\n  const enrichedData = {\n    ...sensorData,\n    timestamp: Date.now(),\n    deviceId: extractDeviceId(topic)\n  };\n  \n  // Forward to stream processing\n  streamProcessor.send(enrichedData);\n});\n```\n\n### Stream Processing\n```javascript\n// Kafka Streams processing example\nconst KafkaStreams = require('kafka-streams');\nconst stream = kafkaStreams.getKStream('sensor-data');\n\nstream\n  .filter(data => data.temperature > 25)\n  .map(data => ({\n    ...data,\n    alert: data.temperature > 30 ? 'HIGH' : 'NORMAL'\n  }))\n  .to('processed-data');\n```\n\n### Real-time Analytics\n- **Windowing**: Time-based aggregations\n- **Complex Event Processing**: Pattern detection\n- **Machine Learning**: Anomaly detection\n- **Alerting**: Threshold-based notifications\n\n## Performance Optimization\n### Throughput Optimization\n- Batch processing where possible\n- Asynchronous operations\n- Connection pooling\n- Load balancing\n\n### Latency Reduction\n- Edge computing deployment\n- In-memory processing\n- Protocol optimization\n- Network topology optimization\n\n### Scalability Patterns\n- Horizontal partitioning\n- Auto-scaling capabilities\n- Load distribution strategies\n- Backpressure handling\n\n## Monitoring and Observability\n### Key Metrics\n- **Throughput**: Messages processed per second\n- **Latency**: End-to-end processing time\n- **Error Rate**: Failed message percentage\n- **Resource Utilization**: CPU, memory, network usage\n\n### Monitoring Tools\n- Prometheus and Grafana for metrics\n- ELK stack for log analysis\n- Jaeger for distributed tracing\n- Custom dashboards for business metrics\n\n## Best Practices\n1. **Design for Failure**: Implement retry mechanisms and circuit breakers\n2. **Data Quality**: Validate and clean data at ingestion\n3. **Schema Evolution**: Plan for changing data formats\n4. **Security**: Encrypt data in transit and at rest\n5. **Testing**: Implement comprehensive testing strategies\n6. **Documentation**: Maintain clear system documentation\n\n## Conclusion\nBuilding effective real-time data processing systems for IoT requires careful consideration of architecture, technology choices, and implementation details. By following these patterns and best practices, you can create systems that handle massive data volumes while maintaining low latency and high reliability.",
    category: "IoT",
    tags: ["IoT", "Real-time", "Data Processing", "MQTT", "Kafka", "Stream Processing"],
    read_time: "7 min read",
    published_at: "2023-12-20T16:45:00Z",
    featured: false,
    external_url: "https://medium.com/@attafii/realtime-data-processing-iot"
  },
  {
    title: "Automated Testing Strategies for Modern Web Applications",
    slug: "automated-testing-strategies-web-applications",
    excerpt: "A comprehensive guide to implementing effective automated testing strategies for web applications using modern tools.",
    content: "Automated testing is essential for maintaining code quality and ensuring reliable deployments in modern web applications. This comprehensive guide covers strategies, tools, and best practices for building robust test suites.\n\n## Testing Pyramid\n### Unit Tests (Foundation)\n- **Purpose**: Test individual functions and components\n- **Coverage**: 70-80% of total tests\n- **Speed**: Fast execution (milliseconds)\n- **Scope**: Isolated functionality testing\n\n### Integration Tests (Middle)\n- **Purpose**: Test component interactions\n- **Coverage**: 15-20% of total tests\n- **Speed**: Moderate execution (seconds)\n- **Scope**: API endpoints, database interactions\n\n### End-to-End Tests (Top)\n- **Purpose**: Test complete user workflows\n- **Coverage**: 5-10% of total tests\n- **Speed**: Slow execution (minutes)\n- **Scope**: Critical user journeys\n\n## Testing Strategies\n### Test-Driven Development (TDD)\n1. Write failing test\n2. Implement minimal code to pass\n3. Refactor and improve\n4. Repeat cycle\n\n### Behavior-Driven Development (BDD)\n- **Given**: Initial context\n- **When**: Action or event\n- **Then**: Expected outcome\n\n## Frontend Testing\n### Component Testing\n```javascript\n// React component test example\nimport { render, screen, fireEvent } from '@testing-library/react';\nimport Button from './Button';\n\ntest('calls onClick handler when clicked', () => {\n  const handleClick = jest.fn();\n  render(<Button onClick={handleClick}>Click me</Button>);\n  \n  fireEvent.click(screen.getByText('Click me'));\n  expect(handleClick).toHaveBeenCalledTimes(1);\n});\n```\n\n### Visual Regression Testing\n- **Storybook**: Component documentation and testing\n- **Chromatic**: Visual testing platform\n- **Percy**: Visual review and approval workflow\n- **Playwright**: Cross-browser visual testing\n\n### Accessibility Testing\n- **axe-core**: Automated accessibility testing\n- **jest-axe**: Jest integration for a11y testing\n- **Lighthouse CI**: Performance and accessibility audits\n\n## Backend Testing\n### API Testing\n```javascript\n// API endpoint test example\nconst request = require('supertest');\nconst app = require('../app');\n\ndescribe('POST /api/users', () => {\n  test('creates new user with valid data', async () => {\n    const userData = {\n      name: 'John Doe',\n      email: 'john@example.com'\n    };\n    \n    const response = await request(app)\n      .post('/api/users')\n      .send(userData)\n      .expect(201);\n    \n    expect(response.body).toMatchObject(userData);\n    expect(response.body.id).toBeDefined();\n  });\n});\n```\n\n### Database Testing\n- **Test Containers**: Isolated database instances\n- **Database Migrations**: Schema change testing\n- **Data Factories**: Consistent test data generation\n- **Transaction Rollbacks**: Clean test state\n\n## End-to-End Testing\n### Modern E2E Tools\n- **Playwright**: Cross-browser automation\n- **Cypress**: Developer-friendly testing\n- **Puppeteer**: Chrome-specific automation\n- **Selenium**: Traditional web automation\n\n### Page Object Model\n```javascript\n// Page Object example\nclass LoginPage {\n  constructor(page) {\n    this.page = page;\n    this.emailInput = page.locator('[data-testid=\"email\"]');\n    this.passwordInput = page.locator('[data-testid=\"password\"]');\n    this.loginButton = page.locator('[data-testid=\"login-button\"]');\n  }\n  \n  async login(email, password) {\n    await this.emailInput.fill(email);\n    await this.passwordInput.fill(password);\n    await this.loginButton.click();\n  }\n}\n```\n\n## CI/CD Integration\n### Pipeline Configuration\n```yaml\n# GitHub Actions example\nname: Test Suite\non: [push, pull_request]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v2\n        with:\n          node-version: '18'\n      \n      - name: Install dependencies\n        run: npm ci\n      \n      - name: Run unit tests\n        run: npm run test:unit\n      \n      - name: Run integration tests\n        run: npm run test:integration\n      \n      - name: Run E2E tests\n        run: npm run test:e2e\n```\n\n### Test Reporting\n- **Coverage Reports**: Istanbul, Jest coverage\n- **Test Results**: JUnit XML format\n- **Performance Metrics**: Lighthouse CI reports\n- **Security Scans**: SAST/DAST integration\n\n## Performance Testing\n### Load Testing Tools\n- **Artillery**: Scriptable load testing\n- **k6**: Developer-centric performance testing\n- **JMeter**: Comprehensive performance testing\n- **Gatling**: High-performance load testing\n\n### Metrics to Monitor\n- **Response Time**: Request/response latency\n- **Throughput**: Requests per second\n- **Error Rate**: Failed request percentage\n- **Resource Utilization**: CPU, memory, network\n\n## Testing Best Practices\n### Test Organization\n1. **Arrange, Act, Assert**: Clear test structure\n2. **Descriptive Names**: Explain what is being tested\n3. **Independent Tests**: No shared state between tests\n4. **Fast Feedback**: Quick test execution\n\n### Test Data Management\n- **Factories and Builders**: Consistent test data\n- **Test Fixtures**: Reusable test scenarios\n- **Database Seeding**: Controlled test environment\n- **Mock Services**: External dependency isolation\n\n### Maintenance Strategies\n- **Regular Test Review**: Remove obsolete tests\n- **Flaky Test Detection**: Identify unreliable tests\n- **Test Code Quality**: Apply same standards as production\n- **Documentation**: Clear test purpose and setup\n\n## Advanced Topics\n### Contract Testing\n- **Pact**: Consumer-driven contract testing\n- **OpenAPI**: API specification testing\n- **Schema Validation**: Data structure verification\n\n### Chaos Engineering\n- **Fault Injection**: Deliberate failure introduction\n- **Resilience Testing**: System recovery validation\n- **Monitoring**: Observability during chaos\n\n### Mobile Testing\n- **Appium**: Cross-platform mobile automation\n- **Detox**: React Native testing framework\n- **Device Farms**: Cloud-based device testing\n\n## Conclusion\nImplementing comprehensive automated testing strategies requires balancing coverage, speed, and maintenance overhead. Start with a solid foundation of unit tests, add integration tests for critical paths, and use end-to-end tests sparingly for the most important user journeys. \n\nRegular review and maintenance of your test suite ensures it continues to provide value as your application evolves. Remember, the goal is not just test coverage, but confidence in your deployments and faster development cycles.",
    category: "Testing",
    tags: ["Testing", "Automation", "Web Development", "CI/CD", "Jest", "Playwright"],
    read_time: "9 min read",
    published_at: "2023-12-10T11:20:00Z",
    featured: false,
    external_url: "https://medium.com/@attafii/automated-testing-strategies"
  },
  {
    title: "Building Your First Arduino IoT Project",
    slug: "building-first-arduino-iot-project",
    excerpt: "A beginner-friendly guide to creating your first IoT project with Arduino, sensors, and cloud connectivity.",
    content: "New to IoT? This step-by-step tutorial will help you build your first connected device using Arduino, sensors, and cloud services. We'll create a temperature and humidity monitoring system that sends data to the cloud.\n\n## What You'll Need\n### Hardware Components\n- **Arduino Uno R3**: Microcontroller board\n- **ESP8266 WiFi Module**: For internet connectivity\n- **DHT22 Sensor**: Temperature and humidity measurement\n- **Breadboard**: For prototyping connections\n- **Jumper Wires**: For connections\n- **Resistors**: 10kΩ pull-up resistor\n- **Power Supply**: USB cable or external power\n\n### Software Requirements\n- **Arduino IDE**: Development environment\n- **DHT Sensor Library**: For sensor communication\n- **ESP8266WiFi Library**: For WiFi connectivity\n- **ThingSpeak Account**: Cloud data platform (free)\n\n## Setting Up the Hardware\n### Circuit Connections\n```\nDHT22 Sensor:\n- VCC → Arduino 5V\n- GND → Arduino GND\n- DATA → Arduino Pin 2\n- Pull-up resistor (10kΩ) between VCC and DATA\n\nESP8266 Module:\n- VCC → Arduino 3.3V\n- GND → Arduino GND\n- TX → Arduino Pin 3 (SoftwareSerial RX)\n- RX → Arduino Pin 4 (SoftwareSerial TX)\n- CH_PD → Arduino 3.3V\n```\n\n### Breadboard Layout\n1. Place Arduino Uno on the breadboard\n2. Connect DHT22 sensor to digital pin 2\n3. Wire ESP8266 module for serial communication\n4. Add pull-up resistor for DHT22\n5. Double-check all connections\n\n## Setting Up the Software\n### Arduino IDE Configuration\n1. **Install Libraries**:\n   - Go to Sketch → Include Library → Manage Libraries\n   - Search and install \"DHT sensor library\"\n   - Install \"ESP8266WiFi\" library\n\n2. **Configure Board**:\n   - Select Tools → Board → Arduino Uno\n   - Choose correct COM port\n   - Set baud rate to 9600\n\n### ThingSpeak Setup\n1. **Create Account**: Sign up at thingspeak.com\n2. **Create Channel**:\n   - Name: \"Arduino IoT Monitor\"\n   - Field 1: \"Temperature\"\n   - Field 2: \"Humidity\"\n3. **Get API Key**: Copy Write API Key for later use\n\n## Writing the Code\n### Complete Arduino Sketch\n```cpp\n#include <SoftwareSerial.h>\n#include <DHT.h>\n\n// Pin definitions\n#define DHT_PIN 2\n#define DHT_TYPE DHT22\n\n// Initialize objects\nDHT dht(DHT_PIN, DHT_TYPE);\nSoftwareSerial esp8266(3, 4); // RX, TX\n\n// WiFi credentials\nconst char* ssid = \"YourWiFiName\";\nconst char* password = \"YourWiFiPassword\";\n\n// ThingSpeak settings\nconst char* apiKey = \"YourThingSpeakAPIKey\";\nconst char* server = \"api.thingspeak.com\";\n\nvoid setup() {\n  // Initialize serial communication\n  Serial.begin(9600);\n  esp8266.begin(9600);\n  \n  // Initialize DHT sensor\n  dht.begin();\n  \n  // Initialize ESP8266\n  initializeESP8266();\n  \n  Serial.println(\"IoT monitoring system ready!\");\n}\n\nvoid loop() {\n  // Read sensor data\n  float temperature = dht.readTemperature();\n  float humidity = dht.readHumidity();\n  \n  // Check if readings are valid\n  if (isnan(temperature) || isnan(humidity)) {\n    Serial.println(\"Failed to read from DHT sensor!\");\n    delay(5000);\n    return;\n  }\n  \n  // Display readings\n  Serial.print(\"Temperature: \");\n  Serial.print(temperature);\n  Serial.println(\"°C\");\n  \n  Serial.print(\"Humidity: \");\n  Serial.print(humidity);\n  Serial.println(\"%\");\n  \n  // Send data to ThingSpeak\n  sendToThingSpeak(temperature, humidity);\n  \n  // Wait 20 seconds before next reading\n  delay(20000);\n}\n\nvoid initializeESP8266() {\n  // Reset ESP8266\n  esp8266.println(\"AT+RST\");\n  delay(2000);\n  \n  // Set to station mode\n  esp8266.println(\"AT+CWMODE=1\");\n  delay(1000);\n  \n  // Connect to WiFi\n  String connectCmd = \"AT+CWJAP=\\\"\" + String(ssid) + \"\\\",\\\"\" + String(password) + \"\\\"\";\n  esp8266.println(connectCmd);\n  delay(5000);\n  \n  Serial.println(\"ESP8266 initialized\");\n}\n\nvoid sendToThingSpeak(float temp, float hum) {\n  // Prepare data string\n  String data = \"field1=\" + String(temp) + \"&field2=\" + String(hum);\n  \n  // Start TCP connection\n  esp8266.println(\"AT+CIPSTART=\\\"TCP\\\",\\\"\" + String(server) + \"\\\",80\");\n  delay(2000);\n  \n  // Prepare HTTP request\n  String httpRequest = \"POST /update HTTP/1.1\\r\\n\";\n  httpRequest += \"Host: \" + String(server) + \"\\r\\n\";\n  httpRequest += \"Connection: close\\r\\n\";\n  httpRequest += \"X-THINGSPEAKAPIKEY: \" + String(apiKey) + \"\\r\\n\";\n  httpRequest += \"Content-Type: application/x-www-form-urlencoded\\r\\n\";\n  httpRequest += \"Content-Length: \" + String(data.length()) + \"\\r\\n\\r\\n\";\n  httpRequest += data;\n  \n  // Send HTTP request\n  esp8266.println(\"AT+CIPSEND=\" + String(httpRequest.length()));\n  delay(1000);\n  esp8266.print(httpRequest);\n  delay(2000);\n  \n  // Close connection\n  esp8266.println(\"AT+CIPCLOSE\");\n  \n  Serial.println(\"Data sent to ThingSpeak\");\n}\n```\n\n## Testing and Deployment\n### Initial Testing\n1. **Upload Code**: Flash the sketch to Arduino\n2. **Monitor Serial**: Check Serial Monitor for output\n3. **Verify Readings**: Ensure sensor data appears\n4. **Check Connectivity**: Confirm WiFi connection\n\n### Troubleshooting Common Issues\n- **No sensor readings**: Check DHT22 connections and library\n- **WiFi connection failed**: Verify credentials and range\n- **Data not appearing**: Check ThingSpeak API key\n- **Erratic readings**: Add delays and error checking\n\n### ThingSpeak Visualization\n1. **View Channel**: Go to your ThingSpeak channel\n2. **Real-time Data**: See live temperature and humidity\n3. **Create Widgets**: Add gauges and charts\n4. **Set Alerts**: Configure threshold notifications\n\n## Enhancing Your Project\n### Hardware Improvements\n- **Add More Sensors**: Light, motion, air quality\n- **Power Optimization**: Battery power and sleep modes\n- **Enclosure**: Weatherproof housing for outdoor use\n- **Display**: LCD screen for local readouts\n\n### Software Enhancements\n- **Error Handling**: Robust error detection and recovery\n- **Data Validation**: Sensor reading verification\n- **Local Storage**: SD card for offline data logging\n- **OTA Updates**: Over-the-air code updates\n\n### Cloud Platform Alternatives\n- **AWS IoT Core**: Enterprise-grade IoT platform\n- **Google Cloud IoT**: Machine learning integration\n- **Azure IoT Hub**: Microsoft cloud services\n- **Blynk**: Mobile app integration\n\n## Next Steps\n### Learning Path\n1. **Explore More Sensors**: Expand monitoring capabilities\n2. **Learn MQTT**: Efficient IoT communication protocol\n3. **Database Integration**: Store data in databases\n4. **Mobile Apps**: Create companion mobile applications\n5. **Machine Learning**: Add predictive analytics\n\n### Project Ideas\n- **Smart Home Automation**: Control lights and appliances\n- **Garden Monitoring**: Soil moisture and plant care\n- **Weather Station**: Comprehensive environmental monitoring\n- **Security System**: Motion detection and alerts\n- **Energy Monitor**: Track power consumption\n\n## Resources\n### Documentation\n- [Arduino Official Documentation](https://docs.arduino.cc/)\n- [ESP8266 Community Wiki](https://arduino-esp8266.readthedocs.io/)\n- [DHT Sensor Library Guide](https://github.com/adafruit/DHT-sensor-library)\n- [ThingSpeak Documentation](https://www.mathworks.com/help/thingspeak/)\n\n### Communities\n- **Arduino Forum**: Official community support\n- **Reddit r/Arduino**: Community discussions\n- **Stack Overflow**: Technical Q&A\n- **GitHub**: Open source projects and libraries\n\n## Conclusion\nCongratulations! You've built your first IoT project that connects physical sensors to the cloud. This foundation opens up endless possibilities for creating smart, connected devices.\n\nThe key to successful IoT development is starting simple and gradually adding complexity. Experiment with different sensors, explore various cloud platforms, and most importantly, have fun building connected solutions that solve real problems.\n\nRemember to document your projects, share your experiences with the community, and keep learning. The IoT ecosystem is vast and constantly evolving, offering exciting opportunities for innovation and creativity.",
    category: "Tutorial",
    tags: ["Arduino", "Beginner", "Tutorial", "IoT", "DHT22", "ESP8266", "ThingSpeak"],
    read_time: "10 min read",
    published_at: "2023-11-25T09:15:00Z",
    featured: false,
    external_url: "https://medium.com/@attafii/first-arduino-iot-project"
  }
];

async function populateDatabase() {
  try {
    console.log('🚀 Starting database population...');

    // Clear existing data
    console.log('🧹 Clearing existing projects and blog posts...');
    await sql`DELETE FROM projects WHERE id > 0`;
    await sql`DELETE FROM blog_posts WHERE id > 0`;

    // Reset sequences
    await sql`ALTER SEQUENCE projects_id_seq RESTART WITH 1`;
    await sql`ALTER SEQUENCE blog_posts_id_seq RESTART WITH 1`;

    // Insert projects
    console.log('📦 Inserting projects...');
    for (const project of existingProjects) {
      await sql`
        INSERT INTO projects (
          title, slug, description, long_description, category,
          technologies, features, image_url, github_url, demo_url,
          status, featured
        ) VALUES (
          ${project.title},
          ${project.slug},
          ${project.description},
          ${project.long_description},
          ${project.category},
          ${JSON.stringify(project.technologies)},
          ${JSON.stringify(project.features)},
          ${project.image_url},
          ${project.github_url},
          ${project.demo_url},
          ${project.status},
          ${project.featured}
        )
      `;
    }

    // Insert blog posts
    console.log('📝 Inserting blog posts...');
    for (const blog of existingBlogPosts) {
      await sql`
        INSERT INTO blog_posts (
          title, slug, excerpt, content, category, tags,
          read_time, published_at, featured, external_url
        ) VALUES (
          ${blog.title},
          ${blog.slug},
          ${blog.excerpt},
          ${blog.content},
          ${blog.category},
          ${JSON.stringify(blog.tags)},
          ${blog.read_time},
          ${blog.published_at},
          ${blog.featured},
          ${blog.external_url}
        )
      `;
    }

    // Get counts
    const projectCount = await sql`SELECT COUNT(*) as count FROM projects`;
    const blogCount = await sql`SELECT COUNT(*) as count FROM blog_posts`;

    console.log('✅ Database population completed!');
    console.log(`📦 Projects inserted: ${projectCount[0].count}`);
    console.log(`📝 Blog posts inserted: ${blogCount[0].count}`);

  } catch (error) {
    console.error('❌ Error populating database:', error);
    throw error;
  }
}

// Run the population script
if (require.main === module) {
  populateDatabase()
    .then(() => {
      console.log('🎉 Database population successful!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Database population failed:', error);
      process.exit(1);
    });
}

module.exports = { populateDatabase };
