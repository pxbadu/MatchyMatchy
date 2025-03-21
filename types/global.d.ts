// Global type declarations

// Global types
declare global {
  interface Global {
    Buffer: typeof Buffer;
  }
}

// Extend NodeJS namespace
declare namespace NodeJS {
  interface Process {
    cwd(): string;
  }
  
  interface Global {
    Buffer: typeof Buffer;
  }
} 