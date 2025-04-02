import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateGenderColumn1743482668346 implements MigrationInterface {
    name = 'UpdateGenderColumn1743482668346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "gender"`);
        await queryRunner.query(`CREATE TYPE "public"."user_gender_enum" AS ENUM('male', 'female')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "gender" "public"."user_gender_enum"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "gender"`);
        await queryRunner.query(`DROP TYPE "public"."user_gender_enum"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "gender" integer`);
    }

}
