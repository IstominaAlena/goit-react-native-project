import {
	StyleSheet,
	ImageBackground,
	View,
	TouchableWithoutFeedback,
	Platform,
	KeyboardAvoidingView,
} from 'react-native';

import backgroundImage from "../../../../assets/images/background.jpg";

interface IProps {
	children: React.ReactNode;
	onPress: () => void;
};

export const AuthScreenWrapper = ({ children, onPress }: IProps) => (
	<TouchableWithoutFeedback onPress={onPress}>
		<View style={styles.container}>
			<ImageBackground
				source={backgroundImage}
				resizeMode="cover"
				style={styles.backgroundImage}
			>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					style={styles.onKeyboard}
				>
					{children}
				</KeyboardAvoidingView>
			</ImageBackground>
		</View>
	</TouchableWithoutFeedback >
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImage: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	onKeyboard: {
		justifyContent: 'flex-end',
	},
});;