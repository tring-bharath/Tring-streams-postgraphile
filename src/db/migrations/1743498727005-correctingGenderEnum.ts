import { MigrationInterface, QueryRunner } from "typeorm";

export class CorrectingGenderEnum1743498727005 implements MigrationInterface {
    name = 'CorrectingGenderEnum1743498727005'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."user_gender_enum" RENAME TO "user_gender_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."user_gender_enum" AS ENUM('MALE', 'FEMALE')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" TYPE "public"."user_gender_enum" USING "gender"::"text"::"public"."user_gender_enum"`);
        await queryRunner.query(`DROP TYPE "public"."user_gender_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_gender_enum_old" AS ENUM('male', 'female')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" TYPE "public"."user_gender_enum_old" USING "gender"::"text"::"public"."user_gender_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."user_gender_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."user_gender_enum_old" RENAME TO "user_gender_enum"`);
    }

}
