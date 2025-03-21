// Type declarations for Next.js modules

declare module 'next/server' {
  export type NextRequest = {
    formData: () => Promise<FormData>;
  };
  
  export const NextResponse: {
    json: (body: any, init?: { status?: number }) => Response;
  };
} 