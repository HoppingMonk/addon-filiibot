

client.member = {};
// Is the message author part of Praesidium?
client.member.praesidium = (message) => {
    if (message.member.roles.cache.find((role) => role.name === 'Praesidium')) return true;
    message.reply('sorry, you need to be Praesidium to use this!');
    return false;
};

// Is the message author a Server God?
client.member.serverGod = (message) => {
    if (message.member.roles.cache.find((role) => role.name === 'Server God')) return true;
    message.reply('sorry, you need to be a Server God to use this!');
    return false;
};

// Was there a member mentioned?
client.member.which = (message) => {
    if (message.mentions.members.size === 0) {
        // Use the person who made the command
        return message.member;
    }
    // Use the person you mentioned
    return message.mentions.members.first();
};