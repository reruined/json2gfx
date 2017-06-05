console.log('main');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// resize frame buffer every time window is resized
window.addEventListener('resize', updateCanvasSize);
updateCanvasSize();

function updateCanvasSize() {
   const width = canvas.parentNode.clientWidth;
   const height = canvas.parentNode.clientHeight;

   if(canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      console.log(`Resized canvas to [${canvas.width}, ${canvas.height}]`);
   }

   ctx.fillStyle = 'rgba(255, 255, 255, 255)';
   ctx.fillRect((canvas.width/2) - 50, (canvas.height/2) - 50, 100, 100);
}
