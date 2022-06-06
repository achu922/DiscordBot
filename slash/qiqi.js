const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("qiqi").setDescription("For Qiqi"),
	run: async ({ client, interaction }) => {

        await interaction.editReply("QIQI sucks.")
	},
}