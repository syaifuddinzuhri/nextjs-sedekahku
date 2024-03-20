// globals.ts

let globalCode = '';
let globalName = '';

export const setGlobalCode = (code: string) => {
    globalCode = code;
};

export const setGlobalName = (name: string) => {
    globalName = name;
};

export const getGlobalCode = () => {
    return globalCode;
};

export const getGlobalName = () => {
    return globalName;
};
