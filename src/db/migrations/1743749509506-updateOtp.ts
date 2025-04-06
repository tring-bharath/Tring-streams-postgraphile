import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateOtp1743749509506 implements MigrationInterface {
    name = 'UpdateOtp1743749509506'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "otp_entity" DROP COLUMN "otp"`);
        await queryRunner.query(`ALTER TABLE "otp_entity" ADD "otp" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "otp_entity" DROP COLUMN "otp"`);
        await queryRunner.query(`ALTER TABLE "otp_entity" ADD "otp" character varying NOT NULL`);
    }

}
