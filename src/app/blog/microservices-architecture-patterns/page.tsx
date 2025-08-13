'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  Clock, 
  User, 
  Share2,
  BookOpen,
  ArrowLeft,
  ExternalLink,
  Network,
  Shield,
  Layers,
  Zap,
  Scale,
  CheckCircle,
  AlertTriangle,
  Server
} from 'lucide-react'
import Link from 'next/link'

export default function MicroservicesArticle() {
  const article = {
    title: "Microservices Architecture: Design Patterns and Best Practices",
    subtitle: "Build scalable, maintainable microservices systems with proven architectural patterns and implementation strategies",
    author: "Ahmed Attafi",
    publishDate: "January 6, 2025",
    readingTime: 18,
    category: "Architecture",
    tags: ["Microservices", "Architecture", "Distributed Systems", "API Design", "DevOps"],
    views: 4721,
    likes: 356
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50/30 via-teal-50/30 to-cyan-50/30 dark:from-blue-950/20 dark:via-teal-950/20 dark:to-cyan-950/20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/blog">
            <Button variant="ghost" className="text-blue-600 dark:text-blue-400 hover:bg-blue-500/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
              {article.category}
            </Badge>
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-blue-300 dark:border-blue-700">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {article.subtitle}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-blue-200/30 dark:border-blue-700/30">
            <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.publishDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readingTime} min read
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-blue-300 dark:border-blue-700">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-blue-200/30 dark:border-blue-700/30">
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">
                
                {/* Introduction */}
                <div className="mb-8">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Microservices architecture has become the de facto standard for building scalable, modern applications. However, the transition from monolithic to microservices brings unique challenges that require careful consideration of design patterns, communication strategies, and operational practices. This comprehensive guide explores proven patterns and best practices for successful microservices implementation.
                  </p>
                </div>

                {/* Table of Contents */}
                <Card className="mb-8 bg-blue-50/50 dark:bg-blue-950/30 border-blue-200/50 dark:border-blue-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                      <BookOpen className="w-5 h-5" />
                      Architecture Journey
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li><a href="#service-decomposition" className="text-blue-600 dark:text-blue-400 hover:underline">1. Service Decomposition Strategies</a></li>
                      <li><a href="#communication-patterns" className="text-blue-600 dark:text-blue-400 hover:underline">2. Inter-Service Communication Patterns</a></li>
                      <li><a href="#data-management" className="text-blue-600 dark:text-blue-400 hover:underline">3. Data Management and Consistency</a></li>
                      <li><a href="#api-gateway" className="text-blue-600 dark:text-blue-400 hover:underline">4. API Gateway Implementation</a></li>
                      <li><a href="#resilience-patterns" className="text-blue-600 dark:text-blue-400 hover:underline">5. Resilience and Fault Tolerance</a></li>
                      <li><a href="#deployment-strategies" className="text-blue-600 dark:text-blue-400 hover:underline">6. Deployment and Operations</a></li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Section 1: Service Decomposition */}
                <section id="service-decomposition" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Layers className="w-6 h-6" />
                    1. Service Decomposition Strategies
                  </h2>
                  
                  <p className="mb-6">
                    The key to successful microservices is proper service decomposition. Here are proven strategies for breaking down monolithic applications into cohesive, loosely coupled services.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Domain-Driven Design (DDD) Approach</h3>
                  
                  <Card className="mb-6 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/30 dark:to-teal-950/30 border-blue-200/50 dark:border-blue-700/50">
                    <CardContent className="p-6">
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>
{`// Service decomposition based on bounded contexts

// E-commerce domain decomposition
┌─────────────────────────────────────────────────────────────┐
│                    E-commerce System                        │
├─────────────────────────────────────────────────────────────┤
│  User Management    │  Product Catalog  │  Order Management │
│  - Authentication   │  - Products       │  - Orders         │
│  - User Profiles    │  - Categories     │  - Cart           │
│  - Permissions      │  - Inventory      │  - Checkout       │
├─────────────────────────────────────────────────────────────┤
│  Payment Service    │  Shipping Service │  Notification     │
│  - Payment Processing│  - Delivery       │  - Email/SMS      │
│  - Billing          │  - Tracking       │  - Push Alerts    │
│  - Refunds          │  - Logistics      │  - Templates      │
└─────────────────────────────────────────────────────────────┘

// Service identification criteria:
// 1. Business capability alignment
// 2. Data ownership boundaries
// 3. Team structure (Conway's Law)
// 4. Performance requirements
// 5. Scalability needs

// Example: User Service bounded context
class UserService {
  // Core domain: User management
  async createUser(userData) {
    // Validate user data
    const user = new User(userData);
    
    // Generate user ID
    user.id = await this.generateUserId();
    
    // Store user in database
    await this.userRepository.save(user);
    
    // Publish domain event
    await this.eventBus.publish('UserCreated', {
      userId: user.id,
      email: user.email,
      timestamp: new Date()
    });
    
    return user;
  }

  // Internal service operation
  async updateProfile(userId, profileData) {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new UserNotFoundError(userId);
    }
    
    user.updateProfile(profileData);
    await this.userRepository.save(user);
    
    // Publish profile updated event
    await this.eventBus.publish('ProfileUpdated', {
      userId: user.id,
      changes: profileData,
      timestamp: new Date()
    });
    
    return user;
  }
}

// Service boundaries definition
const ServiceBoundaries = {
  UserService: {
    responsibilities: [
      'User authentication',
      'Profile management', 
      'User preferences'
    ],
    dataOwnership: [
      'users',
      'user_profiles',
      'user_preferences'
    ],
    externalDependencies: [
      'NotificationService',
      'AuditService'
    ]
  },
  
  OrderService: {
    responsibilities: [
      'Order processing',
      'Cart management',
      'Order history'
    ],
    dataOwnership: [
      'orders',
      'order_items',
      'carts'
    ],
    externalDependencies: [
      'UserService',
      'ProductService',
      'PaymentService',
      'InventoryService'
    ]
  }
};`}
                        </code>
                      </pre>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 border-green-200/50 dark:border-green-700/50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Good Decomposition
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Single responsibility principle</li>
                          <li>• Clear data ownership</li>
                          <li>• Minimal dependencies</li>
                          <li>• Independent deployment</li>
                          <li>• Team-sized services</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-200/50 dark:border-red-700/50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-red-700 dark:text-red-300 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5" />
                          Anti-patterns
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Shared databases</li>
                          <li>• Chatty interfaces</li>
                          <li>• Distributed monoliths</li>
                          <li>• Overly granular services</li>
                          <li>• Tight coupling</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Section 2: Communication Patterns */}
                <section id="communication-patterns" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Network className="w-6 h-6" />
                    2. Inter-Service Communication Patterns
                  </h2>
                  
                  <p className="mb-6">
                    Effective communication between microservices is crucial for system reliability and performance. Here are the key patterns and their implementations.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Synchronous Communication</h3>
                  
                  <Card className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200/50 dark:border-purple-700/50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">HTTP/REST with Circuit Breaker</h4>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>
{`// service-client.js - Resilient HTTP client
const axios = require('axios');
const CircuitBreaker = require('opossum');

class ServiceClient {
  constructor(baseURL, options = {}) {
    this.client = axios.create({
      baseURL,
      timeout: options.timeout || 5000,
      headers: {
        'Content-Type': 'application/json',
        'X-Service-Name': process.env.SERVICE_NAME
      }
    });

    // Circuit breaker configuration
    const circuitBreakerOptions = {
      timeout: 3000,        // If function takes longer than 3 seconds, trigger failure
      errorThresholdPercentage: 50, // When 50% of requests fail, open circuit
      resetTimeout: 30000,  // After 30 seconds, try again
      ...options.circuitBreaker
    };

    this.breaker = new CircuitBreaker(this.makeRequest.bind(this), circuitBreakerOptions);
    
    // Circuit breaker events
    this.breaker.on('open', () => console.log('Circuit breaker opened'));
    this.breaker.on('halfOpen', () => console.log('Circuit breaker half-open'));
    this.breaker.on('close', () => console.log('Circuit breaker closed'));
  }

  async makeRequest(config) {
    try {
      const response = await this.client(config);
      return response.data;
    } catch (error) {
      console.error(\`Service request failed: \${error.message}\`);
      throw error;
    }
  }

  async get(path, options = {}) {
    return await this.breaker.fire({
      method: 'GET',
      url: path,
      ...options
    });
  }

  async post(path, data, options = {}) {
    return await this.breaker.fire({
      method: 'POST',
      url: path,
      data,
      ...options
    });
  }
}

// Usage in Order Service
class OrderService {
  constructor() {
    this.userService = new ServiceClient('http://user-service:3001');
    this.productService = new ServiceClient('http://product-service:3002');
    this.paymentService = new ServiceClient('http://payment-service:3003');
  }

  async createOrder(orderData) {
    try {
      // 1. Validate user
      const user = await this.userService.get(\`/users/\${orderData.userId}\`);
      if (!user) {
        throw new Error('User not found');
      }

      // 2. Validate products and calculate total
      let total = 0;
      const orderItems = [];
      
      for (const item of orderData.items) {
        const product = await this.productService.get(\`/products/\${item.productId}\`);
        if (!product) {
          throw new Error(\`Product \${item.productId} not found\`);
        }
        
        if (product.stock < item.quantity) {
          throw new Error(\`Insufficient stock for \${product.name}\`);
        }
        
        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        
        orderItems.push({
          productId: item.productId,
          quantity: item.quantity,
          price: product.price,
          total: itemTotal
        });
      }

      // 3. Create order
      const order = {
        id: this.generateOrderId(),
        userId: orderData.userId,
        items: orderItems,
        total,
        status: 'pending',
        createdAt: new Date()
      };

      await this.orderRepository.save(order);

      // 4. Process payment (asynchronous)
      this.processPaymentAsync(order.id, {
        amount: total,
        currency: 'USD',
        paymentMethod: orderData.paymentMethod
      });

      return order;
    } catch (error) {
      console.error('Order creation failed:', error);
      throw error;
    }
  }

  async processPaymentAsync(orderId, paymentData) {
    try {
      const payment = await this.paymentService.post('/payments', {
        orderId,
        ...paymentData
      });
      
      // Update order status based on payment result
      await this.updateOrderStatus(orderId, 
        payment.status === 'successful' ? 'confirmed' : 'failed'
      );
    } catch (error) {
      console.error(\`Payment processing failed for order \${orderId}:\`, error);
      await this.updateOrderStatus(orderId, 'payment_failed');
    }
  }
}`}
                        </code>
                      </pre>
                    </CardContent>
                  </Card>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Asynchronous Communication</h3>
                  
                  <Card className="mb-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 border-indigo-200/50 dark:border-indigo-700/50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Event-Driven Architecture with RabbitMQ</h4>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>
{`// event-bus.js - Event-driven communication
const amqp = require('amqplib');

class EventBus {
  constructor() {
    this.connection = null;
    this.channel = null;
    this.exchanges = new Map();
  }

  async connect() {
    try {
      this.connection = await amqp.connect(process.env.RABBITMQ_URL);
      this.channel = await this.connection.createChannel();
      
      // Setup error handling
      this.connection.on('error', (err) => {
        console.error('RabbitMQ connection error:', err);
        this.reconnect();
      });
      
      console.log('Connected to RabbitMQ');
    } catch (error) {
      console.error('Failed to connect to RabbitMQ:', error);
      throw error;
    }
  }

  async setupExchange(exchangeName, type = 'topic') {
    await this.channel.assertExchange(exchangeName, type, { durable: true });
    this.exchanges.set(exchangeName, type);
  }

  async publish(exchangeName, routingKey, message, options = {}) {
    try {
      const messageBuffer = Buffer.from(JSON.stringify({
        ...message,
        timestamp: new Date().toISOString(),
        messageId: this.generateMessageId(),
        source: process.env.SERVICE_NAME
      }));

      const publishOptions = {
        persistent: true,
        mandatory: true,
        ...options
      };

      const published = this.channel.publish(
        exchangeName,
        routingKey,
        messageBuffer,
        publishOptions
      );

      if (!published) {
        throw new Error('Failed to publish message');
      }

      console.log(\`Published message to \${exchangeName}:\${routingKey}\`);
    } catch (error) {
      console.error('Failed to publish message:', error);
      throw error;
    }
  }

  async subscribe(exchangeName, routingKey, queueName, handler, options = {}) {
    try {
      await this.channel.assertQueue(queueName, { durable: true });
      await this.channel.bindQueue(queueName, exchangeName, routingKey);
      
      await this.channel.consume(queueName, async (msg) => {
        if (!msg) return;
        
        try {
          const content = JSON.parse(msg.content.toString());
          console.log(\`Received message on \${queueName}:\`, content);
          
          await handler(content);
          this.channel.ack(msg);
        } catch (error) {
          console.error('Message processing error:', error);
          
          // Dead letter queue handling
          if (msg.fields.redelivered) {
            console.log('Moving message to dead letter queue');
            this.channel.nack(msg, false, false);
          } else {
            this.channel.nack(msg, false, true);
          }
        }
      }, { noAck: false });
      
    } catch (error) {
      console.error('Failed to setup subscription:', error);
      throw error;
    }
  }

  generateMessageId() {
    return \`\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`;
  }
}

