import React from 'react';
import Link from 'next/link';

const DataArchitecturePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-6">
            Enterprise Data Architecture
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Design modular, scalable architectures that power analytics, reporting, and AI workloads 
            with secure, high-performance data flows across hybrid and cloud environments
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Build cloud-native, microservices-ready data platforms using Azure Data Lake, 
            enterprise integrations, and modern architectural patterns that support both 
            structured and unstructured data at scale
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-red-600 mb-8">
              Modern Data Architecture Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Enterprise data architecture forms the foundation of successful digital transformation initiatives. 
              Our architectural approach emphasizes modularity, scalability, and security while ensuring seamless 
              integration between cloud-native services, enterprise applications, and legacy systems.
            </p>
            <p className="text-lg text-gray-700">
              We design comprehensive data architectures that support real-time analytics, machine learning workloads, 
              and enterprise reporting while maintaining optimal performance, security, and cost efficiency 
              across your entire data ecosystem.
            </p>
          </div>

          {/* Core Architecture Components */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Modular Architecture Framework
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Data Ingestion Layer</h3>
                <p className="text-gray-600 mb-4">
                  Design scalable ingestion architectures that handle real-time streaming, batch processing, 
                  and API-based data collection from diverse enterprise sources including SAP, CRM, and IoT systems.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Real-time streaming with Apache Kafka</li>
                  <li>• Batch ETL/ELT pipelines</li>
                  <li>• API gateway and microservices integration</li>
                  <li>• Event-driven architecture patterns</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Storage & Processing Layer</h3>
                <p className="text-gray-600 mb-4">
                  Implement multi-tier storage architectures using Azure Data Lake for raw data, processed datasets, 
                  and curated analytics-ready information with optimized compute resources.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Azure Data Lake Storage Gen2</li>
                  <li>• Delta Lake for ACID transactions</li>
                  <li>• Serverless and dedicated SQL pools</li>
                  <li>• Spark-based distributed processing</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Analytics & AI Layer</h3>
                <p className="text-gray-600 mb-4">
                  Build dedicated analytics and machine learning infrastructure that supports both traditional 
                  BI reporting and advanced AI workloads with integrated model deployment and monitoring.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Azure Machine Learning workspace</li>
                  <li>• Power BI embedded analytics</li>
                  <li>• Jupyter notebooks and MLOps</li>
                  <li>• Model serving and monitoring</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Integration & API Layer</h3>
                <p className="text-gray-600 mb-4">
                  Design comprehensive integration architectures that connect cloud services with on-premises 
                  systems, providing secure, scalable APIs for data access and microservices communication.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Azure API Management</li>
                  <li>• Service mesh architecture</li>
                  <li>• Hybrid connectivity with ExpressRoute</li>
                  <li>• OAuth 2.0 and JWT authentication</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Security & Governance Layer</h3>
                <p className="text-gray-600 mb-4">
                  Implement comprehensive security architectures with identity management, data encryption, 
                  access controls, and compliance frameworks integrated across all architectural layers.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Azure Active Directory integration</li>
                  <li>• End-to-end encryption protocols</li>
                  <li>• Role-based access control (RBAC)</li>
                  <li>• Compliance monitoring and auditing</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Monitoring & Observability</h3>
                <p className="text-gray-600 mb-4">
                  Build comprehensive monitoring architectures that provide real-time visibility into system 
                  performance, data quality, and business metrics across the entire data platform.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Azure Monitor and Application Insights</li>
                  <li>• Custom metrics and alerting</li>
                  <li>• Data quality monitoring dashboards</li>
                  <li>• Performance optimization analytics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Pipeline Architecture */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Advanced Data Pipeline Architecture
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Real-Time Streaming Pipelines</h3>
                  <p className="text-gray-600 mb-6">
                    Design high-throughput, low-latency streaming architectures that process data in real-time 
                    from enterprise systems, IoT devices, and user interactions to enable immediate analytics 
                    and operational insights.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Stream Processing Technologies</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Azure Event Hubs for event ingestion</li>
                        <li>• Apache Kafka with Confluent Platform</li>
                        <li>• Azure Stream Analytics for real-time processing</li>
                        <li>• Apache Spark Structured Streaming</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Integration Patterns</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Change Data Capture (CDC) from SAP</li>
                        <li>• Event sourcing and CQRS patterns</li>
                        <li>• Message queuing with dead letter handling</li>
                        <li>• Exactly-once processing guarantees</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Batch Processing Pipelines</h3>
                  <p className="text-gray-600 mb-6">
                    Implement robust batch processing architectures for large-scale data transformations, 
                    historical data analysis, and complex analytical workloads that require extensive 
                    computational resources and processing time.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Batch Processing Frameworks</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Azure Data Factory for orchestration</li>
                        <li>• Apache Airflow for complex workflows</li>
                        <li>• Azure Databricks for large-scale processing</li>
                        <li>• Azure Synapse Analytics pipelines</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Optimization Strategies</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Partitioning and parallel processing</li>
                        <li>• Incremental data loading strategies</li>
                        <li>• Resource scaling and cost optimization</li>
                        <li>• Error handling and retry mechanisms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  Enterprise System Integration Architecture
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7L12 2z"/>
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">SAP Integration</h4>
                    <p className="text-gray-600 text-sm">Direct connectivity to SAP systems using RFC, IDoc, and OData protocols with real-time data synchronization</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Cloud Applications</h4>
                    <p className="text-gray-600 text-sm">Native integration with cloud SaaS applications through REST APIs and webhook architectures</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-red-600 mb-2">Legacy Systems</h4>
                    <p className="text-gray-600 text-sm">Secure connectivity to mainframe and legacy systems through modern integration patterns and adapters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud-Native Architecture */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Cloud-Native & Microservices Architecture
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Containerized Data Services</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Design containerized data processing services using Kubernetes and Docker that provide 
                  scalable, portable, and resilient data processing capabilities across cloud and hybrid environments.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Container Orchestration</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Azure Kubernetes Service (AKS)</li>
                      <li>• Helm charts for data applications</li>
                      <li>• Auto-scaling based on workload</li>
                      <li>• Service discovery and load balancing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Microservices Patterns</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Data mesh architecture principles</li>
                      <li>• Domain-driven data services</li>
                      <li>• Event-driven microservices</li>
                      <li>• Circuit breaker and retry patterns</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Serverless Data Processing</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Implement serverless architectures that automatically scale data processing workloads 
                  based on demand, reducing operational overhead while maintaining high performance and cost efficiency.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Serverless Technologies</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Azure Functions for event processing</li>
                      <li>• Logic Apps for workflow automation</li>
                      <li>• Serverless SQL pools in Synapse</li>
                      <li>• Event Grid for event routing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Optimization Strategies</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Cold start optimization</li>
                      <li>• Function chaining and composition</li>
                      <li>• Durable functions for stateful processing</li>
                      <li>• Cost-based execution planning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance & Security */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              High-Performance & Secure Data Flows
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Performance Optimization</h3>
                  <p className="text-gray-600 mb-4">
                    Implement advanced performance optimization techniques that ensure high-throughput data processing, 
                    low-latency access patterns, and efficient resource utilization across all architectural components.
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Intelligent data partitioning strategies</li>
                    <li>• In-memory computing with Redis</li>
                    <li>• Columnar storage optimization</li>
                    <li>• Query performance tuning</li>
                    <li>• Caching layer implementation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Security Architecture</h3>
                  <p className="text-gray-600 mb-4">
                    Design comprehensive security architectures that protect data at rest, in transit, and during processing 
                    while maintaining compliance with industry regulations and enterprise security policies.
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Zero-trust network architecture</li>
                    <li>• Advanced encryption protocols</li>
                    <li>• Identity and access management</li>
                    <li>• Data loss prevention (DLP)</li>
                    <li>• Threat detection and response</li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  Data Type Support & Processing Capabilities
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-red-600 mb-3">Structured Data</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Relational databases (SQL Server, PostgreSQL)</li>
                      <li>• Data warehouses (Azure Synapse DW)</li>
                      <li>• OLTP and OLAP workloads</li>
                      <li>• Transactional consistency guarantees</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-600 mb-3">Semi-Structured Data</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• JSON, XML, and Avro formats</li>
                      <li>• Schema evolution and compatibility</li>
                      <li>• Document databases (Cosmos DB)</li>
                      <li>• Flexible schema management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-600 mb-3">Unstructured Data</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Media files, documents, and images</li>
                      <li>• Text mining and NLP processing</li>
                      <li>• Blob storage optimization</li>
                      <li>• Content indexing and search</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Approach */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
              Architecture Implementation Methodology
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Architecture Assessment & Design</h3>
                    <p className="text-gray-600">
                      Comprehensive evaluation of current data landscape, business requirements, and technical constraints 
                      to design future-state architecture blueprints aligned with enterprise objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Modular Component Development</h3>
                    <p className="text-gray-600">
                      Build architectural components using modular, reusable patterns that support incremental 
                      deployment and independent scaling based on workload requirements and business priorities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Integration & Pipeline Implementation</h3>
                    <p className="text-gray-600">
                      Deploy data pipelines and integration layers connecting Azure Data Lake with enterprise systems, 
                      ensuring secure, high-performance data flows and real-time synchronization capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Optimization & Continuous Improvement</h3>
                    <p className="text-gray-600">
                      Implement monitoring, performance optimization, and continuous improvement processes that ensure 
                      architectural evolution aligned with changing business needs and emerging technology capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Transform Your Data Architecture Strategy
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Partner with Alphaxine Solutions to design and implement modular, scalable data architectures 
              that power your analytics, AI, and reporting initiatives with cloud-native, microservices-ready platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Schedule Architecture Review
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link 
                href="/services/data-analytics" 
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-red-600 transition-colors"
              >
                Explore Data Solutions
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataArchitecturePage; 

