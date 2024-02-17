'use client'

import { useContext } from "react";
import { TestContext } from "../context/TestContext";

export const TestConsumer = () => {
    const value = useContext(TestContext);
    return (<div>Value: {`${value.toString()}`}</div>);
}