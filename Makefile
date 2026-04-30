.PHONY: help build up down test lint migrate create-backup validate-backup simulate-ransomware

help:
	@echo "Immutable Backup Design Platform - Management Commands"
	@echo "----------------------------------------------------"
	@echo "build              : Build all containers"
	@echo "up                 : Start all services"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "create-backup      : Trigger an immutable backup job"
	@echo "validate-backup    : Verify backup integrity and object lock"
	@echo "simulate-ransomware: Test immutability against deletion attempt"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

create-backup:
	docker-compose exec api python scripts/backup/s3_immutable_push.py

validate-backup:
	docker-compose exec api python scripts/validate/integrity_check.py

simulate-ransomware:
	docker-compose exec api python scripts/simulate-ransomware/delete_attempt.py
