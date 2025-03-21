import { MigrationInterface, QueryRunner } from "typeorm";

export class Updaterelation1742539269848 implements MigrationInterface {
    name = 'Updaterelation1742539269848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "lastName" character varying NOT NULL, "location" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "dateOfBirth" TIMESTAMP NOT NULL, "gender" integer NOT NULL, "profilePicture" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "allVideos" ("id" integer NOT NULL, "tags" character varying NOT NULL, "videoURL" character varying NOT NULL, "thumbnail" character varying NOT NULL, "likes" integer NOT NULL, "views" integer NOT NULL, CONSTRAINT "PK_b2a9821ad5f6e2af594a6b7c9fc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "userWatchlist" ("userId" integer NOT NULL, "allVideosId" integer NOT NULL, CONSTRAINT "PK_422d26f3b2052770f443e952ae9" PRIMARY KEY ("userId", "allVideosId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c86848c4ba779735d0217db52f" ON "userWatchlist" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_339d4136547d9886126d5e3bfe" ON "userWatchlist" ("allVideosId") `);
        await queryRunner.query(`CREATE TABLE "userWatchList" ("allVideosId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_86d04f9e18c1b2f4a71e6fcfbaa" PRIMARY KEY ("allVideosId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_045a0ff2c509e046f372118b4a" ON "userWatchList" ("allVideosId") `);
        await queryRunner.query(`CREATE INDEX "IDX_5534f1cb3c9a5c19c67187a4a1" ON "userWatchList" ("userId") `);
        await queryRunner.query(`ALTER TABLE "userWatchlist" ADD CONSTRAINT "FK_c86848c4ba779735d0217db52f9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "userWatchlist" ADD CONSTRAINT "FK_339d4136547d9886126d5e3bfe9" FOREIGN KEY ("allVideosId") REFERENCES "allVideos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "userWatchList" ADD CONSTRAINT "FK_045a0ff2c509e046f372118b4a7" FOREIGN KEY ("allVideosId") REFERENCES "allVideos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "userWatchList" ADD CONSTRAINT "FK_5534f1cb3c9a5c19c67187a4a10" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "userWatchList" DROP CONSTRAINT "FK_5534f1cb3c9a5c19c67187a4a10"`);
        await queryRunner.query(`ALTER TABLE "userWatchList" DROP CONSTRAINT "FK_045a0ff2c509e046f372118b4a7"`);
        await queryRunner.query(`ALTER TABLE "userWatchlist" DROP CONSTRAINT "FK_339d4136547d9886126d5e3bfe9"`);
        await queryRunner.query(`ALTER TABLE "userWatchlist" DROP CONSTRAINT "FK_c86848c4ba779735d0217db52f9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5534f1cb3c9a5c19c67187a4a1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_045a0ff2c509e046f372118b4a"`);
        await queryRunner.query(`DROP TABLE "userWatchList"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_339d4136547d9886126d5e3bfe"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c86848c4ba779735d0217db52f"`);
        await queryRunner.query(`DROP TABLE "userWatchlist"`);
        await queryRunner.query(`DROP TABLE "allVideos"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
