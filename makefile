all: 

publish:
	rm -r docs
	npm run build
	mv dist docs && rm -f docs/favicon.ico