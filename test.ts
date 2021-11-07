let a: number = 4;
let b: string = 'mkmkmkm';
let c: boolean = true;

let d: string[] = ['sddssad', 'sadsadsd'];

let e: any = 3;
e = 'asdasdasd';

function test(a: string): string | number {
    return ''
}

const test2 = (a: number): number => {
    return a*2;
}

d = d.map((x: string) => x.toLowerCase())

function countCoord(coord: {lat: number, long: number}) {

}

function printIt(id: string | number): void {
    if (typeof id === 'number') {
        console.log(id.toString());
    } else if (typeof id === 'string') {
        console.log(id.toUpperCase())
    }
}

function getSum(a: number | number[]) {
    if (Array.isArray(a)) {

    }
}

const x: undefined = undefined;
const z: null = null;
