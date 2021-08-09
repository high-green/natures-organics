import { Deserializable } from "./deserializable";

export class Comment implements Deserializable {
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
    comment: string;
    date: string;
}