interface Instruction {
    operation: 'acc' | 'jmp' | 'nop';
    argument: number;
    index: number;
}

let accumulator: number;
let pointer: number;

let program: Array<Instruction> = [];
let processedInstructions: Array<Instruction> = [];

export const solve = (input: string[]): number => {
    accumulator = 0;
    pointer = 0;
    program = input.map((line, index) => {
        let split = line.split(' ');
        return {
            operation: split[0],
            argument: Number(split[1]),
            index,
        } as Instruction;
    });

    while (true) {
        let currentInstruction = program[pointer];
        if (processedInstructions.includes(currentInstruction)) {
            return accumulator;
        }
        handleInstruction(currentInstruction);
        processedInstructions.push(currentInstruction);
    }
};

const handleInstruction = (instruction: Instruction): void => {
    switch (instruction.operation) {
        case 'acc':
            pointer++;
            accumulator = accumulator + instruction.argument;
            return;
        case 'jmp':
            pointer = pointer + instruction.argument;
            return;
        case 'nop':
            pointer++;
            return;
    }
};
