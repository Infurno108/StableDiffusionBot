const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("chat")
    .setDescription("Have a quick chat with GLaDOS.")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("Your message to GLaDOS.")
        .setRequired(true)
    ),
  async execute(interaction) {
    const message = interaction.options.getString("message");
    await interaction.deferReply();
    const channel = client.channels.cache.get("460670112777895947");
    book = [];
    channel.messages.fetch({ limit: 100 }).then((messages) => {
      console.log(`Received ${messages.size} messages`);
      messages.forEach((message) => book.push(message.content));
    });
    interaction.followUp(book[50]);
  },
};
