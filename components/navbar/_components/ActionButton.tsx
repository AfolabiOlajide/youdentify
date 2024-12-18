"use client";

import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import { useActiveAccount } from "thirdweb/react";
import useQueries from "@/hooks/use-queries";
import DropdownMenu from "./DropDownMenu";
import Connect from "./Connect";

const ActionButtons = () => {
    const account = useActiveAccount();
    const { getUserByAddress } = useQueries();

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [UserInfo, setUserInfo] = useState("");
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };
    useEffect(() => {
        const getUserInfo = async () => {
            let userInfo = (await getUserByAddress(
                account?.address ? account?.address : "0x0"
            )) as any;
            setUserInfo(userInfo);
        };

        getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account?.address]);

    console.log(UserInfo == "User does not exist.");

    return (
        <div className="pr-2">
            <div className=" items-center justify-center flex ">
                <div className="flex xl:space-x-4">
                    {account?.address && UserInfo !== "User does not exist." ? (
                        <>
                            <Link
                                href={"/dashboard"}
                                className=" lg:flex items-center hidden"
                            >
                                <div className="">Dashboard</div>
                            </Link>
                            <div className="font-thin lg:flex ml-4 mr-0 items-center hidden">
                                |
                            </div>
                        </>
                    ) : account?.address &&
                      UserInfo == "User does not exist." ? (
                        <>
                            <Link
                                href={"/onboard"}
                                className="lg:flex items-center hidden"
                            >
                                <div className="">Get DID</div>
                            </Link>
                            <div className="font-thin lg:flex items-center ml-4 mr-0 hidden">
                                |
                            </div>
                        </>
                    ) : (
                        ""
                    )}
                </div>
                <div className="flex lg:space-x-2 items-center pr-4">
                    <Link href={"/free"}>
                        <Button
                            variant={"outline"}
                            className="lg:flex items-center hidden border-none  text-md"
                        ></Button>
                    </Link>
                    <div className="lg:flex hidden">
                        <Connect />
                    </div>
                </div>
            </div>

            {isDropdownVisible && (
                <div
                    onClick={toggleDropdown}
                    className="rounded-full xl:hidden"
                >
                    <X className="h-5 w-5  items-center justify-center rounded-full" />
                </div>
            )}
            {!isDropdownVisible && (
                <div onClick={toggleDropdown} className="flex lg:hidden">
                    <AlignJustify className="h-6 w-6 items-center justify-center mr-2" />
                </div>
            )}

            {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
        </div>
    );
};

export default ActionButtons;
