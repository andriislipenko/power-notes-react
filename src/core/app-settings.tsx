const ROOT_URL: string = 'http://localhost:3000';

function resolveRoot(): string {
    return process.env.NODE_ENV === "development" ? ROOT_URL : '';
}

export const rootUrl: string = resolveRoot();