// Usage in services
class OrderEventHandlers {
  constructor(eventBus, inventoryService, notificationService) {
    this.eventBus = eventBus;
    this.inventoryService = inventoryService;
    this.notificationService = notificationService;
    this.setupEventHandlers();
  }

  async setupEventHandlers() {
    // Setup exchanges
    await this.eventBus.setupExchange('order.events');
    await this.eventBus.setupExchange('payment.events');
    await this.eventBus.setupExchange('inventory.events');

    // Subscribe to payment events
    await this.eventBus.subscribe(
      'payment.events',
      'payment.completed',
      'order-payment-completed',
      this.handlePaymentCompleted.bind(this)
    );

    // Subscribe to inventory events
    await this.eventBus.subscribe(
      'inventory.events',
      'stock.reserved',
      'order-stock-reserved',
      this.handleStockReserved.bind(this)
    );
  }

  async handlePaymentCompleted(event) {
    const { orderId, paymentId, status } = event;
    
    if (status === 'successful') {
      // Update order status
      await this.orderRepository.updateStatus(orderId, 'confirmed');
      
      // Publish order confirmed event
      await this.eventBus.publish('order.events', 'order.confirmed', {
        orderId,
        paymentId,
        confirmedAt: new Date()
      });
      
      // Reserve inventory
      const order = await this.orderRepository.findById(orderId);
      for (const item of order.items) {
        await this.eventBus.publish('inventory.events', 'stock.reserve', {
          orderId,
          productId: item.productId,
          quantity: item.quantity
        });
      }
    } else {
      await this.orderRepository.updateStatus(orderId, 'payment_failed');
      
      await this.eventBus.publish('order.events', 'order.failed', {
        orderId,
        reason: 'payment_failed',
        failedAt: new Date()
      });
    }
  }

