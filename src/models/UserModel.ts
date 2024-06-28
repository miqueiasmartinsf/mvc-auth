export class UserModel {
    public id: string;
    public name: string;
    public age: number;

    constructor(id: string, name: string, age: number) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
}
