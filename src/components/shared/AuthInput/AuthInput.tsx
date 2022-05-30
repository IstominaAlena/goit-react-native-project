import {
	StyleSheet,
	Text,
	View,
	TextInput,
} from 'react-native';

import { Button } from "../Button";

import { authStyles } from "../../../styles/shared/authStyles";

interface IProps {
	placeholder: string,
	isSecuredText?: boolean,
	isPassword?: boolean,
	onChangeText: (text: string, name: string) => void,
	onFocus: () => void,
	name: string,
	onPressButton?: () => void,
	value: string;
};

export const AuthInput = ({
	placeholder,
	isSecuredText,
	onChangeText,
	isPassword,
	onPressButton,
	onFocus,
	name,
	value,
}: IProps) => (
	<View style={[styles.authInputContainer, isPassword && styles.authPasswordContainer]}>
		<TextInput
			style={styles.authInput}
			placeholder={placeholder}
			secureTextEntry={isSecuredText}
			onFocus={onFocus}
			onChangeText={(text) => onChangeText(text, name)}
			value={value}
		/>
		{isPassword && (
			<Button
				text={isSecuredText ? "Показать" : "Спрятать"}
				onPress={onPressButton}
				buttonStyle={styles.helperButton}
				textStyle={styles.helperButtonText}
			/>
		)}

	</View>
);

const styles = StyleSheet.create({
	...authStyles,
});
