const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("sin").setDescription("sin is geyge"),
	run: async ({ client, interaction }) => {
	

        await interaction.editReply("Sin is submissive and breedable")
	},
}