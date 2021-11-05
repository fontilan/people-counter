let count = 0;

/**
 * Increase the number after pressing the INCREMENT button
 * @param {number} count - represents the current count
 */
function increment() {
  count += 1;
  document.getElementById("count-el").textContent = count;
}

/**
 * Save the current count after pressing the SAVE button, then reset the current count back to 0
 * @param {number} savedCount - represents one "chunk" of people
 */
function save() {
  let savedCount = count + " - ";
  document.getElementById("save-el").textContent += savedCount;
  count = 0;
  document.getElementById("count-el").textContent = count;
}