  async handleStockReserved(event) {
    const { orderId, productId, quantity } = event;
    
    // Update order item status
    await this.orderRepository.updateItemStatus(orderId, productId, 'reserved');
    
    // Check if all items are reserved
    const order = await this.orderRepository.findById(orderId);
    const allReserved = order.items.every(item => item.status === 'reserved');
    
    if (allReserved) {
      await this.orderRepository.updateStatus(orderId, 'ready_to_ship');
      
      await this.eventBus.publish('order.events', 'order.ready_to_ship', {
        orderId,
        readyAt: new Date()
      });
    }
  }
}`}
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                </section>

                {/* Section 3: Data Management */}
                <section id="data-management" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Server className="w-6 h-6" />
                    3. Data Management and Consistency
                  </h2>
                  
                  <p className="mb-6">
                    Data management in microservices requires careful consideration of consistency, transactions, and data ownership. Here are proven patterns for handling distributed data.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Saga Pattern for Distributed Transactions</h3>
                  
                  <Card className="mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-200/50 dark:border-emerald-700/50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300">Choreography-based Saga</h4>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>
{`// saga-orchestrator.js - Distributed transaction management
class OrderSaga {
  constructor(eventBus) {
    this.eventBus = eventBus;
    this.sagaState = new Map(); // In production, use persistent storage
    this.setupEventHandlers();
  }

