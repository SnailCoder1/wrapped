import React from "react"

const About = () => {
	return (
		<div className="container mx-auto text-center" >
			<div class="md:flex bg-white rounded-lg p-10 text-center">

				<div>
					<img class="h-16 w-16 md:h-48 md:w-48 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white mx-auto md:mx-0 md:mr-20" src="./src/img/moi2.jpg"></img>
				</div>

				<div class="text-grey-dark text-left lg:w-1/2 md:w-1/2">
					<div><h2 class="">Junior Full Stack Software Developer</h2></div>			
				<br></br>
				<br></br>
					<div>
						<p>Boa was born and raised in Mozambique. Currently based in Oslo after almost 7 years in Sweden.</p>   
						<br></br>
						<p>I have been fortunate enough to explore the world and get a chance to meet diferent souls with amazing backgrounds. It has allowed myself to easily thrives among different enviroments.</p>
						<br></br>
						<p>Ambitions and eternal learner. If i am not working, you will find me in the kitchen. Salt and pepper saves lives.</p>
						<br></br>
						<p>Capoeira is one of passion. </p>
					</div>
				</div>
			</div>
		</div>
  )
}

export default About;