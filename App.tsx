import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { RegistrationScreen } from "./src/screens/RegistrationScreen";

const App = () => {
	let [fontsLoaded] = useFonts({
		Roboto400: Roboto_400Regular,
		Roboto500: Roboto_500Medium,
		Roboto700: Roboto_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	};

	return (
		<>
			<RegistrationScreen />
			<StatusBar style="auto" />
		</>
	);
};

export default App;
