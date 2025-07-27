import { useState } from 'react';

const PostSkill = () => {
    const [formData, setFormData] = useState({
        skillName: '',
        description: '',
        swapType: '',
        category: '',
        communication: '',
        tags: [],
        location: '',
        experience: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [tagInput, setTagInput] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    const swapTypes = [
        {
            value: 'teach',
            label: 'I want to Teach',
            icon: '🎓',
            description: 'Share your expertise with others',
            color: 'from-green-500 to-emerald-600'
        },
        {
            value: 'learn',
            label: 'I want to Learn',
            icon: '📚',
            description: 'Find someone to teach you',
            color: 'from-blue-500 to-indigo-600'
        },
        {
            value: 'exchange',
            label: 'I want to Exchange',
            icon: '🔄',
            description: 'Mutual skill sharing',
            color: 'from-purple-500 to-pink-600'
        }
    ];

    const communicationOptions = [
        { value: 'video', label: 'Video Call', icon: '📹', color: 'bg-red-100 text-red-700' },
        { value: 'chat', label: 'Chat', icon: '💬', color: 'bg-blue-100 text-blue-700' },
        { value: 'email', label: 'Email', icon: '📧', color: 'bg-green-100 text-green-700' },
        { value: 'phone', label: 'Phone', icon: '📞', color: 'bg-yellow-100 text-yellow-700' },
        { value: 'in-person', label: 'In-Person', icon: '🤝', color: 'bg-purple-100 text-purple-700' }
    ];

    const categories = [
        { name: 'Technology', icon: '💻', count: '2.1k' },
        { name: 'Design', icon: '🎨', count: '1.8k' },
        { name: 'Languages', icon: '🗣️', count: '1.5k' },
        { name: 'Music', icon: '🎵', count: '1.2k' },
        { name: 'Cooking', icon: '👨‍🍳', count: '900' },
        { name: 'Writing', icon: '✍️', count: '850' },
        { name: 'Business', icon: '💼', count: '750' },
        { name: 'Sports', icon: '⚽', count: '600' }
    ];

    const experienceLevels = [
        { value: 'beginner', label: 'Beginner', icon: '🌱', description: 'Just starting out' },
        { value: 'intermediate', label: 'Intermediate', icon: '🌿', description: 'Some experience' },
        { value: 'advanced', label: 'Advanced', icon: '🌳', description: 'Highly experienced' },
        { value: 'expert', label: 'Expert', icon: '🏆', description: 'Professional level' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSwapTypeSelect = (type) => {
        setFormData(prev => ({
            ...prev,
            swapType: type
        }));
        if (errors.swapType) {
            setErrors(prev => ({
                ...prev,
                swapType: ''
            }));
        }
    };

    const handleCommunicationSelect = (method) => {
        setFormData(prev => ({
            ...prev,
            communication: method
        }));
    };

    const handleAddTag = (e) => {
        if (e.key === 'Enter' && tagInput.trim()) {
            e.preventDefault();
            if (!formData.tags.includes(tagInput.trim()) && formData.tags.length < 8) {
                setFormData(prev => ({
                    ...prev,
                    tags: [...prev.tags, tagInput.trim()]
                }));
                setTagInput('');
            }
        }
    };

    const removeTag = (tagToRemove) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
    };

    const validateStep = (step) => {
        const newErrors = {};

        if (step === 1) {
            if (!formData.skillName.trim()) {
                newErrors.skillName = 'Skill name is required';
            }
            if (!formData.swapType) {
                newErrors.swapType = 'Please select what you want to do';
            }
        }

        if (step === 2) {
            if (!formData.description.trim()) {
                newErrors.description = 'Description is required';
            } else if (formData.description.length < 50) {
                newErrors.description = 'Description should be at least 50 characters';
            }
            if (!formData.experience) {
                newErrors.experience = 'Please select your experience level';
            }
        }

        if (step === 3) {
            if (!formData.communication) {
                newErrors.communication = 'Please select preferred communication method';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => prev - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateStep(3)) return;

        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Skill posted:', formData);
            setIsSuccess(true);

            setTimeout(() => {
                setFormData({
                    skillName: '',
                    description: '',
                    swapType: '',
                    category: '',
                    communication: '',
                    tags: [],
                    location: '',
                    experience: ''
                });
                setCurrentStep(1);
                setIsSuccess(false);
            }, 3000);

        } catch (error) {
            console.error('Error posting skill:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br !text-blue-950 from-slate-50 via-blue-50 to-indigo-100 ">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 !py-20">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-8xl mx-auto text-center !px-6">
                    <h1 className="text-5xl md:text-7xl font-bold text-white !mb-6">
                        Share Your
                        <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            Superpower
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-8xl mx-auto !mb-8">
                        Turn your skills into connections. Teach what you love, learn what you need.
                    </p>

                    {/* Progress Indicator */}
                    <div className="flex justify-center items-center space-x-4 !mt-12">
                        {[1, 2, 3].map((step) => (
                            <div key={step} className="flex items-center">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${currentStep >= step
                                    ? 'bg-white text-blue-600 shadow-lg'
                                    : 'bg-white/20 text-white'
                                    }`}>
                                    {step}
                                </div>
                                {step < 3 && (
                                    <div className={`w-16 h-1 mx-2 transition-all duration-300 ${currentStep > step ? 'bg-white' : 'bg-white/20'
                                        }`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-8xl mx-auto !px-6 !py-12">
                {/* Success Message */}
                {isSuccess && (
                    <div className="!mb-8 transform animate-bounce">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white !p-6 rounded-2xl shadow-2xl">
                            <div className="flex items-center justify-center">
                                <span className="text-4xl !mr-4">🎉</span>
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold !mb-2">Skill Posted Successfully!</h3>
                                    <p className="text-green-100">Your skill is now live and ready for swapping!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step Content */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    {/* Step 1: Basic Info */}
                    {currentStep === 1 && (
                        <div className="!p-8 md:!p-12">
                            <div className="text-center !mb-12">
                                <h2 className="text-4xl font-bold text-gray-800 !mb-4">What's Your Skill?</h2>
                                <p className="text-xl text-gray-600">Let's start with the basics</p>
                            </div>

                            <div className="space-y-8">
                                {/* Skill Name */}
                                <div>
                                    <label className="block text-xl font-semibold text-gray-800 !mb-4">
                                        Skill Name
                                    </label>
                                    <input
                                        type="text"
                                        name="skillName"
                                        value={formData.skillName}
                                        onChange={handleInputChange}
                                        placeholder="e.g., Web Development, Guitar Playing, French Language..."
                                        className={`w-full !px-6 !py-4 text-lg border-2 rounded-2xl transition-all duration-300 focus:!outline-none focus:!ring-0 ${errors.skillName
                                            ? '!border-red-400 focus:!border-red-500 bg-red-50'
                                            : '!border-gray-200 focus:!border-blue-500 bg-gray-50 focus:bg-white'
                                            }`}
                                    />
                                    {errors.skillName && (
                                        <p className="text-red-500 !mt-2 flex items-center">
                                            <span className="!mr-1">⚠️</span>
                                            {errors.skillName}
                                        </p>
                                    )}
                                </div>

                                {/* Swap Type Selection */}
                                <div>
                                    <label className="block text-xl font-semibold text-gray-800 !mb-6">
                                        What do you want to do?
                                    </label>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {swapTypes.map((type) => (
                                            <button
                                                key={type.value}
                                                type="button"
                                                onClick={() => handleSwapTypeSelect(type.value)}
                                                className={`!p-6 rounded-2xl border-2 transition-all duration-300 text-left hover:scale-105 ${formData.swapType === type.value
                                                    ? `border-transparent bg-gradient-to-br ${type.color} text-white shadow-xl`
                                                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
                                                    }`}
                                            >
                                                <div className="text-3xl !mb-3">{type.icon}</div>
                                                <h3 className="text-lg font-bold !mb-2">{type.label}</h3>
                                                <p className={`text-sm ${formData.swapType === type.value ? 'text-white/90' : 'text-gray-600'
                                                    }`}>
                                                    {type.description}
                                                </p>
                                            </button>
                                        ))}
                                    </div>
                                    {errors.swapType && (
                                        <p className="text-red-500 !mt-4 flex items-center">
                                            <span className="!mr-1">⚠️</span>
                                            {errors.swapType}
                                        </p>
                                    )}
                                </div>

                                {/* Category Selection */}
                                <div>
                                    <label className="block text-xl font-semibold text-gray-800 !mb-6">
                                        Choose a Category
                                        <span className="text-gray-500 text-base !ml-2">(Optional)</span>
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat.name}
                                                type="button"
                                                onClick={() => setFormData(prev => ({
                                                    ...prev,
                                                    category: cat.name
                                                }))}
                                                className={`!p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${formData.category === cat.name
                                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                    : 'border-gray-200 bg-white hover:border-gray-300'
                                                    }`}
                                            >
                                                <div className="text-2xl !mb-2">{cat.icon}</div>
                                                <div className="text-sm font-semibold">{cat.name}</div>
                                                <div className="text-xs text-gray-500">{cat.count} skills</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="!mt-12 flex justify-end">
                                <button
                                    onClick={nextStep}
                                    disabled={!formData.skillName || !formData.swapType}
                                    className="!px-8 !py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    Continue →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Details */}
                    {currentStep === 2 && (
                        <div className="!p-8 md:!p-12">
                            <div className="text-center !mb-12">
                                <h2 className="text-4xl font-bold text-gray-800 !mb-4">Tell Us More</h2>
                                <p className="text-xl text-gray-600">Share the details that matter</p>
                            </div>

                            <div className="space-y-8">
                                {/* Description */}
                                <div>
                                    <label className="block text-xl font-semibold text-gray-800 !mb-4">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        placeholder="Describe your skill, experience level, what you can teach or want to learn. Be specific and engaging!"
                                        rows="6"
                                        className={`w-full !px-6 !py-4 text-lg border-2 rounded-2xl transition-all duration-300 focus:!outline-none focus:!ring-0 resize-none ${errors.description
                                            ? '!border-red-400 focus:!border-red-500 bg-red-50'
                                            : '!border-gray-200 focus:!border-blue-500 bg-gray-50 focus:bg-white'
                                            }`}
                                    />
                                    <div className="flex justify-between !mt-2">
                                        {errors.description ? (
                                            <p className="text-red-500 flex items-center">
                                                <span className="!mr-1">⚠️</span>
                                                {errors.description}
                                            </p>
                                        ) : (
                                            <div></div>
                                        )}
                                        <span className="text-gray-500 text-sm">
                                            {formData.description.length}/1000
                                        </span>
                                    </div>
                                </div>

                                {/* Experience Level */}
                                <div>
                                    <label className="block text-xl font-semibold text-gray-800 !mb-6">
                                        Your Experience Level
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {experienceLevels.map((level) => (
                                            <button
                                                key={level.value}
                                                type="button"
                                                onClick={() => setFormData(prev => ({
                                                    ...prev,
                                                    experience: level.value
                                                }))}
                                                className={`!p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${formData.experience === level.value
                                                    ? 'border-green-500 bg-green-50 text-green-700'
                                                    : 'border-gray-200 bg-white hover:border-gray-300'
                                                    }`}
                                            >
                                                <div className="text-2xl !mb-2">{level.icon}</div>
                                                <div className="text-sm font-bold !mb-1">{level.label}</div>
                                                <div className="text-xs text-gray-500">{level.description}</div>
                                            </button>
                                        ))}
                                    </div>
                                    {errors.experience && (
                                        <p className="text-red-500 !mt-4 flex items-center">
                                            <span className="!mr-1">⚠️</span>
                                            {errors.experience}
                                        </p>
                                    )}
                                </div>

                                {/* Tags */}
                                <div>
                                    <label className="block text-xl font-semibold text-gray-800 !mb-4">
                                        Tags
                                        <span className="text-gray-500 text-base !ml-2">(Press Enter to add)</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={tagInput}
                                        onChange={(e) => setTagInput(e.target.value)}
                                        onKeyDown={handleAddTag}
                                        placeholder="e.g., beginner-friendly, online, weekend, creative..."
                                        className="w-full !px-6 !py-4 text-lg border-2 !border-gray-200 focus:!border-blue-500 rounded-2xl transition-all duration-300 focus:!outline-none focus:!ring-0 bg-gray-50 focus:bg-white"
                                        disabled={formData.tags.length >= 8}
                                    />
                                    {formData.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 !mt-4">
                                            {formData.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="!px-4 !py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium flex items-center shadow-lg"
                                                >
                                                    #{tag}
                                                    <button
                                                        type="button"
                                                        onClick={() => removeTag(tag)}
                                                        className="!ml-2 text-white/80 hover:text-white transition-colors"
                                                    >
                                                        ×
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <p className="text-gray-500 text-sm !mt-2">
                                        {formData.tags.length}/8 tags added
                                    </p>
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="block text-xl font-semibold text-gray-800 !mb-4">
                                        Location
                                        <span className="text-gray-500 text-base !ml-2">(Optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        placeholder="e.g., Dhaka, Bangladesh or Online"
                                        className="w-full !px-6 !py-4 text-lg border-2 !border-gray-200 focus:!border-blue-500 rounded-2xl transition-all duration-300 focus:!outline-none focus:!ring-0 bg-gray-50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div className="!mt-12 flex justify-between">
                                <button
                                    onClick={prevStep}
                                    className="!px-8 !py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                                >
                                    ← Back
                                </button>
                                <button
                                    onClick={nextStep}
                                    disabled={!formData.description || !formData.experience}
                                    className="!px-8 !py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    Continue →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Communication & Submit */}
                    {currentStep === 3 && (
                        <div className="!p-8 md:!p-12">
                            <div className="text-center !mb-12">
                                <h2 className="text-4xl font-bold text-gray-800 !mb-4">How Should People Reach You?</h2>
                                <p className="text-xl text-gray-600">Choose your preferred communication method</p>
                            </div>

                            <div className="space-y-8">
                                {/* Communication Method */}
                                <div>
                                    <label className="block text-xl font-semibold text-gray-800 !mb-6">
                                        Preferred Communication
                                    </label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                        {communicationOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => handleCommunicationSelect(option.value)}
                                                className={`!p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${formData.communication === option.value
                                                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                                                    : 'border-gray-200 bg-white hover:border-gray-300'
                                                    }`}
                                            >
                                                <div className="text-3xl !mb-3">{option.icon}</div>
                                                <div className={`text-sm font-bold !px-3 !py-1 rounded-full ${option.color}`}>
                                                    {option.label}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    {errors.communication && (
                                        <p className="text-red-500 !mt-4 flex items-center">
                                            <span className="!mr-1">⚠️</span>
                                            {errors.communication}
                                        </p>
                                    )}
                                </div>

                                {/* Summary Card */}
                                <div className="bg-gradient-to-br from-gray-50 to-blue-50 !p-8 rounded-2xl border border-gray-200">
                                    <h3 className="text-2xl font-bold text-gray-800 !mb-6">📋 Summary</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <span className="text-gray-600 font-medium w-32">Skill:</span>
                                            <span className="text-gray-800 font-semibold">{formData.skillName}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-gray-600 font-medium w-32">Type:</span>
                                            <span className="text-gray-800 font-semibold">
                                                {swapTypes.find(t => t.value === formData.swapType)?.label}
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-gray-600 font-medium w-32">Experience:</span>
                                            <span className="text-gray-800 font-semibold capitalize">{formData.experience}</span>
                                        </div>
                                        {formData.category && (
                                            <div className="flex items-center">
                                                <span className="text-gray-600 font-medium w-32">Category:</span>
                                                <span className="text-gray-800 font-semibold">{formData.category}</span>
                                            </div>
                                        )}
                                        {formData.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 !mt-4">
                                                {formData.tags.map((tag, index) => (
                                                    <span key={index} className="!px-3 !py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="!mt-12 flex justify-between">
                                <button
                                    onClick={prevStep}
                                    className="!px-8 !py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                                >
                                    ← Back
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting || !formData.communication}
                                    className="!px-12 !py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center">
                                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white !mr-3"></div>
                                            Publishing...
                                        </div>
                                    ) : (
                                        <>🚀 Publish Skill</>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostSkill;