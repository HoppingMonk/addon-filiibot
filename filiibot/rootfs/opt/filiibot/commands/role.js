/*
 * If the command is 'role'
 */
module.exports = {
  name: 'role',
  description: 'Role!',
  args: true,
  usage: '<role> <user>',
  execute(message, args) {
    if (!message.client.member.constructor.praesidium(message)) return;

    const mentionedMembers = message.mentions.members;

    message.client.log('Doing some roleplay?');
    // Can't use the next thing because otherwise they would get notified
    // let role = message.mentions.roles.cache.first();
    const roleCommilito = message.guild.roles.cache.get('248234454747709440');
    const roleOZ = message.guild.roles.cache.get('240179463164264458');
    const roleSchacht = message.guild.roles.cache.get('239828322295611392');
    const roleLid = message.guild.roles.cache.get('492090623919390761');
    const rolePS = message.guild.roles.cache.get('239827955558121473');

    // args[0] = what
    message.client.log(`Let's use ${args[0].toLowerCase()}`);
    switch (args[0].toLowerCase()) {
      case 'ontgroen':
        mentionedMembers.forEach((mentionedMember) => {
          mentionedMember.roles.remove(roleSchacht);
          mentionedMember.roles.add(roleCommilito)
            .then((mbr) => message.client.log(`Gave the role to ${mbr.displayName}`))
            // and catch the error
            .catch((error) => message.reply(`kon rol niet toewijzen omdat: ${error}`));
        });
        break;

      case 'pensioen':
        mentionedMembers.forEach((mentionedMember) => {
          mentionedMember.roles.remove(rolePS);
          mentionedMember.roles.add(roleOZ)
            .then((mbr) => message.client.log(`Gave the role to ${mbr.displayName}`))
            // and catch the error
            .catch((error) => message.reply(`kon rol niet toewijzen omdat: ${error}`));
        });
        break;

      case 'dom':
        mentionedMembers.forEach((mentionedMember) => {
          mentionedMember.roles.add(roleSchacht)
            .then((mbr) => message.client.log(`Gave the role to ${mbr.displayName}`))
            // and catch the error
            .catch((error) => message.reply(`kon rol niet toewijzen omdat: ${error}`));
        });
        break;

      case 'lid':
        mentionedMembers.forEach((mentionedMember) => {
          mentionedMember.roles.add(roleLid)
            .then((mbr) => message.client.log(`Gave the role to ${mbr.displayName}`))
            // and catch the error
            .catch((error) => message.reply(`kon rol niet toewijzen omdat: ${error}`));
        });
        break;

      case 'ps':
        mentionedMembers.forEach((mentionedMember) => {
          mentionedMember.roles.add(rolePS)
            .then((mbr) => message.client.log(`Gave the role to ${mbr.displayName}`))
            // and catch the error
            .catch((error) => message.reply(`kon rol niet toewijzen omdat: ${error}`));
        });
        break;

      default:
        break;
    }
  },
};
