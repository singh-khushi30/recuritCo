import { MessageSquare, Users2, BarChart3, BookOpen, Bot, LineChart } from "lucide-react";

export default function Future() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900">
          The Future of Recruitment
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Preview of upcoming community and AI-driven features that will transform how
          recruitment works.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Community Hub */}
          <div className="bg-blue-50 shadow-sm rounded-2xl border border-gray-100 p-8 text-left">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-500 p-3 rounded-xl">
                <MessageSquare size={24} />
              </div>
              <h3 className="ml-3 text-xl font-semibold">Community Hub</h3>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <Users2 size={18} className="text-gray-400 mr-2" />
                Real-time broker collaboration
              </li>
              <li className="flex items-center">
                <BarChart3 size={18} className="text-gray-400 mr-2" />
                Performance leaderboards
              </li>
              <li className="flex items-center">
                <BookOpen size={18} className="text-gray-400 mr-2" />
                Knowledge sharing forums
              </li>
            </ul>

            <p className="mt-4 text-gray-600 text-sm">
              A competitive community where brokers share insights, compete on
              performance metrics, and collaborate on challenging placements.
            </p>

            <button className="mt-6 w-full border border-gray-300 hover:border-gray-400 font-medium text-gray-800 py-3 rounded-xl transition-colors">
              Join Community Waitlist
            </button>
          </div>

          {/* AI Learning Platform */}
          <div className="bg-blue-50 shadow-sm rounded-2xl border border-gray-100 p-8 text-left">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-500 p-3 rounded-xl">
                <Bot size={24} />
              </div>
              <h3 className="ml-3 text-xl font-semibold">AI Learning Platform</h3>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <Users2 size={18} className="text-gray-400 mr-2" />
                Intelligent candidate matching
              </li>
              <li className="flex items-center">
                <LineChart size={18} className="text-gray-400 mr-2" />
                Predictive success scoring
              </li>
              <li className="flex items-center">
                <BarChart3 size={18} className="text-gray-400 mr-2" />
                Automated outreach optimization
              </li>
            </ul>

            <p className="mt-4 text-gray-600 text-sm">
              Machine learning algorithms that analyze successful placements to
              recommend optimal strategies and automate routine tasks.
            </p>

            <button className="mt-6 w-full border border-gray-300 hover:border-gray-400 font-medium text-gray-800 py-3 rounded-xl transition-colors">
              Early AI Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
