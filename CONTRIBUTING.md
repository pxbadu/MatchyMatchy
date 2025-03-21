# Contributing to Matchy-Matchy

Thank you for considering contributing to Matchy-Matchy! This document outlines the Git workflow and contribution process for this project.

## Git Workflow

### Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
```bash
git clone https://github.com/YOUR-USERNAME/matchy-matchy.git
cd matchy-matchy
```
3. Add the original repository as a remote to keep your fork updated
```bash
git remote add upstream https://github.com/ORIGINAL-OWNER/matchy-matchy.git
```
4. Create a new branch for your feature or bugfix
```bash
git checkout -b feature/your-feature-name
```

### Development Workflow

1. Make your changes in the feature branch
2. Commit changes with meaningful commit messages following the format:
```
type(scope): brief description

Longer description if needed
```
- Types: feat, fix, docs, style, refactor, test, chore
- Example: `feat(image-processor): add support for HSV color space analysis`

3. Keep your branch updated with the upstream main branch
```bash
git fetch upstream
git rebase upstream/main
```

4. Push your changes to your fork
```bash
git push origin feature/your-feature-name
```

5. Create a pull request from your branch to the main repository

### Pull Request Process

1. Ensure your code follows the project's code style
2. Update documentation if necessary
3. Make sure all tests pass
4. Get at least one review from a maintainer
5. Maintainers will merge your PR when approved

## Commit Guidelines

- Write clear, descriptive commit messages
- Reference issues and pull requests where appropriate
- Keep commits atomic and focused on a single change
- Sign your commits if possible

## Code Style

Please follow the existing code style in the project. The project uses ESLint and Prettier for code formatting.

## Reporting Bugs

Please use the GitHub issue tracker to report bugs. Include:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected and actual results
- Screenshots if applicable
- Any relevant context

## Feature Requests

Feature requests are welcome. Please provide:
- A clear description of the feature
- The rationale behind it
- If possible, a rough implementation sketch

## Questions?

Feel free to open an issue with any questions about contributing.

Thank you for contributing to Matchy-Matchy! 