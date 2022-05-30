import { Text, TouchableOpacity, ViewStyle, TextStyle, GestureResponderEvent } from 'react-native';

interface IProps {
	text: string,
	onPress?: () => void;
	buttonStyle: ViewStyle,
	textStyle: TextStyle;
};

export const Button = ({ text, onPress, buttonStyle, textStyle }: IProps) => {

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>{text}</Text>
		</TouchableOpacity>
	);
};
