import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Urls {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    param_url: string;

    @Column()
    expires_at: Date
}

export default Urls;