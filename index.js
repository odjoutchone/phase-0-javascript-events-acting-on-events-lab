// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger')
    const currentLeft = parseInt(dodger.style.left)
    dodger.style.left = `${currentLeft - 4}px`
  }
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger')
    const currentLeft = parseInt(dodger.style.left)
    dodger.style.left = `${currentLeft + 4}px`
  }
  