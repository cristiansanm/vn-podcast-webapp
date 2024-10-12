#!/bin/bash

# Prompt for commit message
read -p "Enter commit message: " COMMIT_MESSAGE

# Prompt for tag name
read -p "Enter tag name: " TAG_NAME

# Create a temporary file for the tag message
TAG_MESSAGE_FILE=$(mktemp)

# Open nano to enter the tag message
echo "Enter the tag message. Save and exit nano when done."
nano "$TAG_MESSAGE_FILE"

# Read the tag message from the temporary file
TAG_MESSAGE=$(cat "$TAG_MESSAGE_FILE")

# Remove the temporary file
rm "$TAG_MESSAGE_FILE"

# Add all files to the staging area
git add .

# Commit the changes with the provided commit message
git commit -m "$COMMIT_MESSAGE"

# Push the commit to the remote repository
git push origin main

# Get the latest commit SHA
LATEST_COMMIT_SHA=$(git rev-parse HEAD)

# Create a tag for the latest commit with the tag message
git tag -a "$TAG_NAME" "$LATEST_COMMIT_SHA" -m "$TAG_MESSAGE"

# Push the tag to the remote repository
git push origin "$TAG_NAME"

echo "Commit and tag created successfully."