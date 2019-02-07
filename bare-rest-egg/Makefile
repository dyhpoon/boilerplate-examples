MAKEFLAGS = -j1

export NODE_ENV = test
export FORCE_COLOR = true

.PHONY: eslint-lint prettier-lint lint clean-packages clean clean-test test changelog

lint:
	make prettier-lint && make eslint-lint

prettier-lint:
	prettier --write "{packages}/**/*.{js,jsx,json,css,scss,less,md}"

eslint-lint:
	eslint --fix --ext .jsx,.js packages/

clean-packages:
	rm -rf packages/*/node_modules
	make clean-test
	rm -rf packages/*/coverage
	rm -rf packages/*/*.log

clean:
	make clean-packages

clean-test:
	rm -rf packages/*/test/**/run
	rm -rf packages/*/test/**/logs
	rm -rf packages/*/test/**/.stats
	rm -rf packages/*/test/**/.isomorphic

test:
	./scripts/test.sh
	make clean-test

changelog:
	lerna-changelog
