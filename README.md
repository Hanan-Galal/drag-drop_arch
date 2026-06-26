Drag & Drop Task Manager 🚀
A robust, scalable task management application built from scratch. This project demonstrates high-level frontend architecture, focusing on clean data flow and maintainability without relying on heavy external state management libraries.

Engineering Decisions
The core objective was to implement a professional-grade architecture using native TypeScript and Sass. Key highlights include:

Custom State Management: Implemented an observer-based pattern to handle global state, ensuring the UI remains perfectly synced with the data source.

Modular Architecture: Leveraged inheritance and abstract base classes to minimize code duplication and enforce consistency across all UI components.

Decoupled Logic: Strict separation of concerns between business logic (models/state) and presentation layer (DOM rendering).

Type Safety: Heavy utilization of TypeScript interfaces and generics to ensure a bug-resistant codebase.

Technical Stack
Language: TypeScript (Strict mode)

Styling: Sass (SCSS) with modular structure

State: Custom Singleton pattern

Browser APIs: Native Drag & Drop and LocalStorage for persistence

Enhancements: Custom decorators (autobind) for cleaner event handling

Code Highlights
If you are auditing the implementation, these areas reflect the project's architecture:

BaseComponent Class: The foundational abstract class used to standardize DOM rendering for all child components.

ProjectState Singleton: The central hub for data management and listener orchestration.

Decorator Patterns: Used for clean event binding, abstracting away the typical this context issues found in JavaScript.
