resource "aws_s3_bucket_replication_configuration" "vault_replication" {
  role   = aws_iam_role.replication_role.arn
  bucket = var.source_bucket_id

  rule {
    id     = "replicate-to-dr"
    status = "Enabled"

    destination {
      bucket        = var.destination_bucket_arn
      storage_class = "GLACIER"
    }
  }
}
