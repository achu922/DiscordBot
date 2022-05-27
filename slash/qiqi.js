const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("qiqi").setDescription("qiqi is submissive"),
	run: async ({ client, interaction }) => {

        await interaction.editReply("QIQI sucks")
	},
}