# Architecture & Data Flow Diagrams

## 11. Backup Lifecycle Management (Detailed)
*How the engine manages a backup from ingest to long-term immutable archival.*

```mermaid
graph TD
    Start[New Backup Job] --> Ingest[Data Ingestion]
    Ingest --> Encrypt[AES-256 Encryption]
    Encrypt --> Write[Write to WORM Storage]
    Write --> Lock[Apply Compliance Lock]
    Lock --> Replica[Replicate to Secondary Region]
    Replica --> Final[Metadata Sync to DB]
```

## 13. Retention Policy Enforcement Loop
```mermaid
graph LR
    Scan[Retention Scanner] --> List[List Objects]
    List --> Check[Check Lock Status]
    Check -->|Expired| Delete[Cleanup]
    Check -->|Active| Keep[Retain]
```

## 20. Backup Anomaly Detection Model
```mermaid
stateDiagram-v2
    Normal --> Baseline: Data Profiling
    Baseline --> Analysis: Incremental Compare
    Analysis --> Warning: Change Rate Spike
    Analysis --> Healthy: Within Threshold
```
