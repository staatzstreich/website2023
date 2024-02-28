# Definiere die Quell- und Zielverzeichnisse
SOURCE_DIR := .
DEST_DIR := ./dist

# Definiere eine Liste von Dateien, die kopiert werden sollen
FILES_TO_COPY := css \
	en \
	fonts \
	images \
	js \
	weihnachtsgruss \
	android-chrome-192x192.png \
	android-chrome-512x512.png \
	apple-touch-icon.png \
	favicon.ico \
	favicon-16x16.png \
	favicon-32x32.png \
	index.html \
	logo192.png \
	logo512.png \
	manifest.json \
	robots.txt


# Regel, um Dateien zu kopieren
copy_files:
    # Verwende `cp` Befehl, um Dateien von Quell- nach Zielverzeichnis zu kopieren
	@mkdir -p $(DEST_DIR) >/dev/null 2>&1
	@cp -r $(addprefix $(SOURCE_DIR)/,$(FILES_TO_COPY)) $(DEST_DIR) >/dev/null 2>&1
	@rm $(DEST_DIR)/js/main.js >/dev/null 2>&1
	@rm $(DEST_DIR)/images/*_org.jpg >/dev/null 2>&1

clean:
	@rm -rf $(DEST_DIR)> /dev/null 2>&1

dist: clean copy_files
	@echo "Done..."