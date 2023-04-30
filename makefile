gendiff:
	npm install ci
	node bin/gendiff.js -h
publish:
	npm publish --dry-run
lint:
	npx eslint .