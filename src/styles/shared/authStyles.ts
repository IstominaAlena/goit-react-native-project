import { StyleSheet } from 'react-native';

import { colors } from "../variables";

export const authStyles = StyleSheet.create({
	authScreen: {
		paddingTop: '8.5%',
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		backgroundColor: colors.background,
	},
	authTitle: {
		marginBottom: '8.5%',
		fontFamily: 'Roboto500',
		fontSize: 30,
		letterSpacing: 0.01,
		textAlign: 'center',
		color: colors.text,
	},
	authForm: {
		marginHorizontal: '8.5%',
	},
	authInputContainer: {
		position: 'relative',
		marginBottom: '4.3%',
	},
	authInput: {
		padding: '3%',
		paddingLeft: '4.3%',
		borderWidth: 1,
		borderRadius: 6,
		borderColor: colors.border,
		backgroundColor: colors.inputBackground,
		fontFamily: 'Roboto400',
		color: colors.text
	},
	authPasswordContainer: {
		marginBottom: '12%',
	},
	authButton: {
		marginBottom: '4.6%',
		borderRadius: 100,
		padding: '4.3%',
		backgroundColor: colors.accent,
	},
	authButtonText: {
		fontFamily: 'Roboto400',
		fontSize: 16,
		textAlign: 'center',
		color: colors.background,
	},
	helperButton: {
		position: 'absolute',
		top: 14,
		right: '4%',
	},
	helperButtonText: {
		fontFamily: 'Roboto400',
		fontSize: 16,
		color: colors.helper,
	},
	authContainer: {
		marginBottom: '12%',
	},
	authText: {
		fontFamily: 'Roboto400',
		fontSize: 16,
		textAlign: 'center',
		color: colors.helper,
	},
});
