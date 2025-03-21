# Matchy-Matchy: AI-Powered Skin Tone Classification

## Overview
Matchy-Matchy is an advanced web application that uses machine learning to classify skin tones directly in your browser. It employs a TensorFlow.js-powered CNN model to analyze images and determine the most likely skin tone category, enabling personalized product recommendations and color matching.

## Features
- **Browser-Based ML Processing**: Runs entirely client-side using TensorFlow.js - no server processing needed
- **Multi-Stage Skin Detection**: Uses advanced algorithms across RGB, YCrCb, and HSV color spaces
- **Progressive Fallback System**: Three-tier classification approach for maximum reliability:
  1. ML model-based classification (primary)
  2. Brightness/warmth-based analysis (fallback)
  3. Deterministic selection (last resort)
- **Adaptive Performance**: Optimized for both desktop and mobile browsers with WebGL and CPU support
- **Memory Efficient**: Implements advanced memory management for smooth operation
- **Privacy-Focused**: All processing happens locally - your images never leave your device

## Technical Architecture
- **Frontend**: React and Next.js with TypeScript
- **ML Framework**: TensorFlow.js with WebGL acceleration
- **Image Processing**: Canvas API with custom skin detection algorithms
- **Optimization**: Model quantization, IndexedDB caching, and intelligent tensor management
- **UI**: Modern, responsive design using Tailwind CSS and Shadcn UI components

## Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/matchy-matchy.git
   cd matchy-matchy
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage Guide
1. **Upload an Image**: Use the upload button to select an image containing skin tones
2. **View Classification Results**: The system will analyze the image and display:
   - Detected skin tone category
   - Confidence score
   - Product recommendations
3. **Try Different Images**: For best results, use well-lit photos where skin is clearly visible
4. **Explore Recommendations**: View and explore matching products based on your skin tone

## How It Works
1. **Preprocessing**: Images are resized to 160×160, maintaining aspect ratio
2. **Skin Detection**: Multi-rule algorithm identifies skin pixels using color space transformations
3. **Noise Reduction**: Spatial clustering removes isolated pixels
4. **Tensor Creation**: Detected skin regions are converted to tensors and resized to 224×224
5. **Model Prediction**: CNN model classifies the image into one of several skin tone categories
6. **Confidence Calculation**: System determines confidence based on prediction scores
7. **Fallback Systems**: Automatically switches to alternative methods if ML classification fails

## Advanced Configuration
- Adjust skin detection sensitivity in `model-utils.ts`
- Configure model caching behavior through the version parameters
- Fine-tune preprocessing parameters for different use cases

## Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13.1+
- Edge 80+
- Modern mobile browsers with WebGL support

## Contributing
Contributions are welcome! Please check out our contribution guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).

## License
This project is licensed under the MIT License - see the LICENSE file for details. 