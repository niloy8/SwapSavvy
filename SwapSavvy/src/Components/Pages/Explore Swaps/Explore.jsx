import { useState, useEffect } from 'react';

const Explore = () => {
    const [skillPosts, setSkillPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSwapType, setSelectedSwapType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [sortBy, setSortBy] = useState('newest');

    // Mock data - replace with actual API call
    const mockSkillPosts = [
        {
            id: 1,
            skillName: "Advanced React Development",
            description: "I have 5+ years of experience in React and can teach advanced concepts like Context API, Redux, custom hooks, and performance optimization. Looking to learn UI/UX design principles in exchange.",
            swapType: "teach",
            category: "Technology",
            userName: "Alex Chen",
            userAvatar: "AC",
            location: "Dhaka, Bangladesh",
            experience: "expert",
            communication: "video",
            tags: ["react", "javascript", "frontend", "advanced"],
            postedAt: "2024-01-15",
            viewCount: 124,
            interestedCount: 8
        },
        {
            id: 2,
            skillName: "Digital Marketing Strategy",
            description: "Want to learn web development from scratch. I'm a complete beginner but very motivated! In exchange, I can teach digital marketing, SEO, and social media strategy - I've grown multiple brands from 0 to 100k followers.",
            swapType: "learn",
            category: "Business",
            userName: "Sarah Ahmed",
            userAvatar: "SA",
            location: "Online",
            experience: "beginner",
            communication: "chat",
            tags: ["marketing", "seo", "social-media", "beginner-friendly"],
            postedAt: "2024-01-14",
            viewCount: 89,
            interestedCount: 12
        },
        {
            id: 3,
            skillName: "Guitar & Music Theory",
            description: "Professional guitarist with 10+ years experience. I can teach acoustic/electric guitar, music theory, songwriting. Looking for someone to teach me graphic design and Adobe Creative Suite.",
            swapType: "exchange",
            category: "Music",
            userName: "Rahman Khan",
            userAvatar: "RK",
            location: "Chittagong",
            experience: "expert",
            communication: "video",
            tags: ["guitar", "music-theory", "songwriting", "creative"],
            postedAt: "2024-01-13",
            viewCount: 156,
            interestedCount: 15
        },
        {
            id: 4,
            skillName: "French Language & Culture",
            description: "Native French speaker from Paris, currently living in Dhaka. I can teach conversational French, business French, and French culture. Would love to improve my Bengali and learn about Bangladeshi culture!",
            swapType: "teach",
            category: "Languages",
            userName: "Marie Dubois",
            userAvatar: "MD",
            location: "Dhaka",
            experience: "advanced",
            communication: "in-person",
            tags: ["french", "culture", "conversation", "business"],
            postedAt: "2024-01-12",
            viewCount: 203,
            interestedCount: 22
        },
        {
            id: 5,
            skillName: "Traditional Bengali Cooking",
            description: "Learn authentic Bengali recipes passed down through generations! I can teach fish curry, biriyani, sweets, and regional specialties. Looking for someone to teach me photography and photo editing.",
            swapType: "exchange",
            category: "Cooking",
            userName: "Rashida Begum",
            userAvatar: "RB",
            location: "Sylhet",
            experience: "expert",
            communication: "video",
            tags: ["cooking", "bengali", "traditional", "recipes"],
            postedAt: "2024-01-11",
            viewCount: 178,
            interestedCount: 18
        },
        {
            id: 6,
            skillName: "Data Science & Python",
            description: "Want to master data science and machine learning. I'm intermediate in Python but need guidance with ML algorithms, data visualization, and real-world projects. I can teach advanced Excel, business analysis, and project management.",
            swapType: "learn",
            category: "Technology",
            userName: "Fatima Islam",
            userAvatar: "FI",
            location: "Online",
            experience: "intermediate",
            communication: "chat",
            tags: ["data-science", "python", "machine-learning", "excel"],
            postedAt: "2024-01-10",
            viewCount: 95,
            interestedCount: 9
        }
    ];

    const categories = [
        { value: 'all', label: 'All Categories', icon: '🌟', count: mockSkillPosts.length },
        { value: 'Technology', label: 'Technology', icon: '💻', count: 2 },
        { value: 'Design', label: 'Design', icon: '🎨', count: 0 },
        { value: 'Languages', label: 'Languages', icon: '🗣️', count: 1 },
        { value: 'Music', label: 'Music', icon: '🎵', count: 1 },
        { value: 'Cooking', label: 'Cooking', icon: '👨‍🍳', count: 1 },
        { value: 'Business', label: 'Business', icon: '💼', count: 1 }
    ];

    const swapTypes = [
        { value: 'all', label: 'All Types', icon: '🔄', color: 'bg-gray-100 text-gray-700' },
        { value: 'teach', label: 'Teaching', icon: '🎓', color: 'bg-green-100 text-green-700' },
        { value: 'learn', label: 'Learning', icon: '📚', color: 'bg-blue-100 text-blue-700' },
        { value: 'exchange', label: 'Exchange', icon: '🔄', color: 'bg-purple-100 text-purple-700' }
    ];

    const communicationIcons = {
        video: '📹',
        chat: '💬',
        email: '📧',
        phone: '📞',
        'in-person': '🤝'
    };

    // Simulate API call
    useEffect(() => {
        const fetchSkillPosts = async () => {
            setIsLoading(true);
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSkillPosts(mockSkillPosts);
            setFilteredPosts(mockSkillPosts);
            setIsLoading(false);
        };

        fetchSkillPosts();
    }, []);

    // Filter and search logic
    useEffect(() => {
        let filtered = skillPosts;

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(post => post.category === selectedCategory);
        }

        // Filter by swap type
        if (selectedSwapType !== 'all') {
            filtered = filtered.filter(post => post.swapType === selectedSwapType);
        }

        // Search filter
        if (searchQuery) {
            filtered = filtered.filter(post =>
                post.skillName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // Sort
        filtered = [...filtered].sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return new Date(b.postedAt) - new Date(a.postedAt);
                case 'popular':
                    return b.interestedCount - a.interestedCount;
                case 'views':
                    return b.viewCount - a.viewCount;
                default:
                    return 0;
            }
        });

        setFilteredPosts(filtered);
    }, [skillPosts, selectedCategory, selectedSwapType, searchQuery, sortBy]);

    const getSwapTypeStyle = (type) => {
        const styles = {
            teach: 'bg-green-100 text-green-700 border-green-200',
            learn: 'bg-blue-100 text-blue-700 border-blue-200',
            exchange: 'bg-purple-100 text-purple-700 border-purple-200'
        };
        return styles[type] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const getSwapTypeLabel = (type) => {
        const labels = {
            teach: 'Teaching',
            learn: 'Learning',
            exchange: 'Exchange'
        };
        return labels[type] || type;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) return 'Yesterday';
        if (diffDays <= 7) return `${diffDays} days ago`;
        return date.toLocaleDateString();
    };

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
                        Explore
                        <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            Skill Swaps
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-8xl mx-auto !mb-8">
                        Discover amazing skills shared by our community. Find your perfect swap match! 🚀
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center space-x-8 !mt-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">{skillPosts.length}+</div>
                            <div className="text-blue-200">Active Skills</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">150+</div>
                            <div className="text-blue-200">Swappers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">89%</div>
                            <div className="text-blue-200">Success Rate</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters Section */}
            <div className="max-w-8xl mx-auto !px-6 !py-8">
                <div className="bg-white rounded-2xl shadow-xl !p-6 !mb-8">
                    {/* Search Bar */}
                    <div className="!mb-6">
                        <div className="relative max-w-2xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search skills, tags, or descriptions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full !px-6 !py-4 !pl-12 text-lg border-2 !border-gray-200 focus:!border-blue-500 rounded-2xl transition-all duration-300 focus:!outline-none focus:!ring-0 bg-gray-50 focus:bg-white"
                            />
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                🔍
                            </div>
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category.value}
                                    onClick={() => setSelectedCategory(category.value)}
                                    className={`!px-4 !py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${selectedCategory === category.value
                                        ? 'bg-blue-500 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    <span>{category.icon}</span>
                                    <span>{category.label}</span>
                                    <span className={`text-xs !px-2 !py-1 rounded-full ${selectedCategory === category.value
                                        ? 'bg-white/20 text-white'
                                        : 'bg-gray-200 text-gray-600'
                                        }`}>
                                        {category.count}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Sort Options */}
                        <div className="flex items-center space-x-4">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="!px-4 !py-2 border-2 !border-gray-200 rounded-xl focus:!border-blue-500 focus:!outline-none !bg-white"
                            >
                                <option value="newest">Newest First</option>
                                <option value="popular">Most Popular</option>
                                <option value="views">Most Viewed</option>
                            </select>
                        </div>
                    </div>

                    {/* Swap Type Filters */}
                    <div className="flex flex-wrap gap-2 !mt-4">
                        {swapTypes.map((type) => (
                            <button
                                key={type.value}
                                onClick={() => setSelectedSwapType(type.value)}
                                className={`!px-4 !py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 border-2 ${selectedSwapType === type.value
                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                    : `border-transparent ${type.color} hover:scale-105`
                                    }`}
                            >
                                <span>{type.icon}</span>
                                <span>{type.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Header */}
                <div className="flex items-center justify-between !mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {filteredPosts.length} Skills Found
                        {searchQuery && (
                            <span className="text-lg text-gray-600 !ml-2">
                                for "{searchQuery}"
                            </span>
                        )}
                    </h2>
                    {(selectedCategory !== 'all' || selectedSwapType !== 'all' || searchQuery) && (
                        <button
                            onClick={() => {
                                setSelectedCategory('all');
                                setSelectedSwapType('all');
                                setSearchQuery('');
                            }}
                            className="!px-4 !py-2 text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Clear Filters
                        </button>
                    )}
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white rounded-2xl !p-6 shadow-lg animate-pulse">
                                <div className="flex items-center !mb-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full !mr-3"></div>
                                    <div>
                                        <div className="w-24 h-4 bg-gray-200 rounded !mb-2"></div>
                                        <div className="w-16 h-3 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                                <div className="w-full h-6 bg-gray-200 rounded !mb-3"></div>
                                <div className="w-full h-20 bg-gray-200 rounded !mb-4"></div>
                                <div className="flex space-x-2 !mb-4">
                                    <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
                                    <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
                                </div>
                                <div className="w-24 h-10 bg-gray-200 rounded-xl"></div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Skill Posts Grid */}
                {!isLoading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post) => (
                                <div key={post.id} className="bg-white rounded-2xl !p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                                    {/* User Info */}
                                    <div className="flex items-center justify-between !mb-4">
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold !mr-3">
                                                {post.userAvatar}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">{post.userName}</h4>
                                                <p className="text-sm text-gray-500 flex items-center">
                                                    📍 {post.location}
                                                </p>
                                            </div>
                                        </div>
                                        <span className={`!px-3 !py-1 rounded-full text-xs font-bold border ${getSwapTypeStyle(post.swapType)}`}>
                                            {getSwapTypeLabel(post.swapType)}
                                        </span>
                                    </div>

                                    {/* Skill Title */}
                                    <h3 className="text-xl font-bold text-gray-800 !mb-3 line-clamp-2">
                                        {post.skillName}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 !mb-4 line-clamp-3">
                                        {post.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 !mb-4">
                                        {post.tags.slice(0, 3).map((tag, index) => (
                                            <span key={index} className="!px-2 !py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                #{tag}
                                            </span>
                                        ))}
                                        {post.tags.length > 3 && (
                                            <span className="!px-2 !py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                +{post.tags.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Meta Info */}
                                    <div className="flex items-center justify-between !mb-4 text-sm text-gray-500">
                                        <div className="flex items-center space-x-4">
                                            <span className="flex items-center">
                                                👁️ {post.viewCount}
                                            </span>
                                            <span className="flex items-center">
                                                ❤️ {post.interestedCount}
                                            </span>
                                            <span className="flex items-center">
                                                {communicationIcons[post.communication]} {post.communication}
                                            </span>
                                        </div>
                                        <span>{formatDate(post.postedAt)}</span>
                                    </div>

                                    {/* Experience Level */}
                                    <div className="flex items-center justify-between !mb-6">
                                        <span className={`!px-3 !py-1 rounded-full text-xs font-medium ${post.experience === 'expert' ? 'bg-yellow-100 text-yellow-700' :
                                            post.experience === 'advanced' ? 'bg-green-100 text-green-700' :
                                                post.experience === 'intermediate' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-gray-100 text-gray-700'
                                            }`}>
                                            {post.experience === 'expert' ? '🏆' :
                                                post.experience === 'advanced' ? '🌳' :
                                                    post.experience === 'intermediate' ? '🌿' : '🌱'} {post.experience}
                                        </span>
                                        <span className="text-xs text-gray-500">{post.category}</span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        <button className="flex-1 !py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                            💬 Swap Now
                                        </button>
                                        <button className="!px-4 !py-3 border-2 border-gray-200 text-gray-600 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                                            📖 View More
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // No Results State
                            <div className="col-span-full text-center !py-16">
                                <div className="text-6xl !mb-4">🔍</div>
                                <h3 className="text-2xl font-bold text-gray-800 !mb-2">No Skills Found</h3>
                                <p className="text-gray-600 !mb-6">
                                    {searchQuery
                                        ? `No skills match "${searchQuery}". Try different keywords.`
                                        : 'No skills match your current filters. Try adjusting your search criteria.'
                                    }
                                </p>
                                <button
                                    onClick={() => {
                                        setSelectedCategory('all');
                                        setSelectedSwapType('all');
                                        setSearchQuery('');
                                    }}
                                    className="!px-6 !py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Load More Button */}
                {!isLoading && filteredPosts.length > 0 && (
                    <div className="text-center !mt-12">
                        <button className="!px-8 !py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300">
                            Load More Skills
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Explore;