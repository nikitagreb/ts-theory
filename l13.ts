class Point12 {
    readonly x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    protected a() {

    }
}

class D3Point12 extends Point12 {
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
        this.a()
    }

    a(name?: string) {
    }
}

const point = new Point12(1,1);
const d3point = new D3Point12(1,1, 1);

class StaticTest {
    static c = 'ssss';

    static test(): string {
        return 'gggg';
    }
}

const d12 = StaticTest.test();

abstract class AbstractTest12 {
    myMethod(): string {
        return 'myMethod';
    }
}

class Test12 extends AbstractTest12 {

}

interface C12 {
    test: () => void;
    test1: () => number;
}

class D12 implements C12 {
    test() {

    }

    test1(): number {
        return 1;
    }
}




