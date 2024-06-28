export interface IBaseRepository<T> {
    findAll(): Promise<T[]>;
    create(data: T): void;
    update(id: string, data: T): void;
}
