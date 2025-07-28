import React, { useState, useEffect } from 'react';
import { Play, Download, Headphones, Video, Star, Check, Menu, X, ChevronRight, Volume2, Eye, Zap, Clock, Users, Award } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGenre, setActiveGenre] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const genres = [
    { 
      name: 'Psychological Thriller', 
      description: 'Mind-bending stories that blur reality',
      color: 'from-purple-600 to-red-600',
      icon: '🧠'
    },
    { 
      name: 'Horror & Supernatural', 
      description: 'Chilling tales from beyond',
      color: 'from-red-600 to-orange-600',
      icon: '👻'
    },
    { 
      name: 'Sci-Fi & Dystopian', 
      description: 'Future worlds gone wrong',
      color: 'from-blue-600 to-purple-600',
      icon: '🚀'
    },
    { 
      name: 'Crime & Mystery', 
      description: 'Dark secrets waiting to unfold',
      color: 'from-gray-600 to-red-600',
      icon: '🔍'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Written Episodes',
      description: 'Original multi-part stories crafted by GPT-4 with unique plots every time'
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: 'Cinematic Audio',
      description: 'Dramatic voice acting with ambient music and chilling sound effects'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'AI-Generated Videos',
      description: 'Optional visual episodes with abstract imagery matching story tone'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Weekly Drops',
      description: 'New episodes released regularly with powerful cliffhangers'
    }
  ];

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Limited episodes per week',
        'Standard audio quality',
        'Ad-supported content',
        'Basic genre access'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Premium',
      price: '$5.99',
      period: 'month',
      features: [
        'Unlimited listening',
        'HD video episodes',
        'Ad-free experience',
        'Early episode access',
        'Download offline',
        'All genres unlocked'
      ],
      cta: 'Go Premium',
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300" 
           style={{
             background: scrollY > 50 ? 'rgba(17, 24, 39, 0.95)' : 'transparent',
             backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
           }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
                  EchoTales AI
                </h1>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#genres" className="hover:text-purple-400 transition-colors">Genres</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
              <button className="bg-gradient-to-r from-purple-600 to-red-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Start Listening
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block hover:text-purple-400 transition-colors">Features</a>
              <a href="#genres" className="block hover:text-purple-400 transition-colors">Genres</a>
              <a href="#pricing" className="block hover:text-purple-400 transition-colors">Pricing</a>
              <button className="w-full bg-gradient-to-r from-purple-600 to-red-600 px-6 py-2 rounded-full font-semibold">
                Start Listening
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-red-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-red-400 to-orange-400 bg-clip-text text-transparent animate-fadeIn">
            EchoTales AI
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300 animate-fadeIn delay-300">
            Stories that Speak, Haunt, and Surprise You
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-3xl mx-auto animate-fadeIn delay-500">
            AI-generated thrillers, horrors, and sci-fi episodes that grip you from the first second.
            Experience immersive storytelling with cinematic audio and AI-generated visuals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn delay-700">
            <button className="bg-gradient-to-r from-purple-600 to-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Start Your Journey</span>
            </button>
            <button className="border border-purple-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download App</span>
            </button>
          </div>

          <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-gray-400 animate-fadeIn delay-1000">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>50K+ Listeners</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span>4.8 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>100+ Stories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
              Why EchoTales AI is Different
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              100% AI-crafted stories designed to shock, thrill, and mesmerize with cinematic-level production
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="text-purple-400 mb-4 group-hover:text-red-400 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genres Section */}
      <section id="genres" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Genres That Hook You</h2>
            <p className="text-xl text-gray-400">
              Explore worlds of mystery, darkness, and psychological tension
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {genres.map((genre, index) => (
              <div 
                key={index}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  activeGenre === index ? 'ring-2 ring-purple-500' : ''
                }`}
                style={{
                  background: `linear-gradient(135deg, ${genre.color.split(' ')[1]} 0%, ${genre.color.split(' ')[3]} 100%)`,
                }}
                onMouseEnter={() => setActiveGenre(index)}
              >
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{genre.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{genre.name}</h3>
                  <p className="text-gray-200">{genre.description}</p>
                  <div className="mt-4 flex items-center text-sm font-semibold">
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Experience</h2>
            <p className="text-xl text-gray-400">
              Start free, upgrade anytime for unlimited access
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500 ring-2 ring-purple-500/20' 
                  : 'border-gray-700 hover:border-purple-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-red-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-red-600 hover:shadow-xl hover:shadow-purple-500/25'
                    : 'border border-purple-500 hover:bg-purple-500/10'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-red-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Hooked?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Step into the world of AI-powered horror, thriller, and sci-fi storytelling.
            Press play, and let EchoTales whisper something unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Start Your First Story</span>
            </button>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Headphones className="w-4 h-4" />
                <span>Audio</span>
              </div>
              <div className="flex items-center space-x-1">
                <Video className="w-4 h-4" />
                <span>Video</span>
              </div>
              <div className="flex items-center space-x-1">
                <Download className="w-4 h-4" />
                <span>Offline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
                  EchoTales AI
                </span>
              </div>
              <p className="text-gray-400">
                AI-generated stories that haunt, thrill, and surprise you.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Genres</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Horror</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Thriller</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sci-Fi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mystery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EchoTales AI. All rights reserved. Stories generated with GPT-4.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}

export default App;