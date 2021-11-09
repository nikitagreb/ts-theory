enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

enum DirectionString {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

enum Decision {
    Yes = 1,
    No = calcEnum()
}

function calcEnum() {
    return 2;
}

function runEnum(obj: {Up: number}) {

}

runEnum(Direction)

enum EnumTest {
    A
}


let test = EnumTest.A
let nameEnumA = EnumTest[test]

const enum ConstEnum {
    A,
    B
}

let cEnum = ConstEnum.A

enum Dice {
    One = 1,
    Two,
    Tree
}

function ruDice(dice: Dice) {
    switch (dice) {
        case Dice.One:
            return 'one';
        case Dice.Two:
            return 'two';
        case Dice.Tree:
            return 'tree';
        default:
            const a: never = dice;
    }
}
