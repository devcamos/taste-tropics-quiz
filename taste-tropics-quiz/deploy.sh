#!/bin/bash

# Taste Tropics Quiz - Deployment Script
echo "🏝️  Taste Tropics Quiz - Deployment Helper"
echo "=========================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🧪 Running tests..."
npm test -- --watchAll=false

if [ $? -ne 0 ]; then
    echo "❌ Tests failed. Please fix tests before deploying."
    exit 1
fi

echo "🔨 Building production version..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix build errors before deploying."
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "📊 Build Statistics:"
echo "-------------------"
ls -la build/static/js/*.js | awk '{print "JS: " $9 " (" $5 " bytes)"}'
ls -la build/static/css/*.css | awk '{print "CSS: " $9 " (" $5 " bytes)"}'

echo ""
echo "🚀 Ready for Deployment!"
echo ""
echo "Next Steps:"
echo "1. Commit your changes: git add . && git commit -m 'Ready for deployment'"
echo "2. Push to your repository: git push origin main"
echo "3. Go to https://vercel.com and import your repository"
echo "4. Or use Vercel CLI: vercel --prod"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md"

# Test the build locally (optional)
read -p "🌐 Would you like to test the build locally? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌍 Starting local server on http://localhost:3000..."
    echo "Press Ctrl+C to stop the server"
    npx serve -s build
fi