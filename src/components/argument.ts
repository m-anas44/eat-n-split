let passFunctionValue = "";
let passFunctionId: number;

export function setArguFunction(newValue: string, newId: number) {
    passFunctionValue = newValue;
    passFunctionId = newId;
}
export function getPassFunction() {
    return passFunctionValue;
}

export function getIdFunction() {
    return passFunctionId;
}

