// walkthrough in class

// we added the `state` (bank, odds, evens) after appDiv
const state = {
  bank: [],
  odds: [],
  evens: [],
}

const appDiv = document.querySelector(`#app`);
appDiv.innerHTML = `
  <h1>Odds and Events</h1>
  <form>
    <label>Add a number to the bank</label><input />
    <button>Add Number</button>
    <button>Sort 1</button>
    <button>Sort All</button>
  </form>

  <h2>Bank</h2>
  <output></output>

  <h2>Odds</h2>
  <output></output>

  <h2>Evens</h2>
  <output></output>
  `;

  //  user types into the input box
  // we need to grab the form
  // add the submit event listener to the form
    // grab what the user typed in
    // store that number in the bank array
    // re-render the page