  async startOrderSaga(orderData) {
    const sagaId = this.generateSagaId();
    
    // Initialize saga state
    this.sagaState.set(sagaId, {
      orderId: orderData.orderId,
      steps: {
        validatePayment: 'pending',
        reserveInventory: 'pending',
        createShipment: 'pending'
      },
      compensations: [],
      status: 'running',
      startedAt: new Date()
    });

    // Start first step
    await this.eventBus.publish('payment.events', 'payment.validate', {
      sagaId,
      orderId: orderData.orderId,
      amount: orderData.total,
      paymentMethod: orderData.paymentMethod
    });

    return sagaId;
  }

  async setupEventHandlers() {
    // Payment validation result
    await this.eventBus.subscribe(
      'payment.events',
      'payment.validated',
      'saga-payment-validated',
      this.handlePaymentValidated.bind(this)
    );

    await this.eventBus.subscribe(
      'payment.events',
      'payment.validation.failed',
      'saga-payment-failed',
      this.handlePaymentValidationFailed.bind(this)
    );

    // Inventory reservation result
    await this.eventBus.subscribe(
      'inventory.events',
      'inventory.reserved',
      'saga-inventory-reserved',
      this.handleInventoryReserved.bind(this)
    );

    await this.eventBus.subscribe(
      'inventory.events',
      'inventory.reservation.failed',
      'saga-inventory-failed',
      this.handleInventoryReservationFailed.bind(this)
    );

    // Shipment creation result
    await this.eventBus.subscribe(
      'shipping.events',
      'shipment.created',
      'saga-shipment-created',
      this.handleShipmentCreated.bind(this)
    );
  }

