"use client";
import { contract } from "@/lib/constants";
import { prepareContractCall, readContract } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { toast } from "./use-toast";

const useQueries = () => {
    const { mutate: sendTransaction } = useSendTransaction();

    const createUser = (
        username: string,
        basicInfo: BasicInfoType,
        professionalInfo: ProfessionalInfoType,
        socialLinks: SocialLinksType,
        visibility: VisibilityType
    ) => {
        const transaction = prepareContractCall({
            contract,
            method: "function createUser(string _username, (string firstName, string lastName, string username, string email, string homeAddress, string phoneNumber, string dateOfBirth) _basicInfo, (string jobTitle, string education, string workHistory, string info, string[] skills, string imageUrl) _professionalInfo, (string x, string tiktok, string instagram, string youtube, string linkedIn) _socialLinks, (bool education, bool workHistory, bool phoneNumber, bool homeAddress, bool dateOfBirth) _visibility)",
            params: [
                username,
                basicInfo,
                professionalInfo,
                socialLinks,
                visibility,
            ],
        });
        sendTransaction(transaction);
    };

    const deleteUser = (username: string) => {
        const transaction = prepareContractCall({
            contract,
            method: "function deleteUser(string _username)",
            params: [username],
        });
        sendTransaction(transaction);
    };

    const editUser = (
        username: string,
        basicInfo: BasicInfoType,
        professionalInfo: ProfessionalInfoType,
        socialLinks: SocialLinksType,
        visibility: VisibilityType
    ) => {
        const transaction = prepareContractCall({
            contract,
            method: "function editUser(string _username, (string firstName, string lastName, string username, string email, string homeAddress, string phoneNumber, string dateOfBirth) _basicInfo, (string jobTitle, string education, string workHistory, string info, string[] skills, string imageUrl) _professionalInfo, (string x, string tiktok, string instagram, string youtube, string linkedIn) _socialLinks, (bool education, bool workHistory, bool phoneNumber, bool homeAddress, bool dateOfBirth) _visibility)",
            params: [
                username,
                basicInfo,
                professionalInfo,
                socialLinks,
                visibility,
            ],
        });
        sendTransaction(transaction);
    };

    const setVisibility = (
        username: string,
        education: boolean,
        workHistory: boolean,
        phoneNumber: boolean,
        homeAddress: boolean,
        dateOfBirth: boolean
    ) => {
        const transaction = prepareContractCall({
            contract,
            method: "function setVisibility(string _username, bool education, bool workHistory, bool phoneNumber, bool homeAddress, bool dateOfBirth)",
            params: [
                username,
                education,
                workHistory,
                phoneNumber,
                homeAddress,
                dateOfBirth,
            ],
        });
        sendTransaction(transaction);
    };

    const getUserByAddress = async (address: string) => {
        try {
            const data = await readContract({
                contract,
                method: "function getUserByAddress(address _address) view returns ((string firstName, string lastName, string username, string email, string homeAddress, string phoneNumber, string dateOfBirth) basicInfo, (string jobTitle, string education, string workHistory, string info, string[] skills, string imageUrl) proffessionalInfo, (string x, string tiktok, string instagram, string youtube, string linkedIn) socialLinks, (bool education, bool workHistory, bool phoneNumber, bool homeAddress, bool dateOfBirth) visibility)",
                params: [address],
            });
            const formattedData: ReturnDataType = {
                basicInfo: {
                    firstname: data[0].firstName,
                    lastname: data[0].lastName,
                    username: data[0].username,
                    email: data[0].email,
                    homeAddress: data[0].homeAddress,
                    phoneNumber: data[0].phoneNumber,
                    dateOfBirth: data[0].dateOfBirth,
                },
                professionalInfo: {
                    jobTitle: data[1].jobTitle,
                    education: data[1].education,
                    workHistory: data[1].workHistory,
                    info: data[1].info,
                    skills: data[1].skills,
                    imageUrl: data[1].imageUrl,
                },
                socialLinks: {
                    x: data[2].x,
                    tiktok: data[2].tiktok,
                    instagram: data[2].instagram,
                    youtube: data[2].youtube,
                    linkedIn: data[2].linkedIn,
                },
                visibility: {
                    education: data[3].education,
                    workHistory: data[3].workHistory,
                    phoneNumber: data[3].phoneNumber,
                    homeAddress: data[3].homeAddress,
                    dateOfBirth: data[3].dateOfBirth,
                },
            };
            return formattedData;
        } catch (error) {
            toast({
                title: "Error",
                description: "There was an eror getting the user or user does not exist",
                variant: "destructive",
            });
            console.log(error);
            return "User does not exist.";
        }
    };

    const getUserByUsername = async (username: string) => {
        try {
            const data = await readContract({
                contract,
                method: "function getUserByUserName(string _username) view returns ((string firstName, string lastName, string username, string email, string homeAddress, string phoneNumber, string dateOfBirth) basicInfo, (string jobTitle, string education, string workHistory, string info, string[] skills, string imageUrl) proffessionalInfo, (string x, string tiktok, string instagram, string youtube, string linkedIn) socialLinks, (bool education, bool workHistory, bool phoneNumber, bool homeAddress, bool dateOfBirth) visibility)",
                params: [username],
            });
            const formattedData: ReturnDataType = {
                basicInfo: {
                    firstname: data[0].firstName,
                    lastname: data[0].lastName,
                    username: data[0].username,
                    email: data[0].email,
                    homeAddress: data[0].homeAddress,
                    phoneNumber: data[0].phoneNumber,
                    dateOfBirth: data[0].dateOfBirth,
                },
                professionalInfo: {
                    jobTitle: data[1].jobTitle,
                    education: data[1].education,
                    workHistory: data[1].workHistory,
                    info: data[1].info,
                    skills: data[1].skills,
                    imageUrl: data[1].imageUrl,
                },
                socialLinks: {
                    x: data[2].x,
                    tiktok: data[2].tiktok,
                    instagram: data[2].instagram,
                    youtube: data[2].youtube,
                    linkedIn: data[2].linkedIn,
                },
                visibility: {
                    education: data[3].education,
                    workHistory: data[3].workHistory,
                    phoneNumber: data[3].phoneNumber,
                    homeAddress: data[3].homeAddress,
                    dateOfBirth: data[3].dateOfBirth,
                },
            };
            return formattedData;
        } catch (error) {
            toast({
                title: "Error",
                description: "There was an eror getting the user or user does not exist",
                variant: "destructive",
            });
            console.log(error);
        }
    };

    const getUsernameByAddress = async (address: string) => {
        try {
            const data = await readContract({
                contract,
                method: "function getUserNameByAddress(address _address) view returns (string)",
                params: [address],
            });

            return data;
        } catch (error) {
            toast({
                title: "Error",
                description: "There was an error getting the username, or username does not exist",
                variant: "destructive",
            });
            console.log(error);
        }
    };

    return {
        createUser,
        deleteUser,
        editUser,
        setVisibility,
        getUsernameByAddress,
        getUserByUsername,
        getUserByAddress,
    };
};

export default useQueries;
