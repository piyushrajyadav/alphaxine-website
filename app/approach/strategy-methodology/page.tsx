import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

export default function StrategyMethodology() {
  return (
    <BackgroundFix>
      <div className="force-gray-bg">
        {/* Hero Section */}
        <section className="relative text-black py-20 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
                Strategy Methodology
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Building successful digital strategies requires more than just good intentions—it demands a structured, 
                proven approach that bridges the gap between business vision and practical implementation. At Alphaxine, 
                our strategy methodology combines rigorous analysis with creative thinking to develop roadmaps that 
                actually work in the real world.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Why Strategy Matters More Than Ever
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  In today's fast-paced business environment, organizations can't afford to make strategic decisions based 
                  on gut feelings or outdated assumptions. The companies that thrive are those that take a systematic approach 
                  to understanding their current position, identifying opportunities, and charting a course for sustainable growth.
                </p>
                <p className="text-gray-700 mb-6">
                  What sets effective strategy apart isn't just the quality of insights—it's the discipline to validate 
                  assumptions, test ideas, and adapt based on real-world feedback. Our methodology ensures that every strategic 
                  initiative is grounded in evidence and designed for practical implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Steps */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-red-600">
              Our Strategic Framework in Action
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="space-y-16">
                {/* Step 1 */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="w-full lg:w-1/3">
                    <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-red-600">1</span>
                    </div>
                  </div>
                  <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">
                      Stakeholder Engagement & Discovery
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      We start by listening—really listening. Our discovery process brings together stakeholders across 
                      your organization to understand different perspectives, identify hidden challenges, and uncover 
                      opportunities that might otherwise be missed. This isn't about conducting generic interviews; 
                      it's about creating structured conversations that reveal the real drivers of your business.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Workshop Facilitation</h4>
                        <ul className="text-gray-600 space-y-2 text-sm">
                          <li>• Executive alignment sessions</li>
                          <li>• Cross-functional team workshops</li>
                          <li>• Customer journey mapping</li>
                          <li>• Competitive landscape analysis</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Stakeholder Insights</h4>
                        <ul className="text-gray-600 space-y-2 text-sm">
                          <li>• Individual stakeholder interviews</li>
                          <li>• Department-specific requirements gathering</li>
                          <li>• Customer and partner feedback sessions</li>
                          <li>• Market research and industry benchmarking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="w-full lg:w-1/3">
                    <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-red-600">2</span>
                    </div>
                  </div>
                  <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">
                      Maturity Assessment & Gap Analysis
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Understanding where you are today is crucial for determining where you need to go. Our comprehensive 
                      assessment evaluates your organization's current capabilities across technology, processes, and people. 
                      We don't just identify gaps—we prioritize them based on impact and feasibility, ensuring your efforts 
                      focus on the areas that will deliver the greatest value.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Current State Analysis</h4>
                        <ul className="text-gray-600 space-y-2 text-sm">
                          <li>• Technology architecture review</li>
                          <li>• Process efficiency evaluation</li>
                          <li>• Skills and capability assessment</li>
                          <li>• Cultural readiness analysis</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Gap Identification</h4>
                        <ul className="text-gray-600 space-y-2 text-sm">
                          <li>• Performance benchmarking</li>
                          <li>• Best practice comparison</li>
                          <li>• Resource requirement analysis</li>
                          <li>• Risk and opportunity mapping</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="w-full lg:w-1/3">
                    <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-red-600">3</span>
                    </div>
                  </div>
                  <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">
                      Strategic Roadmap Development
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      This is where insights transform into action. Working collaboratively with your team, we develop 
                      a detailed transformation roadmap that aligns with your business objectives and constraints. 
                      Our approach ensures that every initiative has clear success criteria, realistic timelines, 
                      and defined dependencies.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Co-Development Process</h4>
                        <ul className="text-gray-600 space-y-2 text-sm">
                          <li>• Collaborative roadmap planning</li>
                          <li>• Priority-based initiative sequencing</li>
                          <li>• Resource allocation modeling</li>
                          <li>• Success metrics definition</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Strategic Alignment</h4>
                        <ul className="text-gray-600 space-y-2 text-sm">
                          <li>• Business objective mapping</li>
                          <li>• Industry best practice integration</li>
                          <li>• Risk mitigation planning</li>
                          <li>• Change management preparation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="w-full lg:w-1/3">
                    <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-red-600">4</span>
                    </div>
                  </div>
                  <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">
                      Design Thinking & Solution Validation
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Great strategies need great solutions. Using design thinking principles, we ideate innovative 
                      approaches to your business challenges and validate them through rapid prototyping. This 
                      human-centered approach ensures that our recommendations aren't just technically sound—they're 
                      practical and user-friendly in real-world scenarios.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Innovation Methods</h4>
                        <ul className="text-gray-600 space-y-2 text-sm">
                          <li>• Human-centered design workshops</li>
                          <li>• Ideation and brainstorming sessions</li>
                          <li>• Rapid prototyping techniques</li>
                          <li>• User experience validation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">Validation Process</h4>
                        <ul className="text-gray-600 space-y-2 text-sm">
                          <li>• Iterative testing and refinement</li>
                          <li>• Stakeholder feedback integration</li>
                          <li>• Feasibility and impact assessment</li>
                          <li>• Real-world pilot programs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Principles Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-red-600">
              What Makes Our Approach Different
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Collaborative Approach</h3>
                <p className="text-gray-600 text-sm">
                  We work with you, not for you. Our collaborative methodology ensures your team is invested in the strategy from day one.
                </p>
              </div>

              <div className="text-center bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Evidence-Based</h3>
                <p className="text-gray-600 text-sm">
                  Every recommendation is backed by data, research, and proven best practices. No assumptions, just facts.
                </p>
              </div>

              <div className="text-center bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Action-Oriented</h3>
                <p className="text-gray-600 text-sm">
                  Our strategies are designed for implementation, with clear next steps and practical guidance for execution.
                </p>
              </div>

              <div className="text-center bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-600">Iterative Refinement</h3>
                <p className="text-gray-600 text-sm">
                  We continuously test, learn, and adapt our strategies based on real-world feedback and changing conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-red-600">
              The Value of Strategic Discipline
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-red-600 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-red-600">Measurable Results</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our structured approach delivers strategies that work. Organizations following our methodology 
                  see 40-60% higher success rates in their transformation initiatives compared to ad-hoc approaches.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-red-600 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-red-600">Faster Implementation</h3>
                <p className="text-gray-700 leading-relaxed">
                  By thoroughly understanding requirements upfront and validating solutions early, we reduce 
                  implementation time by 30-50% while minimizing costly course corrections later.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-red-600 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-red-600">Reduced Risk</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our systematic approach to validation and testing identifies potential issues before they become 
                  expensive problems, significantly reducing project risk and improving long-term success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-red-600">
                Ready to Build Your Strategic Roadmap?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Transform your business vision into an actionable strategy. Let's work together to create a 
                roadmap that aligns with your goals and delivers measurable results.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  Start Your Strategy Journey
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
} 












