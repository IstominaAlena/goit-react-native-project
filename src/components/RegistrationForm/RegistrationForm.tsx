import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { AuthInput } from "../shared/AuthInput";
import { Button } from "../shared/Button";

import { authStyles } from "../../styles/shared/authStyles";

const initialState = {
	email: "",
	password: "",
	login: "",
};

interface IProps {
	isShowKeyboard: boolean,
	hideKeyboard: () => void,
	showKeyboard: () => void,
};

export const RegistrationForm = ({ isShowKeyboard, hideKeyboard, showKeyboard }: IProps) => {
	const [authData, setAuthData] = useState(initialState);
	const [shouldHidePassword, setShouldHidePassword] = useState<boolean>(true);

	const getAuthData = () => {
		console.log(authData);
		hideKeyboard();
		setAuthData(initialState);
	};

	const onAuthInput = (value: string, name: string) => {
		setAuthData((prevState) => ({
			...prevState,
			[name]: value
		}));
	};

	const onFocusInput = () => {
		showKeyboard();
	};

	const onPasswordButton = () => {
		setShouldHidePassword(!shouldHidePassword);
	};

	return (
		<View style={styles.authForm}>
			<AuthInput
				placeholder="Логин"
				onChangeText={onAuthInput}
				onFocus={onFocusInput}
				name="login"
				value={authData.login}
			/>
			<AuthInput
				placeholder="Адрес электронной почты"
				onChangeText={onAuthInput}
				onFocus={onFocusInput}
				name="email"
				value={authData.email}
			/>
			<AuthInput
				placeholder="Пароль"
				isPassword={true}
				onChangeText={onAuthInput}
				onFocus={onFocusInput}
				isSecuredText={shouldHidePassword}
				onPressButton={onPasswordButton}
				name="password"
				value={authData.password}
			/>
			{!isShowKeyboard && (
				<Button
					text="Зарегистрироваться"
					onPress={getAuthData}
					buttonStyle={styles.authButton}
					textStyle={styles.authButtonText}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	...authStyles,
});
