-- CreateTable
CREATE TABLE "job_boards" (
    "id" SERIAL NOT NULL,
    "company_name" VARCHAR(250) NOT NULL DEFAULT 'requires research',
    "careers_url" TEXT NOT NULL,
    "ats_url" VARCHAR(50) NOT NULL,
    "career_date_scraped" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_boards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_postings" (
    "id" SERIAL NOT NULL,
    "job_title" VARCHAR,
    "job_url" TEXT NOT NULL,
    "job_id" VARCHAR NOT NULL,
    "job_scraped_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "company_name" VARCHAR NOT NULL,
    "job_description" TEXT,
    "json_response" JSON,

    CONSTRAINT "job_postings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "job_boards_company_name_key" ON "job_boards"("company_name");

-- CreateIndex
CREATE UNIQUE INDEX "ix_job_postings_job_id" ON "job_postings"("job_id");

-- AddForeignKey
ALTER TABLE "job_postings" ADD CONSTRAINT "job_postings_company_name_fkey" FOREIGN KEY ("company_name") REFERENCES "job_boards"("company_name") ON DELETE CASCADE ON UPDATE NO ACTION;

