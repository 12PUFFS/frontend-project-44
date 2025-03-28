install:
	npm ci
brain-games:
	node bin/brain-games.js
make lint:
	npx eslint
publish:
	npm publish --dry-run