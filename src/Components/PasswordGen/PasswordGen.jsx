import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import "./PasswordGen.css"

function PasswordGen() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [number, setNumber] = useState(false);
    const [character, setCharacter] = useState(false);

    const passwordRef = useRef(null);

    const PasswordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhghijklmnopqrstuvwxyz";

        if (character) str += "~`!@#$%^&*(){}[]-=+_|/?><:;'";
        if (number) str += "1234567890";

        for (let i = 0; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);

            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [setPassword, length, number, character]);

    const CopyPasswordToClip = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    }, [password]);

    useEffect(() => {
        PasswordGenerator();
    }, [setPassword, length, number, character]);

    return (
        <>
            <div className="w-full max-w-lg text-gray-50 text-center border-2 border-neutral-100 rounded-md mx-5 my-10">
                <div className="text-xl mt-2">Password Generator</div>
                <div className="flex mx-7 my-5">
                    <input
                        className="w-full outline-none px-2 rounded-md text-gray-950"
                        type="text"
                        value={password}
                        ref={passwordRef}
                        onChange = {(e) => {console.log(e.target.value)}}
                    />
                    <button className="border-2 border-emerald-50 px-3 py-1" onClick={CopyPasswordToClip}>Copy</button>
                </div>
                <div className="flex justify-around mb-4">
                    <div className="flex items-center gap-1">
                        <input
                            className="cursor-pointer"
                            type="range"
                            min={8}
                            max={100}
                            id=""
                            onChange={(e) => {
                                setLength(e.target.value);
                            }}
                        />
                        <label htmlFor="range">Length: {length}</label>
                    </div>
                    <div className="flex items-center gap-1">
                        <input
                            defaultChecked={number}
                            onClick={() => {
                                setNumber((prev) => !prev);
                            }}
                            type="checkbox"
                            name=""
                            id=""
                        />
                        <label htmlFor="checkbox">Numbers</label>
                    </div>
                    <div className="flex items-center gap-1">
                        <input
                            defaultChecked={character}
                            onClick={() => {
                                setCharacter((prev) => !prev);
                            }}
                            type="checkbox"
                            name=""
                            id=""
                        />
                        <label htmlFor="checkbox">Characters</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PasswordGen;
