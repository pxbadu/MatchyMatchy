/**
 * Script to convert the .h5 model file to TensorFlow.js format
 * 
 * Note: This script requires Python and the tensorflowjs package to be installed.
 * Install with: pip install tensorflowjs
 * 
 * Usage: node scripts/convert-model.js
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Paths
const modelDir = path.join(__dirname, '../models');
const h5ModelPath = path.join(modelDir, 'skin_tone_model.h5');
const outputDir = path.join(modelDir, 'web_model');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Check if the model file exists
if (!fs.existsSync(h5ModelPath)) {
  console.error(`Model file not found: ${h5ModelPath}`);
  process.exit(1);
}

console.log('Converting model to TensorFlow.js format...');

try {
  // Run the tensorflowjs_converter command
  const command = `tensorflowjs_converter --input_format=keras ${h5ModelPath} ${outputDir}`;
  execSync(command, { stdio: 'inherit' });
  
  console.log('Model converted successfully!');
  console.log(`Output files are in: ${outputDir}`);
  
  // Copy the model files to the public directory for serving
  const publicModelDir = path.join(__dirname, '../public/models');
  if (!fs.existsSync(publicModelDir)) {
    fs.mkdirSync(publicModelDir, { recursive: true });
  }
  
  // Copy all files from the output directory to the public directory
  fs.readdirSync(outputDir).forEach(file => {
    const srcPath = path.join(outputDir, file);
    const destPath = path.join(publicModelDir, file);
    fs.copyFileSync(srcPath, destPath);
  });
  
  console.log('Model files copied to public directory for serving.');
} catch (error) {
  console.error('Error converting model:', error.message);
  process.exit(1);
} 