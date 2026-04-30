export enum BackupStatus {
  PENDING = "PENDING",
  BACKING_UP = "BACKING_UP",
  REPLICATING = "REPLICATING",
  LOCKING = "LOCKING",
  COMPLETED = "COMPLETED",
  VALIDATING = "VALIDATING",
  FAILED = "FAILED",
  DELETED_ATTEMPT = "DELETED_ATTEMPT"
}

export enum ImmutabilityMode {
  GOVERNANCE = "GOVERNANCE",
  COMPLIANCE = "COMPLIANCE",
  WORM = "WORM"
}

export interface BackupJob {
  id: string;
  source: string;
  target: string;
  size: number;
  mode: ImmutabilityMode;
  lockExpiry: string;
  status: BackupStatus;
  integrityHash: string;
  createdAt: string;
}

export interface RecoveryPoint {
  id: string;
  backupId: string;
  timestamp: string;
  isValidated: boolean;
  rpo: number; // minutes
}

export interface ResilienceScore {
  immutability: number;
  replication: number;
  encryption: number;
  validation: number;
  total: number;
}
