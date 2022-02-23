import { ViewStyle } from "react-native";

export type MessageType = "success" | "error" | "null";
export type InputType = "text" | "search";

export interface Label {
	label: string;
	isOptional?: boolean;
	mb?: number;
}

export interface TextInput extends Label {
	type: InputType;
	messageType?: MessageType;
	message?: string;
	containerStyle?: ViewStyle;
}
