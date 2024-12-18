"use client"

import { chain, client } from "@/lib/constants"
import { ConnectButton } from "thirdweb/react"

const Connect = () => {
    return (
        <><ConnectButton client={client} chain={chain} theme={"light"} /></>
    )
}

export default Connect