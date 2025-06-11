import React, { useState } from 'react';
import { ChevronRight, Sparkles, Flame, Heart, Leaf, Sun, Coffee, Star, RefreshCw } from 'lucide-react';

const TasteTropicsQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What time of day do you feel most creative in the kitchen?",
      options: [
        { text: "Golden sunrise - I love morning cooking rituals", value: "sunrise", trait: "balanced" },
        { text: "Blazing midday - When the energy is high", value: "midday", trait: "bold" },
        { text: "Sunset vibes - Evening is my culinary playground", value: "sunset", trait: "adventurous" },
        { text: "Midnight magic - Late night experimental sessions", value: "midnight", trait: "mystical" }
      ]
    },
    {
      id: 2,
      question: "Your ideal Caribbean vacation would include:",
      options: [
        { text: "Beach picnics with fresh, simple island flavors", value: "beach", trait: "fresh" },
        { text: "Street food tours discovering hidden spice gems", value: "street", trait: "bold" },
        { text: "Cooking classes with local grandmothers", value: "traditional", trait: "balanced" },
        { text: "Jungle foraging for exotic ingredients", value: "jungle", trait: "adventurous" }
      ]
    },
    {
      id: 3,
      question: "When trying a new dish, what excites you most?",
      options: [
        { text: "The story behind its cultural heritage", value: "story", trait: "mystical" },
        { text: "How it makes my taste buds dance", value: "sensation", trait: "bold" },
        { text: "Its natural, wholesome ingredients", value: "ingredients", trait: "fresh" },
        { text: "The perfect balance of flavors", value: "balance", trait: "balanced" }
      ]
    },
    {
      id: 4,
      question: "Your spice tolerance is:",
      options: [
        { text: "Gentle warmth - I prefer subtle heat that builds", value: "gentle", trait: "balanced" },
        { text: "Fire walker - Bring on the scotch bonnets!", value: "fire", trait: "bold" },
        { text: "Flavor seeker - Spice should enhance, not overpower", value: "flavor", trait: "fresh" },
        { text: "Heat mystic - I crave complex, layered spiciness", value: "complex", trait: "mystical" }
      ]
    },
    {
      id: 5,
      question: "Your perfect Caribbean meal setting:",
      options: [
        { text: "Intimate dinner by candlelight with soulful music", value: "intimate", trait: "mystical" },
        { text: "Lively family gathering with everyone sharing plates", value: "family", trait: "balanced" },
        { text: "Outdoor feast under the stars", value: "outdoor", trait: "fresh" },
        { text: "Vibrant party with bold flavors and dancing", value: "party", trait: "bold" }
      ]
    },
    {
      id: 6,
      question: "What draws you most to Caribbean cuisine?",
      options: [
        { text: "The healing power of natural ingredients", value: "healing", trait: "fresh" },
        { text: "The explosive flavor combinations", value: "explosive", trait: "bold" },
        { text: "The deep cultural traditions and rituals", value: "traditions", trait: "mystical" },
        { text: "The perfect harmony of sweet, spicy, and savory", value: "harmony", trait: "balanced" }
      ]
    }
  ];

  const personalities = {
    bold: {
      title: "🔥 The Flame Keeper",
      subtitle: "Bold • Passionate • Fearless",
      description: "You're a culinary warrior who craves intensity and isn't afraid to push boundaries. Your kitchen is your battlefield, and bold flavors are your weapons of choice.",
      traits: ["Loves extreme heat and bold spices", "Experiments with daring flavor combinations", "Brings energy and passion to every meal", "Seeks authentic, uncompromising taste experiences"],
      products: ["Scotch Bonnet Fire Sauce", "Jerk Spice Blend Supreme", "Hot Pepper Oil Infusion"],
      cookingTip: "Start with our Jerk Spice Blend and build heat gradually. Your palate can handle more than most - use it to introduce others to the beautiful intensity of Caribbean spices.",
      mantra: "Life is too short for bland food"
    },
    fresh: {
      title: "🌿 The Island Herbalist",
      subtitle: "Natural • Pure • Nourishing",
      description: "You believe in the power of fresh, natural ingredients to heal and nourish. Your approach to Caribbean cuisine celebrates the pure essence of tropical flavors.",
      traits: ["Prioritizes natural, preservative-free ingredients", "Appreciates subtle, complex flavor profiles", "Values the nutritional benefits of spices", "Creates dishes that nourish body and soul"],
      products: ["Coconut Lime Marinade", "Tropical Herb Oil", "Natural Curry Spice Blend"],
      cookingTip: "Our cold-pressed oils retain maximum nutrients and flavor. Use them to finish dishes for that perfect fresh Caribbean taste that enhances rather than overpowers.",
      mantra: "Pure ingredients, pure flavor, pure joy"
    },
    balanced: {
      title: "⚖️ The Harmony Master",
      subtitle: "Balanced • Wise • Refined",
      description: "You understand that great Caribbean cuisine is about perfect balance - sweet with spicy, traditional with modern, simple with complex. You're the wise one who brings people together through food.",
      traits: ["Masters the art of flavor balance", "Appreciates both traditional and modern approaches", "Creates dishes that please everyone", "Values quality and consistency"],
      products: ["All-Purpose Caribbean Seasoning", "Sweet & Spicy Mango Sauce", "Traditional Curry Powder"],
      cookingTip: "Layer your flavors using our seasoning blends as your base. Start with our All-Purpose blend, then add heat or sweetness to create your perfect balance.",
      mantra: "Perfect harmony creates perfect flavor"
    },
    mystical: {
      title: "🌟 The Spice Alchemist",
      subtitle: "Mystical • Intuitive • Transformative",
      description: "You see cooking as a spiritual practice and understand the deeper meanings behind Caribbean culinary traditions. Your kitchen is a place of transformation and magic.",
      traits: ["Connects with the spiritual side of cooking", "Appreciates the history and stories behind recipes", "Creates transformative culinary experiences", "Believes in the healing power of spices"],
      products: ["Ancient Spice Blend", "Ceremonial Hot Sauce", "Mystical Marinade Collection"],
      cookingTip: "Trust your intuition when using our spice blends. The ancestors who created these flavor combinations knew the power of patience and intention in cooking.",
      mantra: "Every meal is a ritual, every flavor tells a story"
    },
    adventurous: {
      title: "🗺️ The Flavor Explorer",
      subtitle: "Adventurous • Curious • Creative",
      description: "You're always seeking the next great flavor adventure. Your curiosity drives you to explore new combinations and push the boundaries of traditional Caribbean cuisine.",
      traits: ["Constantly experiments with new combinations", "Loves discovering rare and unique ingredients", "Shares culinary adventures with others", "Blends tradition with innovation"],
      products: ["Exotic Fruit Hot Sauce Collection", "Island Fusion Spice Kit", "Adventure Marinade Set"],
      cookingTip: "Mix and match our different sauces and spices to create your own signature blends. Your adventurous spirit is perfect for discovering new flavor territories.",
      mantra: "The best flavors are found off the beaten path"
    }
  };

  const calculatePersonality = () => {
    const traitCounts = {};
    answers.forEach(answer => {
      traitCounts[answer.trait] = (traitCounts[answer.trait] || 0) + 1;
    });
    
    const dominantTrait = Object.keys(traitCounts).reduce((a, b) => 
      traitCounts[a] > traitCounts[b] ? a : b
    );
    
    return personalities[dominantTrait] || personalities.balanced;
  };

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setQuizStarted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 p-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="mb-8">
              <Sun className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                Taste Tropics
              </h1>
              <p className="text-xl text-gray-600 mb-6">Discover Your Caribbean Flavor Personality</p>
            </div>
            
            <div className="space-y-6 text-left">
              <div className="bg-white p-6 rounded-2xl shadow-2xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What You'll Discover:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-900">Your unique flavor personality</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-gray-900">Perfect product matches</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Leaf className="w-5 h-5 text-green-500" />
                    <span className="text-gray-900">Personalized cooking tips</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-900">Your culinary mantra</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-center">
                Uncover the secrets of your Caribbean culinary soul with our premium, preservative-free ingredients crafted from the heart of Jamaica.
              </p>
            </div>
            
            <button
              onClick={startQuiz}
              className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center mx-auto space-x-2"
            >
              <span>Start Your Flavor Journey</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const personality = calculatePersonality();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{personality.title.split(' ')[0]}</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {personality.title.slice(2)}
              </h1>
              <p className="text-xl text-gray-600 mb-4">{personality.subtitle}</p>
              <div className="bg-white p-4 rounded-2xl shadow">
                <p className="text-lg text-gray-900 italic">"{personality.mantra}"</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Heart className="w-6 h-6 text-red-500 mr-2" />
                    Your Flavor Profile
                  </h3>
                  <p className="text-gray-900 leading-relaxed mb-4">{personality.description}</p>
                  <div className="space-y-2">
                    {personality.traits.map((trait, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-900">{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Coffee className="w-6 h-6 text-orange-500 mr-2" />
                    Your Cooking Wisdom
                  </h3>
                  <div className="bg-white p-4 rounded-2xl border-l-4 border-orange-500 shadow">
                    <p className="text-gray-900 italic">{personality.cookingTip}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Sparkles className="w-6 h-6 text-purple-500 mr-2" />
                  Perfect Matches for You
                </h3>
                <div className="space-y-4">
                  {personality.products.map((product, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl border hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800">{product}</h4>
                          <p className="text-sm text-gray-600">Premium • Natural • Preservative-Free</p>
                        </div>
                        <Flame className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-xl shadow">
                  <h4 className="font-semibold text-gray-800 mb-2">🎁 Special Offer for You</h4>
                  <p className="text-sm text-gray-900">Get 20% off your first Taste Tropics order when you mention your personality type: <strong>{personality.title.slice(2)}</strong></p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-gray-600">
                Ready to explore more about your culinary personality? Take the quiz again to discover different aspects of your flavor journey!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Take Quiz Again</span>
                </button>
                <button className="bg-white text-orange-600 border-2 border-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transform hover:scale-105 transition-all duration-200">
                  Shop Your Matches
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <div className="bg-white/20 rounded-full h-2 mb-4">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white text-center">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {questions[currentQuestion].question}
            </h2>
          </div>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full p-6 text-left bg-white rounded-2xl border-2 border-transparent hover:border-orange-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-medium text-lg">{option.text}</span>
                  <ChevronRight className="w-6 h-6 text-orange-500" />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Choose the option that resonates most with your culinary soul
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasteTropicsQuiz; 