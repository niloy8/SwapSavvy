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
        <div className="min-h-screen  bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Hero Section */}
            <section className="relative !py-20 !px-4 max-w-8xl mx-auto overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                        alt="People learning and collaborating"
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-indigo-900/80"></div>
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            backgroundSize: '60px 60px'
                        }}></div>
                    </div>
                </div>


                {/* Content */}
                <div className="relative z-10 w-full text-center !px-4">
                    <div className="max-w-8xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold !mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-lg">
                            Swap Skills, Not Money
                        </h1>

                        <div className="flex justify-center">
                            <p className="text-xl md:text-2xl text-white/90 !mb-8 max-w-4xl leading-relaxed drop-shadow-md text-center">
                                Connect with learners and sharers across Bangladesh and beyond. Trade your skills — coding for cooking, design for writing — all for free.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center !mt-10">
                            <Link to="/signup" className="btn btn-primary !px-8 !py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 !bg-gradient-to-r !from-blue-600 !to-purple-600 border-0 hover:scale-105">
                                Join Now
                            </Link>
                            <Link to="/explore" className="btn !px-8 !py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 !bg-white/20 !text-white !border-white/30 hover:!bg-white hover:!text-purple-600 backdrop-blur-sm">
                                Explore Skills
                            </Link>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse hidden lg:block"></div>
                    <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse hidden lg:block"></div>
                    <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-pulse hidden lg:block"></div>
                </div>
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="!py-16 !px-4 bg-white">
                <div className="max-w-8xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-center !mb-16 text-gray-800">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
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
                            <div key={index} className="text-center group max-w-xs">
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
                <div className="max-w-8xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-center !mb-16 text-gray-800">Popular Skill Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
                        {popularSkills.map((skill, index) => (
                            <div key={index} className="bg-white rounded-xl !p-6 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100 w-full max-w-[200px]">
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
                <div className="max-w-8xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-center !mb-4 text-gray-800">Recently Shared Skills</h2>
                    <p className="text-center text-gray-600 !mb-12">See what people are offering or looking for right now</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {recentSkills.map((skill) => (
                            <div key={skill.id} className="bg-white rounded-xl !p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full max-w-[400px]">
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
            <section className=" !py-16 !px-4 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-8xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white justify-items-center">
                        {[
                            { number: "10,000+", label: "Active Swappers" },
                            { number: "25,000+", label: "Skills Exchanged" },
                            { number: "150+", label: "Countries" },
                            { number: "4.9★", label: "Average Rating" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold !mb-2">{stat.number}</div>
                                <div className="text-lg opacity-90">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="!py-20 !px-4 bg-white">
                <div className="max-w-8xl mx-auto text-center">
                    <h2 className="text-5xl font-bold !mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Got a skill? Need a skill? Let's Swap.
                    </h2>
                    <p className="text-xl text-gray-600 !mb-10">
                        Join thousands of learners and teachers building connections and growing together.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/signup" className="btn btn-primary !px-12 !py-4 text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 !bg-gradient-to-r !from-blue-600 !to-purple-600 border-0">
                            Start Swapping Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;