import { useState, useEffect } from 'react';

const MyMatch = () => {
    const [matches, setMatches] = useState([]);
    const [activeTab, setActiveTab] = useState('pending');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    // Mock matches data
    const mockMatches = {
        pending: [
            {
                id: 1,
                matchedUser: {
                    name: "Alex Chen",
                    avatar: "AC",
                    location: "Dhaka, Bangladesh",
                    rating: 4.9,
                    completedSwaps: 23,
                    joinedDate: "2023-05-15",
                    bio: "Frontend developer passionate about React and modern web technologies. Love teaching and sharing knowledge!"
                },
                theirSkill: {
                    name: "Advanced React Development",
                    description: "5+ years experience in React, Redux, and modern frontend development. I can teach hooks, context, performance optimization, and testing.",
                    category: "Technology",
                    experience: "expert",
                    duration: "4-6 weeks",
                    availability: ["weekends", "evenings"]
                },
                yourSkill: {
                    name: "UI/UX Design",
                    description: "Professional designer with expertise in Figma and user research. I can teach design principles, user research, and prototyping.",
                    category: "Design",
                    experience: "advanced",
                    duration: "3-4 weeks",
                    availability: ["weekdays", "flexible"]
                },
                matchScore: 95,
                matchedAt: "2024-01-15",
                status: "pending",
                communication: "video",
                commonInterests: ["web development", "startup", "remote work"]
            },
            {
                id: 2,
                matchedUser: {
                    name: "Sarah Ahmed",
                    avatar: "SA",
                    location: "Online",
                    rating: 4.7,
                    completedSwaps: 15,
                    joinedDate: "2023-08-10",
                    bio: "Digital marketing expert helping businesses grow online. Always excited to learn new tech skills!"
                },
                theirSkill: {
                    name: "Digital Marketing Strategy",
                    description: "SEO, social media marketing, and brand growth strategies. I'll teach you how to build and scale online presence.",
                    category: "Business",
                    experience: "expert",
                    duration: "6-8 weeks",
                    availability: ["flexible", "remote"]
                },
                yourSkill: {
                    name: "Web Development",
                    description: "Full-stack development with React and Node.js. I can teach modern web development from scratch.",
                    category: "Technology",
                    experience: "intermediate",
                    duration: "8-10 weeks",
                    availability: ["evenings", "weekends"]
                },
                matchScore: 88,
                matchedAt: "2024-01-14",
                status: "pending",
                communication: "chat",
                commonInterests: ["freelancing", "entrepreneurship"]
            }
        ],
        active: [
            {
                id: 3,
                matchedUser: {
                    name: "Rahman Khan",
                    avatar: "RK",
                    location: "Chittagong",
                    rating: 5.0,
                    completedSwaps: 31,
                    joinedDate: "2022-12-20",
                    bio: "Professional guitarist and music teacher. Love sharing the joy of music with others!"
                },
                theirSkill: {
                    name: "Guitar & Music Theory",
                    description: "Professional guitarist with 10+ years experience. Teaching acoustic, electric guitar, and music theory fundamentals.",
                    category: "Music",
                    experience: "expert",
                    duration: "12 weeks",
                    availability: ["weekends", "flexible"]
                },
                yourSkill: {
                    name: "Graphic Design",
                    description: "Adobe Creative Suite and brand identity design. I'll help you create stunning visual designs.",
                    category: "Design",
                    experience: "advanced",
                    duration: "8 weeks",
                    availability: ["evenings", "weekends"]
                },
                matchScore: 92,
                matchedAt: "2024-01-10",
                status: "active",
                communication: "video",
                commonInterests: ["creative arts", "freelancing"],
                nextSession: "2024-01-20",
                progress: 60,
                sessionsCompleted: 6,
                totalSessions: 10
            }
        ],
        completed: [
            {
                id: 4,
                matchedUser: {
                    name: "Marie Dubois",
                    avatar: "MD",
                    location: "Dhaka",
                    rating: 4.8,
                    completedSwaps: 19,
                    joinedDate: "2023-03-08",
                    bio: "Native French speaker and language enthusiast. Love helping people discover French culture!"
                },
                theirSkill: {
                    name: "French Language",
                    description: "Native French speaker teaching business and conversational French with cultural insights.",
                    category: "Languages",
                    experience: "expert",
                    duration: "8 weeks",
                    availability: ["in-person", "flexible"]
                },
                yourSkill: {
                    name: "Photography",
                    description: "Portrait and landscape photography techniques using professional equipment and editing.",
                    category: "Arts",
                    experience: "intermediate",
                    duration: "6 weeks",
                    availability: ["weekends", "outdoor"]
                },
                matchScore: 85,
                matchedAt: "2023-12-15",
                completedAt: "2024-01-05",
                status: "completed",
                communication: "in-person",
                rating: {
                    given: 5,
                    received: 4
                },
                feedback: "Amazing teacher! Marie helped me become conversational in French in just 3 weeks. Her cultural insights made learning so much more interesting!",
                sessionsCompleted: 8,
                totalSessions: 8
            }
        ]
    };

    useEffect(() => {
        // Simulate API call
        const fetchMatches = async () => {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1500));
            setMatches(mockMatches);
            setIsLoading(false);
        };

        fetchMatches();
    }, []);

    const getMatchScoreColor = (score) => {
        if (score >= 90) return 'text-green-600 bg-green-100';
        if (score >= 80) return 'text-blue-600 bg-blue-100';
        if (score >= 70) return 'text-yellow-600 bg-yellow-100';
        return 'text-red-600 bg-red-100';
    };

    const getStatusColor = (status) => {
        const colors = {
            pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
            active: 'bg-green-100 text-green-700 border-green-200',
            completed: 'bg-blue-100 text-blue-700 border-blue-200'
        };
        return colors[status] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const handleAcceptMatch = (matchId) => {
        setMatches(prev => {
            const newMatches = { ...prev };
            const matchIndex = newMatches.pending.findIndex(m => m.id === matchId);
            if (matchIndex !== -1) {
                const match = newMatches.pending[matchIndex];
                match.status = 'active';
                match.progress = 0;
                match.sessionsCompleted = 0;
                match.totalSessions = 8;
                newMatches.active = [...(newMatches.active || []), match];
                newMatches.pending = newMatches.pending.filter(m => m.id !== matchId);
            }
            return newMatches;
        });
    };

    const handleDeclineMatch = (matchId) => {
        setMatches(prev => ({
            ...prev,
            pending: prev.pending.filter(m => m.id !== matchId)
        }));
    };

    const handleCompleteMatch = (matchId) => {
        setSelectedMatch(matches.active.find(m => m.id === matchId));
        setShowRatingModal(true);
    };

    const submitRating = () => {
        if (selectedMatch) {
            setMatches(prev => {
                const newMatches = { ...prev };
                const match = { ...selectedMatch };
                match.status = 'completed';
                match.completedAt = new Date().toISOString().split('T')[0];
                match.rating = { given: rating, received: 4 }; // Mock received rating
                match.feedback = feedback;

                newMatches.completed = [...(newMatches.completed || []), match];
                newMatches.active = newMatches.active.filter(m => m.id !== selectedMatch.id);
                return newMatches;
            });

            setShowRatingModal(false);
            setRating(0);
            setFeedback('');
            setSelectedMatch(null);
        }
    };

    const openMatchModal = (match) => {
        setSelectedMatch(match);
        setShowModal(true);
    };

    const closeMatchModal = () => {
        setSelectedMatch(null);
        setShowModal(false);
    };

    const renderStars = (rating, interactive = false, onRate = null) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span
                key={i}
                className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} ${interactive ? 'cursor-pointer hover:text-yellow-500' : ''}`}
                onClick={() => interactive && onRate && onRate(i + 1)}
            >
                ⭐
            </span>
        ));
    };

    const tabs = [
        { key: 'pending', label: 'Pending', icon: '⏳', count: matches.pending?.length || 0 },
        { key: 'active', label: 'Active', icon: '🔥', count: matches.active?.length || 0 },
        { key: 'completed', label: 'Completed', icon: '✅', count: matches.completed?.length || 0 }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 !py-16">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-8xl mx-auto text-center !px-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-white !mb-4">
                        Your
                        <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            Matches
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-8xl mx-auto !mb-8">
                        Connect with your perfect skill swap partners and grow together! 🤝
                    </p>

                    {/* Quick Stats */}
                    <div className="flex justify-center !space-x-8 !mt-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">
                                {(matches.pending?.length || 0) + (matches.active?.length || 0) + (matches.completed?.length || 0)}
                            </div>
                            <div className="text-blue-200">Total Matches</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">{matches.active?.length || 0}</div>
                            <div className="text-blue-200">Active Swaps</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">{matches.completed?.length || 0}</div>
                            <div className="text-blue-200">Completed</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-8xl mx-auto !px-6 !py-8">
                {/* Tabs */}
                <div className="bg-white rounded-2xl shadow-xl !p-6 !mb-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`!px-6 !py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${activeTab === tab.key
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <span>{tab.icon}</span>
                                <span>{tab.label}</span>
                                <span className={`!px-2 !py-1 rounded-full text-xs ${activeTab === tab.key
                                    ? 'bg-white/20 text-white'
                                    : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    {tab.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white rounded-2xl !p-6 shadow-lg animate-pulse">
                                <div className="flex items-center !mb-4">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full !mr-4"></div>
                                    <div className="flex-1">
                                        <div className="w-32 h-4 bg-gray-200 rounded !mb-2"></div>
                                        <div className="w-24 h-3 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full h-4 bg-gray-200 rounded"></div>
                                    <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                                    <div className="w-1/2 h-8 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Matches Content */}
                {!isLoading && (
                    <div className="!space-y-6">
                        {matches[activeTab]?.length > 0 ? (
                            matches[activeTab].map((match) => (
                                <div key={match.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                                    <div className="!p-6">
                                        {/* Match Header */}
                                        <div className="flex items-center justify-between !mb-6">
                                            <div className="flex items-center">
                                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl !mr-4">
                                                    {match.matchedUser.avatar}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-800">{match.matchedUser.name}</h3>
                                                    <p className="text-gray-600 flex items-center">
                                                        📍 {match.matchedUser.location}
                                                    </p>
                                                    <div className="flex items-center !mt-1">
                                                        {renderStars(match.matchedUser.rating)}
                                                        <span className="text-sm text-gray-600 !ml-2">
                                                            ({match.matchedUser.rating}) • {match.matchedUser.completedSwaps} swaps
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className={`!px-3 !py-1 rounded-full text-sm font-bold ${getMatchScoreColor(match.matchScore)}`}>
                                                    {match.matchScore}% Match
                                                </div>
                                                <div className={`!px-3 !py-1 rounded-full text-xs font-medium border !mt-2 ${getStatusColor(match.status)}`}>
                                                    {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Skills Exchange */}
                                        <div className="grid md:grid-cols-2 gap-6 !mb-6">
                                            {/* Their Skill */}
                                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 !p-4 rounded-xl border border-blue-100">
                                                <h4 className="font-bold text-blue-800 !mb-2 flex items-center">
                                                    🎓 They're Teaching
                                                </h4>
                                                <h5 className="font-semibold text-gray-800 !mb-1">{match.theirSkill.name}</h5>
                                                <p className="text-sm text-gray-600 !mb-2">{match.theirSkill.description}</p>
                                                <div className="flex items-center justify-between !mb-2">
                                                    <span className="text-xs bg-blue-100 text-blue-700 !px-2 !py-1 rounded-full">
                                                        {match.theirSkill.category}
                                                    </span>
                                                    <span className="text-xs text-gray-500 capitalize">
                                                        {match.theirSkill.experience} level
                                                    </span>
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    📅 Duration: {match.theirSkill.duration}
                                                </div>
                                            </div>

                                            {/* Your Skill */}
                                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 !p-4 rounded-xl border border-purple-100">
                                                <h4 className="font-bold text-purple-800 !mb-2 flex items-center">
                                                    📚 You're Teaching
                                                </h4>
                                                <h5 className="font-semibold text-gray-800 !mb-1">{match.yourSkill.name}</h5>
                                                <p className="text-sm text-gray-600 !mb-2">{match.yourSkill.description}</p>
                                                <div className="flex items-center justify-between !mb-2">
                                                    <span className="text-xs bg-purple-100 text-purple-700 !px-2 !py-1 rounded-full">
                                                        {match.yourSkill.category}
                                                    </span>
                                                    <span className="text-xs text-gray-500 capitalize">
                                                        {match.yourSkill.experience} level
                                                    </span>
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    📅 Duration: {match.yourSkill.duration}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Common Interests */}
                                        {match.commonInterests && (
                                            <div className="!mb-4">
                                                <h5 className="text-sm font-semibold text-gray-700 !mb-2">Common Interests:</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {match.commonInterests.map((interest, index) => (
                                                        <span key={index} className="!px-2 !py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                            #{interest}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Progress Bar for Active Matches */}
                                        {match.status === 'active' && (
                                            <div className="!mb-4">
                                                <div className="flex items-center justify-between !mb-2">
                                                    <span className="text-sm font-semibold text-gray-700">Swap Progress</span>
                                                    <span className="text-sm text-gray-600">
                                                        {match.sessionsCompleted}/{match.totalSessions} sessions • {match.progress}%
                                                    </span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-3">
                                                    <div
                                                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-300"
                                                        style={{ width: `${match.progress}%` }}
                                                    ></div>
                                                </div>
                                                {match.nextSession && (
                                                    <p className="text-xs text-gray-600 !mt-2">
                                                        🗓️ Next session: {formatDate(match.nextSession)}
                                                    </p>
                                                )}
                                            </div>
                                        )}

                                        {/* Completed Match Info */}
                                        {match.status === 'completed' && match.rating && (
                                            <div className="!mb-4 !p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
                                                <div className="flex items-center justify-between !mb-2">
                                                    <span className="text-sm font-semibold text-gray-700">Ratings:</span>
                                                    <span className="text-xs text-gray-600">
                                                        Completed: {formatDate(match.completedAt)}
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-4 !mb-2">
                                                    <div className="flex items-center">
                                                        <span className="text-sm text-gray-600 !mr-2">You gave:</span>
                                                        {renderStars(match.rating.given)}
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="text-sm text-gray-600 !mr-2">You received:</span>
                                                        {renderStars(match.rating.received)}
                                                    </div>
                                                </div>
                                                {match.feedback && (
                                                    <p className="text-sm text-gray-700 italic">
                                                        💬 "{match.feedback}"
                                                    </p>
                                                )}
                                            </div>
                                        )}

                                        {/* Additional Info */}
                                        <div className="flex items-center justify-between text-sm text-gray-600 !mb-6">
                                            <span>Matched on {formatDate(match.matchedAt)}</span>
                                            <span className="flex items-center">
                                                {match.communication === 'video' && '📹'}
                                                {match.communication === 'chat' && '💬'}
                                                {match.communication === 'in-person' && '🤝'}
                                                {match.communication === 'email' && '📧'}
                                                {match.communication === 'phone' && '📞'}
                                                <span className="!ml-1 capitalize">{match.communication}</span>
                                            </span>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-3">
                                            {match.status === 'pending' && (
                                                <>
                                                    <button
                                                        onClick={() => handleAcceptMatch(match.id)}
                                                        className="flex-1 !py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                                                    >
                                                        ✅ Accept Match
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeclineMatch(match.id)}
                                                        className="!px-6 !py-3 border-2 border-red-200 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-all duration-300"
                                                    >
                                                        ❌ Decline
                                                    </button>
                                                </>
                                            )}
                                            {match.status === 'active' && (
                                                <>
                                                    <button className="flex-1 !py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                                        💬 Message
                                                    </button>
                                                    <button className="!px-6 !py-3 border-2 border-gray-200 text-gray-600 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                                                        📅 Schedule
                                                    </button>
                                                    <button
                                                        onClick={() => handleCompleteMatch(match.id)}
                                                        className="!px-6 !py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                                                    >
                                                        ✅ Complete
                                                    </button>
                                                </>
                                            )}
                                            {match.status === 'completed' && (
                                                <button className="flex-1 !py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                                    🔄 Swap Again
                                                </button>
                                            )}
                                            <button
                                                onClick={() => openMatchModal(match)}
                                                className="!px-6 !py-3 border-2 border-blue-200 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300"
                                            >
                                                👁️ View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Empty State
                            <div className="text-center !py-16">
                                <div className="text-6xl !mb-4">
                                    {activeTab === 'pending' && '⏳'}
                                    {activeTab === 'active' && '🔥'}
                                    {activeTab === 'completed' && '✅'}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 !mb-2">
                                    No {activeTab} matches yet
                                </h3>
                                <p className="text-gray-600 !mb-6">
                                    {activeTab === 'pending' && "New match requests will appear here."}
                                    {activeTab === 'active' && "Start swapping skills to see active matches."}
                                    {activeTab === 'completed' && "Completed skill swaps will be shown here."}
                                </p>
                                <button className="!px-6 !py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
                                    🔍 Explore Skills
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Match Details Modal */}
            {showModal && selectedMatch && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center !p-4 z-50">
                    <div className="bg-white rounded-2xl max-w-8xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="!p-8">
                            <div className="flex items-center justify-between !mb-6">
                                <h2 className="text-3xl font-bold text-gray-800">Match Details</h2>
                                <button
                                    onClick={closeMatchModal}
                                    className="!p-2 hover:bg-gray-100 rounded-full transition-colors text-2xl"
                                >
                                    ❌
                                </button>
                            </div>

                            {/* Detailed User Profile */}
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 !p-6 rounded-2xl !mb-6">
                                <div className="flex items-center !mb-4">
                                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl !mr-6">
                                        {selectedMatch.matchedUser.avatar}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">{selectedMatch.matchedUser.name}</h3>
                                        <p className="text-gray-600 flex items-center !mb-2">
                                            📍 {selectedMatch.matchedUser.location}
                                        </p>
                                        <div className="flex items-center">
                                            {renderStars(selectedMatch.matchedUser.rating)}
                                            <span className="text-sm text-gray-600 !ml-2">
                                                ({selectedMatch.matchedUser.rating}) • {selectedMatch.matchedUser.completedSwaps} swaps completed
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 !mt-1">
                                            Member since {formatDate(selectedMatch.matchedUser.joinedDate)}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">"{selectedMatch.matchedUser.bio}"</p>
                            </div>

                            {/* Detailed Skills Information */}
                            <div className="grid md:grid-cols-2 gap-6 !mb-6">
                                {/* Their Skill Details */}
                                <div className="bg-blue-50 !p-6 rounded-2xl">
                                    <h4 className="text-xl font-bold text-blue-800 !mb-4 flex items-center">
                                        🎓 They're Teaching: {selectedMatch.theirSkill.name}
                                    </h4>
                                    <p className="text-gray-700 !mb-4">{selectedMatch.theirSkill.description}</p>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Category:</span>
                                            <span className="!px-2 !py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                                {selectedMatch.theirSkill.category}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Experience:</span>
                                            <span className="text-sm font-semibold capitalize">{selectedMatch.theirSkill.experience}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Duration:</span>
                                            <span className="text-sm font-semibold">{selectedMatch.theirSkill.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Availability:</span>
                                            <div className="flex flex-wrap gap-1">
                                                {selectedMatch.theirSkill.availability.map((avail, idx) => (
                                                    <span key={idx} className="!px-2 !py-1 bg-gray-100 text-gray-600 text-xs rounded-full capitalize">
                                                        {avail}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Your Skill Details */}
                                <div className="bg-purple-50 !p-6 rounded-2xl">
                                    <h4 className="text-xl font-bold text-purple-800 !mb-4 flex items-center">
                                        📚 You're Teaching: {selectedMatch.yourSkill.name}
                                    </h4>
                                    <p className="text-gray-700 !mb-4">{selectedMatch.yourSkill.description}</p>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Category:</span>
                                            <span className="!px-2 !py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                                                {selectedMatch.yourSkill.category}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Experience:</span>
                                            <span className="text-sm font-semibold capitalize">{selectedMatch.yourSkill.experience}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Duration:</span>
                                            <span className="text-sm font-semibold">{selectedMatch.yourSkill.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Availability:</span>
                                            <div className="flex flex-wrap gap-1">
                                                {selectedMatch.yourSkill.availability.map((avail, idx) => (
                                                    <span key={idx} className="!px-2 !py-1 bg-gray-100 text-gray-600 text-xs rounded-full capitalize">
                                                        {avail}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Match Statistics */}
                            <div className="bg-gradient-to-r from-gray-50 to-blue-50 !p-6 rounded-2xl !mb-6">
                                <h4 className="text-xl font-bold text-gray-800 !mb-4">Match Statistics</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="text-center">
                                        <div className={`text-2xl font-bold ${getMatchScoreColor(selectedMatch.matchScore).split(' ')[0]}`}>
                                            {selectedMatch.matchScore}%
                                        </div>
                                        <div className="text-sm text-gray-600">Compatibility</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600">
                                            {selectedMatch.communication === 'video' && '📹'}
                                            {selectedMatch.communication === 'chat' && '💬'}
                                            {selectedMatch.communication === 'in-person' && '🤝'}
                                            {selectedMatch.communication === 'email' && '📧'}
                                            {selectedMatch.communication === 'phone' && '📞'}
                                        </div>
                                        <div className="text-sm text-gray-600 capitalize">{selectedMatch.communication}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600">{selectedMatch.commonInterests?.length || 0}</div>
                                        <div className="text-sm text-gray-600">Common Interests</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600">
                                            {formatDate(selectedMatch.matchedAt)}
                                        </div>
                                        <div className="text-sm text-gray-600">Matched Date</div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex !space-x-4 ">
                                <button
                                    onClick={closeMatchModal}
                                    className="flex-1 !py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                                >
                                    Close
                                </button>
                                {selectedMatch.status === 'pending' && (
                                    <>
                                        <button
                                            onClick={() => {
                                                handleAcceptMatch(selectedMatch.id);
                                                closeMatchModal();
                                            }}
                                            className="flex-1 !py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
                                        >
                                            ✅ Accept Match
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleDeclineMatch(selectedMatch.id);
                                                closeMatchModal();
                                            }}
                                            className="flex-1 !py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
                                        >
                                            ❌ Decline
                                        </button>
                                    </>
                                )}
                                {selectedMatch.status === 'active' && (
                                    <button className="flex-1 !py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
                                        💬 Start Chat
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Rating Modal */}
            {showRatingModal && selectedMatch && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center !p-4 z-50">
                    <div className="bg-white rounded-2xl max-w-md w-full">
                        <div className="!p-6">
                            <h3 className="text-2xl font-bold text-gray-800 !mb-4">Rate Your Experience</h3>
                            <p className="text-gray-600 !mb-6">
                                How was your skill swap with {selectedMatch.matchedUser.name}?
                            </p>

                            <div className="!mb-6">
                                <label className="block text-sm font-semibold text-gray-700 !mb-2">Your Rating:</label>
                                <div className="flex items-center space-x-1">
                                    {renderStars(rating, true, setRating)}
                                </div>
                            </div>

                            <div className="!mb-6">
                                <label className="block text-sm font-semibold text-gray-700 !mb-2">Feedback (Optional):</label>
                                <textarea
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    placeholder="Share your experience..."
                                    rows="4"
                                    className="w-full !px-4 !py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none"
                                />
                            </div>

                            <div className="flex space-x-3">
                                <button
                                    onClick={() => {
                                        setShowRatingModal(false);
                                        setRating(0);
                                        setFeedback('');
                                    }}
                                    className="flex-1 !py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={submitRating}
                                    disabled={rating === 0}
                                    className="flex-1 !py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Submit Rating
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyMatch;