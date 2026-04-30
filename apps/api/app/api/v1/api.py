from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, backups, recovery, compliance, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(backups.router, prefix="/backups", tags=["backups"])
api_router.include_router(recovery.router, prefix="/recovery", tags=["recovery"])
api_router.include_router(compliance.router, prefix="/compliance", tags=["compliance"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
