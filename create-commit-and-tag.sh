#!/bin/bash

# Prompt for commit message
read -p "Enter commit message: " COMMIT_MESSAGE

# Function to validate tag name
validate_tag_name() {
    if [[ ! $1 =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
        echo "Invalid tag name. It must follow the pattern v[0-9].[0-9].[0-9]."
        exit 1
    fi
}

# Fetch the latest tags from the remote repository
git fetch --tags

# Find the latest tag that matches the pattern v[0-9]*.[0-9]*.[0-9]*
LATEST_TAG=$(git tag -l "v[0-9]*.[0-9]*.[0-9]*" | sort -V | tail -n 1)

# Increment the version number
if [[ $LATEST_TAG =~ ^v([0-9]+)\.([0-9]+)\.([0-9]+)$ ]]; then
    MAJOR=${BASH_REMATCH[1]}
    MINOR=${BASH_REMATCH[2]}
    PATCH=${BASH_REMATCH[3]}
    
    # Increment the patch version
    PATCH=$((PATCH + 1))
    
    # Check if patch version needs to roll over
    if [ $PATCH -ge 10 ]; then
        PATCH=0
        MINOR=$((MINOR + 1))
    fi
    
    # Check if minor version needs to roll over
    if [ $MINOR -ge 10 ]; then
        PATCH=0
        MINOR=0
        MAJOR=$((MAJOR + 1))
    fi
    
    NEW_TAG="v$MAJOR.$MINOR.$PATCH"
else
    NEW_TAG="v0.0.1"
fi

echo "Latest tag: $LATEST_TAG"
echo "New tag: $NEW_TAG"

# Prompt for tag name and validate it
read -p "Enter tag name (default: $NEW_TAG): " TAG_NAME
TAG_NAME=${TAG_NAME:-$NEW_TAG}
validate_tag_name "$TAG_NAME"

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