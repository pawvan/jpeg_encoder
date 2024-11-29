/*!
 * This code is belongs to Pawvan
 * 
 * 
 * Rules:
 * 1. You can use, modify, and distribute this code freely for non-commercial purposes.
 * 2. Attribution must be provided in any derived works.
 * 3. You may not use this code in any project that violates any laws.
 * 4. No warranty is provided. Use this code at your own risk.
 * 5. If you make any changes, you must document them.
 * 6. Commercial use requires explicit permission from the author.
 * 7. Redistribution of the code must include authors notice.
 * 8. You cannot sublicense or sell this code.
 * 9. You may not use this code in any harmful or malicious way.
 *10. For more details, please contact: [pawanpediredla@gmail.com]
 */

 export function splitIntoBlocks(image) {
    const blockSize = 8;
    const blocks = [];
    
    // Ensure the image is structured as a 2D array (height x width)
    if (!image || image.length === 0) {
      console.error('Invalid image data provided to splitIntoBlocks');
      return [];
    }
  
    const height = image.length;
    const width = image[0].length;
  
    for (let y = 0; y < height; y += blockSize) {
      for (let x = 0; x < width; x += blockSize) {
        let block = [];
        for (let dy = 0; dy < blockSize; dy++) {
          for (let dx = 0; dx < blockSize; dx++) {
            if (y + dy < height && x + dx < width) {
              block.push(image[y + dy][x + dx]);
            }
          }
        }
        blocks.push(block);
      }
    }
    return blocks;
  }
  