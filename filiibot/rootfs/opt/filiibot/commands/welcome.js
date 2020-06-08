/*
 * If the command is 'welcome'
 */
// Lees de externe file
const welcomeDm = fs.readFileSync('./welcomeDm.txt', 'utf8');

module.exports = {
  name: 'welcome',
  description: 'Welcome!',
  execute(message, _args) {
    message.reply('de welkomsttekst is opnieuw naar je gestuurd.');
    message.member.send(welcomeDm);
  },
};