  async handlePaymentValidated(event) {
    const saga = this.sagaState.get(event.sagaId);
    if (!saga) return;

    saga.steps.validatePayment = 'completed';
    saga.compensations.push('cancelPayment');

    // Next step: Reserve inventory
    await this.eventBus.publish('inventory.events', 'inventory.reserve', {
      sagaId: event.sagaId,
      orderId: saga.orderId,
      items: event.items
    });
  }

  async handleInventoryReserved(event) {
    const saga = this.sagaState.get(event.sagaId);
    if (!saga) return;

    saga.steps.reserveInventory = 'completed';
    saga.compensations.push('releaseInventory');

    // Next step: Create shipment
    await this.eventBus.publish('shipping.events', 'shipment.create', {
      sagaId: event.sagaId,
      orderId: saga.orderId,
      address: event.shippingAddress
    });
  }

  async handleShipmentCreated(event) {
    const saga = this.sagaState.get(event.sagaId);
    if (!saga) return;

    saga.steps.createShipment = 'completed';
    saga.status = 'completed';
    saga.completedAt = new Date();

    // Saga completed successfully
    await this.eventBus.publish('order.events', 'order.saga.completed', {
      sagaId: event.sagaId,
      orderId: saga.orderId,
      completedAt: saga.completedAt
    });

    console.log(\`Order saga \${event.sagaId} completed successfully\`);
  }

  async handlePaymentValidationFailed(event) {
    await this.compensateSaga(event.sagaId, 'Payment validation failed');
  }

  async handleInventoryReservationFailed(event) {
    await this.compensateSaga(event.sagaId, 'Inventory reservation failed');
  }

  async compensateSaga(sagaId, reason) {
    const saga = this.sagaState.get(sagaId);
    if (!saga) return;

    console.log(\`Compensating saga \${sagaId}: \${reason}\`);
    saga.status = 'compensating';
    saga.failureReason = reason;

    // Execute compensations in reverse order
    for (const compensation of saga.compensations.reverse()) {
      await this.executeCompensation(sagaId, compensation);
    }

    saga.status = 'failed';
    saga.failedAt = new Date();

    // Publish saga failed event
    await this.eventBus.publish('order.events', 'order.saga.failed', {
      sagaId,
      orderId: saga.orderId,
      reason,
      failedAt: saga.failedAt
    });
  }

  async executeCompensation(sagaId, compensation) {
    const saga = this.sagaState.get(sagaId);
    
    switch (compensation) {
      case 'cancelPayment':
        await this.eventBus.publish('payment.events', 'payment.cancel', {
          sagaId,
          orderId: saga.orderId
        });
        break;
        
      case 'releaseInventory':
        await this.eventBus.publish('inventory.events', 'inventory.release', {
          sagaId,
          orderId: saga.orderId
        });
        break;
        
      default:
        console.warn(\`Unknown compensation: \${compensation}\`);
    }
  }

  generateSagaId() {
    return \`saga-\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`;
  }
}`}
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                </section>

                {/* Section 4: API Gateway */}
                <section id="api-gateway" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    4. API Gateway Implementation
                  </h2>
                  
                  <p className="mb-6">
                    An API Gateway serves as the single entry point for all client requests, providing cross-cutting concerns like authentication, routing, rate limiting, and request/response transformation.
                  </p>

                  <Card className="mb-6 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 border-violet-200/50 dark:border-violet-700/50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3 text-violet-700 dark:text-violet-300">Enterprise API Gateway</h4>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>
{`// api-gateway.js - Production API Gateway implementation
const express = require('express');
const httpProxy = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');
const Redis = require('redis');

class APIGateway {
  constructor() {
    this.app = express();
    this.redis = Redis.createClient(process.env.REDIS_URL);
    this.serviceRegistry = new Map();
    this.setupMiddleware();
    this.loadServiceRoutes();
  }

