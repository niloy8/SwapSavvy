import { useState, useEffect, useRef } from 'react';

const Chatting = () => {
    const [conversations, setConversations] = useState([]);
    const [activeChat, setActiveChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [showAttachments, setShowAttachments] = useState(false);
    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);

    // Mock data for conversations
    const mockConversations = [
        {
            id: 1,
            user: {
                name: "Alex Chen",
                avatar: "AC",
                status: "online",
                lastSeen: "now"
            },
            skill: "React Development ↔ UI/UX Design",
            lastMessage: {
                text: "Great! Let's schedule our next session for tomorrow.",
                time: "2 min ago",
                unread: 2,
                sender: "them"
            },
            matchType: "active"
        },
        {
            id: 2,
            user: {
                name: "Sarah Ahmed",
                avatar: "SA",
                status: "online",
                lastSeen: "5 min ago"
            },
            skill: "Digital Marketing ↔ Web Development",
            lastMessage: {
                text: "Thanks for the lesson! The SEO tips were really helpful.",
                time: "1 hour ago",
                unread: 0,
                sender: "you"
            },
            matchType: "active"
        },
        {
            id: 3,
            user: {
                name: "Rahman Khan",
                avatar: "RK",
                status: "away",
                lastSeen: "2 hours ago"
            },
            skill: "Guitar Lessons ↔ Graphic Design",
            lastMessage: {
                text: "Can we reschedule today's session?",
                time: "3 hours ago",
                unread: 1,
                sender: "them"
            },
            matchType: "active"
        },
        {
            id: 4,
            user: {
                name: "Marie Dubois",
                avatar: "MD",
                status: "offline",
                lastSeen: "1 day ago"
            },
            skill: "French Language ↔ Photography",
            lastMessage: {
                text: "Merci beaucoup! The photo editing tips were amazing.",
                time: "2 days ago",
                unread: 0,
                sender: "them"
            },
            matchType: "completed"
        },
        {
            id: 5,
            user: {
                name: "David Kim",
                avatar: "DK",
                status: "online",
                lastSeen: "now"
            },
            skill: "Python Programming ↔ Business Analysis",
            lastMessage: {
                text: "I'd love to start our skill swap! When are you available?",
                time: "30 min ago",
                unread: 1,
                sender: "them"
            },
            matchType: "pending"
        }
    ];

    // Mock messages for active chat
    const mockMessages = {
        1: [
            {
                id: 1,
                text: "Hi Alex! I'm excited to start our skill swap. When would be a good time for our first React session?",
                sender: "you",
                timestamp: "2024-01-15T10:00:00Z",
                type: "text"
            },
            {
                id: 2,
                text: "Hey! Great to connect with you. How about tomorrow at 2 PM? I've prepared some advanced React concepts we can go through.",
                sender: "them",
                timestamp: "2024-01-15T10:05:00Z",
                type: "text"
            },
            {
                id: 3,
                text: "That works perfectly! In exchange, I can show you some UI/UX principles and we can work on a real project together.",
                sender: "you",
                timestamp: "2024-01-15T10:10:00Z",
                type: "text"
            },
            {
                id: 4,
                text: "Awesome! I've attached a file with some project ideas we could work on. Let me know what interests you most.",
                sender: "them",
                timestamp: "2024-01-15T10:15:00Z",
                type: "file",
                fileName: "react-project-ideas.pdf",
                fileSize: "2.3 MB"
            },
            {
                id: 5,
                text: "I love the e-commerce dashboard idea! 🚀 That would be perfect for practicing both React and UX design principles.",
                sender: "you",
                timestamp: "2024-01-15T10:20:00Z",
                type: "text"
            },
            {
                id: 6,
                text: "Perfect choice! Here's a mockup I created to give you an idea of the design direction.",
                sender: "you",
                timestamp: "2024-01-15T10:25:00Z",
                type: "image",
                imageUrl: "/api/placeholder/400/300",
                imageAlt: "Dashboard mockup"
            },
            {
                id: 7,
                text: "This looks amazing! Your design skills are impressive. I can already see how we can implement this with React hooks and context.",
                sender: "them",
                timestamp: "2024-01-15T10:30:00Z",
                type: "text"
            },
            {
                id: 8,
                text: "Great! Let's schedule our next session for tomorrow. I'll prepare some interactive prototypes to show you.",
                sender: "them",
                timestamp: "2024-01-15T14:30:00Z",
                type: "text"
            }
        ]
    };

    const emojis = ['😊', '😂', '❤️', '👍', '👎', '😮', '😢', '😡', '🚀', '🎉', '💡', '🔥'];

    useEffect(() => {
        // Simulate API call
        const fetchConversations = async () => {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setConversations(mockConversations);
            setOnlineUsers([1, 2, 5]); // Mock online users
            setIsLoading(false);
        };

        fetchConversations();
    }, []);

    useEffect(() => {
        // Load messages when active chat changes
        if (activeChat) {
            setMessages(mockMessages[activeChat.id] || []);
        }
    }, [activeChat]);

    useEffect(() => {
        // Auto-scroll to bottom of messages
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSendMessage = () => {
        if (!newMessage.trim() || !activeChat) return;

        const message = {
            id: Date.now(),
            text: newMessage,
            sender: "you",
            timestamp: new Date().toISOString(),
            type: "text"
        };

        setMessages(prev => [...prev, message]);
        setNewMessage('');

        // Update last message in conversation
        setConversations(prev => prev.map(conv =>
            conv.id === activeChat.id
                ? { ...conv, lastMessage: { ...conv.lastMessage, text: newMessage, time: "now", sender: "you" } }
                : conv
        ));

        // Simulate typing indicator and response
        setTimeout(() => {
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                const responses = [
                    "That sounds great!",
                    "I agree! Let's do that.",
                    "Perfect! Looking forward to it.",
                    "Awesome idea! 🚀",
                    "Thanks for sharing that!"
                ];
                const response = {
                    id: Date.now() + 1,
                    text: responses[Math.floor(Math.random() * responses.length)],
                    sender: "them",
                    timestamp: new Date().toISOString(),
                    type: "text"
                };
                setMessages(prev => [...prev, response]);
            }, 2000);
        }, 500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file || !activeChat) return;

        const message = {
            id: Date.now(),
            text: `Sent a file: ${file.name}`,
            sender: "you",
            timestamp: new Date().toISOString(),
            type: "file",
            fileName: file.name,
            fileSize: `${(file.size / 1024 / 1024).toFixed(1)} MB`
        };

        setMessages(prev => [...prev, message]);
        setShowAttachments(false);
    };

    const addEmoji = (emoji) => {
        setNewMessage(prev => prev + emoji);
        setShowEmojiPicker(false);
    };

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    const formatLastSeen = (time) => {
        if (time === "now") return "Active now";
        return `Last seen ${time}`;
    };

    const getStatusColor = (status) => {
        const colors = {
            online: 'bg-green-500',
            away: 'bg-yellow-500',
            offline: 'bg-gray-400'
        };
        return colors[status] || 'bg-gray-400';
    };

    const filteredConversations = conversations.filter(conv =>
        conv.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conv.skill.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getMatchTypeColor = (type) => {
        const colors = {
            active: 'text-green-600 bg-green-100',
            pending: 'text-yellow-600 bg-yellow-100',
            completed: 'text-blue-600 bg-blue-100'
        };
        return colors[type] || 'text-gray-600 bg-gray-100';
    };

    return (
        <div className="h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex">
            {/* Conversations Sidebar */}
            <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
                {/* Header */}
                <div className="!p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600">
                    <h1 className="text-2xl font-bold text-white !mb-4">Messages</h1>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full !px-4 !py-3 !pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            🔍
                        </div>
                    </div>
                </div>

                {/* Conversations List */}
                <div className="flex-1 overflow-y-auto">
                    {isLoading ? (
                        <div className="space-y-4 !p-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="flex items-center !p-4 animate-pulse">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full !mr-3"></div>
                                    <div className="flex-1">
                                        <div className="w-32 h-4 bg-gray-200 rounded !mb-2"></div>
                                        <div className="w-24 h-3 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : filteredConversations.length > 0 ? (
                        <div className="space-y-1">
                            {filteredConversations.map((conversation) => (
                                <div
                                    key={conversation.id}
                                    onClick={() => setActiveChat(conversation)}
                                    className={`!p-4 cursor-pointer transition-all duration-200 border-l-4 ${activeChat?.id === conversation.id
                                        ? 'bg-blue-50 border-blue-500'
                                        : 'hover:bg-gray-50 border-transparent'
                                        }`}
                                >
                                    <div className="flex items-center !mb-2">
                                        <div className="relative !mr-3">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                                {conversation.user.avatar}
                                            </div>
                                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(conversation.user.status)}`}></div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between !mb-1">
                                                <h3 className="font-semibold text-gray-800 truncate">{conversation.user.name}</h3>
                                                <span className="text-xs text-gray-500">{conversation.lastMessage.time}</span>
                                            </div>
                                            <p className="text-xs text-gray-600 !mb-1">{conversation.skill}</p>
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm text-gray-600 truncate">{conversation.lastMessage.text}</p>
                                                {conversation.lastMessage.unread > 0 && (
                                                    <span className="!ml-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                                        {conversation.lastMessage.unread}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className={`text-xs !px-2 !py-1 rounded-full ${getMatchTypeColor(conversation.matchType)}`}>
                                            {conversation.matchType}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            {formatLastSeen(conversation.user.lastSeen)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            <div className="text-center">
                                <div className="text-4xl !mb-2">💬</div>
                                <p>No conversations found</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                {activeChat ? (
                    <>
                        {/* Chat Header */}
                        <div className="bg-white border-b border-gray-200 !p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="relative !mr-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                            {activeChat.user.avatar}
                                        </div>
                                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(activeChat.user.status)}`}></div>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-800">{activeChat.user.name}</h2>
                                        <p className="text-sm text-gray-600">{activeChat.skill}</p>
                                        <p className="text-xs text-gray-500">{formatLastSeen(activeChat.user.lastSeen)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <button className="!p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                                        📞
                                    </button>
                                    <button className="!p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                                        📹
                                    </button>
                                    <button className="!p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                                        ℹ️
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto !p-6 space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.sender === 'you' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-xs lg:max-w-md ${message.sender === 'you' ? 'order-2' : 'order-1'}`}>
                                        <div className={`!p-3 rounded-2xl ${message.sender === 'you'
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                            : 'bg-white border border-gray-200 text-gray-800'
                                            }`}>
                                            {message.type === 'text' && (
                                                <p className="text-sm">{message.text}</p>
                                            )}
                                            {message.type === 'file' && (
                                                <div className="flex items-center space-x-2">
                                                    <div className="text-lg">📎</div>
                                                    <div>
                                                        <p className="text-sm font-semibold">{message.fileName}</p>
                                                        <p className="text-xs opacity-75">{message.fileSize}</p>
                                                    </div>
                                                </div>
                                            )}
                                            {message.type === 'image' && (
                                                <div>
                                                    <img
                                                        src={message.imageUrl}
                                                        alt={message.imageAlt}
                                                        className="max-w-full h-auto rounded-lg !mb-2"
                                                    />
                                                    <p className="text-sm">{message.text}</p>
                                                </div>
                                            )}
                                        </div>
                                        <p className={`text-xs text-gray-500 !mt-1 ${message.sender === 'you' ? 'text-right' : 'text-left'
                                            }`}>
                                            {formatTime(message.timestamp)}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-200 rounded-2xl !p-3 max-w-xs">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Message Input */}
                        <div className="bg-white border-t border-gray-200 !p-4">
                            {/* Emoji Picker */}
                            {showEmojiPicker && (
                                <div className="!mb-4 !p-3 bg-gray-50 rounded-xl">
                                    <div className="flex flex-wrap gap-2">
                                        {emojis.map((emoji, index) => (
                                            <button
                                                key={index}
                                                onClick={() => addEmoji(emoji)}
                                                className="!p-2 hover:bg-gray-200 rounded-lg transition-colors text-lg"
                                            >
                                                {emoji}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Attachments Menu */}
                            {showAttachments && (
                                <div className="!mb-4 !p-3 bg-gray-50 rounded-xl">
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={() => fileInputRef.current?.click()}
                                            className="flex items-center space-x-2 !px-3 !py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                                        >
                                            <span>📎</span>
                                            <span className="text-sm">File</span>
                                        </button>
                                        <button className="flex items-center space-x-2 !px-3 !py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                                            <span>📷</span>
                                            <span className="text-sm">Photo</span>
                                        </button>
                                        <button className="flex items-center space-x-2 !px-3 !py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                                            <span>🎥</span>
                                            <span className="text-sm">Video</span>
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-end space-x-3">
                                {/* Attachment Button */}
                                <button
                                    onClick={() => setShowAttachments(!showAttachments)}
                                    className="!p-3 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    📎
                                </button>

                                {/* Emoji Button */}
                                <button
                                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                    className="!p-3 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    😊
                                </button>

                                {/* Message Input */}
                                <div className="flex-1">
                                    <textarea
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Type your message..."
                                        rows="1"
                                        className="w-full !px-4 !py-3 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none resize-none"
                                        style={{ minHeight: '50px', maxHeight: '120px' }}
                                    />
                                </div>

                                {/* Send Button */}
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!newMessage.trim()}
                                    className="!p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {/* Hidden File Input */}
                            <input
                                ref={fileInputRef}
                                type="file"
                                onChange={handleFileUpload}
                                className="hidden"
                                accept="*/*"
                            />
                        </div>
                    </>
                ) : (
                    // No Chat Selected
                    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                        <div className="text-center max-w-md">
                            <div className="text-6xl !mb-6">💬</div>
                            <h2 className="text-2xl font-bold text-gray-800 !mb-4">Start a Conversation</h2>
                            <p className="text-gray-600 !mb-6">
                                Select a conversation from the sidebar to start chatting with your skill swap partners.
                            </p>
                            <div className="space-y-2 text-sm text-gray-500">
                                <p>✨ Share knowledge and learn together</p>
                                <p>🚀 Build meaningful connections</p>
                                <p>🤝 Grow your skills with expert guidance</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chatting;