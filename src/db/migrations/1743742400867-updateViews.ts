import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateViews1743742400867 implements MigrationInterface {
    name = 'UpdateViews1743742400867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "otp_entity" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "otp" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_af69f5d9d41ea2100820431b72e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "otp_entity"`);
    }

}