  setupMiddleware() {
    // Basic middleware
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ extended: true }));
    
    // CORS handling
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      next();
    });

    // Request logging
    this.app.use((req, res, next) => {
      console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url}\`);
      req.startTime = Date.now();
      next();
    });

    // Rate limiting
    const limiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 1000, // limit each IP to 1000 requests per windowMs
      message: 'Too many requests from this IP',
      standardHeaders: true,
      legacyHeaders: false,
    });
    this.app.use(limiter);

    // Authentication middleware
    this.app.use('/api', this.authenticateRequest.bind(this));
  }

  async authenticateRequest(req, res, next) {
    // Skip auth for public endpoints
    if (this.isPublicEndpoint(req.path)) {
      return next();
    }

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    try {
      // Verify JWT token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      // Check token blacklist (Redis)
      const isBlacklisted = await this.redis.get(\`blacklist:\${token}\`);
      if (isBlacklisted) {
        return res.status(401).json({ error: 'Token has been revoked' });
      }

      // Add user context to headers for downstream services
      req.headers['x-user-id'] = decoded.userId;
      req.headers['x-user-role'] = decoded.role;

      next();
    } catch (error) {
      console.error('Token verification failed:', error);
      return res.status(401).json({ error: 'Invalid token' });
    }
  }

  isPublicEndpoint(path) {
    const publicPaths = [
      '/api/auth/login',
      '/api/auth/register',
      '/api/health',
      '/api/products' // Public product listing
    ];
    return publicPaths.some(publicPath => path.startsWith(publicPath));
  }

  loadServiceRoutes() {
    // Service discovery and routing configuration
    const services = [
      {
        name: 'user-service',
        url: process.env.USER_SERVICE_URL || 'http://user-service:3001',
        prefix: '/api/users',
        healthCheck: '/health'
      },
      {
        name: 'product-service',
        url: process.env.PRODUCT_SERVICE_URL || 'http://product-service:3002',
        prefix: '/api/products',
        healthCheck: '/health'
      },
      {
        name: 'order-service',
        url: process.env.ORDER_SERVICE_URL || 'http://order-service:3003',
        prefix: '/api/orders',
        healthCheck: '/health'
      },
      {
        name: 'payment-service',
        url: process.env.PAYMENT_SERVICE_URL || 'http://payment-service:3004',
        prefix: '/api/payments',
        healthCheck: '/health'
      }
    ];

    services.forEach(service => {
      this.registerService(service);
    });
  }

  registerService(service) {
    this.serviceRegistry.set(service.name, service);

    // Create proxy middleware with advanced options
    const proxyOptions = {
      target: service.url,
      changeOrigin: true,
      pathRewrite: {
        [\`^\${service.prefix}\`]: ''
      },
      timeout: 30000,
      proxyTimeout: 30000,
      
      // Add custom headers
      onProxyReq: (proxyReq, req, res) => {
        // Add tracing headers
        proxyReq.setHeader('X-Request-ID', this.generateRequestId());
        proxyReq.setHeader('X-Gateway-Timestamp', new Date().toISOString());
        proxyReq.setHeader('X-Client-IP', req.ip);
        
        // Forward user context
        if (req.user) {
          proxyReq.setHeader('X-User-Context', JSON.stringify(req.user));
        }
      },

      // Handle responses
      onProxyRes: (proxyRes, req, res) => {
        const duration = Date.now() - req.startTime;
        console.log(\`Request to \${service.name} completed in \${duration}ms\`);
        
        // Add response headers
        proxyRes.headers['X-Response-Time'] = \`\${duration}ms\`;
        proxyRes.headers['X-Service-Name'] = service.name;
      },

      // Error handling
      onError: (err, req, res) => {
        console.error(\`Proxy error for \${service.name}:\`, err);
        res.status(503).json({
          error: 'Service temporarily unavailable',
          service: service.name,
          timestamp: new Date().toISOString()
        });
      }
    };

    // Apply circuit breaker pattern
    const circuitBreakerProxy = this.wrapWithCircuitBreaker(
      httpProxy(proxyOptions),
      service.name
    );

    this.app.use(service.prefix, circuitBreakerProxy);
    console.log(\`Registered service: \${service.name} at \${service.prefix}\`);
  }

  wrapWithCircuitBreaker(proxy, serviceName) {
    let failureCount = 0;
    let isCircuitOpen = false;
    let lastFailureTime = 0;
    
    const FAILURE_THRESHOLD = 5;
    const RESET_TIMEOUT = 60000; // 1 minute

    return (req, res, next) => {
      // Check if circuit should be reset
      if (isCircuitOpen && Date.now() - lastFailureTime > RESET_TIMEOUT) {
        isCircuitOpen = false;
        failureCount = 0;
        console.log(\`Circuit breaker reset for \${serviceName}\`);
      }

      // If circuit is open, return error immediately
      if (isCircuitOpen) {
        return res.status(503).json({
          error: 'Service circuit breaker is open',
          service: serviceName,
          retryAfter: Math.ceil((RESET_TIMEOUT - (Date.now() - lastFailureTime)) / 1000)
        });
      }

      // Wrap response to monitor failures
      const originalEnd = res.end;
      res.end = function(...args) {
        if (res.statusCode >= 500) {
          failureCount++;
          lastFailureTime = Date.now();
          
          if (failureCount >= FAILURE_THRESHOLD) {
            isCircuitOpen = true;
            console.log(\`Circuit breaker opened for \${serviceName}\`);
          }
        } else {
          // Reset failure count on successful response
          failureCount = 0;
        }
        
        originalEnd.apply(this, args);
      };

      proxy(req, res, next);
    };
  }

  // Health check endpoint
  setupHealthCheck() {
    this.app.get('/health', async (req, res) => {
      const health = {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        services: {}
      };

      // Check each registered service
      for (const [name, service] of this.serviceRegistry) {
        try {
          const response = await fetch(\`\${service.url}\${service.healthCheck}\`, {
            timeout: 5000
          });
          health.services[name] = {
            status: response.ok ? 'healthy' : 'unhealthy',
            responseTime: response.headers.get('X-Response-Time')
          };
        } catch (error) {
          health.services[name] = {
            status: 'unhealthy',
            error: error.message
          };
        }
      }

      const unhealthyServices = Object.values(health.services)
        .filter(service => service.status === 'unhealthy');
      
      if (unhealthyServices.length > 0) {
        health.status = 'degraded';
        res.status(503);
      }

      res.json(health);
    });
  }

  generateRequestId() {
    return \`req-\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`;
  }

  start(port = 3000) {
    this.setupHealthCheck();
    
    this.app.listen(port, () => {
      console.log(\`API Gateway listening on port \${port}\`);
      console.log(\`Registered \${this.serviceRegistry.size} services\`);
    });
  }
}

// Start the gateway
const gateway = new APIGateway();
gateway.start(process.env.PORT || 3000);`}
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                </section>

                {/* Section 5: Resilience Patterns */}
                <section id="resilience-patterns" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    5. Resilience and Fault Tolerance
                  </h2>
                  
                  <p className="mb-6">
                    Building resilient microservices requires implementing patterns that handle failures gracefully and maintain system stability under adverse conditions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200/50 dark:border-blue-700/50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Resilience Patterns</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>• <strong>Circuit Breaker</strong> - Prevent cascade failures</li>
                          <li>• <strong>Retry with Backoff</strong> - Handle transient failures</li>
                          <li>• <strong>Timeout</strong> - Avoid hanging requests</li>
                          <li>• <strong>Bulkhead</strong> - Isolate critical resources</li>
                          <li>• <strong>Rate Limiting</strong> - Protect from overload</li>
                          <li>• <strong>Graceful Degradation</strong> - Partial functionality</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-950/30 dark:to-green-950/30 border-teal-200/50 dark:border-teal-700/50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-teal-700 dark:text-teal-300">Monitoring & Observability</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>• <strong>Distributed Tracing</strong> - Request flow visibility</li>
                          <li>• <strong>Metrics Collection</strong> - Performance monitoring</li>
                          <li>• <strong>Centralized Logging</strong> - Debugging support</li>
                          <li>• <strong>Health Checks</strong> - Service status</li>
                          <li>• <strong>Alerting</strong> - Proactive issue detection</li>
                          <li>• <strong>Dashboards</strong> - Real-time insights</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Section 6: Deployment Strategies */}
                <section id="deployment-strategies" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Scale className="w-6 h-6" />
                    6. Deployment and Operations
                  </h2>
                  
                  <p className="mb-6">
                    Successful microservices deployment requires container orchestration, CI/CD pipelines, and robust operational practices.
                  </p>

                  <Card className="mb-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-orange-200/50 dark:border-orange-700/50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">Kubernetes Deployment Configuration</h4>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>
{`# kubernetes/user-service.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
  labels:
    app: user-service
    version: v1
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
        version: v1
    spec:
      containers:
      - name: user-service
        image: myregistry/user-service:v1.2.3
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: DB_HOST
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: host
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: password
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: user-service
spec:
  selector:
    app: user-service
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: ClusterIP
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: user-service-netpol
spec:
  podSelector:
    matchLabels:
      app: user-service
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: api-gateway
    - podSelector:
        matchLabels:
          app: order-service
    ports:
    - protocol: TCP
      port: 3000
  egress:
  - to:
    - podSelector:
        matchLabels:
          app: postgres
    ports:
    - protocol: TCP
      port: 5432`}
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                </section>

                {/* Conclusion */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">Microservices Success Checklist</h2>
                  
                  <Card className="bg-gradient-to-r from-green-50/80 to-blue-50/80 dark:from-green-950/30 dark:to-blue-950/30 border-green-200/50 dark:border-green-700/50">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">Architecture</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              Domain-driven service boundaries
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              Loose coupling, high cohesion
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              Event-driven communication
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              Data ownership per service
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              API versioning strategy
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Operations</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                              Container orchestration
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                              CI/CD automation
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                              Comprehensive monitoring
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                              Distributed tracing
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                              Incident response procedures
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <p className="text-lg text-center text-gray-600 dark:text-gray-400 mt-8">
                  Remember: Microservices are not a silver bullet. Start with a well-designed monolith and evolve to microservices when the benefits clearly outweigh the complexity.
                </p>

              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Article Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 mb-8"
        >
          <Card className="bg-gradient-to-r from-blue-50/80 to-teal-50/80 dark:from-blue-950/30 dark:to-teal-950/30 border-blue-200/50 dark:border-blue-700/50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Ready to architect your microservices?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Share this comprehensive guide with your architecture team and start building scalable systems.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-blue-300 dark:border-blue-700">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
