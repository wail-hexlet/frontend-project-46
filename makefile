gendiff:
	npm install ci
	node bin/gendiff.js -h
publish:
	npm publish --dry-run
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8
install:
	npm ci
run:
	node bin/gendiff.js
