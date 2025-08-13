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
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  Layers
} from 'lucide-react'
import Link from 'next/link'

export default function ArticlePage() {
  const article = {
    title: "Building Scalable IoT Solutions with Azure IoT Hub",
    subtitle: "A comprehensive guide to architecting enterprise-grade IoT systems",
    author: "Ahmed Attafi",
    publishDate: "January 15, 2025",
    readingTime: 8,
    category: "IoT",
    tags: ["Azure", "IoT", "Cloud", "Enterprise", "Scalability"],
    views: 1247,
    likes: 89
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
                    In today's interconnected world, IoT solutions are transforming how businesses operate, monitor, and optimize their processes. Building scalable IoT systems requires careful architectural planning, robust cloud infrastructure, and efficient data processing pipelines. Azure IoT Hub provides a comprehensive platform for managing millions of devices while ensuring security, reliability, and scalability.
                  </p>
                </div>

                {/* Hero Architecture Diagram */}
                <div className="relative mb-12 rounded-xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 via-teal-500 to-cyan-500 flex items-center justify-center relative">
                    {/* Main Architecture Diagram */}
                    <div className="text-center text-white relative z-10">
                      <div className="grid grid-cols-3 gap-8 items-center max-w-4xl mx-auto px-8">
                        {/* Devices */}
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Zap className="w-8 h-8" />
                          </div>
                          <p className="text-sm font-medium">IoT Devices</p>
                          <p className="text-xs opacity-70">Sensors, Actuators</p>
                        </div>
                        
                        {/* Arrows */}
                        <div className="flex justify-center">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-0.5 bg-white/60"></div>
                            <div className="w-0 h-0 border-l-4 border-l-white/60 border-y-2 border-y-transparent"></div>
                          </div>
                        </div>
                        
                        {/* IoT Hub */}
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Cloud className="w-8 h-8" />
                          </div>
                          <p className="text-sm font-medium">Azure IoT Hub</p>
                          <p className="text-xs opacity-70">Message Routing</p>
                        </div>
                      </div>
                      
                      {/* Second Row */}
                      <div className="mt-8 grid grid-cols-4 gap-4 max-w-5xl mx-auto px-8">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Database className="w-6 h-6" />
                          </div>
                          <p className="text-xs font-medium">Time Series DB</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Layers className="w-6 h-6" />
                          </div>
                          <p className="text-xs font-medium">Stream Analytics</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Shield className="w-6 h-6" />
                          </div>
                          <p className="text-xs font-medium">Security</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Code className="w-6 h-6" />
                          </div>
                          <p className="text-xs font-medium">Applications</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full"></div>
                      <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white rounded-full"></div>
                      <div className="absolute bottom-8 right-4 w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/20 text-white text-xs px-3 py-1 rounded">
                    Azure IoT Architecture Overview
                  </div>
                </div>

                {/* Table of Contents */}
                <Card className="mb-8 bg-blue-50/50 dark:bg-blue-950/30 border-blue-200/50 dark:border-blue-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                      <BookOpen className="w-5 h-5" />
                      Table of Contents
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li><a href="#architecture-overview" className="text-blue-600 dark:text-blue-400 hover:underline">1. Architecture Overview</a></li>
                      <li><a href="#device-management" className="text-blue-600 dark:text-blue-400 hover:underline">2. Device Management Strategy</a></li>
                      <li><a href="#data-ingestion" className="text-blue-600 dark:text-blue-400 hover:underline">3. Data Ingestion and Processing</a></li>
                      <li><a href="#security-considerations" className="text-blue-600 dark:text-blue-400 hover:underline">4. Security and Compliance</a></li>
                      <li><a href="#monitoring-analytics" className="text-blue-600 dark:text-blue-400 hover:underline">5. Monitoring and Analytics</a></li>
                      <li><a href="#implementation-guide" className="text-blue-600 dark:text-blue-400 hover:underline">6. Implementation Guide</a></li>
                      <li><a href="#best-practices" className="text-blue-600 dark:text-blue-400 hover:underline">7. Best Practices and Optimization</a></li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Section 1: Architecture Overview */}
                <section id="architecture-overview" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Layers className="w-6 h-6" />
                    1. Architecture Overview
                  </h2>
                  
                  <p className="mb-4">
                    A well-designed IoT architecture forms the foundation of any successful IoT deployment. Azure IoT Hub serves as the central communication hub, enabling secure, reliable, and scalable device-to-cloud communication.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Core Components</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Card className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/30 dark:to-teal-950/30 border-blue-200/50 dark:border-blue-700/50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Device Layer</h4>
                        <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                          <li>• IoT devices and sensors</li>
                          <li>• Edge gateways</li>
                          <li>• Device twins and metadata</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border-teal-200/50 dark:border-teal-700/50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2 text-teal-700 dark:text-teal-300">Cloud Layer</h4>
                        <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                          <li>• Azure IoT Hub</li>
                          <li>• Stream Analytics</li>
                          <li>• Data storage solutions</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">
                    <code className="text-sm">
{`// Example: Device connection configuration
const deviceConnectionString = "HostName=your-iot-hub.azure-devices.net;DeviceId=device-001;SharedAccessKey=...";

const client = DeviceClient.fromConnectionString(
  deviceConnectionString, 
  Protocol.Mqtt
);

// Connect to IoT Hub
await client.open();
console.log('Device connected to Azure IoT Hub');`}
                    </code>
                  </pre>
                </section>

                {/* Section 2: Device Management */}
                <section id="device-management" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Code className="w-6 h-6" />
                    2. Device Management Strategy
                  </h2>
                  
                  <p className="mb-4">
                    Effective device management is crucial for maintaining IoT systems at scale. Azure IoT Hub provides comprehensive device management capabilities including device provisioning, configuration, and lifecycle management.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Device Provisioning Service (DPS)</h3>
                  
                  <p className="mb-4">
                    The Device Provisioning Service enables zero-touch, just-in-time provisioning of devices to the right IoT hub without requiring device-specific configuration.
                  </p>

                  <Card className="mb-6 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/30 dark:to-teal-950/30 border-blue-200/50 dark:border-blue-700/50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Key Benefits of DPS</h4>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span><strong>Scalability:</strong> Provision millions of devices without manual intervention</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span><strong>Security:</strong> Support for X.509 certificates and TPM attestation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span><strong>Flexibility:</strong> Custom allocation policies for load balancing</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Device Lifecycle Diagram */}
                  <Card className="mb-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950/20 border-gray-200/50 dark:border-gray-700/50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">Device Lifecycle Management</h4>
                      <div className="flex flex-wrap justify-center items-center gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                          <p className="text-xs mt-2 text-center">Provision</p>
                        </div>
                        <div className="hidden sm:block w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                          <p className="text-xs mt-2 text-center">Configure</p>
                        </div>
                        <div className="hidden sm:block w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                          <p className="text-xs mt-2 text-center">Monitor</p>
                        </div>
                        <div className="hidden sm:block w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                          <p className="text-xs mt-2 text-center">Update</p>
                        </div>
                        <div className="hidden sm:block w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">5</div>
                          <p className="text-xs mt-2 text-center">Retire</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Section 3: Data Ingestion */}
                <section id="data-ingestion" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Database className="w-6 h-6" />
                    3. Data Ingestion and Processing
                  </h2>
                  
                  <p className="mb-4">
                    Processing IoT data efficiently requires a robust data pipeline that can handle high-velocity, high-volume data streams while maintaining low latency for real-time scenarios.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Stream Processing Architecture</h3>
                  
                  <div className="mb-6">
                    <p className="mb-4">
                      Azure Stream Analytics provides real-time analytics capabilities, enabling you to process and analyze IoT data as it arrives.
                    </p>
                    
                    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`-- Example: Stream Analytics Query for Temperature Monitoring
SELECT 
    DeviceId,
    AVG(Temperature) AS AvgTemperature,
    MAX(Temperature) AS MaxTemperature,
    System.Timestamp AS WindowEnd
INTO 
    [temperature-alerts]
FROM 
    [iot-hub-input]
WHERE 
    Temperature > 25.0
GROUP BY 
    DeviceId, 
    TumblingWindow(minute, 5)`}
                      </code>
                    </pre>
                  </div>
                </section>

                {/* Section 4: Security */}
                <section id="security-considerations" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    4. Security and Compliance
                  </h2>
                  
                  <p className="mb-6">
                    Security is paramount in IoT deployments. Azure IoT Hub provides multiple layers of security to protect your devices, data, and communications.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-200/50 dark:border-red-700/50">
                      <CardContent className="p-4 text-center">
                        <Shield className="w-8 h-8 mx-auto mb-2 text-red-600 dark:text-red-400" />
                        <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">Device Security</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">X.509 certificates, TPM, SAS tokens</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200/50 dark:border-blue-700/50">
                      <CardContent className="p-4 text-center">
                        <Cloud className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                        <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Transport Security</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">TLS encryption, MQTT over SSL</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 border-green-200/50 dark:border-green-700/50">
                      <CardContent className="p-4 text-center">
                        <Database className="w-8 h-8 mx-auto mb-2 text-green-600 dark:text-green-400" />
                        <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Data Protection</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Encryption at rest, RBAC, Azure AD</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Section 5: Monitoring */}
                <section id="monitoring-analytics" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    5. Monitoring and Analytics
                  </h2>
                  
                  <p className="mb-4">
                    Comprehensive monitoring ensures your IoT solution remains healthy, performant, and reliable. Azure provides multiple monitoring and analytics services for IoT solutions.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Key Monitoring Metrics</h3>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                      <div>
                        <strong>Device Connectivity:</strong> Monitor device connection status, connection attempts, and disconnection patterns
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                      <div>
                        <strong>Message Throughput:</strong> Track message ingestion rates, processing latency, and error rates
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                      <div>
                        <strong>Resource Utilization:</strong> Monitor CPU, memory, and storage usage across your IoT infrastructure
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Implementation Guide */}
                <section id="implementation-guide" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">6. Implementation Guide</h2>
                  
                  <p className="mb-6">
                    Let's walk through a practical implementation of a scalable IoT solution using Azure IoT Hub.
                  </p>

                  <div className="space-y-6">
                    <Card className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/30 dark:to-teal-950/30 border-blue-200/50 dark:border-blue-700/50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Step 1: Infrastructure Setup</h4>
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
                          <code>
{`# Azure CLI commands for IoT Hub setup
az iot hub create \\
  --name MyIoTHub \\
  --resource-group MyResourceGroup \\
  --sku S1 \\
  --location eastus

# Create Device Provisioning Service
az iot dps create \\
  --name MyDPS \\
  --resource-group MyResourceGroup \\
  --location eastus`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border-teal-200/50 dark:border-teal-700/50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-teal-700 dark:text-teal-300">Step 2: Device Registration</h4>
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
                          <code>
{`// Node.js device registration
const { DeviceClient } = require('azure-iot-device');
const { Mqtt } = require('azure-iot-device-mqtt');

const connectionString = 'HostName=...';
const client = DeviceClient.fromConnectionString(connectionString, Mqtt);

// Send telemetry
const sendTelemetry = async () => {
  const telemetry = {
    temperature: Math.random() * 100,
    humidity: Math.random() * 100,
    timestamp: new Date().toISOString()
  };
  
  await client.sendEvent(JSON.stringify(telemetry));
};`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Best Practices */}
                <section id="best-practices" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">7. Best Practices and Optimization</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 border-green-200/50 dark:border-green-700/50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">Performance Optimization</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Batch message sending for improved throughput</li>
                          <li>• Use device twins for configuration management</li>
                          <li>• Implement message routing for efficient processing</li>
                          <li>• Optimize message size and frequency</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-blue-200/50 dark:border-blue-700/50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Cost Optimization</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Choose appropriate IoT Hub tiers</li>
                          <li>• Implement data retention policies</li>
                          <li>• Use cold storage for historical data</li>
                          <li>• Monitor and optimize message quotas</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Conclusion */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">Conclusion</h2>
                  
                  <p className="mb-4 text-lg">
                    Building scalable IoT solutions with Azure IoT Hub requires careful planning, proper architecture design, and adherence to best practices. By following the guidelines outlined in this article, you can create robust, secure, and scalable IoT systems that grow with your business needs.
                  </p>
                  
                  <p className="mb-6">
                    The combination of Azure IoT Hub's managed services, comprehensive security features, and powerful analytics capabilities provides a solid foundation for enterprise-grade IoT deployments. Remember to continuously monitor, optimize, and iterate on your solution to ensure it meets evolving requirements.
                  </p>

                  <Card className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 border-blue-300/30 dark:border-blue-700/30">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">
                        Ready to build your IoT solution?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Start with Azure IoT Hub's free tier and scale as your needs grow.
                      </p>
                      <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Get Started with Azure IoT Hub
                      </Button>
                    </CardContent>
                  </Card>
                </section>

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
                  <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Found this article helpful?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Share it with your network and help others learn about IoT solutions.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-blue-300 dark:border-blue-700">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                    Follow for More
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
