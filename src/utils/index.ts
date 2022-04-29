import dayjs from "dayjs";
import { Dimensions, Platform } from "react-native";
import theme from "./theme";
import { DateFormats } from "./types";

export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

export const generateBoxShadowStyle = (
	xOffset: number,
	yOffset: number,
	shadowColorIos: string,
	shadowOpacity: number,
	shadowRadius: number,
	elevation: number,
	shadowColorAndroid: string,
) => {
	if (isIOS) {
		return {
			shadowColor: shadowColorIos,
			shadowOffset: { width: xOffset, height: yOffset },
			shadowOpacity,
			shadowRadius,
		};
	} else if (isAndroid) {
		return {
			elevation,
			shadowColor: shadowColorAndroid,
		};
	}
};

export const formatTimeStamp = (timestamp: string, format: DateFormats) => {
	return dayjs(timestamp).format(format);
};

export const formatToIso = (timestamp: string, format: DateFormats) => dayjs(timestamp, format).toISOString();

export const debounce = (fn: (...args: any) => void, duration: number) => {
	let timer = null;

	return (...args) => {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(() => {
			fn(...args);
		}, duration);
	};
};

export const calculateOriginalPrice = (currentPrice, discount) => (currentPrice + currentPrice * (discount / 100)).toFixed(2);

export const defaultAvatar = "https://avatars.dicebear.com/api/identicon/your-custom-seed.png";

export const COLOR_CARD_WIDTH = (Dimensions.get("screen").width - (theme.spacing.medium * 2 + theme.spacing.xxSmall * 2)) / 2;
