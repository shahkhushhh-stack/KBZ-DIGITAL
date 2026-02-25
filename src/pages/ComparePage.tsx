import { useState } from 'react';
import { ChevronDown, Zap } from 'lucide-react';
import { sportBikes } from './HomePage'; // Assuming sportBikes data is exported from HomePage
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';

// IMPORTANT: Lazy initialization of GoogleGenAI
let ai: GoogleGenAI | null = null;
function getGoogleGenAI() {
  if (!ai) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY environment variable is not set.');
    }
    ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return ai;
}

export default function ComparePage() {
  const [externalUrl, setExternalUrl] = useState('');
  const [selectedBike, setSelectedBike] = useState(sportBikes[0].name);
  const [comparisonResult, setComparisonResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCompare = async () => {
    if (!externalUrl) {
      setError('Please enter a URL to compare.');
      return;
    }
    setIsLoading(true);
    setError('');
    setComparisonResult('');

    try {
      const genAI = getGoogleGenAI();
      const model = 'gemini-3-flash-preview'; 

      const ourBike = sportBikes.find(b => b.name === selectedBike);
      if (!ourBike) {
        throw new Error('Selected bike not found.');
      }

      const prompt = `
        You are a motorcycle comparison expert. Your task is to compare two motorcycles.
        
        Motorcycle 1 is from this URL: ${externalUrl}
        Motorcycle 2 is the ${ourBike.name}. Here are its specifications:
        - Price: ${ourBike.price}
        - Engine: ${ourBike.engine}
        - Power: ${ourBike.power}
        - Weight: ${ourBike.weight}

        First, visit the URL and extract the key specifications for Motorcycle 1 (Price, Engine, Power, Weight). If you cannot find a specific detail, state that it's not available.

        Then, create a detailed side-by-side comparison in a markdown table. The table should have three columns: "Feature", "Motorcycle 1 (from URL)", and "${ourBike.name}". The rows should be for Price, Engine, Power, and Weight.

        After the table, provide a summary of which bike is better for different types of riders (e.g., beginner, track enthusiast, commuter) and why. Use bolding and bullet points for clarity.
      `;

      const response = await genAI.models.generateContent({
        model,
        contents: prompt,
        config: {
          tools: [{ urlContext: {} }]
        }
      });

      setComparisonResult(response.text);

    } catch (err) {
      console.error('Gemini API error:', err);
      setError('Failed to generate comparison. The URL might be inaccessible or the format is not supported. Please try another link.');
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-dark-bg min-h-screen text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight">AI-Powered Comparison</h1>
          <p className="mt-4 text-lg text-gray-400">Paste a link to any motorcycle on the web, and our AI will generate a detailed side-by-side comparison with our top models.</p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-card-bg border border-border-color rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">PASTE VEHICLE LINK</label>
              <input 
                type="url" 
                value={externalUrl}
                onChange={(e) => setExternalUrl(e.target.value)}
                placeholder="https://www.example.com/motorcycle-specs"
                className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-red"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">COMPARE AGAINST</label>
              <div className="relative">
                <select 
                  value={selectedBike}
                  onChange={(e) => setSelectedBike(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  {sportBikes.map(bike => (
                    <option key={bike.name} value={bike.name} className="text-black">{bike.name}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
          <button 
            onClick={handleCompare}
            disabled={isLoading}
            className="w-full mt-6 bg-brand-red text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            <Zap className={`w-5 h-5 ${isLoading ? 'animate-pulse' : ''}`} />
            <span>{isLoading ? 'ANALYZING URL...' : 'GENERATE COMPARISON'}</span>
          </button>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          {error && <div className="bg-red-900/50 border border-red-500 text-red-300 rounded-lg p-4 text-center">{error}</div>}
          {isLoading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-red mx-auto"></div>
              <p className="mt-4 text-gray-400">Our AI is analyzing the webpage... this may take a moment.</p>
            </div>
          )}
          {comparisonResult && (
            <div className="bg-card-bg border border-border-color rounded-xl p-8 prose prose-invert prose-p:text-gray-300 prose-headings:text-white prose-strong:text-white max-w-none">
              <ReactMarkdown>{comparisonResult}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
