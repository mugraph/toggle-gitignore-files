# Change Log

All notable changes to the "toggle-gitignore-files" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.6] - 2025-04-23

### Added

- maintain a proper CHANGELOG.md, following [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)

## [0.0.5] - 2025-04-23

### Changed

- trigger build and release only on matching git tag and version changes in `package.json`

## [0.0.4] - 2025-04-22

### Added

- allow context menu entry to be configurable via `toggleGitIgnore.showInContextMenu` (bool)

### Removed

- unused dependencies
- test related code sections

## [0.0.3] - 2025-04-22

### Added

- toggle files in .gitignore via keyboard shortcut
- toggle files via context menu entry in explorer
- build and release via github actions on new version in `package.json`
