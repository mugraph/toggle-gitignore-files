# Toggle Git Ignore Files

A simple VSCode extension that toggles the `explorer.excludeGitIgnore` setting with a keyboard shortcut and explorer context menu entry.

## Features

- Toggle Git Ignore Files with a keyboard shortcut: `Ctrl+Alt+G` (Windows/Linux) or `Cmd+Alt+G` (Mac)
- Right-click context menu option in the Explorer view
- Notification feedback when the setting changes

## Why Use This Extension?

When working with projects that have a large number of files in `.gitignore`, you may want to quickly toggle their visibility in the Explorer. This extension makes it easy to switch between showing and hiding these files without having to manually change settings.

## Installation

1. Download the latest `.vsix` file from the [releases page](https://github.com/mugraph/toggle-gitignore-files/releases)
2. In VSCode, press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
3. Type "Extensions: Install from VSIX" and select it
4. Choose the downloaded `.vsix` file

## Usage

- Press `Ctrl+Alt+G` (Windows/Linux) or `Cmd+Alt+G` (Mac) when the Explorer is visible
- Or right-click anywhere in the Explorer panel and select "Toggle Git Ignore Files"
- A notification will confirm whether Git Ignore files are now excluded or included

## Requirements

- VSCodium 1.98.1 or later

## Extension Settings

This extension toggles the existing VSCodium setting:

* `explorer.excludeGitIgnore`: Determines whether files in `.gitignore` should be hidden in the Explorer

## License

MIT