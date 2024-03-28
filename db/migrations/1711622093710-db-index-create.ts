import { MigrationInterface, QueryRunner } from "typeorm";

export class DbIndexCreate1711622093710 implements MigrationInterface {
    name = 'DbIndexCreate1711622093710'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "userid_index" ON "user" ("id") `);
        await queryRunner.query(`CREATE INDEX "email_index" ON "user" ("email") `);
        await queryRunner.query(`CREATE INDEX "taskid_index" ON "task" ("id") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."taskid_index"`);
        await queryRunner.query(`DROP INDEX "public"."email_index"`);
        await queryRunner.query(`DROP INDEX "public"."userid_index"`);
    }

}
