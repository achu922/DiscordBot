const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("sin").setDescription("For Sin"),
	run: async ({ client, interaction }) => {
	

        await interaction.editReply("Sin, is in love with you.")
	},
}