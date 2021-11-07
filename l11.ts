interface ITag {
    name: string;
    value: number;
}

interface IInfo {
    desc: string;
    isActive: boolean;
}

interface IReply {
    userId: number;
    id: number;
    title: string;
    info: IInfo;
    tags: ITag[]
}