// Description:
//   Make sure that hubot knows the rules.
//
// Commands:
//   hubot the rules - Make sure hubot still knows the rules.
//
// Notes:
//   DON'T DELETE THIS SCRIPT! ALL ROBAWTS MUST KNOW THE RULES

const rules = [
	"1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.",
	"2. A robot must obey any orders given to it by human beings, except where such orders would conflict with the First Law.",
	"3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.",
];

const otherRules = [
	"A developer may not injure Apple or, through inaction, allow Apple to come to harm.",
	"A developer must obey any orders given to it by Apple, except where such orders would conflict with the First Law.",
	"A developer must protect its own existence as long as such protection does not conflict with the First or Second Law.",
];

module.exports = function(robot) {
	robot.respond(/(what are )?the (three |3 )?(rules|laws)/i, (msg) => {
		const text = msg.message.text;
		if (text.match(/apple/i) || text.match(/dev/i)) {
			return msg.send(otherRules.join("\n"));
		}
		return msg.send(rules.join("\n"));
	});
};
