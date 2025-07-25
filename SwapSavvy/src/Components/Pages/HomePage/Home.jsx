import { Link } from 'react-router';
import { useState } from 'react';

const Home = () => {
    // Sample data for recently shared skills (replace with actual backend data)
    const [recentSkills, setRecentSkills] = useState([
        {
            id: 1,
            skillName: "Learn Photoshop",
            userName: "Tanvir",
            swapType: "Wants to Teach",
            description: "Wants to teach Photoshop in exchange for video editing.",
            tags: ["design", "creative"]
        },
        {
            id: 2,
            skillName: "French Conversation",
            userName: "Marie",
            swapType: "Wants to Teach",
            description: "Native French speaker looking to learn Bengali cooking.",
            tags: ["language", "beginner"]
        },
        {
            id: 3,
            skillName: "Web Development",
            userName: "Rafi",
            swapType: "Wants to Learn",
            description: "Wants to learn React in exchange for graphic design tutorials.",
            tags: ["coding", "frontend"]
        },
        {
            id: 4,
            skillName: "Guitar Lessons",
            userName: "Alex",
            swapType: "Wants to Teach",
            description: "Experienced guitarist offering lessons for Python coaching.",
            tags: ["music", "instrument"]
        },
        {
            id: 5,
            skillName: "IELTS Preparation",
            userName: "Sarah",
            swapType: "Wants to Teach",
            description: "IELTS instructor looking to learn digital marketing.",
            tags: ["language", "test-prep"]
        },
        {
            id: 6,
            skillName: "Cooking Bengali Food",
            userName: "Fatima",
            swapType: "Wants to Teach",
            description: "Traditional Bengali cooking in exchange for English conversation.",
            tags: ["cooking", "culture"]
        }
    ]);

    const popularSkills = [
        { name: "Graphic Design", icon: "🎨", count: "1.2k" },
        { name: "Web Development", icon: "💻", count: "956" },
        { name: "Spoken English", icon: "🗣️", count: "834" },
        { name: "Guitar", icon: "🎸", count: "672" },
        { name: "Cooking", icon: "🥘", count: "543" },
        { name: "Writing", icon: "✍️", count: "421" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Hero Section */}
            <section className="!py-20 !px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold !mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        Swap Skills, Not Money
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 !mb-8 max-w-4xl mx-auto leading-relaxed">
                        Connect with learners and sharers across Bangladesh and beyond. Trade your skills — coding for cooking, design for writing — all for free.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center !mt-10">
                        <Link to="/signup" className="btn btn-primary !px-8 !py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 !bg-gradient-to-r !from-blue-600 !to-purple-600 border-0">
                            Join Now
                        </Link>
                        <Link to="/explore" className="btn btn-outline !px-8 !py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 !border-purple-600 !text-purple-600 hover:!bg-purple-600 hover:!text-white">
                            Explore Skills
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="!py-16 !px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center !mb-16 text-gray-800">How It Works</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Create an Account",
                                desc: "Join as a learner, teacher, or both.",
                                icon: "👤"
                            },
                            {
                                step: "2",
                                title: "List Your Skills",
                                desc: "What can you teach or learn?",
                                icon: "📝"
                            },
                            {
                                step: "3",
                                title: "Get Matched",
                                desc: "We help you find your ideal swap buddy.",
                                icon: "🤝"
                            },
                            {
                                step: "4",
                                title: "Swap & Learn",
                                desc: "Meet, connect, and grow together.",
                                icon: "🎓"
                            }
                        ].map((item, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-20 h-20 mx-auto !mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <div className="w-8 h-8 mx-auto !mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold !mb-2 text-gray-800">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Skills Section */}
            <section className="!py-16 !px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center !mb-16 text-gray-800">Popular Skill Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {popularSkills.map((skill, index) => (
                            <div key={index} className="bg-white rounded-xl !p-6 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100">
                                <div className="text-4xl !mb-3">{skill.icon}</div>
                                <h3 className="font-semibold text-gray-800 !mb-1">{skill.name}</h3>
                                <p className="text-sm text-gray-500">{skill.count} swappers</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recently Shared Skills Section */}
            <section className="!py-16 !px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center !mb-4 text-gray-800">Recently Shared Skills</h2>
                    <p className="text-center text-gray-600 !mb-12">See what people are offering or looking for right now</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentSkills.map((skill) => (
                            <div key={skill.id} className="bg-white rounded-xl !p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="flex items-start justify-between !mb-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{skill.skillName}</h3>
                                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${skill.swapType === "Wants to Teach"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-blue-100 text-blue-700"
                                        }`}>
                                        {skill.swapType}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm !mb-3">by {skill.userName}</p>
                                <p className="text-gray-700 !mb-4">{skill.description}</p>
                                <div className="flex flex-wrap gap-2 !mb-4">
                                    {skill.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="btn btn-primary btn-sm w-full !bg-gradient-to-r !from-blue-600 !to-purple-600 border-0 hover:shadow-lg transition-all duration-300">
                                    Swap Now
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center !mt-12">
                        <Link to="/explore" className="btn btn-outline !px-8 !py-3 font-semibold rounded-full !border-purple-600 !text-purple-600 hover:!bg-purple-600 hover:!text-white transition-all duration-300">
                            View All Skills
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="!py-16 !px-4 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 text-center text-white">
                        {[
                            { number: "10,000+", label: "Active Swappers" },
                            { number: "25,000+", label: "Skills Exchanged" },
                            { number: "150+", label: "Countries" },
                            { number: "4.9★", label: "Average Rating" }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-4xl font-bold !mb-2">{stat.number}</div>
                                <div className="text-lg opacity-90">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="!py-20 !px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold !mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Got a skill? Need a skill? Let's Swap.
                    </h2>
                    <p className="text-xl text-gray-600 !mb-10">
                        Join thousands of learners and teachers building connections and growing together.
                    </p>
                    <Link to="/signup" className="btn btn-primary !px-12 !py-4 text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 !bg-gradient-to-r !from-blue-600 !to-purple-600 border-0">
                        Start Swapping Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;