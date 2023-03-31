const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// something that works but has the promise version of the "callback hell"
/*

alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
  alice2.animate(aliceTumbling, aliceTiming).finished.then(() => {
    alice3.animate(aliceTumbling, aliceTiming)
  })
});

*/


// promise chain -1
/*

alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => {
    alice2.animate(aliceTumbling, aliceTiming)
  })
  .then(() => {
    alice3.animate(aliceTumbling, aliceTiming)
  })

*/


//promise chain -2
//If the function only has one line in the curly brackets, you omit the curly brackets.
/*

alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => 
    alice2.animate(aliceTumbling, aliceTiming).finished
  )
  .then(() => 
    alice3.animate(aliceTumbling, aliceTiming)
  )

  */

// do not repeat yourself ;)
  async function animateAlices() {
    const alices = [alice1, alice2, alice3];
    for (const alice of alices) {
      await alice.animate(aliceTumbling, aliceTiming).finished
    }
  }

  animateAlices();
  