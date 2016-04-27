var horoscope = [
	{
		character: "aries",
		trait: "You're best attributes are: Active, Demanding, Determined, Effective, Ambitious",
		image: "img/aries.png"
	},
	{
		character: "taurus",
		trait: "You're best attributes are: Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/taurus.png"
	},
	{
		character: "gemini",
		trait: "You're best attributes are: Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini.png"
	},
	{
		character: "cancer",
		trait: "You're best attributes are: Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer.png"
	},
	{
		character: "leo",
		trait: "You're best attributes are: Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo.png"
	},
	{
		character: "virgo",
		trait: "You're best attributes are: Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "img/virgo.png"
	},
	{
		character: "libra",
		trait: "You're best attributes are: Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra.png"
	},
	{
		character: "scorpio",
		trait: "You're best attributes are: Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/scorpio.png"
	},
	{
		character: "sagittarius",
		trait: "You're best attributes are: Philosophical, Motion, Experimentation, Optimism",
		image: "img/sagittarius.png"
	},
	{
		character: "capricorn",
		trait: "You're best attributes are: Determination, Dominance, Perservering, Practical, Willful",
		image: "img/capricorn.png"
	},
	{
		character: "aquarius",
		trait: "You're best attributes are: Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius.png"
	},
	{
		character: "pisces",
		trait: "You're best attributes are: Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces.png"
	},
	{
		character: "batman",
		trait: "You're best attributes are: Billionaire, Fights Crime, Bat-Mobile, You Have A Butler, You're Batman",
		image: "img/batman.png"
	}
]

function clickMe() {
	var sign = document.getElementById("sign").value.toLowerCase()
	for(i = 0; i < horoscope.length; i++) {
		if(sign == horoscope[i].character) {
			document.getElementById("picture").src = horoscope[i].image
			document.getElementById("name").innerHTML = horoscope[i].character
			document.getElementById("description").innerHTML = horoscope[i].trait
			return
		}else {
			document.getElementById("name").innerHTML = "You entered a name incorrectly. Try again (or try typing Batman)!"
		}
	}
}