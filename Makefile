
docs: index.html

index.html: lib/colorlog.js
	dox \
		--title "Colorlog.js" \
		--desc "Colrr logger for [NodeJS](http://nodejs.org)." \
		--ribbon "http://github.com/tih-ra/colorlog.js" \
		lib/colorlog.js > $@

docclean:
	rm -f index.html

.PHONY: docs docclean
	
	
	