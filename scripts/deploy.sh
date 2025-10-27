#!/bin/bash
set -e

ENVIRONMENT=$1
EXPERIMENTAL_FLAG=$2

echo "Starting deployment for environment: $ENVIRONMENT"

# Check for production requirements
if [ "$ENVIRONMENT" != "production" ]; then
    echo "ERROR: Deployment must be run in a specified environment."
    exit 1
fi

# Standard Deployment Steps
echo "1. Fetching latest code..."
git pull origin main

echo "2. Building application images..."
docker-compose build --parallel

echo "3. Starting standard services..."
docker-compose up -d --scale web=3 --remove-orphans

# Experimental AI Integration Logic (Only runs if flag is set)
if [ "$EXPERIMENTAL_FLAG" == "--experimental" ]; then
    echo "4. Enabling experimental AI services..."
    npm run start:ai
else
    echo "4. Skipping experimental AI services (not requested)."
fi

echo "Deployment complete."