import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1742888013692 implements MigrationInterface {
    name = 'Migration1742888013692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "allVideos" ("id" integer NOT NULL, "tags" character varying, "videoURL" character varying, "likes" integer, "thumbnail" character varying, "views" integer, CONSTRAINT "PK_b2a9821ad5f6e2af594a6b7c9fc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "lastName" character varying, "location" character varying, "phoneNumber" character varying, "dateOfBirth" TIMESTAMP, "gender" integer, "profilePicture" character varying, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "userWatchlist" ("allVideosId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_422d26f3b2052770f443e952ae9" PRIMARY KEY ("allVideosId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_339d4136547d9886126d5e3bfe" ON "userWatchlist" ("allVideosId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c86848c4ba779735d0217db52f" ON "userWatchlist" ("userId") `);
        await queryRunner.query(`CREATE TABLE "userHistory" ("allVideosId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_c141762cd2f3697a1e790a4ce82" PRIMARY KEY ("allVideosId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d644809d5684453698917dfd21" ON "userHistory" ("allVideosId") `);
        await queryRunner.query(`CREATE INDEX "IDX_08e03b72cd298983c224b062ac" ON "userHistory" ("userId") `);
        await queryRunner.query(`ALTER TABLE "userWatchlist" ADD CONSTRAINT "FK_339d4136547d9886126d5e3bfe9" FOREIGN KEY ("allVideosId") REFERENCES "allVideos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "userWatchlist" ADD CONSTRAINT "FK_c86848c4ba779735d0217db52f9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "userHistory" ADD CONSTRAINT "FK_d644809d5684453698917dfd214" FOREIGN KEY ("allVideosId") REFERENCES "allVideos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "userHistory" ADD CONSTRAINT "FK_08e03b72cd298983c224b062ac5" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "userHistory" DROP CONSTRAINT "FK_08e03b72cd298983c224b062ac5"`);
        await queryRunner.query(`ALTER TABLE "userHistory" DROP CONSTRAINT "FK_d644809d5684453698917dfd214"`);
        await queryRunner.query(`ALTER TABLE "userWatchlist" DROP CONSTRAINT "FK_c86848c4ba779735d0217db52f9"`);
        await queryRunner.query(`ALTER TABLE "userWatchlist" DROP CONSTRAINT "FK_339d4136547d9886126d5e3bfe9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_08e03b72cd298983c224b062ac"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d644809d5684453698917dfd21"`);
        await queryRunner.query(`DROP TABLE "userHistory"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c86848c4ba779735d0217db52f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_339d4136547d9886126d5e3bfe"`);
        await queryRunner.query(`DROP TABLE "userWatchlist"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "allVideos"`);
    }

}
