/// Spidey
/// The Discord bot
/// 
/// Main file/entry point of the NodeJS Discord bot project


// Use the `dotenv` NodeJS package to access Environment variables
require("dotenv").config();

// Import discord.js as `Discord`
const Discord = require("discord.js");


// Create the bot prefix as `PREFIX` (defaults to "!")
const PREFIX = process.env.SPIDEY_DISCORD_BOT_PREFIX || "!";

// Create the Discord client through which the bot will be used
const botClient = new Discord.Client({
  presence: {
    status: "online",
    activity: {
      name: `${PREFIX}help`,
      type: "LISTENING"
    }
  }
});



// Log into the client as the bot using the bot's token
botClient.login(process.env.SPIDEY_DISCORD_BOT_TOKEN);
