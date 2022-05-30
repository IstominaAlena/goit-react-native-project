import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Keyboard,
} from 'react-native';

import { AuthScreenWrapper } from "../../components/shared/AuthScreenWrapper";
import { RegistrationForm } from "../../components/RegistrationForm";

import { authStyles } from "../../styles/shared/authStyles";

export const RegistrationScreen = () => {
	const [isShowKeyboard, setIsShowKeyboard] = useState<boolean>(false);

	const onHideKeyboard = () => {
		Keyboard.dismiss();
		setIsShowKeyboard(false);
	};

	const onShowKeyboard = () => {
		setIsShowKeyboard(true);
	};

	return (
		<AuthScreenWrapper onPress={onHideKeyboard}>
			<View style={[styles.authScreen, styles.registrationScreen]}>
				<Text style={styles.authTitle}>Регистрация</Text>

				<RegistrationForm isShowKeyboard={isShowKeyboard} hideKeyboard={onHideKeyboard} showKeyboard={onShowKeyboard} />

				{!isShowKeyboard && (
					<View style={styles.authContainer}>
						<Text style={styles.authText}>Уже есть аккаунт? Войти</Text>
					</View>
				)}
			</View>
		</AuthScreenWrapper >
	);
};

const styles = StyleSheet.create({
	...authStyles,
	registrationScreen: {
		paddingTop: '24.5%',
	},
});
