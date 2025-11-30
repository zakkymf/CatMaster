# CatMaster

CatMaster is repository for the solutions of assignment to Surya Digital Teknologi hiring process.

## Prerequisite

- [Node.js](https://nodejs.org/en)
- [React Native](https://reactnative.dev/)

## Setup Instructions

1. Clone this repository

```bash
https://github.com/zakkymf/CatMaster.git
```

2. Install Dependencies

```bash
cd CatMaster
npm install #or
yarn install
```

3. Running on local machine

```bash
yarn android:staging
```

## Tech Stack

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Query](https://react-query.tanstack.com/)
- [MMKV](https://github.com/mrousavy/react-native-mmkv)
- [Zustand](https://github.com/pmndrs/zustand)

## Architecture

```
CatMaster/src
├── modules
|  └── owner
|     ├── data
|     ├── di
|     ├── domain
|     └── presentation
├── navigation
|  └── Navigation.tsx
└── shared
   ├── assets
   |  ├── fonts
   |  ├── icons
   |  ├── images
   |  └── index.ts
   ├── base
   |  ├── BaseResponse.ts
   |  ├── BaseUseCase.ts
   |  └── index.ts
   ├── components
   |  ├── AppImage.tsx
   |  ├── Avatar.tsx
   |  ├── Card.tsx
   |  ├── FilterModal.tsx
   |  ├── Header.tsx
   |  ├── Icon.tsx
   |  ├── StaticText.tsx
   |  └── index.ts
   ├── constants
   |  ├── Endpoint.ts
   |  └── index.ts
   ├── hooks
   |  └── index.ts
   ├── libraries
   |  ├── httpClient.ts
   |  ├── index.ts
   |  ├── mmkvStorage.ts
   |  └── queryClient.ts
   ├── theme
   |  ├── BaseStyles.ts
   |  ├── Colors.ts
   |  └── index.ts
   ├── types
   |  ├── index.ts
   |  └── navigation.ts
   └── utils
      ├── helper.ts
      └── index.ts
```

This project is using Clean Architecture, here is the detail about structure of this project:

### Root Files

- `src/` This is the main source folder of the project, structured in a modular way to separate concerns and follow clean architecture principles.

### Modules Files

modules contains feature-specific modules. Each module encapsulates its own data, dependency injection, domain logic, and presentation layers. This is similar to a feature-based structure often used in clean architecture

- `data/` – Responsible for data sources such as APIs, local storage, or database access. Typically contains repository implementations and data models.

- `di/` – Contains dependency injection setup for this module. For instance, providing repositories or use cases to the presentation layer.

- `domain/` – Contains the core business logic, use cases, and domain models. This layer is independent of external frameworks or libraries.

- `presentation/` – Contains UI components, screens, and view models related to this module. This is where React Native components and state management live.

### Shared

Contains reusable resources, utilities, and core abstractions shared across modules. It’s the backbone of the app.

- `assets/` – Static resources such as fonts, icons, and images. index.ts might be used for exporting them in a centralized manner.

- `base/` – Core abstractions like BaseResponse (standard API response structure) or BaseUseCase (common logic for use cases). Helps enforce consistency across modules..

- `components/` – Reusable UI components like Avatar, Card, Header, FilterModal, etc. These are generic components used in multiple modules. index.ts centralizes exports.

- `constants/` – Central place for constants like Endpoint.ts (API endpoints) and other global constants.

- `libraries/` – Custom libraries or wrappers such as httpClient, localstorage.

- `theme/` - App styling constants and base styles.

- `types` - TypeScript types and interfaces.

- `utils/` - Utility functions and helpers.

## Demo

![List View](/demo/list.png?raw=true "List View")
![Detail View](/demo/list-detail.png?raw=true "Detail View")
