import { createThirdwebClient, defineChain, getContract } from "thirdweb";

export const APP_NAME = "YouDentify";
export const APP_DESCRIPTION =
    "YouDentify - Decentralized Identity Platform on the mantle blockchain";

export const chain = defineChain(5003);
export const contractAddress = "0x4f87A34cAA93e0A377dCF609A1F0Fb354633647B";
export const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
});

export const contract = getContract({
    client,
    chain: chain,
    address: contractAddress,
});
