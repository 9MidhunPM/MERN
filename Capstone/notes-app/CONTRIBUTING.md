# 🤝 Contributing to Notes App

Thank you for considering contributing to the Notes App! We welcome contributions from everyone.

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Submitting Changes](#submitting-changes)
- [Style Guidelines](#style-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by respect and professionalism. Please be kind and courteous to others.

## How Can I Contribute?

### Reporting Bugs

- Use the GitHub Issues page
- Describe the bug clearly
- Include steps to reproduce
- Add screenshots if applicable
- Mention your environment (OS, Node version, etc.)

### Suggesting Enhancements

- Open an issue with the "enhancement" label
- Describe the feature clearly
- Explain why it would be useful
- Add mockups or examples if possible

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test your changes thoroughly
5. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to the branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

## Development Setup

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   cd server && npm install
   cd ../client && npm install
   ```
3. Set up your `.env` file
4. Start the development servers
5. Make your changes
6. Test thoroughly

## Submitting Changes

### Commit Messages

Use clear and meaningful commit messages:

- `feat: Add search functionality`
- `fix: Resolve note deletion bug`
- `docs: Update README with examples`
- `style: Format code with prettier`
- `refactor: Simplify API service`
- `test: Add unit tests for NoteCard`

### Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the documentation if you're adding new features
3. The PR will be merged once you have approval from maintainers

## Style Guidelines

### JavaScript

- Use ES6+ syntax
- Use meaningful variable names
- Add comments for complex logic
- Follow existing code style

### React Components

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use PropTypes or TypeScript for type checking

### CSS

- Use Tailwind CSS utility classes when possible
- Keep custom CSS minimal
- Follow BEM naming convention for custom classes

## Questions?

Feel free to open an issue with the "question" label.

Thank you for contributing! 🎉
