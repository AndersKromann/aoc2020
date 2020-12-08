interface Instruction {
    operation: 'acc' | 'jmp' | 'nop';
    argument: number;
    index: number;
}

export const solve = (input: string[]): number => {
    const program = input.map((line, index) => {
        let split = line.split(' ');
        return {
            operation: split[0],
            argument: Number(split[1]),
            index,
        } as Instruction;
    });

    for (const inst of program) {
        if (inst.operation === 'acc') {
            continue;
        }
        let moddedProgram = [...program];
        moddedProgram[inst.index] = {
            index: inst.index,
            argument: inst.argument,
            operation: inst.operation === 'jmp' ? 'nop' : 'jmp',
        };
        try {
            let result = runProgram(moddedProgram);
            return result;
        } catch (error) {}
    }

    return 0;
};

let accumulator: number;
let pointer: number;
const runProgram = (program: Array<Instruction>): number => {
    let processedInstructions: Array<Instruction> = [];
    accumulator = 0;
    pointer = 0;
    while (pointer < program.length) {
        let currentInstruction = program[pointer];
        if (processedInstructions.includes(currentInstruction)) {
            throw 'Infinite loop';
        }
        handleInstruction(currentInstruction);
        processedInstructions.push(currentInstruction);
    }
    return accumulator;
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
