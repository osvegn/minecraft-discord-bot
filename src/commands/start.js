const { SlashCommandBuilder } = require('discord.js')
const { dockerStatsEmbed } = require('../embeds')
const { commands } = require('../../config')
const { cmdSlashTranslation } = require('../index')

module.exports = {
  data: new SlashCommandBuilder()
    .setName(cmdSlashTranslation.dockerStats.name)
    .setDescription(cmdSlashTranslation.dockerStats.description),
  run: async ({ interaction }) => {
    await interaction.deferReply()
    try {
      interaction.editReply({ content: '', embeds: [await dockerStatsEmbed()] })
    } catch (error) {
      console.log(error);
      interaction.followUp({
        content: 'CA MARCHE PAS je sais pas pourquoi',
      })
      const { getError } = require('../index')
      getError(error, 'statusCmd')
    }
  },
  options: {
    deleted: !commands.dockerStats.enabled || !commands.slashCommands, // Deletes the command from Discord
  },
}
