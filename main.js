// ---------------Class--------------------
class LSystemParams {
	constructor(len, angle, axiom, sentence, rules) {
		this.len = len;
		this.angle = angle;
		this.axiom = axiom;
		this.sentence = sentence;
		this.rules = rules;
	}
}

class Rule {
	constructor(char, sentence) {
		this.char = char;
		this.sentence = sentence;
	}
}
// ----------------------------------------

var angleSlider;
var lenMultiplierSlider;
var angleValue;
var checkbox;
var playDirection = false;

var sys = new LSystemParams(200, 0, "F", "F", [
	new Rule("F", "FF-[-F+F+F]+[+F-F-F]")
]);

// ----------Alphabet Funcs----------------
var functions = {
	"F": line,
	"+": positiveRotate,
	"-": negativeRotate,
	/* Load in Setup() */
	"[": null,
	"]": null
};

function line() {
	line(0, 0, 0, -(sys.len) * lenMultiplierSlider.value());
	translate(0, -(sys.len) * lenMultiplierSlider.value());
}

function positiveRotate() {
	rotate(sys.angle);
}

function negativeRotate() {
	rotate(-(sys.angle));
}
// ----------------------------------------

function generate() {
	sys.len *= 0.5;
	let newSentence = "";
	for (let i = 0; i < sys.sentence.length; i++) {
		let found = false;
		let current = sys.sentence.charAt(i);
		for (let j = 0; j < sys.rules.length; j++) {
			if(current == sys.rules[j].char) {
				found = true;
				newSentence += sys.rules[j].sentence;
				break;
			}
		}

		if(!found) {
			newSentence += current;
		}
	}

	sys.sentence = newSentence;
}

function turtle() {
	background(51);
	stroke(255);
	resetMatrix();
	translate(width / 2, height);
	for (var i = 0; i < sys.sentence.length; i++) {
		functions[sys.sentence.charAt(i)]();
	}
}

function setup() {
	createCanvas(800, 800);
	background(51);

	angleSlider = createSlider(0, 360, 25);
	lenMultiplierSlider = createSlider(0, 10, 1, 0.01)
	angleValue = createP();
	checkbox = createCheckbox("Autoslide", false);

	let button = createButton("generate");
	button.mousePressed(generate);

	sys.angle = radians(25);
	functions["["] = push;
	functions["]"] = pop;

	turtle();
}

function draw() {
	let sliderValue = angleSlider.value();

	if(checkbox.checked()) {
		if(playDirection && sliderValue < 360) {
			angleSlider.value(sliderValue = sliderValue + 1);
		} else if(!playDirection && sliderValue > 0) {
			angleSlider.value(sliderValue = sliderValue - 1);
		} else {
			if(playDirection && sliderValue >= 360) {
				angleSlider.value(sliderValue = sliderValue - 1);
			} else if(!playDirection && sliderValue <= 0) {
				angleSlider.value(sliderValue = sliderValue + 1);
			}
			playDirection = !playDirection;
		}
	}

	sys.angle = radians(sliderValue);
	angleValue.html("Angle : " + sliderValue + "°");
	turtle();
}
