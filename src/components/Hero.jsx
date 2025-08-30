import { Zap, Users, Brain } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Recruiting <span className="text-blue-500">Without Limits</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-2xl font-medium text-gray-700">
          Speed and Scale.
        </p>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          We're building a new model for recruitment. One that combines revenue
          sharing, a marketing engine, a competitive broker community, and an
          AI-driven learning platform. This is recruitment rewritten for the
          modern era.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#start"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-xl shadow transition-colors inline-flex items-center"
          >
            Start Recruiting Today →
          </a>
          <a
            href="#learn"
            className="border border-gray-300 hover:border-gray-400 text-gray-800 font-medium px-6 py-3 rounded-xl transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Revenue Sharing */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 text-blue-500 p-3 rounded-full">
              <Zap size={28} />
            </div>
            <h3 className="mt-4 font-semibold text-lg">Revenue Sharing</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Aligned incentives for better outcomes
            </p>
          </div>

          {/* Broker Community */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 text-blue-500 p-3 rounded-full">
              <Users size={28} />
            </div>
            <h3 className="mt-4 font-semibold text-lg">Broker Community</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Competitive network of professionals
            </p>
          </div>

          {/* AI Learning */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 text-blue-500 p-3 rounded-full">
              <Brain size={28} />
            </div>
            <h3 className="mt-4 font-semibold text-lg">AI Learning</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Intelligent insights and automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
