let timeLeft = 20;
let timeActive = false;

document.addEventListener('DOMContentLoaded', () => {
	const timeLeftDisplay = document.querySelector('#time-left');
	const startBtn = document.querySelector('#start-button');

	


	function countDown() {
		setInterval(function () {
		
   
		

				if (timeLeft===0){
	
					stopTimer();
				
					const div = document.getElementById('wrapper');
				
			
					var img = document.createElement('IMG');
					img.src = 'random.png';
					img.id = 'theImage'
					div.appendChild(img);
					document.body.appendChild(div);
				
				
					
				};
				
		
			
			timeLeftDisplay.innerHTML = timeLeft;
			timeLeft--; 

			if (timeLeft===0){
	
				stopTimer();
			
				const div = document.getElementById('wrapper');
				console.log(div);
				div.innerHTML += 'Time to relax your eyes!!'
			
			// 	// div.id = 'box';
			// 	// var img = document.createElement('IMG');
			// 	// img.src = 'random.png';
			// 	// img.id = 'theImage'
			// 	// div.appendChild(img);
			// 	// document.body.appendChild(div);
			
			
			
			};
			

			
		}, 500);



	}
const stopTimer=()=>clearInterval(countDown);

	startBtn.addEventListener('click', countDown);
});
