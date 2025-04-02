import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertBio1743487380772 implements MigrationInterface {
    name = 'InsertBio1743487380772'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "bio" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "bio"`);
    }

}
