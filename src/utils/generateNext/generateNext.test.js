import {generateNextColony} from "./generateNextColony";

describe('generateNext', () => {
    test('if live cells have no neighbors, then they will die', () => {
        const startingGrid = [
            ['-', 'o', '-'],
            ['o', '-', 'o'],
            ['-', 'o', '-'],
        ];

        const expectedGrid = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-'],
        ];

        expect(generateNextColony(startingGrid)).toEqual(expectedGrid);
    });

    test('if live cells have 1 neighbor, then they will die', () => {
        const startingGrid = [
            ['-', '-', '-'],
            ['o', 'o', '-'],
            ['-', '-', '-'],
        ];

        const expectedGrid = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-'],
        ];

        expect(generateNextColony(startingGrid)).toEqual(expectedGrid);
    });

    test('if live cell has 2 live neighbors, then it lives', () => {
        const startingGrid = [
            ['o', 'o', '-'],
            ['o', '-', '-'],
            ['-', '-', '-'],
        ]
        const expected = [
            ['o', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-'],
        ];

        expect(generateNextColony(startingGrid)).toEqual(expected);
    });

    test('if live cell has 3 live neighbors, then it lives', () => {
        const startingGrid = [
            ['o', 'o', 'o'],
            ['-', 'o', '-'],
            ['-', '-', '-'],
        ]
        const expected = [
            ['-', 'o', '-'],
            ['-', '-', '-'],
            ['-', '-', '-'],
        ];

        expect(generateNextColony(startingGrid)).toEqual(expected);
    });

    test('if live cell has 4 live neighbors, then it dies', () => {
        const startingGrid = [
            ['-', 'o', '-'],
            ['o', 'o', 'o'],
            ['-', 'o', '-'],
        ]
        const expected = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-'],
        ];

        expect(generateNextColony(startingGrid)).toEqual(expected);
    });

    test('if dead cell has 3 neighbors, then the dead cell will become alive', () => {
        const startingGrid = [
            ['-', '-', '-'],
            ['o', '-', 'o'],
            ['-', 'o', '-'],
        ];

        const expected = [
            ['-', '-', '-'],
            ['-', 'o', '-'],
            ['-', '-', '-'],
        ]

        expect(generateNextColony(startingGrid)).toEqual(expected);
    });

    test('if 2 live cells have 2 neighbors, then the live cells will live', () => {
        const startingGrid = [
            ['o', 'o', '-'],
            ['o', '-', 'o'],
            ['-', 'o', 'o'],
        ];

        const expected = [
            ['o', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', 'o'],
        ]

        expect(generateNextColony(startingGrid)).toEqual(expected);
    });

    test('if live cells have 2 neighbors in 2 x 2 grid, then the cell is alive (no diagonals)', () => {
        const startingGrid = [
            ['o', 'o'],
            ['o', 'o'],
        ];

        const expected = [
            ['o', 'o'],
            ['o', 'o'],
        ]

        expect(generateNextColony(startingGrid)).toEqual(expected);
    });

    test('if there are no cells, then there are no cells', () => {
        const startingGrid = [];
        const expected = [];

        expect(generateNextColony(startingGrid)).toEqual(expected);
    });

    test('if the grids have different lengths, then the same rules still apply', () => {
        const startingGrid = [
            ['o', 'o'],
            ['o']
        ];
        const expected = [
            ['o','-'],
            ['-']
        ];

        const startingGrid2 = [
            ['o', '-'],
            ['o'],
            ['o', '-']
        ];
        const expected2 = [
            ['-','-'],
            ['o'],
            ['-', '-']
        ];

        expect(generateNextColony(startingGrid)).toEqual(expected);
        expect(generateNextColony(startingGrid2)).toEqual(expected2);
    });
});