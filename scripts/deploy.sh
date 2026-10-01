#!/usr/bin/env bash
# Builds the site locally and uploads it to the VPS.
# Usage: DEPLOY_HOST=user@your-vps-ip npm run deploy
set -euo pipefail

: "${DEPLOY_HOST:?Set DEPLOY_HOST, e.g. DEPLOY_HOST=deploy@123.45.67.89 npm run deploy}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/isafabengineering.co.ke}"

# rsync --delete removes files in the target folder that aren't in the build,
# so only ever point it at this site's own folder.
case "$DEPLOY_PATH" in
  */isafabengineering*) ;;
  *) echo "Refusing to deploy to '$DEPLOY_PATH': it is not this site's folder." >&2; exit 1 ;;
esac

npm run build
rsync -avz --delete dist/ "$DEPLOY_HOST:$DEPLOY_PATH/"
echo "Deployed to $DEPLOY_HOST:$DEPLOY_PATH"
