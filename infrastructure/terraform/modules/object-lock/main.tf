resource "aws_s3_bucket" "immutable_vault" {
  bucket = var.bucket_name

  object_lock_enabled = true
}

resource "aws_s3_bucket_object_lock_configuration" "compliance_lock" {
  bucket = aws_s3_bucket.immutable_vault.id

  rule {
    default_retention {
      mode = "COMPLIANCE"
      days = 30
    }
  }
}

resource "aws_s3_bucket_versioning" "vault_versioning" {
  bucket = aws_s3_bucket.immutable_vault.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "vault_encryption" {
  bucket = aws_s3_bucket.immutable_vault.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "aws:kms"
    }
  }
}
