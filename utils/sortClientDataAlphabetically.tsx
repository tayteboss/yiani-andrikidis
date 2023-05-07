import { ClientType } from "../shared/types/types";

const sortClientDataAlphabetically = (data: ClientType[]): ClientType[] => {
	return data.sort((a: ClientType, b: ClientType) => {
		const nameA = a.client.toUpperCase();
		const nameB = b.client.toUpperCase();
		return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
	});
};

export default sortClientDataAlphabetically;